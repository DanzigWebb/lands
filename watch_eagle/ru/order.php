<?php

if (!empty($_POST['name']) && !empty($_POST['phone'])) {

    $params = array(
        'ref'     => '34', //ID-вебмастера в системе
        'api_key'    => '3eca310d0010050ac5c359e8d8485c13', //API-ключ из профиля вебмастера
        'product_id'    => '999', // ID товара в системе M1-shop
        'name'       => $_POST['name'],
        'phone'      => $_POST['phone'],
        'address'    => $_POST['address'],
        'referrer'   => isset($_SERVER["HTTP_REFERER"]) ? $_SERVER["HTTP_REFERER"] : "",
        'ip'         => isset($_SERVER["REMOTE_ADDR"]) ? $_SERVER["REMOTE_ADDR"] : "",
        's'       => '23gg', //взять из задачи
        'w'       => $_POST['sub2'],
        't'       => $_POST['sub3']
    );

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'http://m1-shop.ru/send_order/');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
    $result = curl_exec($ch);

    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    curl_close($ch);

    if ($http_code == 200) {

        // Success
        header('Location: ' . 'confirm.html');
        exit;
    } else {

        //закомментить для дебага

        header('Location: ' . 'confirm.html');
        exit;

        //раскомментить для дебага

        //$result = json_decode($result);
        //echo $result->error;
        //exit;

    }
}
