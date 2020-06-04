 <?php
if (!empty($_POST['phone'])) {
    send_the_order ($_POST);
}
function send_the_order ($post){

    $params=array(
        'flow_hash' => 'S0lV', //хеш из трек-ссылки в задаче
        'landing' => $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'],
        'phone' => $post['phone'],
        'name' => $post['name'],
        'country' => 'VN', //код страны по ISO 3166
        'referrer' => isset($_SERVER["HTTP_REFERER"]) ? $_SERVER["HTTP_REFERER"] : "",
        'address' => $post['address'], //необязательно
        'email' => $post['email'], //необязательно
        'lastname' => $post['lastname'], //необязательно
        'comment' => $post['comment'], //необязательно
        'layer' => $post['layer'], //необязательно
        'sub1' => $post['sub1'], //необязательно
        'sub2' => $post['sub2'], //необязательно
        'sub3' => $post['sub3'], //необязательно
        'sub4' => $post['sub4'], //необязательно
        'sub5' => $post['sub5'], //необязательно
    );
    $url = 'http://leadbit.com/api/conversion/new-from-form';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
    curl_setopt($ch, CURLOPT_REFERER, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
    $return= curl_exec($ch);
    curl_close($ch);
    $array=json_decode($return, true);
    header('Location: confirm.html');
}

