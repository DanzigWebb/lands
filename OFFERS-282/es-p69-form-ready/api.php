<?php
$data = array(
    'name' => $_POST['name'],
    'phone' => $_POST['phone'],
    'px' => $_POST['px'],
    'geo' => 'ES',
    'ip' => $_SERVER['REMOTE_ADDR'],
    'flow_id' => '',
    'api_key' => '',
    'user_id' => '',
    'data1' => $_POST['subid'],
);
//var_dump($data);
$url = "http://bestshop-product.ru/order/api.php";
$post = curl_init();
curl_setopt_array($post, array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query($data)
));

$r = curl_exec($post);
if ($r === 0) {
  echo "Timeout!";
} else {
  $httpCode = curl_getinfo($post, CURLINFO_HTTP_CODE);
  $result = json_decode($r);
  if ($httpCode === 200 && $result->status_code == 200) {
      require_once('ths.php');
  } else if ($httpCode === 200 && $result->status_code == 409) {
      require_once('ths2.php');
  } else if ($httpCode === 400) {
    echo "Order data is invalid! Order is not accepted!";
  } else {
    echo
    "Unknown error happened! Order is not accepted! Check campaign_id, probably no landing exists for your campaign!";
  }
}

curl_close($post);