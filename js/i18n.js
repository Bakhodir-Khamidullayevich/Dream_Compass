/* Dream Compass multilingual interface: Russian, Uzbek (Latin) and English. */
(() => {
  const rows = [
    // Shared navigation and interface
    ["Туры по всему миру", "Worldwide tours", "Dunyo bo‘ylab sayohatlar"],
    ["Туры по Узбекистану", "Uzbekistan tours", "O‘zbekiston bo‘ylab sayohatlar"],
    ["О нас", "About us", "Biz haqimizda"], ["Контакты", "Contact", "Aloqa"],
    ["Подобрать тур", "Find a tour", "Sayohatni tanlash"], ["Подберём путешествие", "Let’s plan your trip", "Sayohatingizni birga rejalashtiramiz"],
    ["Русский", "Russian", "Rus tili"], ["Выбрать язык", "Choose language", "Tilni tanlang"],
    ["Открыть меню", "Open menu", "Menyuni ochish"], ["Основная навигация", "Main navigation", "Asosiy navigatsiya"],
    ["Закрыть", "Close", "Yopish"], ["Продолжить просмотр", "Continue browsing", "Ko‘rishni davom ettirish"],
    ["Направление", "Destination", "Yo‘nalish"], ["Листайте вниз", "Scroll to explore", "Pastga aylantiring"],
    ["Перейти к следующему разделу", "Go to the next section", "Keyingi bo‘limga o‘tish"],
    ["Наверх", "Back to top", "Yuqoriga"], ["Наверх ↑", "Back to top ↑", "Yuqoriga ↑"],
    ["Свяжитесь с нами", "Get in touch", "Biz bilan bog‘laning"], ["Путешествуйте с вдохновением", "Travel with inspiration", "Ilhom bilan sayohat qiling"],
    ["DREAM COMPASS", "DREAM COMPASS", "DREAM COMPASS"], ["TRAVEL AGENCY", "TRAVEL AGENCY", "SAYOHAT AGENTLIGI"],
    ["DREAM COMPASS · TRAVEL AGENCY", "DREAM COMPASS · TRAVEL AGENCY", "DREAM COMPASS · SAYOHAT AGENTLIGI"],
    ["Позвонить нам", "Call us", "Bizga qo‘ng‘iroq qiling"], ["Адрес и карта", "Address & map", "Manzil va xarita"],
    ["Связаться с нами", "Contact us", "Biz bilan bog‘laning"], ["Открыть маршрут на карте", "Get directions", "Xaritada yo‘nalishni ochish"],
    ["Куда хотите отправиться?", "Where would you like to go?", "Qayerga sayohat qilmoqchisiz?"],
    ["Какое направление вас интересует?", "Which destination are you interested in?", "Qaysi yo‘nalish sizni qiziqtiradi?"],
    ["Выберите направление", "Choose a destination", "Yo‘nalishni tanlang"],
    ["Когда планируете поездку?", "When are you planning to travel?", "Qachon sayohat qilishni rejalashtiryapsiz?"],
    ["Выберите даты", "Choose dates", "Sanalarni tanlang"], ["Выберите период", "Choose a time frame", "Davrni tanlang"],
    ["В ближайший месяц", "Within the next month", "Keyingi bir oy ichida"],
    ["В ближайшие 3 месяца", "Within the next three months", "Keyingi uch oy ichida"], ["Позже", "Later", "Keyinroq"],
    ["Даты пока неизвестны", "Dates are not decided yet", "Sanalar hali belgilanmagan"],
    ["Количество путешественников", "Number of travellers", "Sayohatchilar soni"],
    ["Предпочитаемый бюджет", "Preferred budget", "Afzal ko‘rilgan budjet"],
    ["Эконом", "Economy", "Tejamkor"], ["Средний", "Mid-range", "O‘rtacha"], ["Премиум", "Premium", "Premium"], ["Не знаю", "Not sure yet", "Hali aniqlamadim"],
    ["Дополнительные пожелания", "Additional preferences", "Qo‘shimcha istaklar"], ["(необязательно)", "(optional)", "(ixtiyoriy)"],
    ["Ваше имя", "Your name", "Ismingiz"], ["Как к вам обращаться?", "What should we call you?", "Sizga qanday murojaat qilaylik?"],
    ["Телефон или мессенджер", "Phone or messenger", "Telefon yoki messenjer"],
    ["Например: пляжный отдых, категория отеля, экскурсии…", "For example: beach holiday, hotel category, excursions…", "Masalan: sohil bo‘yidagi dam olish, mehmonxona toifasi, ekskursiyalar…"],
    ["Например: исторические места, горы, семейная поездка…", "For example: historic sites, mountains, a family trip…", "Masalan: tarixiy joylar, tog‘lar, oilaviy sayohat…"],
    ["Отправляем заявку…", "Sending your request…", "So‘rovingiz yuborilmoqda…"],
    ["Пожалуйста, выберите направление.", "Please choose a destination.", "Iltimos, yo‘nalishni tanlang."],
    ["Пожалуйста, укажите имя.", "Please enter your name.", "Iltimos, ismingizni kiriting."],
    ["Пожалуйста, проверьте номер телефона.", "Please check your phone number.", "Iltimos, telefon raqamingizni tekshiring."],
    ["Спасибо! Заявка отправлена. Мы свяжемся с вами.", "Thank you! Your request has been sent. We’ll be in touch.", "Rahmat! So‘rovingiz yuborildi. Siz bilan bog‘lanamiz."],
    ["Не удалось отправить заявку. Проверьте соединение или свяжитесь с нами по телефону.", "We couldn’t send your request. Please check your connection or call us.", "So‘rovni yuborib bo‘lmadi. Internet aloqasini tekshiring yoki bizga telefon orqali bog‘laning."],
    ["Расскажите о пожеланиях — менеджер поможет с подходящими вариантами.", "Tell us what you have in mind, and our travel manager will help find suitable options.", "Istaklaringizni ayting — menejerimiz sizga mos variantlarni tanlashga yordam beradi."],
    ["Форма на главной странице", "Homepage form", "Bosh sahifadagi shakl"],

    // Worldwide tours page
    ["ПУТЕШЕСТВИЯ, КОТОРЫЕ ВДОХНОВЛЯЮТ", "TRAVEL THAT INSPIRES", "ILHOM BAG‘ISHLAYDIGAN SAYOHATLAR"],
    ["Открой мир", "Discover the world", "Dunyoni kashf eting"], ["вместе с", "with", "bilan birga"],
    ["Индивидуальные путешествия, проверенные направления и забота на каждом этапе.", "Thoughtfully tailored trips, trusted destinations and attentive support at every step.", "Sizga mos sayohatlar, sinalgan yo‘nalishlar va har bir bosqichda e’tibor."],
    ["Авиабилеты", "Flights", "Aviachiptalar"], ["Пакетные туры", "Package holidays", "Tayyor tur paketlari"], ["Азия", "Asia", "Osiyo"], ["Европа", "Europe", "Yevropa"], ["Круизы", "Cruises", "Kruizlar"],
    ["ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ", "POPULAR DESTINATIONS", "MASHHUR YO‘NALISHLAR"],
    ["Лучшие направления", "Top destinations", "Sayohatingiz uchun"], ["для вашего путешествия", "for your next journey", "eng yaxshi yo‘nalishlar"],
    ["Вдохновляйтесь, выбирайте направление и оставляйте заявку — мы поможем подобрать идеальный тур.", "Find inspiration, choose a destination and send us your request. We’ll help you find the right trip.", "Ilhom oling, yo‘nalishni tanlang va so‘rov qoldiring — sizga mos turni tanlashga yordam beramiz."],
    ["Турция", "Turkey", "Turkiya"], ["Пляжный отдых, курорты, исторические города и гостеприимная атмосфера.", "Beach resorts, historic cities and warm hospitality.", "Sohil kurortlari, tarixiy shaharlar va samimiy mehmondo‘stlik."],
    ["ОАЭ", "UAE", "BAA"], ["Современные города, роскошные отели и отдых на побережье.", "Modern cities, exceptional hotels and seaside escapes.", "Zamonaviy shaharlar, hashamatli mehmonxonalar va dengiz bo‘yidagi dam olish."],
    ["Таиланд", "Thailand", "Tailand"], ["Тропические острова, природа и новые впечатления.", "Tropical islands, lush nature and new experiences.", "Tropik orollar, go‘zal tabiat va yangi taassurotlar."],
    ["Мальдивы", "The Maldives", "Maldiv orollari"], ["Острова, уединение и отдых премиум-класса.", "Secluded islands and premium escapes.", "Orollar, sokinlik va yuqori darajadagi dam olish."],
    ["ФОРМАТЫ ОТДЫХА", "WAYS TO TRAVEL", "SAYOHAT TURLARI"], ["Выберите свой", "Choose your", "O‘zingizga mos"], ["формат путешествия", "way to travel", "sayohat turini tanlang"],
    ["От пляжного отдыха до насыщенных экскурсий — найдите вариант для следующего путешествия.", "From relaxing beach breaks to full days of discovery, find the kind of trip you’re looking for.", "Sohildagi hordiqdan mazmunli ekskursiyalargacha — keyingi sayohatingiz uchun mos variantni toping."],
    ["Пляжный отдых", "Beach holidays", "Sohilda dam olish"], ["Море, солнце и релакс", "Sea, sunshine and time to unwind", "Dengiz, quyosh va huzur"],
    ["Экскурсии и культура", "Culture & discovery", "Madaniyat va kashfiyotlar"], ["История, города и открытия", "History, cities and discoveries", "Tarix, shaharlar va kashfiyotlar"],
    ["Романтическое путешествие", "Romantic getaways", "Romantik sayohat"], ["Особенные моменты вдвоём", "Special moments for two", "Ikki kishilik unutilmas lahzalar"],
    ["Семейный отдых", "Family holidays", "Oilaviy dam olish"], ["Путешествия с близкими", "Trips with the people you love", "Yaqinlaringiz bilan sayohat"],
    ["ПОЧЕМУ DREAM COMPASS", "WHY DREAM COMPASS", "NEGA DREAM COMPASS?"],
    ["Ваше путешествие", "Your journey", "Sayohatingiz"], ["в надёжных руках", "in good hands", "ishonchli qo‘llarda"],
    ["Помогаем выбрать направление, подобрать подходящие варианты и спланировать поездку с учётом ваших пожеланий.", "We help you choose a destination, compare suitable options and plan a trip around your preferences.", "Yo‘nalishni tanlash, mos variantlarni solishtirish va sayohatni istaklaringizga muvofiq rejalashtirishda yordam beramiz."],
    ["Индивидуальный подбор туров", "Tailored trip planning", "Sizga mos turni tanlash"], ["Учитываем ваши пожелания, бюджет и предпочтения, чтобы предложить подходящие варианты отдыха.", "We take your wishes, budget and preferences into account to recommend suitable holiday options.", "Dam olish variantlarini tavsiya qilishda istaklaringiz, budjetingiz va afzalliklaringizni hisobga olamiz."],
    ["Помощь и консультации", "Advice and support", "Maslahat va ko‘mak"], ["Подскажем по направлениям, особенностям отдыха и деталям поездки, чтобы вы чувствовали себя увереннее.", "We’ll explain destination options, what to expect and the practical details, so you can plan with confidence.", "Yo‘nalishlar, dam olish xususiyatlari va safar tafsilotlari haqida tushuntirib, ishonch bilan reja tuzishingizga yordam beramiz."],
    ["Разные направления", "A world of destinations", "Turli yo‘nalishlar"], ["Международные путешествия и туры по Узбекистану — от пляжного отдыха до экскурсионных маршрутов.", "International holidays and trips around Uzbekistan, from beach breaks to cultural itineraries.", "Sohil bo‘yidagi hordiqdan madaniy ekskursiyalargacha — xorijiy yo‘nalishlar va O‘zbekiston bo‘ylab sayohatlar."],
    ["Сопровождение и поддержка", "Support along the way", "Safar davomida ko‘mak"], ["Помогаем с организационными вопросами и остаёмся на связи в рамках услуг агентства.", "We help with the practical arrangements and remain available within the scope of our services.", "Tashkiliy masalalarda yordam beramiz va agentlik xizmatlari doirasida aloqada bo‘lamiz."],
    ["ПОДБЕРЁМ ПУТЕШЕСТВИЕ", "LET’S PLAN YOUR TRIP", "SAYOHATINGIZNI REJALASHTIRAMIZ"],
    ["Расскажите о своих планах —", "Tell us what you have in mind —", "Rejalaringiz haqida yozing —"], ["мы подберём тур", "we’ll find the right trip", "sizga mos turni tanlaymiz"],
    ["Укажите основные пожелания, а мы предложим подходящие варианты и свяжемся с вами.", "Share a few details about your plans. We’ll suggest suitable options and get in touch.", "Asosiy istaklaringizni yozing — mos variantlarni taklif qilib, siz bilan bog‘lanamiz."],
    ["Каждое путешествие", "Every journey", "Har bir sayohat"], ["начинается с мечты", "begins with a dream", "orzudan boshlanadi"],
    ["Наверх", "Back to top", "Yuqoriga"], ["Международные туры", "International tours", "Xalqaro sayohatlar"],

    // Uzbekistan page
    ["ПУТЕШЕСТВИЯ ПО УЗБЕКИСТАНУ", "DISCOVER UZBEKISTAN", "O‘ZBEKISTON BO‘YLAB SAYOHATLAR"],
    ["Откройте для себя", "Discover", "O‘zbekistonning"], ["все грани Узбекистана", "the many sides of Uzbekistan", "har bir qirrasini o‘rganing"],
    ["От древних городов Шёлкового пути до живописных пейзажей — путешествие, которое откроет вам Узбекистан с новой стороны.", "From the ancient Silk Road cities to beautiful natural landscapes, discover a different side of Uzbekistan.", "Ipak yo‘lining qadimiy shaharlaridan go‘zal tabiat manzaralarigacha — O‘zbekistonni yangicha kashf eting."],
    ["Древние города", "Ancient cities", "Qadimiy shaharlar"], ["Культура и история", "Culture & history", "Madaniyat va tarix"], ["Горные пейзажи", "Mountain landscapes", "Tog‘ manzaralari"],
    ["Откройте города", "Discover the cities", "Ipak yo‘li bo‘ylab"], ["Шёлкового пути", "of the Silk Road", "shaharlarni o‘rganing"],
    ["Архитектура, старинные улочки и живые традиции — у каждого города свой характер и своя история.", "Architecture, old-town streets and living traditions — every city has its own character and story.", "Me’morchilik, qadimiy ko‘chalar va yashab kelayotgan an’analar — har bir shaharning o‘z tarixi va o‘ziga xos ruhi bor."],
    ["Самарканд", "Samarkand", "Samarqand"], ["Мозаики Регистана, бирюзовые купола и величие эпохи Тимуридов.", "Registan’s mosaics, turquoise domes and the legacy of the Timurids.", "Registon mozaikalari, feruza gumbazlar va Temuriylar davrining salobati."],
    ["Бухара", "Bukhara", "Buxoro"], ["Древние медресе, минареты и атмосфера старого восточного города.", "Historic madrasahs, minarets and the atmosphere of an old Silk Road city.", "Qadimiy madrasalar, minoralar va sharqona eski shahar muhiti."],
    ["Хива", "Khiva", "Xiva"], ["Крепостные стены, бирюзовые купола и ансамбль Ичан-Кала.", "Fortress walls, turquoise domes and the walled city of Itchan Kala.", "Qal’a devorlari, feruza gumbazlar va Ichan qal’a majmuasi."],
    ["Горный отдых", "Mountain escapes", "Tog‘da dam olish"], ["Чимган, Чарвак и красивые пейзажи для отдыха на природе.", "Chimgan, Charvak and scenic landscapes for a nature break.", "Chimyon, Chorvoq va tabiat qo‘ynida hordiq chiqarish uchun go‘zal manzaralar."],
    ["ИДЕИ ДЛЯ ПУТЕШЕСТВИЯ", "TRIP IDEAS", "SAYOHAT G‘OYALARI"], ["Маршруты, которые", "Journeys to", "Yodda qoladigan"], ["запоминаются", "remember", "yo‘nalishlar"],
    ["От насыщенных экскурсий до неспешных прогулок — выберите маршрут, который ближе именно вам.", "From full days of sightseeing to unhurried walks, choose an itinerary that suits your pace.", "Mazmunli ekskursiyalardan sokin sayrlargacha — o‘zingizga mos yo‘nalishni tanlang."],
    ["По следам Шёлкового пути", "In the Footsteps of the Silk Road", "Ipak yo‘li izidan"], ["5 дней · Самарканд — Бухара", "5 days · Samarkand — Bukhara", "5 kun · Samarqand — Buxoro"],
    ["Восточная сказка Хивы", "Khiva: An Eastern Tale", "Xiva — Sharq ertagi"], ["3 дня · Ичан-Кала", "3 days · Itchan Kala", "3 kun · Ichan qal’a"],
    ["Самарканд за один день", "Samarkand in a Day", "Bir kunda Samarqand"], ["1 день · главные памятники", "1 day · key landmarks", "1 kun · asosiy obidalar"],
    ["Атмосфера древней Бухары", "The Spirit of Old Bukhara", "Qadimiy Buxoro muhiti"], ["2 дня · старый город", "2 days · old town", "2 kun · eski shahar"],
    ["Обсудить маршрут", "Discuss an itinerary", "Yo‘nalishni muhokama qilish"],
    ["ЗА ПРЕДЕЛАМИ ДРЕВНИХ ГОРОДОВ", "BEYOND THE ANCIENT CITIES", "QADIMIY SHAHARLARDAN TASHQARIDA"],
    ["Узбекистан — это", "Uzbekistan is", "O‘zbekiston — bu"], ["не только история", "more than history", "nafaqat tarix"],
    ["Горные дороги, бирюзовая вода Чарвака и свежий воздух Чимгана — добавьте в путешествие время для природы и отдыха.", "Mountain roads, the turquoise waters of Charvak and the fresh air of Chimgan — leave room in your trip for nature and relaxation.", "Tog‘ yo‘llari, Chorvoqning ko‘m-ko‘k suvi va Chimyonning musaffo havosi — sayohatingizda tabiat va hordiq uchun ham vaqt ajrating."],
    ["Рассмотреть горный отдых", "Explore mountain getaways", "Tog‘da dam olish variantlari"],
    ["Знакомство с Узбекистаном", "Discovering Uzbekistan", "O‘zbekiston bilan"], ["с вниманием к деталям", "with attention to detail", "har bir tafsilotga e’tibor qaratgan holda tanishing"],
    ["Поможем сориентироваться в направлениях и подобрать формат путешествия под ваши интересы.", "We’ll help you explore the options and choose a trip that matches your interests.", "Yo‘nalishlarni tanlash va qiziqishlaringizga mos sayohat turini topishda yordam beramiz."],
    ["Продуманные маршруты", "Well-planned itineraries", "Puxta rejalashtirilgan yo‘nalishlar"], ["Помогаем выбрать интересные места и удобную программу путешествия.", "We help you choose worthwhile places to visit and a comfortable itinerary.", "Qiziqarli maskanlar va qulay sayohat dasturini tanlashga yordam beramiz."],
    ["Поддержка менеджера", "Personal travel support", "Menejer ko‘magi"], ["Ответим на вопросы о направлениях и поможем разобраться с организационными деталями.", "We’ll answer your questions about destinations and help with the practical arrangements.", "Yo‘nalishlar haqidagi savollaringizga javob beramiz va tashkiliy masalalarni hal qilishga ko‘maklashamiz."],
    ["Маршрут под ваши интересы", "A trip shaped around you", "Qiziqishlaringizga mos yo‘nalish"], ["Исторические города, культурные места и поездки разной продолжительности.", "Historic cities, cultural sites and trips of different lengths.", "Tarixiy shaharlar, madaniy maskanlar va turli davomiylikdagi sayohatlar."],
    ["Внимание к деталям", "Care in every detail", "Har bir tafsilotga e’tibor"], ["Помогаем сделать планирование поездки понятнее и комфортнее.", "We make planning your trip clearer and more comfortable.", "Sayohatni rejalashtirish jarayonini tushunarli va qulay qilishga yordam beramiz."],
    ["Откройте Узбекистан —", "Discover Uzbekistan —", "O‘zbekiston bo‘ylab sayohatni"], ["начнём с ваших пожеланий", "let’s start with your wishes", "istaklaringizdan boshlaymiz"],
    ["Расскажите, какие места хотите увидеть, а мы поможем обсудить подходящий маршрут.", "Tell us what you’d like to see, and we’ll help you plan a suitable itinerary.", "Qaysi joylarni ko‘rishni xohlayotganingizni ayting — mos yo‘nalishni birga rejalashtiramiz."],
    ["Выберите направление", "Choose a destination", "Yo‘nalishni tanlang"], ["Маршрут по Узбекистану", "Uzbekistan itinerary", "O‘zbekiston bo‘ylab yo‘nalish"],

    // About page
    ["ЗНАКОМСТВО С DREAM COMPASS", "MEET DREAM COMPASS", "DREAM COMPASS BILAN TANISHING"],
    ["Путешествия,", "Journeys", "Qalbga"], ["которые", "that", "ilhom beruvchi"], ["вдохновляют", "inspire", "sayohatlar"],
    ["Международные направления и путешествия по Узбекистану — с вниманием к вашим планам, интересам и комфорту.", "International destinations and journeys around Uzbekistan, planned with your wishes, interests and comfort in mind.", "Xalqaro yo‘nalishlar va O‘zbekiston bo‘ylab sayohatlar — rejalaringiz, qiziqishlaringiz va qulayligingizni hisobga olgan holda."],
    ["Познакомиться ближе", "Get to know us", "Biz bilan yaqindan tanishing"], ["Наши контакты", "Contact details", "Aloqa ma’lumotlari"],
    ["О НАС", "ABOUT US", "BIZ HAQIMIZDA"], ["Путешествие начинается с доверия", "Every journey begins with trust", "Sayohat ishonchdan boshlanadi"],
    ["Dream Compass — турагентство для тех, кто хочет планировать поездки с уверенностью и получать удовольствие от самого путешествия.", "Dream Compass is a travel agency for people who want to plan with confidence and enjoy the journey itself.", "Dream Compass — safarni ishonch bilan rejalashtirib, sayohatning o‘zidan zavq olishni istaganlar uchun sayohat agentligi."],
    ["Мы помогаем выбрать международный тур или открыть Узбекистан: учитываем пожелания, бюджет и формат отдыха, подсказываем по направлениям и сопровождаем организационные вопросы поездки.", "We help you choose an international trip or discover Uzbekistan. We consider your wishes, budget and travel style, advise on destinations and help with practical arrangements.", "Xorijiy turni tanlash yoki O‘zbekistonni kashf etishda yordam beramiz: istaklaringiz, budjetingiz va dam olish uslubingizni hisobga olib, yo‘nalishlar hamda tashkiliy masalalar bo‘yicha maslahat beramiz."],
    ["Dream Compass — путешествия, которые вдохновляют", "Dream Compass — travel that inspires", "Dream Compass — ilhom bag‘ishlaydigan sayohatlar"],
    ["— спокойствие, уверенность и комфорт в каждом путешествии.", "— peace of mind, confidence and comfort on every trip.", "— har bir sayohatda xotirjamlik, ishonch va qulaylik."],
    ["От первой идеи — к поездке, которую хочется вспоминать", "From the first idea to a journey worth remembering", "Ilk g‘oyadan unutilmas sayohatgacha"],
    ["Подбор под вас", "Tailored to you", "Sizga mos tanlov"], ["Учитываем ваши интересы, бюджет и пожелания.", "We take your interests, budget and wishes into account.", "Qiziqishlaringiz, budjetingiz va istaklaringizni hisobga olamiz."],
    ["Международный отдых и маршруты по Узбекистану.", "International holidays and trips around Uzbekistan.", "Xorijiy dam olish va O‘zbekiston bo‘ylab yo‘nalishlar."],
    ["Помощь по дороге", "Support along the way", "Safar davomida ko‘mak"], ["Консультируем по организационным вопросам поездки.", "We advise on practical travel arrangements.", "Safarni tashkil etish masalalari bo‘yicha maslahat beramiz."],
    ["ЛЮДИ И ДОВЕРИЕ", "PEOPLE & TRUST", "INSONLAR VA ISHONCH"], ["За Dream Compass", "Behind Dream Compass", "Dream Compass ortida"], ["стоят люди", "are people", "insonlar turadi"],
    ["Мы ценим открытость и хотим, чтобы вы знали, кому доверяете организацию своего путешествия.", "We believe in being open about who we are, so you know who is helping organise your trip.", "Ochiqlikni qadrlaymiz va sayohatingizni kim tashkil etishiga ishonch hosil qilishingizni istaymiz."],
    ["РУКОВОДИТЕЛЬ ТУРАГЕНТСТВА", "TRAVEL AGENCY DIRECTOR", "SAYOHAT AGENTLIGI RAHBARI"], ["Рахимова Феруза Шавкат кизи", "Feruza Shavkat qizi Rakhimova", "Rahimova Feruza Shavkat qizi"],
    ["Dream Compass — команда, которая помогает подобрать путешествие с учётом ваших пожеланий и организовать поездку.", "Dream Compass helps you find a trip that suits your wishes and brings the practical details together.", "Dream Compass istaklaringizga mos sayohatni tanlash va safarni tashkil etishda yordam beradi."],
    ["ВРЕМЯ РАБОТЫ", "OPENING HOURS", "ISH VAQTI"], ["Время работы", "Opening hours", "Ish vaqti"],
    ["Свяжитесь с нами в рабочее время — поможем сориентироваться по направлениям и подобрать подходящий тур.", "Contact us during opening hours. We’ll help you explore destinations and choose a suitable trip.", "Ish vaqtida biz bilan bog‘laning — yo‘nalishlarni ko‘rib chiqish va mos turni tanlashda yordam beramiz."],

    // Contacts page
    ["МЫ НА СВЯЗИ", "WE’RE HERE TO HELP", "BIZ ALOQADAMIZ"], ["Давайте", "Let’s", "Sayohatlaringizni"], ["спланируем", "plan", "birga"], ["ваше путешествие", "your trip", "rejalashtiraylik"],
    ["Позвоните нам, напишите в мессенджер или приезжайте в офис Dream Compass в Ташкенте.", "Call us, message us or visit the Dream Compass office in Tashkent.", "Bizga qo‘ng‘iroq qiling, messenjerda yozing yoki Toshkentdagi Dream Compass ofisiga tashrif buyuring."],
    ["КОНТАКТНАЯ ИНФОРМАЦИЯ", "CONTACT INFORMATION", "ALOQA MA’LUMOTLARI"], ["Будем рады", "We’d be happy", "Sizni"], ["вас видеть", "to welcome you", "kutib olishdan mamnunmiz"],
    ["Выберите удобный способ связи или постройте маршрут к нашему офису.", "Choose the easiest way to reach us or get directions to our office.", "Biz bilan bog‘lanishning qulay usulini tanlang yoki ofisimizga yo‘lni xaritada oching."],
    ["Набережная Анхора, 2", "2 Anhor Embankment", "Anhor bo‘yi, 2"], ["Узбекистан, г. Ташкент", "Tashkent, Uzbekistan", "O‘zbekiston, Toshkent shahri"], ["Ориентир", "Landmark", "Mo‘ljal"], ["Канал Анхор", "Anhor Canal", "Anhor kanali"], ["Свяжитесь с нами", "Get in touch", "Biz bilan bog‘laning"],

    // Shared modal/details headings
    ["Что делает поездку особенной", "What makes this trip special", "Bu sayohatning o‘ziga xos jihatlari"],
    ["Пример программы по дням", "Sample day-by-day itinerary", "Kunlar bo‘yicha namunaviy dastur"],
    ["Идеи для путешествия", "Trip ideas", "Sayohat g‘oyalari"], ["Что можно включить", "What you could include", "Dasturga nimalarni kiritish mumkin"],
    ["Возможный формат поездки", "A possible trip format", "Sayohatning mumkin bo‘lgan shakli"],
    ["Как обычно строится отдых", "How the holiday might unfold", "Dam olish dasturi qanday tuziladi"],
    ["Что согласуем перед бронированием", "What to confirm before booking", "Bron qilishdan oldin nimalar kelishiladi"],
    ["Пример структуры поездки", "Example trip outline", "Sayohat dasturiga misol"], ["Как можно наполнить поездку", "Ideas for your itinerary", "Sayohatni qanday mazmunli tashkil etish mumkin"],
    ["Что важно учесть", "Things to consider", "E’tibor berish kerak bo‘lgan jihatlar"], ["Как может пройти день", "A possible day plan", "Kun qanday o‘tishi mumkin"],

    // Detailed destination-card modals on the Uzbekistan page
    ["Самарканд — город мозаик и куполов", "Samarkand — a city of mosaics and domes", "Samarqand — mozaikalar va gumbazlar shahri"],
    ["Самарканд знакомит с архитектурным наследием эпохи Тимуридов: от величественной площади Регистан до мавзолея Гур-Эмир и некрополя Шахи-Зинда. Здесь можно совместить главные памятники, ремесленные мастерские, базары и знакомство с местной кухней.", "Samarkand reveals the architectural legacy of the Timurids, from the grand Registan Square to the Gur-e-Amir Mausoleum and Shah-i-Zinda necropolis. Alongside its landmark monuments, visitors can explore craft workshops, bazaars and local cuisine.", "Samarqand Temuriylar davri me’moriy merosi bilan tanishtiradi: ulug‘vor Registon maydonidan Go‘ri Amir maqbarasi va Shohi Zinda majmuasigacha. Asosiy obidalar bilan birga hunarmandchilik ustaxonalari, bozorlar va mahalliy taomlar bilan ham tanishish mumkin."],
    ["Регистан · Гур-Эмир", "Registan · Gur-e-Amir", "Registon · Go‘ri Amir"], ["Архитектура эпохи Тимуридов", "Timurid architecture", "Temuriylar davri me’morchiligi"],
    ["Площадь Регистан и ансамбль медресе — главная архитектурная панорама города.", "Registan Square and its madrasah ensemble form the city’s most recognisable architectural panorama.", "Registon maydoni va madrasalar majmuasi shaharning eng taniqli me’moriy manzarasini yaratadi."],
    ["Шахи-Зинда — ансамбль мавзолеев с выразительной плиточной отделкой.", "Shah-i-Zinda is a complex of mausoleums known for its richly decorated tilework.", "Shohi Zinda — koshinlari nafis bezatilgan maqbaralar majmuasi."],
    ["Базар Сиаб и местная кухня — возможность ближе познакомиться с жизнью города.", "Siab Bazaar and local cuisine offer a closer look at everyday life in the city.", "Siyob bozori va mahalliy taomlar shahar hayoti bilan yaqindan tanishish imkonini beradi."],
    ["Что посмотреть в Самарканде", "What to see in Samarkand", "Samarqandda nimalarni ko‘rish mumkin"], ["Исторический центр", "Historic centre", "Tarixiy markaz"], ["Прогулка по Регистану и знакомство с медресе; время посещения согласуется с режимом работы.", "Explore Registan Square and its madrasahs, with visiting times planned around opening hours.", "Registon maydoni va madrasalar bilan tanishing; tashrif vaqti ularning ish jadvaliga qarab belgilanadi."],
    ["Памятники Тимуридов", "Timurid landmarks", "Temuriylar davri obidalari"], ["Мавзолей Гур-Эмир и ансамбль Шахи-Зинда — по выбранному маршруту и доступному времени.", "Visit the Gur-e-Amir Mausoleum and Shah-i-Zinda complex, depending on the chosen route and time available.", "Tanlangan yo‘nalish va vaqtga qarab Go‘ri Amir maqbarasi hamda Shohi Zinda majmuasiga tashrif buyurish mumkin."], ["Базар и ремёсла", "Bazaar and crafts", "Bozor va hunarmandchilik"], ["Время для базара Сиаб, местных изделий и блюд самаркандской кухни.", "Time to explore Siab Bazaar, local handicrafts and Samarkand specialities.", "Siyob bozori, mahalliy hunarmandchilik buyumlari va Samarqand taomlari bilan tanishish uchun vaqt."],
    ["Бухара — атмосфера старого Востока", "Bukhara — the spirit of the old East", "Buxoro — qadimiy Sharq ruhi"], ["Бухара приглашает гулять без спешки: исторические улицы, торговые купола, тенистые дворики и архитектурные ансамбли создают особое ощущение старого города. Здесь удобно сочетать знаковые памятники с ремёслами и местной кухней.", "Bukhara is best explored at an unhurried pace. Historic lanes, trading domes, shaded courtyards and architectural ensembles give the old town its distinctive character. Landmark sights can be combined with traditional crafts and local food.", "Buxoroni shoshilmasdan kezish maroqli: tarixiy ko‘chalar, savdo gumbazlari, salqin hovlilar va me’moriy majmualar eski shaharning o‘ziga xos muhitini yaratadi. Mashhur obidalarni hunarmandchilik va mahalliy taomlar bilan tanishuvga uyg‘unlashtirish mumkin."],
    ["Исторический центр", "Historic centre", "Tarixiy markaz"], ["Пои-Калян · Ляби-Хауз", "Poi Kalyan · Lyabi-Hauz", "Poyi Kalon · Labi Hovuz"], ["Комплекс Пои-Калян и минарет Калян — одни из самых узнаваемых символов города.", "The Poi Kalyan complex and Kalyan Minaret are among the city’s best-known landmarks.", "Poyi Kalon majmuasi va Kalon minorasi shaharning eng taniqli obidalaridan hisoblanadi."], ["Ляби-Хауз — историческая площадь у водоёма с чайханами и старинными зданиями.", "Lyabi-Hauz is a historic square around a pond, lined with teahouses and old buildings.", "Labi Hovuz — hovuz atrofidagi tarixiy maydon bo‘lib, uning yonida choyxonalar va qadimiy binolar joylashgan."], ["Торговые купола и мастерские помогут познакомиться с традиционными ремёслами.", "The historic trading domes and workshops offer an introduction to traditional crafts.", "Qadimiy savdo gumbazlari va ustaxonalar an’anaviy hunarmandchilik bilan tanishtiradi."], ["Маршрут по старому городу", "A route through the old town", "Eski shahar bo‘ylab yo‘nalish"], ["Ляби-Хауз и торговые купола", "Lyabi-Hauz and the trading domes", "Labi Hovuz va savdo gumbazlari"], ["Прогулка по историческим кварталам, старинным торговым переходам и небольшим площадям.", "Walk through historic neighbourhoods, old trading passages and small squares.", "Tarixiy mahallalar, qadimiy savdo yo‘laklari va kichik maydonlar bo‘ylab sayr."], ["Пои-Калян", "Poi Kalyan", "Poyi Kalon"], ["Знакомство с минаретом, мечетью и медресе — с учётом расписания и доступности объектов.", "Discover the minaret, mosque and madrasah, subject to opening times and access.", "Minora, masjid va madrasa bilan ularning ish jadvali va kirish imkoniyatlarini hisobga olgan holda tanishish."], ["Ремёсла и местная кухня", "Crafts and local cuisine", "Hunarmandchilik va mahalliy taomlar"], ["Время для мастерских, сувенирных лавок и блюд бухарской кухни.", "Time for workshops, souvenir shops and Bukhara’s local dishes.", "Ustaxonalar, suvenir do‘konlari va Buxoro taomlari bilan tanishish uchun vaqt."],
    ["Хива — город за крепостными стенами", "Khiva — a city within ancient walls", "Xiva — qadimiy qal’a devorlari ichidagi shahar"], ["Внутри Ичан-Калы Хива раскрывается как цельный исторический город: крепостные стены, узкие улицы, бирюзовые купола, минареты и резные деревянные детали. Это направление для тех, кому нравится рассматривать архитектуру и узнавать истории места во время неспешных прогулок.", "Within Itchan Kala, Khiva feels like a historic city preserved behind its walls, with narrow lanes, turquoise domes, minarets and carved wooden details. It is ideal for travellers who enjoy architecture and discovering a place on leisurely walks.", "Ichan qal’a ichida Xiva tarixiy qiyofasini saqlagan yaxlit shahar sifatida namoyon bo‘ladi: qal’a devorlari, tor ko‘chalar, feruza gumbazlar, minoralar va o‘yma yog‘och bezaklar. Bu yer me’morchilikni kuzatish va shahar tarixini sokin sayrlar davomida kashf etishni yoqtiradiganlar uchun mos."],
    ["Ичан-Кала", "Itchan Kala", "Ichan qal’a"], ["Минареты · дворцы · ремёсла", "Minarets · palaces · crafts", "Minoralar · saroylar · hunarmandchilik"], ["Ичан-Кала — историческая внутренняя часть города, окружённая крепостными стенами.", "Itchan Kala is Khiva’s historic inner town, enclosed by fortress walls.", "Ichan qal’a — Xivaning qal’a devorlari bilan o‘ralgan tarixiy ichki shahri."], ["Куня-Арк, медресе и минареты показывают разные стороны архитектурного наследия Хорезма.", "Kunya-Ark, madrasahs and minarets reveal different aspects of Khorezm’s architectural heritage.", "Ko‘hna Ark, madrasalar va minoralar Xorazm me’moriy merosining turli jihatlarini namoyon etadi."], ["Резьба по дереву, изделия мастеров и хорезмская кухня дополняют знакомство с городом.", "Wood carving, local crafts and Khorezm cuisine add another dimension to a visit.", "Yog‘och o‘ymakorligi, mahalliy ustalar buyumlari va Xorazm taomlari shahar bilan tanishuvni yanada boyitadi."], ["Что открыть в Хиве", "What to discover in Khiva", "Xivada nimalarni kashf etish mumkin"], ["Прогулка по Ичан-Кале", "A walk through Itchan Kala", "Ichan qal’a bo‘ylab sayr"], ["Входные ворота, старинные улицы и архитектурные ансамбли внутри крепости.", "The city gates, old streets and architectural ensembles within the walls.", "Shahar darvozalari, qadimiy ko‘chalar va qal’a ichidagi me’moriy majmualar."], ["Дворцы и минареты", "Palaces and minarets", "Saroylar va minoralar"], ["Знакомство с историческими сооружениями по выбранному маршруту; посещение отдельных объектов зависит от их режима работы.", "Explore historic buildings along the chosen route; access to individual sites depends on their opening hours.", "Tanlangan yo‘nalish bo‘yicha tarixiy inshootlar bilan tanishing; ayrim obidalarga kirish ularning ish vaqtiga bog‘liq."], ["Ремёсла и местная кухня", "Crafts and local cuisine", "Hunarmandchilik va mahalliy taomlar"], ["Свободное время для ремесленных лавок, фотографий и знакомства с блюдами Хорезма.", "Free time for craft shops, photographs and a taste of Khorezm cuisine.", "Hunarmandchilik do‘konlari, suratga tushish va Xorazm taomlari bilan tanishish uchun bo‘sh vaqt."],
    ["Горный отдых — Чимган и Чарвак", "Mountain escapes — Chimgan and Charvak", "Tog‘ sayohati — Chimyon va Chorvoq"], ["Если хочется сменить архитектурные ансамбли на природу, поездку можно построить вокруг Чимганских гор и Чарвакского водохранилища. Панорамные остановки, прогулки и отдых у воды выбираются с учётом сезона, погоды, состояния дорог и доступности маршрутов.", "For a change of pace from historic architecture, plan a nature-focused trip around the Chimgan Mountains and Charvak Reservoir. Scenic stops, walks and time by the water should be chosen according to the season, weather, road conditions and route access.", "Tarixiy me’morchilikdan keyin tabiat qo‘ynida dam olishni istasangiz, sayohatni Chimyon tog‘lari va Chorvoq suv ombori atrofida rejalashtirish mumkin. Manzarali to‘xtash joylari, sayrlar va suv bo‘yidagi hordiq fasl, ob-havo, yo‘l holati hamda yo‘nalishlarning ochiqligiga qarab tanlanadi."], ["Чимганские горы", "Chimgan Mountains", "Chimyon tog‘lari"], ["Чарвакское водохранилище", "Charvak Reservoir", "Chorvoq suv ombori"], ["Чимган — горные пейзажи и прогулочные маршруты разной сложности.", "Chimgan offers mountain scenery and walking routes of varying difficulty.", "Chimyon tog‘ manzaralari va turli qiyinlikdagi piyoda yo‘nalishlarini taklif etadi."], ["Чарвак — широкие виды на водохранилище и места для отдыха у воды.", "Charvak offers wide views of the reservoir and places to relax by the water.", "Chorvoq suv omborining keng manzaralari va suv bo‘yida dam olish joylari bilan ajralib turadi."], ["Активности на природе зависят от сезона, погодных условий и работы выбранных площадок.", "Outdoor activities depend on the season, weather and the availability of the chosen facilities.", "Tabiat qo‘ynidagi mashg‘ulotlar fasl, ob-havo va tanlangan maskanlarning faoliyatiga bog‘liq."], ["Как можно провести день", "Ways to spend the day", "Kunni qanday o‘tkazish mumkin"], ["Горные виды Чимгана", "Mountain views in Chimgan", "Chimyon tog‘ manzaralari"], ["Поездка к панорамным точкам и прогулка по маршруту, подходящему сезону и уровню подготовки.", "Visit scenic viewpoints and take a walk suited to the season and your fitness level.", "Manzarali nuqtalarga borish va fasl hamda tayyorgarlik darajangizga mos yo‘nalishda sayr qilish."], ["Чарвакское водохранилище", "Charvak Reservoir", "Chorvoq suv ombori"], ["Остановка у воды и время для отдыха; купание и водные активности возможны только при подходящих условиях и доступности услуг.", "Pause by the water and relax; swimming and water activities depend on suitable conditions and available services.", "Suv bo‘yida to‘xtab hordiq chiqarish mumkin; cho‘milish va suv mashg‘ulotlari qulay sharoit hamda xizmatlar mavjudligiga bog‘liq."], ["Спокойный отдых на природе", "A relaxed day outdoors", "Tabiat qo‘ynida sokin hordiq"], ["Свободное время, фотографии и остановки по дороге в пределах согласованного плана.", "Free time, photographs and stops along the way within the agreed plan.", "Kelishilgan reja doirasida bo‘sh vaqt, suratga tushish va yo‘l-yo‘lakay manzarali joylarda to‘xtash."],

    // Detailed destination modal content (world tours)
    ["От пляжного отдыха на Средиземном море до насыщенных прогулок по Стамбулу и необычных пейзажей Каппадокии. Можно выбрать один формат или объединить несколько остановок в одной поездке.", "From Mediterranean beach breaks to lively walks through Istanbul and the striking landscapes of Cappadocia. Choose one style of holiday or combine several stops in one trip.", "O‘rta yer dengizi sohillaridagi hordiqdan Istanbul bo‘ylab sayrlargacha va Kapadokiyaning o‘ziga xos manzaralarigacha. Bitta dam olish turini tanlashingiz yoki bir safarda bir nechta manzilni birlashtirishingiz mumkin."],
    ["Пляжный и экскурсионный отдых", "Beach and sightseeing", "Sohil va ekskursiyalar"], ["Маршрут под ваш срок", "An itinerary to suit your dates", "Muddatingizga mos yo‘nalish"],
    ["Анталья, Белек и другие курортные районы для отдыха у моря.", "Antalya, Belek and other resort areas for a seaside stay.", "Dengiz bo‘yida dam olish uchun Antaliya, Belek va boshqa kurort hududlari."],
    ["Стамбул — мечети, дворцы, Босфор и кварталы с местной атмосферой.", "Istanbul’s mosques, palaces, the Bosphorus and neighbourhoods full of local character.", "Istanbuldagi masjidlar, saroylar, Bosfor bo‘g‘ozi va mahalliy muhitga boy mahallalar."],
    ["Каппадокия — скальные долины и панорамы; полёт на воздушном шаре возможен при подходящей погоде и наличии мест.", "Cappadocia’s rock valleys and sweeping views; hot-air balloon flights depend on weather and availability.", "Kapadokiyaning qoyali vodiylari va keng manzaralari; havo sharida uchish ob-havo va bo‘sh joylarga bog‘liq."],
    ["Море и курорт", "Sea and resort", "Dengiz va kurort"], ["Отель, пляж, выбранный тип питания и дополнительные экскурсии по желанию.", "Hotel, beach time, your preferred meal plan and optional excursions.", "Mehmonxona, sohil bo‘yidagi hordiq, tanlangan ovqatlanish turi va istakka ko‘ra ekskursiyalar."],
    ["Городской Стамбул", "Istanbul city break", "Istanbul bo‘ylab sayohat"], ["Исторические достопримечательности, прогулка по Босфору и местные рынки.", "Historic sights, a Bosphorus cruise and local markets.", "Tarixiy obidalar, Bosfor bo‘ylab sayr va mahalliy bozorlar."],
    ["Комбинированная поездка", "A multi-stop trip", "Bir nechta manzilli sayohat"], ["Можно объединить несколько регионов, если позволяют даты и бюджет.", "Several regions can be combined when your dates and budget allow.", "Sanalar va budjet imkon bersa, bir nechta hududni bir safarga birlashtirish mumkin."],
    ["Современная архитектура, пляжи Персидского залива, впечатляющие виды Дубая и культурные достопримечательности Абу-Даби. Программа может сочетать городской отдых и поездки за пределы мегаполиса.", "Contemporary architecture, Persian Gulf beaches, Dubai’s striking skyline and Abu Dhabi’s cultural landmarks. Your itinerary can mix city experiences with excursions beyond the urban centre.", "Zamonaviy me’morchilik, Fors ko‘rfazi sohillari, Dubay manzaralari va Abu-Dabining madaniy obidalari. Dastur shahar sayohatlari va shahar tashqarisidagi ekskursiyalarni birlashtirishi mumkin."],
    ["Город, море и пустыня", "City, sea and desert", "Shahar, dengiz va sahro"], ["Длительность по запросу", "Duration tailored to your plans", "Davomiylik kelishuv asosida"],
    ["Дубай: панорамы города, районы у воды, торговые центры и смотровые площадки.", "Dubai: skyline views, waterfront districts, shopping centres and observation decks.", "Dubay: shahar panoramalari, sohilbo‘yi hududlari, savdo markazlari va kuzatuv maydonchalari."],
    ["Абу-Даби: мечеть шейха Зайда и культурные пространства города.", "Abu Dhabi: Sheikh Zayed Grand Mosque and the city’s cultural venues.", "Abu-Dabi: Shayx Zoid masjidi va shaharning madaniy maskanlari."],
    ["Сафари в пустыне, ужин или водные активности доступны как дополнительные опции.", "Desert safaris, dinner experiences and water activities may be available as add-ons.", "Sahro safari, kechki ovqat dasturlari va suvdagi mashg‘ulotlar qo‘shimcha xizmat sifatida taklif qilinishi mumkin."],
    ["Городские впечатления", "City highlights", "Shahar taassurotlari"], ["Главные районы Дубая, набережные и смотровые площадки по выбранной программе.", "Dubai’s key districts, waterfronts and observation decks, depending on the chosen itinerary.", "Tanlangan dasturga qarab Dubayning asosiy hududlari, sohilbo‘yi va kuzatuv maydonchalari."],
    ["Культурный день", "A day of culture", "Madaniyatga bag‘ishlangan kun"], ["Поездка в Абу-Даби или знакомство с музеями и архитектурой.", "A visit to Abu Dhabi or a day exploring museums and architecture.", "Abu-Dabiga safar yoki muzeylar va me’morchilik bilan tanishish."],
    ["Отдых у моря", "Seaside downtime", "Dengiz bo‘yida hordiq"], ["Отель на побережье, пляж и свободное время для отдыха.", "A coastal hotel, beach time and room to relax at your own pace.", "Sohil bo‘yidagi mehmonxona, plyaj va erkin hordiq uchun vaqt."],
    ["Тропические острова, пляжи, тайская кухня и буддийские храмы. Подберём направление по настроению: спокойный островной отдых, насыщенный Бангкок или сочетание моря с экскурсиями.", "Tropical islands, beaches, Thai cuisine and Buddhist temples. Choose the pace that suits you: a peaceful island escape, lively Bangkok or a mix of seaside time and excursions.", "Tropik orollar, sohillar, Tailand taomlari va buddaviy ibodatxonalar. O‘zingizga mos uslubni tanlang: sokin orol dam olishi, jo‘shqin Bangkok yoki dengiz va ekskursiyalar uyg‘unligi."],
    ["Острова и культурные экскурсии", "Islands and cultural excursions", "Orollar va madaniy ekskursiyalar"], ["Сезон важен при выборе региона", "Season matters when choosing a region", "Hududni tanlashda mavsum muhim"],
    ["Пхукет и Краби — пляжи, островные поездки и природные виды.", "Phuket and Krabi offer beaches, island trips and natural scenery.", "Pxuket va Krabi sohillar, orollarga sayohatlar va go‘zal tabiat manzaralarini taklif etadi."],
    ["Бангкок — храмы, рынки, набережные и гастрономические впечатления.", "Bangkok: temples, markets, riverside walks and a vibrant food scene.", "Bangkok: ibodatxonalar, bozorlar, daryo bo‘yi sayrlari va boy gastronomik taassurotlar."],
    ["Экскурсии на острова и морские прогулки зависят от погоды и расписания.", "Island excursions and boat trips depend on weather and schedules.", "Orollarga ekskursiyalar va qayiq sayrlari ob-havo hamda jadvalga bog‘liq."],
    ["Пляжная часть", "Beach time", "Sohilda hordiq"], ["Размещение в выбранном районе и отдых у моря.", "Stay in your chosen area and enjoy time by the sea.", "Tanlangan hududda joylashish va dengiz bo‘yida dam olish."],
    ["День открытий", "A day of discovery", "Kashfiyotlar kuni"], ["Экскурсия по храмам, рынкам или природным достопримечательностям.", "An excursion to temples, markets or natural attractions.", "Ibodatxonalar, bozorlar yoki tabiiy diqqatga sazovor joylarga ekskursiya."],
    ["Морская прогулка", "Boat trip", "Dengiz sayri"], ["Поездка к островам или в бухты — при подходящих погодных условиях.", "A trip to nearby islands or bays, weather permitting.", "Ob-havo qulay bo‘lsa, orollar yoki qo‘ltiqlarga sayohat."],
    ["Уединённые острова, прозрачная вода и отдых в окружении Индийского океана. Можно выбрать курорт по бюджету, типу виллы, питанию и желаемым активностям.", "Secluded islands, clear waters and a stay surrounded by the Indian Ocean. Choose a resort based on your budget, villa style, meal plan and preferred activities.", "Hind okeani bag‘ridagi sokin orollar va tiniq suvlar. Budjet, villa turi, ovqatlanish va istalgan mashg‘ulotlarga qarab kurort tanlash mumkin."],
    ["Островной курорт", "Island resort", "Orol kurorti"], ["Отель и питание подбираются индивидуально", "Hotel and meal plan tailored to you", "Mehmonxona va ovqatlanish individual tanlanadi"],
    ["Виллы на пляже или над водой — в зависимости от выбранного курорта.", "Beach villas or overwater villas, depending on the resort.", "Tanlangan kurortga qarab sohil bo‘yidagi yoki suv ustidagi villalar."],
    ["Снорклинг, дайвинг и морские прогулки доступны у многих курортов, но зависят от условий и расписания.", "Many resorts offer snorkelling, diving and boat trips; availability depends on local conditions and schedules.", "Ko‘plab kurortlarda niqob bilan suzish, dayving va dengiz sayrlari mavjud, ammo ular sharoit va jadvalga bog‘liq."],
    ["Трансфер до острова может выполняться катером или гидросамолётом; способ и стоимость уточняются заранее.", "Transfers to the island may be by speedboat or seaplane; the method and cost should be confirmed in advance.", "Orolga transfer kater yoki gidrosamolyotda amalga oshirilishi mumkin; turi va narxi oldindan aniqlashtiriladi."],
    ["Прибытие и трансфер", "Arrival and transfer", "Yetib kelish va transfer"], ["Встреча и переезд на выбранный остров по согласованной логистике.", "Meet-up and transfer to your chosen island according to the agreed arrangements.", "Kelishilgan tartib asosida kutib olish va tanlangan orolga transfer."],
    ["Отдых на курорте", "Time at the resort", "Kurortda hordiq"], ["Пляж, бассейн и активности, предусмотренные отелем или выбранные дополнительно.", "Beach and pool time, plus activities offered by the hotel or booked separately.", "Plyaj, basseyn va mehmonxona taklif qiladigan yoki alohida buyurtma qilingan mashg‘ulotlar."],
    ["Последний день", "Departure day", "Jo‘nab ketish kuni"], ["Трансфер в аэропорт с учётом расписания обратного рейса.", "Transfer to the airport timed around your return flight.", "Qaytish reysi vaqtiga mos ravishda aeroportga transfer."],

    // Trip type modals
    ["Поездка, в которой главное — море, комфортный отель и время для себя. Направление и продолжительность подбираются с учётом сезона, бюджета и того, какой отдых вам ближе.", "A holiday built around the sea, a comfortable hotel and time to unwind. The destination and duration are chosen around the season, budget and your preferred style of travel.", "Dengiz, qulay mehmonxona va o‘zingiz uchun vaqt — bu sayohatning asosiy jihatlari. Yo‘nalish va davomiylik mavsum, budjet va istaklaringizga qarab tanlanadi."],
    ["Море и перезагрузка", "Sea and a reset", "Dengiz va yangi kuch"], ["Направление на выбор", "Choose your destination", "Yo‘nalishni o‘zingiz tanlang"],
    ["Выбор курорта по сезону, пляжу, атмосфере и бюджету.", "Choose a resort based on the season, beach, atmosphere and budget.", "Kurort mavsum, sohil, muhit va budjetga qarab tanlanadi."],
    ["Сравнение отелей, типов номеров и вариантов питания.", "Compare hotels, room types and meal plans.", "Mehmonxonalar, xona turlari va ovqatlanish variantlarini solishtirish."],
    ["По желанию — морские экскурсии, спа или активности на воде.", "Optional boat excursions, spa treatments or water activities.", "Istakka ko‘ra dengiz ekskursiyalari, spa yoki suvdagi mashg‘ulotlar."],
    ["Направление и даты", "Destination and dates", "Yo‘nalish va sanalar"], ["Регион, длительность поездки и подходящее время вылета.", "Region, trip length and a convenient departure time.", "Hudud, safar davomiyligi va qulay uchish vaqti."],
    ["Проживание", "Accommodation", "Yashash joyi"], ["Категория отеля, тип номера, питание и расстояние до пляжа.", "Hotel category, room type, meal plan and distance to the beach.", "Mehmonxona toifasi, xona turi, ovqatlanish va sohilgacha masofa."],
    ["Дополнительные услуги", "Optional extras", "Qo‘shimcha xizmatlar"], ["Трансфер, страховка и экскурсии — по выбранному пакету.", "Transfers, insurance and excursions, depending on the package selected.", "Tanlangan paketga qarab transfer, sug‘urta va ekskursiyalar."],
    ["Путешествие для тех, кому интересно узнавать историю места, гулять по старым городам, видеть архитектуру и пробовать местную кухню. Темп и количество экскурсий можно подстроить под ваши интересы.", "For travellers who enjoy learning local history, wandering old streets, discovering architecture and trying regional food. The pace and number of excursions can be tailored to your interests.", "Mahalliy tarixni o‘rganish, qadimiy shaharlarda sayr qilish, me’morchilikni tomosha etish va milliy taomlarni tatib ko‘rishni yoqtiradiganlar uchun. Sayohat sur’ati va ekskursiyalar soni qiziqishlaringizga moslashtiriladi."],
    ["История и местная культура", "History and local culture", "Tarix va mahalliy madaniyat"], ["Насыщенность по желанию", "A pace that suits you", "O‘zingizga mos sur’at"],
    ["Исторические центры, музеи, памятники архитектуры и традиционные рынки.", "Historic centres, museums, architectural landmarks and traditional markets.", "Tarixiy markazlar, muzeylar, me’moriy obidalar va an’anaviy bozorlar."],
    ["Экскурсии с гидом или самостоятельные прогулки — в зависимости от формата.", "Guided tours or independent walks, depending on your preferred format.", "Tanlangan formatga qarab gid bilan ekskursiyalar yoki mustaqil sayrlar."],
    ["Время для местной кухни, ремёсел и свободного знакомства с городом.", "Time to explore local cuisine, crafts and the city at your own pace.", "Mahalliy taomlar, hunarmandchilik va shahar bilan erkin tanishish uchun vaqt."],
    ["Знакомство с городом", "Getting to know the city", "Shahar bilan tanishuv"], ["Обзорная прогулка по главным местам и историческим кварталам.", "A guided overview of key sights and historic neighbourhoods.", "Asosiy diqqatga sazovor joylar va tarixiy mahallalar bo‘ylab tanishuv sayri."],
    ["Тематический день", "A themed day", "Mavzuli kun"], ["Музеи, архитектура, гастрономия или ремесленные мастерские.", "Museums, architecture, food or artisan workshops.", "Muzeylar, me’morchilik, gastronomiya yoki hunarmandchilik ustaxonalari."],
    ["Свободное время", "Free time", "Bo‘sh vaqt"], ["Возможность вернуться к понравившимся местам или выбрать дополнительную экскурсию.", "Time to revisit favourite places or add another excursion.", "Yoqtirgan joylaringizga qaytish yoki qo‘shimcha ekskursiya tanlash imkoniyati."],
    ["Особенная поездка вдвоём — от красивого морского побережья до уютного отеля в историческом городе. Акцент можно сделать на приватности, красивом месте и впечатлениях, которые хочется разделить.", "A special trip for two, from a beautiful coastline to a cosy hotel in a historic city. Focus on privacy, a memorable setting and experiences you can share.", "Ikki kishilik alohida sayohat — go‘zal dengiz sohilidan tarixiy shahardagi shinam mehmonxonagacha. Shaxsiylik, chiroyli manzara va birga baham ko‘riladigan taassurotlarga urg‘u berish mumkin."],
    ["Для двоих", "For two", "Ikki kishi uchun"], ["Особые пожелания обсуждаются заранее", "Special requests can be discussed in advance", "Maxsus istaklar oldindan kelishiladi"],
    ["Отель с подходящей атмосферой и удобным расположением.", "A hotel with the right atmosphere and a convenient location.", "Mos muhitga ega va qulay joylashgan mehmonxona."],
    ["Ужин с видом, спа или прогулка на закате — при наличии такой услуги.", "A dinner with a view, spa treatment or sunset walk, where available.", "Imkoniyat bo‘lsa, manzarali kechki ovqat, spa yoki quyosh botishidagi sayr."],
    ["Дополнительное оформление номера или небольшой сюрприз можно запросить отдельно.", "Room decorations or a small surprise can be requested separately.", "Xonani bezatish yoki kichik syurprizni alohida so‘rash mumkin."],
    ["Спокойное начало", "A gentle start", "Sokin boshlanish"], ["Комфортное размещение и время, чтобы освоиться без спешки.", "Settle into your accommodation and ease into the trip without rushing.", "Shoshilmasdan joylashish va safarga moslashish uchun vaqt."],
    ["Особенный момент", "A special moment", "Alohida lahza"], ["Романтический ужин, прогулка или дополнительная услуга по согласованию.", "A romantic dinner, a walk or another arranged experience.", "Kelishuv asosida romantik kechki ovqat, sayr yoki boshqa xizmat."],
    ["Время вдвоём", "Time together", "Birgalikdagi vaqt"], ["Свободный день и впечатления, выбранные специально для вашей пары.", "A free day and experiences chosen especially for you as a couple.", "Erkin kun va aynan juftligingiz uchun tanlangan taassurotlar."],
    ["Отдых, в котором удобно и взрослым, и детям. При подборе учитываем возраст детей, длительность дороги, удобство номера, питание и доступность семейных развлечений.", "A holiday that works for adults and children alike. We consider the children’s ages, travel time, room comfort, meals and available family activities.", "Kattalar va bolalar uchun qulay dam olish. Turni tanlashda bolalarning yoshi, yo‘l davomiyligi, xona qulayligi, ovqatlanish va oilaviy ko‘ngilochar imkoniyatlarni hisobga olamiz."],
    ["Для поездки с детьми", "For trips with children", "Bolalar bilan sayohat uchun"], ["Условия зависят от отеля и направления", "Options depend on the hotel and destination", "Imkoniyatlar mehmonxona va yo‘nalishga bog‘liq"],
    ["Семейный номер или смежное размещение — при доступности у отеля.", "Family rooms or connecting rooms, subject to hotel availability.", "Mehmonxonada mavjud bo‘lsa, oilaviy yoki tutash xonalar."],
    ["Время перелёта и трансфера учитывается при сравнении вариантов.", "Flight and transfer times are considered when comparing options.", "Variantlarni solishtirishda parvoz va transfer vaqti ham hisobga olinadi."],
    ["Детские клубы, бассейны и развлечения проверяются отдельно по конкретному отелю.", "Kids’ clubs, pools and entertainment are checked for each specific hotel.", "Bolalar klublari, basseynlar va ko‘ngilochar xizmatlar har bir mehmonxona bo‘yicha alohida tekshiriladi."],
    ["Удобная логистика", "Convenient travel arrangements", "Qulay safar tashkiloti"], ["По возможности выбираем понятные пересадки, подходящее время рейса и трансфер.", "Where possible, we look for convenient connections, suitable flight times and transfers.", "Imkon qadar qulay ulanishlar, mos parvoz vaqti va transferni tanlaymiz."],
    ["Подходящее проживание", "Suitable accommodation", "Mos yashash joyi"], ["Проверяем конфигурацию номера, питание и услуги для детей.", "We check room layouts, meals and services for children.", "Xona tuzilishi, ovqatlanish va bolalar uchun xizmatlarni tekshiramiz."],
    ["План без перегрузки", "A balanced itinerary", "Muvozanatli dastur"], ["Балансируем отдых, короткие активности и свободное время.", "We balance downtime, shorter activities and free time.", "Hordiq, qisqa mashg‘ulotlar va bo‘sh vaqt o‘rtasida muvozanat saqlaymiz."],

    // Uzbekistan itinerary modals
    ["Пятидневное путешествие между Самаркандом и Бухарой: грандиозные ансамбли Тимуридов, старинные купола торговых рядов и узкие улицы древних городов. Программа ниже — ориентир, который можно адаптировать под билеты и ваши интересы.", "A five-day journey between Samarkand and Bukhara, taking in grand Timurid ensembles, historic trading domes and the narrow streets of ancient cities. The outline below can be adjusted to your transport arrangements and interests.", "Samarqand va Buxoro orasidagi besh kunlik sayohat: Temuriylar davrining ulug‘vor majmualari, qadimiy savdo gumbazlari va eski shaharlarning tor ko‘chalari. Quyidagi dastur namunaviy bo‘lib, transport va qiziqishlaringizga moslashtirilishi mumkin."],
    ["Главные архитектурные ансамбли Самарканда и Бухары.", "The major architectural ensembles of Samarkand and Bukhara.", "Samarqand va Buxoroning asosiy me’moriy majmualari."],
    ["Переезд между городами согласуется с датами и доступным транспортом.", "Travel between the cities is arranged around your dates and available transport.", "Shaharlar orasidagi qatnov sanalar va mavjud transportga qarab kelishiladi."],
    ["Есть возможность добавить свободное время для базаров, ремёсел и местной кухни.", "You can leave time for bazaars, crafts and local cuisine.", "Bozorlar, hunarmandchilik va mahalliy taomlar uchun qo‘shimcha bo‘sh vaqt ajratish mumkin."],
    ["День 1 · Самарканд", "Day 1 · Samarkand", "1-kun · Samarqand"], ["Прибытие, размещение по выбранному варианту и первая прогулка по историческому центру.", "Arrival, check-in according to your chosen arrangement and a first walk through the historic centre.", "Yetib kelish, tanlangan joyga joylashish va tarixiy markaz bo‘ylab ilk sayr."],
    ["День 2 · Самарканд", "Day 2 · Samarkand", "2-kun · Samarqand"], ["Регистан, мавзолей Гур-Эмир и другие знаковые места в согласованном порядке.", "Registan, the Gur-e-Amir Mausoleum and other landmarks in an agreed order.", "Registon, Go‘ri Amir maqbarasi va boshqa mashhur obidalar kelishilgan tartibda."],
    ["День 3 · Переезд в Бухару", "Day 3 · Travel to Bukhara", "3-kun · Buxoroga yo‘l"], ["Дорога до Бухары и знакомство со старым городом, если позволяет время.", "Travel to Bukhara and an introduction to the old town, time permitting.", "Buxoroga yo‘l va vaqt imkon bersa, eski shahar bilan tanishuv."],
    ["День 4 · Бухара", "Day 4 · Bukhara", "4-kun · Buxoro"], ["Комплекс Пои-Калян, старинные торговые купола и район Ляби-Хауз.", "The Poi Kalyan complex, historic trading domes and the Lyabi-Hauz area.", "Poyi Kalon majmuasi, qadimiy savdo gumbazlari va Labi Hovuz hududi."],
    ["День 5 · Завершение поездки", "Day 5 · Journey ends", "5-kun · Safar yakuni"], ["Свободное время и отправление с учётом дальнейшего маршрута.", "Free time and departure arranged around your onward travel.", "Keyingi yo‘nalishingizni hisobga olgan holda bo‘sh vaqt va jo‘nab ketish."],
    ["Это примерная программа, а не подтверждённый пакет. Транспорт, проживание, гид, входные билеты, питание и точный порядок посещений согласуются при подборе тура.", "This is an indicative itinerary, not a confirmed package. Transport, accommodation, guide services, entrance tickets, meals and the exact order of visits are agreed when the trip is arranged.", "Bu namunaviy dastur, tasdiqlangan tur paketi emas. Transport, turar joy, gid xizmati, kirish chiptalari, ovqatlanish va tashriflar tartibi tur tanlashda kelishiladi."],
    ["Трёхдневное знакомство с Ичан-Калой — историческим городом за крепостными стенами, где бирюзовые купола, минареты и резные двери создают неповторимую атмосферу Хорезма.", "A three-day introduction to Itchan Kala, the historic walled city where turquoise domes, minarets and carved doors capture the distinctive atmosphere of Khorezm.", "Ichan qal’a bilan uch kunlik tanishuv: qal’a devorlari ortidagi tarixiy shaharda feruza gumbazlar, minoralar va naqshinkor eshiklar Xorazmning o‘ziga xos muhitini yaratadi."],
    ["Прогулки внутри исторической Ичан-Калы.", "Walks through historic Itchan Kala.", "Tarixiy Ichan qal’a bo‘ylab sayrlar."], ["Медресе, минареты, дворцы и ремесленные лавки.", "Madrasahs, minarets, palaces and craft shops.", "Madrasalar, minoralar, saroylar va hunarmandchilik do‘konlari."],
    ["Время для фотографий и знакомства с хорезмской кухней.", "Time for photographs and a taste of Khorezm cuisine.", "Suratga tushish va Xorazm taomlari bilan tanishish uchun vaqt."],
    ["День 1 · Ичан-Кала", "Day 1 · Itchan Kala", "1-kun · Ichan qal’a"], ["Входные ворота, старые улочки и первые архитектурные ансамбли города.", "The city gates, old lanes and first architectural ensembles.", "Shahar darvozalari, qadimiy ko‘chalar va dastlabki me’moriy majmualar."],
    ["День 2 · Дворцы и минареты", "Day 2 · Palaces and minarets", "2-kun · Saroylar va minoralar"], ["Посещение исторических сооружений по выбранному маршруту и прогулка по старому городу.", "Visit historic monuments along the chosen route and explore the old town.", "Tanlangan yo‘nalish bo‘yicha tarixiy inshootlarni tomosha qilish va eski shahar bo‘ylab sayr."],
    ["День 3 · Свободное время", "Day 3 · Free time", "3-kun · Bo‘sh vaqt"], ["Ремёсла, сувенирные лавки и спокойное завершение путешествия.", "Crafts, souvenir shops and a relaxed end to the trip.", "Hunarmandchilik, suvenir do‘konlari va sayohatning sokin yakuni."],
    ["Программа ориентировочная. Точный состав экскурсий, билеты, транспорт, проживание и услуги гида зависят от выбранного формата поездки.", "This is an indicative itinerary. Excursions, tickets, transport, accommodation and guide services depend on the trip format you choose.", "Bu namunaviy dastur. Ekskursiyalar, chiptalar, transport, turar joy va gid xizmatlari tanlangan sayohat formatiga bog‘liq."],
    ["Насыщенный, но понятный по темпу маршрут по самым узнаваемым местам Самарканда — для тех, кто хочет получить яркое первое впечатление о городе за один день.", "A full but manageable day visiting Samarkand’s best-known landmarks — ideal for travellers who want a memorable first impression of the city.", "Samarqandning eng mashhur joylarini qamrab oladigan, mazmunli va qulay sur’atdagi bir kunlik yo‘nalish — shahar haqida ilk yorqin taassurot olishni istaganlar uchun."],
    ["Главные памятники города", "The city’s key landmarks", "Shaharning asosiy obidalari"], ["Площадь Регистан и три знаменитых медресе.", "Registan Square and its three celebrated madrasahs.", "Registon maydoni va uning uch mashhur madrasasi."],
    ["Мавзолей Гур-Эмир и архитектурное наследие эпохи Тимуридов.", "The Gur-e-Amir Mausoleum and Timurid architectural heritage.", "Go‘ri Amir maqbarasi va Temuriylar davri me’moriy merosi."],
    ["Время на исторический центр и местные ремёсла — по согласованному расписанию.", "Time to explore the historic centre and local crafts, according to the agreed schedule.", "Kelishilgan jadvalga ko‘ra tarixiy markaz va mahalliy hunarmandchilik bilan tanishish."],
    ["Утро · Регистан", "Morning · Registan", "Ertalab · Registon"], ["Знакомство с центральной площадью и ансамблем медресе.", "Discover the central square and its madrasah complex.", "Markaziy maydon va madrasalar majmuasi bilan tanishuv."],
    ["День · Наследие Тимуридов", "Midday · Timurid heritage", "Kunduz · Temuriylar merosi"], ["Гур-Эмир и другие достопримечательности в зависимости от доступного времени.", "Gur-e-Amir and other sights, depending on the time available.", "Vaqtga qarab Go‘ri Amir va boshqa diqqatga sazovor joylar."],
    ["После обеда · Старый город", "Afternoon · Old town", "Tushdan keyin · Eski shahar"], ["Прогулка, местные изделия и возможность попробовать национальную кухню.", "A walk, local crafts and a chance to try traditional food.", "Sayr, mahalliy hunarmandchilik buyumlari va milliy taomlarni tatib ko‘rish imkoniyati."],
    ["Однодневная программа зависит от времени прибытия и отъезда. Гид, транспорт, входные билеты и питание уточняются при оформлении.", "The one-day itinerary depends on arrival and departure times. Guide services, transport, entrance tickets and meals are confirmed when booking.", "Bir kunlik dastur yetib kelish va jo‘nab ketish vaqtiga bog‘liq. Gid, transport, kirish chiptalari va ovqatlanish bron paytida aniqlashtiriladi."],
    ["Два дня среди медресе, торговых куполов, тенистых двориков и старинных улиц Бухары. Маршрут позволяет не спешить и почувствовать атмосферу исторического центра.", "Spend two days among Bukhara’s madrasahs, trading domes, shady courtyards and old streets. The itinerary leaves time to slow down and enjoy the historic centre.", "Buxoroning madrasalari, savdo gumbazlari, salqin hovlilari va qadimiy ko‘chalari orasida ikki kun. Yo‘nalish shoshilmasdan tarixiy markaz muhitini his qilish imkonini beradi."],
    ["Старый город Бухары", "Bukhara Old Town", "Buxoro eski shahri"], ["Площадь Ляби-Хауз и исторические кварталы.", "Lyabi-Hauz Square and historic neighbourhoods.", "Labi Hovuz maydoni va tarixiy mahallalar."],
    ["Минарет Калян и ансамбль Пои-Калян.", "The Kalyan Minaret and Poi Kalyan ensemble.", "Kalon minorasi va Poyi Kalon majmuasi."],
    ["Старинные торговые купола, ремесленные мастерские и местная кухня.", "Historic trading domes, artisan workshops and local cuisine.", "Qadimiy savdo gumbazlari, hunarmandchilik ustaxonalari va mahalliy taomlar."],
    ["День 1 · Старый город", "Day 1 · Old town", "1-kun · Eski shahar"], ["Ляби-Хауз, прогулка по историческим улицам и знакомство с торговыми куполами.", "Lyabi-Hauz, a walk through historic streets and a look around the trading domes.", "Labi Hovuz, tarixiy ko‘chalar bo‘ylab sayr va savdo gumbazlari bilan tanishuv."],
    ["День 2 · Архитектурная Бухара", "Day 2 · Architectural Bukhara", "2-kun · Me’moriy Buxoro"], ["Комплекс Пои-Калян и другие памятники по согласованному маршруту.", "The Poi Kalyan complex and other monuments along the agreed route.", "Kelishilgan yo‘nalish bo‘yicha Poyi Kalon majmuasi va boshqa obidalar."],
    ["Программа ориентировочная. Размещение, транспорт, гид, входные билеты и питание включаются только при согласовании соответствующих услуг.", "This is an indicative itinerary. Accommodation, transport, guide services, entrance tickets and meals are included only if agreed as part of your booking.", "Bu namunaviy dastur. Turar joy, transport, gid, kirish chiptalari va ovqatlanish faqat tegishli xizmatlar kelishilgan taqdirda kiritiladi."],
    ["Состав поездки, даты, размещение, перелёт, питание, трансферы и входные билеты зависят от выбранного варианта. Менеджер уточнит доступность и итоговую стоимость до подтверждения заявки.", "The itinerary, dates, accommodation, flights, meals, transfers and entrance tickets depend on the option you choose. A travel manager will confirm availability and the final price before your booking is confirmed.", "Safar dasturi, sanalar, turar joy, parvoz, ovqatlanish, transfer va kirish chiptalari tanlangan variantga bog‘liq. Ariza tasdiqlanishidan oldin menejer mavjudlik va yakuniy narxni aniqlashtiradi."],

    ["Другое зарубежное направление", "Another international destination", "Boshqa xorijiy yo‘nalish"],
    ["Пока не определился", "Not decided yet", "Hali tanlamadim"],
    ["Ваш маршрут.", "Your itinerary.", "Sizning yo‘nalishingiz."], ["Ваши впечатления.", "Your experiences.", "Sizning taassurotlaringiz."],
    ["Путешествие начинается", "A journey begins", "Sayohat"], ["с", "with", ""], ["доверия", "trust", "ishonchdan boshlanadi"],
    ["Наш подход", "Our approach", "Bizning yondashuvimiz"],
    ["html", "html", "html"],

    ["1 день", "1 day", "1 kun"], ["2 дня", "2 days", "2 kun"], ["3 дня", "3 days", "3 kun"], ["5 дней", "5 days", "5 kun"],
    ["Выберите значение", "Choose a value", "Qiymatni tanlang"],
    ["Объединённые Арабские Эмираты", "United Arab Emirates", "Birlashgan Arab Amirliklari"],
    ["Самарканд → Бухара", "Samarkand → Bukhara", "Samarqand → Buxoro"],
    ["Семейное путешествие", "Family trip", "Oilaviy sayohat"], ["Семейный тур", "Family tour", "Oilaviy tur"],
    ["Хива · Ичан-Кала", "Khiva · Itchan Kala", "Xiva · Ichan qal’a"], ["Экскурсионный тур", "Sightseeing tour", "Ekskursiya turi"],
    ["Стамбул, Босфор и Галатская башня", "Istanbul, the Bosphorus and Galata Tower", "Istanbul, Bosfor va Galata minorasi"],
    ["Панорама Дубая и Бурдж-Халифа на закате", "Dubai skyline and Burj Khalifa at sunset", "Quyosh botishida Dubay manzarasi va Burj Xalifa"],
    ["Бирюзовая бухта и скалы Таиланда", "Turquoise bay and cliffs in Thailand", "Tailandning feruza rangli qo‘ltig‘i va qoyalari"],
    ["Виллы над бирюзовой водой на Мальдивах на закате", "Overwater villas above turquoise Maldivian waters at sunset", "Quyosh botishida Maldiv orollarining feruza suvi ustidagi villalar"],
    ["Пляжный отдых на песчаном берегу во время заката", "A sandy beach at sunset", "Quyosh botishida qumli sohil"],
    ["Древнеримские руины на закате — экскурсии и культура", "Ancient Roman ruins at sunset — culture and sightseeing", "Quyosh botishidagi qadimgi Rim xarobalari — madaniyat va ekskursiyalar"],
    ["Романтический ужин у моря с розами и свечами", "A romantic seaside dinner with roses and candlelight", "Dengiz bo‘yida atirgullar va shamlar bilan romantik kechki ovqat"],
    ["Семейный отдых на берегу моря на закате", "A family enjoying the seaside at sunset", "Quyosh botishida dengiz bo‘yida dam olayotgan oila"],
    ["Вдохновляющий вид морского побережья", "An inspiring view of the coastline", "Dengiz sohilining ilhomlantiruvchi manzarasi"],
    ["Ключевые сведения", "Key details", "Asosiy ma’lumotlar"],
    ["Путешествия по Узбекистану", "Travel around Uzbekistan", "O‘zbekiston bo‘ylab sayohatlar"],
    ["Старинные стены и архитектура на маршруте по Шёлковому пути", "Historic walls and architecture along the Silk Road route", "Ipak yo‘li yo‘nalishidagi qadimiy devorlar va me’morchilik"],
    ["Бирюзовая архитектура Хивы", "Khiva’s turquoise architecture", "Xivaning feruza rangli me’morchiligi"],
    ["Архитектурная арка на фоне гор рядом с Самаркандом", "An architectural arch against the mountains near Samarkand", "Samarqand yaqinidagi tog‘lar fonidagi me’moriy ravoq"],
    ["Старинная архитектура Бухары на закате", "Bukhara’s historic architecture at sunset", "Quyosh botishida Buxoroning qadimiy me’morchiligi"],
    ["О турагентстве Dream Compass", "About the Dream Compass travel agency", "Dream Compass sayohat agentligi haqida"],
    ["Контакты Dream Compass", "Contact Dream Compass", "Dream Compass bilan aloqa"],
    ["Dream Compass — турагентство, которое помогает подобрать международные путешествия и туры по Узбекистану. Наш адрес в Ташкенте и карта проезда.", "Dream Compass helps you choose international trips and tours around Uzbekistan. Find our Tashkent address and directions here.", "Dream Compass xalqaro sayohatlar va O‘zbekiston bo‘ylab turlarni tanlashga yordam beradi. Toshkentdagi manzilimiz va yo‘l xaritasini bu yerdan topasiz."],
    ["Туры по Узбекистану с Dream Compass: Самарканд, Бухара, Хива и горные маршруты.", "Explore Uzbekistan with Dream Compass: Samarkand, Bukhara, Khiva and mountain itineraries.", "Dream Compass bilan O‘zbekiston bo‘ylab sayohat qiling: Samarqand, Buxoro, Xiva va tog‘ yo‘nalishlari."],

    // Image descriptions, page titles and accessibility labels
    ["Dream Compass — главная", "Dream Compass — Home", "Dream Compass — bosh sahifa"],
    ["Dream Compass — международные туры", "Dream Compass — international tours", "Dream Compass — xalqaro sayohatlar"],
    ["Добро пожаловать в Dream Compass", "Welcome to Dream Compass", "Dream Compass’ga xush kelibsiz"],
    ["Архитектура и бирюзовые купола Самарканда", "Samarkand architecture and turquoise domes", "Samarqand me’morchiligi va feruza gumbazlari"],
    ["Историческая архитектура Бухары", "Historic architecture in Bukhara", "Buxoroning tarixiy me’morchiligi"],
    ["Крепостные стены и архитектура Хивы", "Khiva’s fortress walls and architecture", "Xivaning qal’a devorlari va me’morchiligi"],
    ["Горное озеро и снежные вершины Узбекистана", "Mountain lake and snowy peaks in Uzbekistan", "O‘zbekistonning tog‘ ko‘li va qorli cho‘qqilari"],
    ["Вид на старинные здания Бухары с террасы", "View of Bukhara’s historic buildings from a terrace", "Terasadan ko‘rinadigan Buxoroning qadimiy binolari"],
    ["Путешественница среди исторической архитектуры Самарканда", "Traveller among Samarkand’s historic architecture", "Samarqandning tarixiy me’morchiligi orasidagi sayohatchi"],
    ["Бирюзовая мозаика восточной архитектуры", "Turquoise mosaic in Eastern architecture", "Sharq me’morchiligidagi feruza mozaika"],
    ["Бирюзовая мозаика исторической архитектуры Узбекистана", "Turquoise mosaic in historic Uzbek architecture", "O‘zbekiston tarixiy me’morchiligidagi feruza mozaika"],
    ["Панорама древнего города Хива", "Panorama of the ancient city of Khiva", "Qadimiy Xiva shahri panoramasi"],
    ["Самолёт в иллюминаторе на закате", "Airplane window at sunset", "Quyosh botishida samolyot illyuminatori"],
    ["Фотоаппарат и путевые заметки у озера", "Camera and travel notes by a lake", "Ko‘l bo‘yidagi fotoapparat va sayohat qaydlari"],
    ["Самолёт над пальмами в небе", "Airplane above palm trees", "Palma daraxtlari ustidan uchayotgan samolyot"],
    ["Воздушные шары над долиной на рассвете", "Hot-air balloons over a valley at dawn", "Tongda vodiy uzra uchayotgan havo sharlari"],
    ["Карта проезда к Dream Compass на набережной Анхора, 2 в Ташкенте", "Directions to Dream Compass at 2 Anhor Embankment in Tashkent", "Toshkent, Anhor bo‘yi 2 manzilidagi Dream Compass ofisiga yo‘l xaritasi"],
    ["Контакты — Dream Compass", "Contact — Dream Compass", "Aloqa — Dream Compass"], ["О нас — Dream Compass", "About us — Dream Compass", "Biz haqimizda — Dream Compass"],
    ["Туры по всему миру — Dream Compass", "Worldwide tours — Dream Compass", "Dunyo bo‘ylab sayohatlar — Dream Compass"], ["Туры по Узбекистану — Dream Compass", "Uzbekistan tours — Dream Compass", "O‘zbekiston bo‘ylab sayohatlar — Dream Compass"],
    ["Контакты Dream Compass: адрес офиса в Ташкенте, телефоны, график работы и карта проезда.", "Contact Dream Compass: Tashkent office address, phone numbers, opening hours and directions.", "Dream Compass aloqa ma’lumotlari: Toshkentdagi ofis manzili, telefonlar, ish vaqti va yo‘l xaritasi."],
    ["Dream Compass — международные путешествия и туры по Узбекистану. Подбор поездки с учётом ваших пожеланий.", "Dream Compass offers international trips and tours around Uzbekistan, tailored to your preferences.", "Dream Compass — xalqaro sayohatlar va O‘zbekiston bo‘ylab turlar. Safarlar istaklaringizga mos tanlanadi."],
    ["Набережная Анхора, 2 · Ташкент", "2 Anhor Embankment · Tashkent", "Anhor bo‘yi, 2 · Toshkent"]
  ];

  const dictionaries = { ru: {}, uz: {}, en: {} };
  for (const [ru, en, uz] of rows) { dictionaries.ru[ru] = ru; dictionaries.en[ru] = en; dictionaries.uz[ru] = uz; }
  // Keep proper nouns and symbols readable if a source string is not listed above.
  const langStorageKey = 'dreamCompassLanguage';
  let currentLang = 'ru';
  try { const saved = localStorage.getItem(langStorageKey); if (['ru','uz','en'].includes(saved)) currentLang = saved; } catch (_) {}
  const textOriginals = new WeakMap();
  const attrOriginals = new WeakMap();
  const t = (source) => (dictionaries[currentLang] && dictionaries[currentLang][source] !== undefined) ? dictionaries[currentLang][source] : source;
  const translateTextNodes = (root=document.body) => {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || parent.closest('script,style,noscript,textarea,select,option,[data-i18n-source],[data-lang],[data-dc-manual-translation]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes=[]; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue);
      const original = textOriginals.get(node); const trimmed = original.trim(); const translated = t(trimmed);
      const start = original.indexOf(trimmed); node.nodeValue = original.slice(0,start) + translated + original.slice(start+trimmed.length);
    });
  };
  const translateAttributes = (root=document) => {
    const attrs = ['placeholder','aria-label','title','alt'];
    root.querySelectorAll('[placeholder],[aria-label],[title],[alt]').forEach(el => {
      attrs.forEach(attr => {
        if (!el.hasAttribute(attr)) return;
        let map = attrOriginals.get(el); if (!map) { map = {}; attrOriginals.set(el,map); }
        if (map[attr] === undefined) map[attr] = el.getAttribute(attr);
        el.setAttribute(attr, t(map[attr]));
      });
    });
    const title = document.querySelector('title');
    if (title) { if (title.dataset.dcOriginal === undefined) title.dataset.dcOriginal = title.textContent; title.textContent = t(title.dataset.dcOriginal); }
    const desc = document.querySelector('meta[name="description"]');
    if (desc) { if (desc.dataset.dcOriginal === undefined) desc.dataset.dcOriginal = desc.content; desc.content = t(desc.dataset.dcOriginal); }
  };
  const applyWorldHeroTitle = () => {
    const heroTitle = document.querySelector('[data-dc-world-hero]');
    if (!heroTitle) return;
    if (currentLang === 'uz') {
      // Keep the brand between the two parts of the Uzbek headline, as requested.
      heroTitle.innerHTML = '<span class="hero-title-line hero-uz-brand-line"><em>Dream Compass</em> bilan birga</span><span class="hero-title-line hero-uz-first-line">dunyoni o‘rganing</span>';
    } else if (currentLang === 'en') {
      heroTitle.innerHTML = '<span class="hero-title-line">Discover the world</span><span class="hero-title-line">with</span><em class="hero-title-line hero-brand-line">Dream Compass</em>';
    } else {
      heroTitle.innerHTML = '<span class="hero-title-line">Открой мир</span><span class="hero-title-line">вместе с</span><em class="hero-title-line hero-brand-line">Dream Compass</em>';
    }
  };
  const apply = () => {
    document.documentElement.lang = currentLang === 'uz' ? 'uz' : currentLang;
    applyWorldHeroTitle();
    translateTextNodes(document.body); translateAttributes(document);
    document.querySelectorAll('[data-i18n-source]').forEach(el => { el.textContent = t(el.dataset.i18nSource); });
    document.querySelectorAll('.language-code').forEach(el => el.textContent = currentLang.toUpperCase());
    document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === currentLang)));
  };
  const setLanguage = lang => {
    if (!['ru','uz','en'].includes(lang)) return;
    currentLang = lang;
    try { localStorage.setItem(langStorageKey, lang); } catch (_) {}
    apply();
    document.dispatchEvent(new CustomEvent('dc:languagechange', { detail: { lang } }));
  };
  window.DC_I18N = { t, apply, setLanguage, get lang(){ return currentLang; } };
  document.addEventListener('DOMContentLoaded', () => {
    // Translate after the shared script has built its custom form controls.
    apply();
    document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
      const wrap = button.closest('.language');
      setLanguage(button.dataset.lang);
      wrap?.classList.remove('open');
      wrap?.querySelector('.language-current')?.setAttribute('aria-expanded','false');
    }));
  });
})();
