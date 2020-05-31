<?php

include_once './lib/cURL.php';

define('TOKEN', '5798ac6061c17003610065518'); // Токен вебмастера
define('CAMPAIGN_HASH', 'fdf'); // Хеш потока

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $ip = $_SERVER['REMOTE_ADDR'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $userAgent = $_SERVER['HTTP_USER_AGENT'];
    $utm_source = $_POST['utm_source'];
    $utm_content = $_POST['utm_content'];
    $utm_campaign = $_POST['utm_campaign'];
    $utm_term = $_POST['utm_term'];
    $utm_medium = $_POST['utm_medium'];
    $subid = $_POST['subid']; //в статистике ПП этот параметр не отображается, но возвращется в постбеке
    $subid1 = $_POST['subid1'];
    $subid2 = $_POST['subid2'];
    $subid3 = $_POST['subid3'];
    $country_call = 'sfd'; //страна для обзвона

    $data = [
        'campaignHash' => CAMPAIGN_HASH,
        'ip' => $ip,
        'name' => $name,
        'phone' => $phone,
        'userAgent' => $userAgent,
        'country_call' => $country_call
    ];

    $curl = new cURL;
    $response = $curl->post('https://lucky.online/api-webmaster/lead.html?subid1=' . $subid1 . '&subid2=' . $subid2 . '&subid3=' . $subid3 . '&subid=' . $subid .'&utm_source=' . $utm_source . '&utm_content=' . $utm_content . '&utm_campaign=' . $utm_campaign . '&utm_term=' . $utm_term . '&utm_medium=' . $utm_medium . '&api_key=' . TOKEN,
        $data);

    $body = json_decode($response->body);

    if ($body->success) {
        header('Location: ' . 'confirm.html');
        exit();
    } else {
        var_dump($body);
        exit();
    }
}

