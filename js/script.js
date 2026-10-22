// Standalone info pages should open at the top instead of restoring a previous scroll position.
if (/\/(about|contacts)\.html$/.test(location.pathname) && (!location.hash || location.hash === '#top')) {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.addEventListener('pageshow', () => window.scrollTo(0, 0), { once: true });
}

document.addEventListener('DOMContentLoaded',()=>{
 const header=document.querySelector('.site-header');
 const updateHeader=()=>header?.classList.toggle('scrolled',window.scrollY>30);
 updateHeader();window.addEventListener('scroll',updateHeader,{passive:true});
 // Route-aware active navigation: no separate Home tab; top belongs to the relevant tours page.
 const navLinks=[...document.querySelectorAll('.nav-link')];
 const isUzbekistanPage=location.pathname.endsWith('uzbekistan.html');
 const isAboutPage=location.pathname.endsWith('about.html');
 const isContactsPage=location.pathname.endsWith('contacts.html');
 const topKey=isUzbekistanPage?'uzbekistan':isAboutPage?'about':isContactsPage?'contacts':'world';
 const activateNav=key=>navLinks.forEach(a=>a.classList.toggle('active',a.dataset.nav===key));
 // Keep the relevant page tab active throughout both tour pages; section scrolling must not change it.
 activateNav(topKey);
 if(isAboutPage || isContactsPage){
   const localKey=isAboutPage?'about':'contacts';
   activateNav(localKey);
 }
 const scrollCue=document.querySelector('.scroll-cue');scrollCue?.addEventListener('click',e=>{const target=document.querySelector('#destinations');if(target){e.preventDefault();target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});}});
 const burger=document.querySelector('.burger'),nav=document.querySelector('.nav');
 burger?.addEventListener('click',()=>{const open=burger.getAttribute('aria-expanded')!=='true';burger.setAttribute('aria-expanded',String(open));nav?.classList.toggle('open',open);document.body.classList.toggle('menu-open',open)});
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');burger?.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}));
 const langWrap=document.querySelector('.language'),langBtn=document.querySelector('.language-current');
 langBtn?.addEventListener('click',()=>{const open=langWrap.classList.toggle('open');langBtn.setAttribute('aria-expanded',String(open))});
 document.addEventListener('click',e=>{if(langWrap&&!langWrap.contains(e.target)){langWrap.classList.remove('open');langBtn?.setAttribute('aria-expanded','false')}});
 // Language selection is handled by js/i18n.js.
 const requestModal=document.getElementById('requestModal'),detailModal=document.getElementById('detailModal'),slot=document.getElementById('modalFormSlot'),form=document.getElementById('requestForm'),originalParent=form?.parentElement,originalNext=form?.nextSibling;
 // Animated custom dropdowns keep a real named hidden input for FormData/send.php.
 const customPickers=[];
 const enhanceSelect=(select)=>{
   const options=[...select.options].map((o,i)=>({value:o.value,label:o.text.trim(),disabled:o.disabled||(i===0&&!o.value)}));
   const initial=select.value;
   const wrap=document.createElement('div');
   wrap.className='custom-select-control';
   wrap.dataset.name=select.name||'';
   if(select.required)wrap.dataset.required='true';
   const hidden=document.createElement('input');
   hidden.type='hidden';hidden.name=select.name;hidden.value=initial;
   const trigger=document.createElement('button');
   trigger.type='button';trigger.className='custom-select-trigger';
   trigger.setAttribute('aria-haspopup','listbox');trigger.setAttribute('aria-expanded','false');
   trigger.setAttribute('aria-label',select.getAttribute('aria-label')||select.closest('.field')?.querySelector('span')?.textContent.trim()||'Выберите значение');
   const menu=document.createElement('div');menu.className='custom-select-menu';menu.setAttribute('role','listbox');menu.tabIndex=-1;
   const optionButtons=[];
   const close=()=>{wrap.classList.remove('open');wrap.classList.remove('opens-up');menu.classList.remove('opens-up');trigger.setAttribute('aria-expanded','false')};
   const fitMenu=()=>{
     requestAnimationFrame(()=>{
       if(!wrap.classList.contains('open'))return;
       wrap.classList.remove('opens-up');menu.classList.remove('opens-up');
       const triggerRect=trigger.getBoundingClientRect();
       const menuRect=menu.getBoundingClientRect();
       const below=window.innerHeight-triggerRect.bottom-12;
       const above=triggerRect.top-12;
       if(menuRect.height>below && above>below){
         wrap.classList.add('opens-up');menu.classList.add('opens-up');
       }
     });
   };
   const setValue=(value,fire=true)=>{
     let opt=options.find(o=>o.value===String(value));
     if(!opt)opt=options.find(o=>o.label.toLocaleLowerCase()===String(value).toLocaleLowerCase());
     hidden.value=opt?opt.value:String(value||'');
     trigger.dataset.i18nSource=opt?opt.label:(options[0]?.label||'Выберите значение');
     trigger.textContent=window.DC_I18N?.t(trigger.dataset.i18nSource) ?? trigger.dataset.i18nSource;
     optionButtons.forEach(({button,option})=>button.setAttribute('aria-selected',String(option.value===hidden.value)));
     wrap.dataset.value=hidden.value;
     if(fire){hidden.dispatchEvent(new Event('input',{bubbles:true}));hidden.dispatchEvent(new Event('change',{bubbles:true}));}
   };
   options.forEach((option)=>{
     if(option.disabled&&!option.value)return;
     const button=document.createElement('button');
     button.type='button';button.className='custom-select-option';button.dataset.i18nSource=option.label;button.textContent=window.DC_I18N?.t(option.label) ?? option.label;
     button.setAttribute('role','option');button.setAttribute('aria-selected','false');
     button.disabled=option.disabled;
     button.addEventListener('click',()=>{
       setValue(option.value);
       close();
       trigger.focus({preventScroll:true});
     });
     menu.appendChild(button);optionButtons.push({button,option});
   });
   trigger.addEventListener('click',()=>{
     const opening=!wrap.classList.contains('open');
     customPickers.forEach(p=>p.close());
     if(opening){wrap.classList.add('open');trigger.setAttribute('aria-expanded','true');fitMenu();}
     else close();
   });
   trigger.addEventListener('keydown',e=>{
     if(e.key==='ArrowDown'||e.key==='Enter'||e.key===' '){
       e.preventDefault();wrap.classList.add('open');trigger.setAttribute('aria-expanded','true');fitMenu();
       (optionButtons.find(x=>!x.button.disabled)?.button||menu).focus({preventScroll:true});
     }
   });
   menu.addEventListener('keydown',e=>{
     const active=optionButtons.findIndex(x=>x.button===document.activeElement);
     if(e.key==='Escape'){e.preventDefault();close();trigger.focus({preventScroll:true});}
     else if(e.key==='ArrowDown'||e.key==='ArrowUp'){
       e.preventDefault();const direction=e.key==='ArrowDown'?1:-1;
       let idx=active;
       for(let tries=0;tries<optionButtons.length;tries++){idx=(idx+direction+optionButtons.length)%optionButtons.length;if(!optionButtons[idx].button.disabled){optionButtons[idx].button.focus({preventScroll:true});break;}}
     } else if(e.key==='Home'||e.key==='End'){
       e.preventDefault();const list=e.key==='Home'?optionButtons:[...optionButtons].reverse();list.find(x=>!x.button.disabled)?.button.focus({preventScroll:true});
     }
   });
   wrap.append(hidden,trigger,menu);
   select.parentNode.insertBefore(wrap,select);select.remove();
   const api={wrap,hidden,trigger,menu,options,setValue,close,sync:()=>setValue(hidden.value,false)};
   wrap._picker=api;wrap._options=options;wrap._setValue=setValue;
   customPickers.push(api);
   setValue(initial,false);
   return api;
 };
 form?.querySelectorAll('select').forEach(enhanceSelect);
 document.addEventListener('click',e=>{customPickers.forEach(p=>{if(!p.wrap.contains(e.target))p.close();});});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')customPickers.forEach(p=>p.close());});
 form?.addEventListener('reset',()=>setTimeout(()=>customPickers.forEach(p=>p.sync()),0));
 const modalStates = new WeakMap();
 const restorePageScroll = state => {
   if(!state) return;
   requestAnimationFrame(()=>{
     const root=document.documentElement;
     const previous=root.style.scrollBehavior;
     root.style.scrollBehavior='auto';
     window.scrollTo(state.x,state.y);
     requestAnimationFrame(()=>{root.style.scrollBehavior=previous;});
   });
 };
 const showDialogPreservingScroll = (dialog, trigger=document.activeElement, savedState=null) => {
   if(!dialog || dialog.open) return;
   const state=savedState||{x:window.scrollX,y:window.scrollY,trigger};
   modalStates.set(dialog,state);
   dialog.showModal();
   dialog.querySelector('.modal-close')?.focus({preventScroll:true});
   restorePageScroll(state);
 };
 const openRequest=(interest='',trigger=document.activeElement)=>{
   if(!requestModal||!form)return;
   const scrollState={x:window.scrollX,y:window.scrollY,trigger};
   slot.appendChild(form);
   modalStates.set(requestModal,scrollState);
   showDialogPreservingScroll(requestModal,trigger,scrollState);
   if(interest){
     const picker=form.querySelector('.custom-select-control[data-name="destination"]')?._picker;
     if(picker){const option=picker.options.find(o=>o.label.trim().toLowerCase()===interest.toLowerCase());picker.setValue(option?option.value:interest);}
     else{const select=form.elements.destination;if(select)select.value=interest;}
   }
   restorePageScroll(scrollState);
 };
 const closeDialog=d=>{
   if(!d?.open)return;
   const state=modalStates.get(d);
   d.close();document.body.classList.remove('modal-open');
   restorePageScroll(state);
   if(state?.trigger instanceof HTMLElement) state.trigger.focus({preventScroll:true});
 };
 if(new URLSearchParams(window.location.search).get('openRequest')==='1'){
   openRequest();const cleanUrl=new URL(window.location.href);cleanUrl.searchParams.delete('openRequest');window.history.replaceState({},'',cleanUrl.pathname+cleanUrl.hash);
 }
 document.querySelectorAll('[data-open-request],.hero-button,.format-cta a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openRequest(a.dataset.interest||'',a);}));
 const generalNote='Состав поездки, даты, размещение, перелёт, питание, трансферы и входные билеты зависят от выбранного варианта. Менеджер уточнит доступность и итоговую стоимость до подтверждения заявки.';
 const details={
  turkey:{title:'Турция',description:'От пляжного отдыха на Средиземном море до насыщенных прогулок по Стамбулу и необычных пейзажей Каппадокии. Можно выбрать один формат или объединить несколько остановок в одной поездке.',interest:'Турция',image:'./img/turkey-concept.webp',facts:['Пляжный и экскурсионный отдых','Маршрут под ваш срок'],highlights:['Анталья, Белек и другие курортные районы для отдыха у моря.','Стамбул — мечети, дворцы, Босфор и кварталы с местной атмосферой.','Каппадокия — скальные долины и панорамы; полёт на воздушном шаре возможен при подходящей погоде и наличии мест.'],programHeading:'Идеи для путешествия',program:[['Море и курорт','Отель, пляж, выбранный тип питания и дополнительные экскурсии по желанию.'],['Городской Стамбул','Исторические достопримечательности, прогулка по Босфору и местные рынки.'],['Комбинированная поездка','Можно объединить несколько регионов, если позволяют даты и бюджет.']],note:generalNote},
  uae:{title:'Объединённые Арабские Эмираты',description:'Современная архитектура, пляжи Персидского залива, впечатляющие виды Дубая и культурные достопримечательности Абу-Даби. Программа может сочетать городской отдых и поездки за пределы мегаполиса.',interest:'ОАЭ',image:'./img/uae-concept.webp',facts:['Город, море и пустыня','Длительность по запросу'],highlights:['Дубай: панорамы города, районы у воды, торговые центры и смотровые площадки.','Абу-Даби: мечеть шейха Зайда и культурные пространства города.','Сафари в пустыне, ужин или водные активности доступны как дополнительные опции.'],programHeading:'Что можно включить',program:[['Городские впечатления','Главные районы Дубая, набережные и смотровые площадки по выбранной программе.'],['Культурный день','Поездка в Абу-Даби или знакомство с музеями и архитектурой.'],['Отдых у моря','Отель на побережье, пляж и свободное время для отдыха.']],note:generalNote},
  thailand:{title:'Таиланд',description:'Тропические острова, пляжи, тайская кухня и буддийские храмы. Подберём направление по настроению: спокойный островной отдых, насыщенный Бангкок или сочетание моря с экскурсиями.',interest:'Таиланд',image:'./img/thailand-concept.webp',facts:['Острова и культурные экскурсии','Сезон важен при выборе региона'],highlights:['Пхукет и Краби — пляжи, островные поездки и природные виды.','Бангкок — храмы, рынки, набережные и гастрономические впечатления.','Экскурсии на острова и морские прогулки зависят от погоды и расписания.'],programHeading:'Возможный формат поездки',program:[['Пляжная часть','Размещение в выбранном районе и отдых у моря.'],['День открытий','Экскурсия по храмам, рынкам или природным достопримечательностям.'],['Морская прогулка','Поездка к островам или в бухты — при подходящих погодных условиях.']],note:generalNote},
  maldives:{title:'Мальдивы',description:'Уединённые острова, прозрачная вода и отдых в окружении Индийского океана. Можно выбрать курорт по бюджету, типу виллы, питанию и желаемым активностям.',interest:'Мальдивы',image:'./img/maldives-concept.webp',facts:['Островной курорт','Отель и питание подбираются индивидуально'],highlights:['Виллы на пляже или над водой — в зависимости от выбранного курорта.','Снорклинг, дайвинг и морские прогулки доступны у многих курортов, но зависят от условий и расписания.','Трансфер до острова может выполняться катером или гидросамолётом; способ и стоимость уточняются заранее.'],programHeading:'Как обычно строится отдых',program:[['Прибытие и трансфер','Встреча и переезд на выбранный остров по согласованной логистике.'],['Отдых на курорте','Пляж, бассейн и активности, предусмотренные отелем или выбранные дополнительно.'],['Последний день','Трансфер в аэропорт с учётом расписания обратного рейса.']],note:generalNote},
  beach:{title:'Пляжный отдых',description:'Поездка, в которой главное — море, комфортный отель и время для себя. Направление и продолжительность подбираются с учётом сезона, бюджета и того, какой отдых вам ближе.',interest:'Пляжный отдых',image:'./img/beach-concept.webp',facts:['Море и перезагрузка','Направление на выбор'],highlights:['Выбор курорта по сезону, пляжу, атмосфере и бюджету.','Сравнение отелей, типов номеров и вариантов питания.','По желанию — морские экскурсии, спа или активности на воде.'],programHeading:'Что согласуем перед бронированием',program:[['Направление и даты','Регион, длительность поездки и подходящее время вылета.'],['Проживание','Категория отеля, тип номера, питание и расстояние до пляжа.'],['Дополнительные услуги','Трансфер, страховка и экскурсии — по выбранному пакету.']],note:generalNote},
  culture:{title:'Экскурсии и культура',description:'Путешествие для тех, кому интересно узнавать историю места, гулять по старым городам, видеть архитектуру и пробовать местную кухню. Темп и количество экскурсий можно подстроить под ваши интересы.',interest:'Экскурсионный тур',image:'./img/culture-concept.jpg',facts:['История и местная культура','Насыщенность по желанию'],highlights:['Исторические центры, музеи, памятники архитектуры и традиционные рынки.','Экскурсии с гидом или самостоятельные прогулки — в зависимости от формата.','Время для местной кухни, ремёсел и свободного знакомства с городом.'],programHeading:'Пример структуры поездки',program:[['Знакомство с городом','Обзорная прогулка по главным местам и историческим кварталам.'],['Тематический день','Музеи, архитектура, гастрономия или ремесленные мастерские.'],['Свободное время','Возможность вернуться к понравившимся местам или выбрать дополнительную экскурсию.']],note:generalNote},
  romance:{title:'Романтическое путешествие',description:'Особенная поездка вдвоём — от красивого морского побережья до уютного отеля в историческом городе. Акцент можно сделать на приватности, красивом месте и впечатлениях, которые хочется разделить.',interest:'Романтическое путешествие',image:'./img/romance-concept.webp',facts:['Для двоих','Особые пожелания обсуждаются заранее'],highlights:['Отель с подходящей атмосферой и удобным расположением.','Ужин с видом, спа или прогулка на закате — при наличии такой услуги.','Дополнительное оформление номера или небольшой сюрприз можно запросить отдельно.'],programHeading:'Как можно наполнить поездку',program:[['Спокойное начало','Комфортное размещение и время, чтобы освоиться без спешки.'],['Особенный момент','Романтический ужин, прогулка или дополнительная услуга по согласованию.'],['Время вдвоём','Свободный день и впечатления, выбранные специально для вашей пары.']],note:generalNote},
  family:{title:'Семейное путешествие',description:'Отдых, в котором удобно и взрослым, и детям. При подборе учитываем возраст детей, длительность дороги, удобство номера, питание и доступность семейных развлечений.',interest:'Семейный тур',image:'./img/family-concept.webp',facts:['Для поездки с детьми','Условия зависят от отеля и направления'],highlights:['Семейный номер или смежное размещение — при доступности у отеля.','Время перелёта и трансфера учитывается при сравнении вариантов.','Детские клубы, бассейны и развлечения проверяются отдельно по конкретному отелю.'],programHeading:'Что важно учесть',program:[['Удобная логистика','По возможности выбираем понятные пересадки, подходящее время рейса и трансфер.'],['Подходящее проживание','Проверяем конфигурацию номера, питание и услуги для детей.'],['План без перегрузки','Балансируем отдых, короткие активности и свободное время.']],note:generalNote},
  'uz-samarkand':{title:'Самарканд — город мозаик и куполов',description:'Самарканд знакомит с архитектурным наследием эпохи Тимуридов: от величественной площади Регистан до мавзолея Гур-Эмир и некрополя Шахи-Зинда. Здесь можно совместить главные памятники, ремесленные мастерские, базары и знакомство с местной кухней.',interest:'Самарканд',image:'./img/uz-samarkand.webp',facts:['Регистан · Гур-Эмир','Архитектура эпохи Тимуридов'],highlights:['Площадь Регистан и ансамбль медресе — главная архитектурная панорама города.','Шахи-Зинда — ансамбль мавзолеев с выразительной плиточной отделкой.','Базар Сиаб и местная кухня — возможность ближе познакомиться с жизнью города.'],programHeading:'Что посмотреть в Самарканде',program:[['Исторический центр','Прогулка по Регистану и знакомство с медресе; время посещения согласуется с режимом работы.'],['Памятники Тимуридов','Мавзолей Гур-Эмир и ансамбль Шахи-Зинда — по выбранному маршруту и доступному времени.'],['Базар и ремёсла','Время для базара Сиаб, местных изделий и блюд самаркандской кухни.']],note:generalNote},
  'uz-bukhara':{title:'Бухара — атмосфера старого Востока',description:'Бухара приглашает гулять без спешки: исторические улицы, торговые купола, тенистые дворики и архитектурные ансамбли создают особое ощущение старого города. Здесь удобно сочетать знаковые памятники с ремёслами и местной кухней.',interest:'Бухара',image:'./img/uz-bukhara.webp',facts:['Исторический центр','Пои-Калян · Ляби-Хауз'],highlights:['Комплекс Пои-Калян и минарет Калян — одни из самых узнаваемых символов города.','Ляби-Хауз — историческая площадь у водоёма с чайханами и старинными зданиями.','Торговые купола и мастерские помогут познакомиться с традиционными ремёслами.'],programHeading:'Маршрут по старому городу',program:[['Ляби-Хауз и торговые купола','Прогулка по историческим кварталам, старинным торговым переходам и небольшим площадям.'],['Пои-Калян','Знакомство с минаретом, мечетью и медресе — с учётом расписания и доступности объектов.'],['Ремёсла и местная кухня','Время для мастерских, сувенирных лавок и блюд бухарской кухни.']],note:generalNote},
  'uz-khiva':{title:'Хива — город за крепостными стенами',description:'Внутри Ичан-Калы Хива раскрывается как цельный исторический город: крепостные стены, узкие улицы, бирюзовые купола, минареты и резные деревянные детали. Это направление для тех, кому нравится рассматривать архитектуру и узнавать истории места во время неспешных прогулок.',interest:'Хива',image:'./img/uz-khiva.webp',facts:['Ичан-Кала','Минареты · дворцы · ремёсла'],highlights:['Ичан-Кала — историческая внутренняя часть города, окружённая крепостными стенами.','Куня-Арк, медресе и минареты показывают разные стороны архитектурного наследия Хорезма.','Резьба по дереву, изделия мастеров и хорезмская кухня дополняют знакомство с городом.'],programHeading:'Что открыть в Хиве',program:[['Прогулка по Ичан-Кале','Входные ворота, старинные улицы и архитектурные ансамбли внутри крепости.'],['Дворцы и минареты','Знакомство с историческими сооружениями по выбранному маршруту; посещение отдельных объектов зависит от их режима работы.'],['Ремёсла и местная кухня','Свободное время для ремесленных лавок, фотографий и знакомства с блюдами Хорезма.']],note:generalNote},
  'uz-mountains':{title:'Горный отдых — Чимган и Чарвак',description:'Если хочется сменить архитектурные ансамбли на природу, поездку можно построить вокруг Чимганских гор и Чарвакского водохранилища. Панорамные остановки, прогулки и отдых у воды выбираются с учётом сезона, погоды, состояния дорог и доступности маршрутов.',interest:'Горный отдых',image:'./img/uz-mountains.jpg',facts:['Чимганские горы','Чарвакское водохранилище'],highlights:['Чимган — горные пейзажи и прогулочные маршруты разной сложности.','Чарвак — широкие виды на водохранилище и места для отдыха у воды.','Активности на природе зависят от сезона, погодных условий и работы выбранных площадок.'],programHeading:'Как можно провести день',program:[['Горные виды Чимгана','Поездка к панорамным точкам и прогулка по маршруту, подходящему сезону и уровню подготовки.'],['Чарвакское водохранилище','Остановка у воды и время для отдыха; купание и водные активности возможны только при подходящих условиях и доступности услуг.'],['Спокойный отдых на природе','Свободное время, фотографии и остановки по дороге в пределах согласованного плана.']],note:generalNote},
  silkroad:{title:'По следам Шёлкового пути',description:'Пятидневное путешествие между Самаркандом и Бухарой: грандиозные ансамбли Тимуридов, старинные купола торговых рядов и узкие улицы древних городов. Программа ниже — ориентир, который можно адаптировать под билеты и ваши интересы.',interest:'Маршрут по Узбекистану',image:'./img/route-silk-road.webp',facts:['5 дней','Самарканд → Бухара'],highlights:['Главные архитектурные ансамбли Самарканда и Бухары.','Переезд между городами согласуется с датами и доступным транспортом.','Есть возможность добавить свободное время для базаров, ремёсел и местной кухни.'],programHeading:'Пример программы по дням',program:[['День 1 · Самарканд','Прибытие, размещение по выбранному варианту и первая прогулка по историческому центру.'],['День 2 · Самарканд','Регистан, мавзолей Гур-Эмир и другие знаковые места в согласованном порядке.'],['День 3 · Переезд в Бухару','Дорога до Бухары и знакомство со старым городом, если позволяет время.'],['День 4 · Бухара','Комплекс Пои-Калян, старинные торговые купола и район Ляби-Хауз.'],['День 5 · Завершение поездки','Свободное время и отправление с учётом дальнейшего маршрута.']],note:'Это примерная программа, а не подтверждённый пакет. Транспорт, проживание, гид, входные билеты, питание и точный порядок посещений согласуются при подборе тура.'},
  khiva:{title:'Восточная сказка Хивы',description:'Трёхдневное знакомство с Ичан-Калой — историческим городом за крепостными стенами, где бирюзовые купола, минареты и резные двери создают неповторимую атмосферу Хорезма.',interest:'Хива',image:'./img/route-khiva.webp',facts:['3 дня','Хива · Ичан-Кала'],highlights:['Прогулки внутри исторической Ичан-Калы.','Медресе, минареты, дворцы и ремесленные лавки.','Время для фотографий и знакомства с хорезмской кухней.'],programHeading:'Пример программы по дням',program:[['День 1 · Ичан-Кала','Входные ворота, старые улочки и первые архитектурные ансамбли города.'],['День 2 · Дворцы и минареты','Посещение исторических сооружений по выбранному маршруту и прогулка по старому городу.'],['День 3 · Свободное время','Ремёсла, сувенирные лавки и спокойное завершение путешествия.']],note:'Программа ориентировочная. Точный состав экскурсий, билеты, транспорт, проживание и услуги гида зависят от выбранного формата поездки.'},
  samarkand:{title:'Самарканд за один день',description:'Насыщенный, но понятный по темпу маршрут по самым узнаваемым местам Самарканда — для тех, кто хочет получить яркое первое впечатление о городе за один день.',interest:'Самарканд',image:'./img/route-samarkand-day.webp',facts:['1 день','Главные памятники города'],highlights:['Площадь Регистан и три знаменитых медресе.','Мавзолей Гур-Эмир и архитектурное наследие эпохи Тимуридов.','Время на исторический центр и местные ремёсла — по согласованному расписанию.'],programHeading:'Как может пройти день',program:[['Утро · Регистан','Знакомство с центральной площадью и ансамблем медресе.'],['День · Наследие Тимуридов','Гур-Эмир и другие достопримечательности в зависимости от доступного времени.'],['После обеда · Старый город','Прогулка, местные изделия и возможность попробовать национальную кухню.']],note:'Однодневная программа зависит от времени прибытия и отъезда. Гид, транспорт, входные билеты и питание уточняются при оформлении.'},
  bukhara:{title:'Атмосфера древней Бухары',description:'Два дня среди медресе, торговых куполов, тенистых двориков и старинных улиц Бухары. Маршрут позволяет не спешить и почувствовать атмосферу исторического центра.',interest:'Бухара',image:'./img/route-bukhara-history.webp',facts:['2 дня','Старый город Бухары'],highlights:['Площадь Ляби-Хауз и исторические кварталы.','Минарет Калян и ансамбль Пои-Калян.','Старинные торговые купола, ремесленные мастерские и местная кухня.'],programHeading:'Пример программы по дням',program:[['День 1 · Старый город','Ляби-Хауз, прогулка по историческим улицам и знакомство с торговыми куполами.'],['День 2 · Архитектурная Бухара','Комплекс Пои-Калян и другие памятники по согласованному маршруту.']],note:'Программа ориентировочная. Размещение, транспорт, гид, входные билеты и питание включаются только при согласовании соответствующих услуг.'}
 };
 const fillList=(container,items,heading,tagName='li')=>{
   if(!container)return;container.replaceChildren();
   if(heading){const h=document.createElement('h3');h.textContent=heading;container.appendChild(h);}
   if(!items?.length)return;
   if(tagName==='li'){
     const ul=document.createElement('ul');ul.className='detail-highlight-list';
     items.forEach(text=>{const li=document.createElement('li');li.textContent=text;ul.appendChild(li)});container.appendChild(ul);
   }else{
     items.forEach(item=>{const row=document.createElement('div');row.className='program-item';const b=document.createElement('b');b.textContent=item[0];const span=document.createElement('span');span.textContent=item[1];row.append(b,span);container.appendChild(row)});
   }
 };
 document.querySelectorAll('[data-detail]').forEach(card=>card.addEventListener('click',e=>{
   e.preventDefault();e.stopPropagation();
   const d=details[card.dataset.detail];if(!d||!detailModal)return;
   document.getElementById('detailTitle').textContent=d.title;
   document.getElementById('detailText').textContent=d.description;
   document.getElementById('detailEyebrow').textContent='DREAM COMPASS';
   const image=document.getElementById('detailImage');if(image){image.src=d.image;image.alt=d.title;}
   const facts=document.getElementById('detailFacts');if(facts){facts.replaceChildren();d.facts.forEach(text=>{const pill=document.createElement('span');pill.textContent=text;facts.appendChild(pill)});}
   fillList(document.getElementById('detailHighlights'),d.highlights,'Что делает поездку особенной');
   fillList(document.getElementById('detailProgram'),d.program,d.programHeading,'row');
   const note=document.getElementById('detailNote');if(note)note.textContent=d.note||generalNote;
   detailModal.dataset.interest=d.interest;
   window.DC_I18N?.apply();
   showDialogPreservingScroll(detailModal,card);
 }));
 document.querySelectorAll('.modal-close,.modal-close-secondary').forEach(b=>b.addEventListener('click',()=>closeDialog(b.closest('dialog'))));
 [requestModal,detailModal].forEach(d=>d?.addEventListener('click',e=>{if(e.target===d)closeDialog(d)}));
 document.querySelector('[data-open-request-from-detail]')?.addEventListener('click',e=>{const interest=detailModal.dataset.interest||'';const state=modalStates.get(detailModal);closeDialog(detailModal);openRequest(interest,state?.trigger||e.currentTarget)});
 [requestModal,detailModal].forEach(d=>d?.addEventListener('close',()=>{const state=modalStates.get(d);restorePageScroll(state);if(state?.trigger instanceof HTMLElement)state.trigger.focus({preventScroll:true});}));
 requestModal?.addEventListener('close',()=>{document.body.classList.remove('modal-open');if(form&&originalParent){if(originalNext&&originalNext.parentNode===originalParent)originalParent.insertBefore(form,originalNext);else originalParent.appendChild(form)}});
 document.querySelectorAll('a[href="#request"]:not([data-open-request]):not(.format-card):not(.destination-card)').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openRequest(a.dataset.interest||'')}));
 document.querySelectorAll('main section').forEach(el=>el.classList.add('reveal'));
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
 const status=document.getElementById('formStatus');
 const setStatus=message=>{if(status){status.dataset.i18nSource=message;status.textContent=window.DC_I18N?.t(message) ?? message;}};
 form?.addEventListener('submit',async e=>{e.preventDefault();const requiredPicker=form.querySelector('.custom-select-control[data-required="true"]');if(requiredPicker&& !requiredPicker.querySelector('input[type="hidden"]')?.value){setStatus('Пожалуйста, выберите направление.');requiredPicker.querySelector('.custom-select-trigger')?.focus();return}const name=form.elements.name.value.trim(),phone=form.elements.phone.value.trim();if(name.length<2){setStatus('Пожалуйста, укажите имя.');form.elements.name.focus();return}if(phone.replace(/\D/g,'').length<7){setStatus('Пожалуйста, проверьте номер телефона.');form.elements.phone.focus();return}setStatus('Отправляем заявку…');const submit=form.querySelector('button[type="submit"]');submit.disabled=true;try{const response=await fetch(form.action,{method:'POST',body:new FormData(form)});const data=await response.json();if(!response.ok||!data.ok)throw new Error('send');setStatus('Спасибо! Заявка отправлена. Мы свяжемся с вами.');form.reset()}catch(err){setStatus('Не удалось отправить заявку. Проверьте соединение или свяжитесь с нами по телефону.')}finally{submit.disabled=false}});
});
