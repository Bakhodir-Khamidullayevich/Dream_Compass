<?php
header('Content-Type: application/json; charset=utf-8');
$to = "Feyasar001@gmail.com"; // Подтвердите у агентства актуальный адрес для заявок перед публикацией.
$subject = "Новая заявка с сайта Dream Compass";
$name = trim($_POST['name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
if (mb_strlen($name) < 2 || mb_strlen($phone) < 7) { http_response_code(400); echo json_encode(["ok"=>false,"error"=>"invalid"]); exit; }
$fields = ["Имя"=>$name,"Телефон или мессенджер"=>$phone,"Направление"=>trim($_POST['destination'] ?? ''),"Планируемые даты"=>trim($_POST['dates'] ?? ''),"Путешественники"=>trim($_POST['travelers'] ?? ''),"Бюджет"=>trim($_POST['budget'] ?? ''),"Пожелания"=>trim($_POST['preferences'] ?? ''),"Источник"=>trim($_POST['source'] ?? 'Сайт Dream Compass'),"Дата заявки"=>date('Y-m-d H:i:s')];
$message = "Новая заявка с сайта Dream Compass\n\n"; foreach ($fields as $label=>$value) { $message .= $label . ': ' . ($value !== '' ? $value : 'Не указано') . "\n"; }
$host = preg_replace('/[^a-zA-Z0-9.-]/', '', $_SERVER['HTTP_HOST'] ?? 'localhost');
$headers = "From: Dream Compass <no-reply@" . ($host ?: 'localhost') . ">\r\n" . "Content-Type: text/plain; charset=UTF-8\r\n";
$sent = function_exists('mail') ? @mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, $headers) : false;
if (!$sent) { http_response_code(500); echo json_encode(["ok"=>false,"error"=>"mail_failed"]); exit; }
echo json_encode(["ok"=>true]);
?>