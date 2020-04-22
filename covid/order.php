
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($_POST['name']) && !empty($_POST['phone'])) {
        if (isset($_POST['name'])) {
            if (!empty($_POST['name'])) {
                $name = strip_tags($_POST['name']);
                $nameFieldset = "Имя: ";
            }
        }

        if (isset($_POST['phone'])) {
            if (!empty($_POST['phone'])) {
                $phone = strip_tags($_POST['phone']);
                $phoneFieldset = "Телефон: ";
            }
        }

        $token = '1044992558:AAHXOEJoBquHnQ04fB1154ekyXaNEpAbgKA';
        $chat_id = "693419291";

        $arr = array(
            $nameFieldset => $name,
            $phoneFieldset => $phone
        );
        foreach ($arr as $key => $value) {
            $txt .= "<b>" . $key . "</b> " . $value . "%0A";
        };
        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
        if ($sendToTelegram) {
            header("Location:http://www.example.com/");
            exit;
            return true;
        }
    }
}



?>