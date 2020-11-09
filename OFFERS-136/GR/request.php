<?php
$mail_to = 'gaphack000@gmail.com';


if(isset($_POST['what']))
{
    $sub = 'Новая заявка - ' . $_POST['what'];
}



if(isset($sub))
{
    $error = '';

    if(isset($_POST['name']))
    {
        $name = $_POST['name'];

        $n = 'Имя: ' . $name;
    }

    if(isset($_POST['phone']))
    {
        $phone = $_POST['phone'];

        $p = 'Телефон: ' . $phone;
    }


    if(strlen($error) == '')
    {
        $to      = $mail_to;
        $subject = $sub;
        $message = 'Тема: ' . $sub . "\r\n" .
            $n . "\r\n" .
            $p . "\r\n" . "\r\n";

        $email='no-reply@' . $_SERVER['HTTP_HOST']; // от кого
        $send = mail($mail_to,$sub,$message,"Content-type:text/plain; charset=utf-8\r\nFrom:$email");

//        header('location: thanks.html');
    }
}

?>
