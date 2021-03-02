function checkab() {
 if (typeof def_click == 'undefined') {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '#turn_advert { width: 100%; position: fixed; z-index: 999999; left: 0; top: 0; display: block; padding: 50px 0 50px 0; font: 225% Arial, sans-serif; line-height: normal; z-index: 9999; opacity: 0.9; background-color: #312e2e; color: #fff; text-align: center; -webkit-box-shadow: 8px 8px 30px 0 rgba(50, 50, 50, 0.8); -moz-box-shadow:    8px 8px 30px 0 rgba(50, 50, 50, 0.8); box-shadow: 8px 8px 30px 0 rgba(50, 50, 50, 0.8); text-shadow: #000 1px 4px 7px;} #ta_close {cursor: pointer; position: fixed; z-index: 999999; right: 30px; top: 10px; font: 128% Arial, sans-serif; color: #fff; text-shadow: #000 1px 4px 7px;} #ta_close:hover {font-weight: bold;}';
  document.getElementsByTagName("head")[0].appendChild(style);
  var adb = document.createElement('div');
  var adb_cl = document.createElement('div');
  adb_cl.id = 'ta_close';
  adb_cl.innerHTML = '&times;';
  adb.id = 'turn_advert';
  adb.classList.add('adblock');
  adb.innerHTML = 'Для корректного отображения сайта отключите, пожалуйста, <br>расширение AdBlock и перезагрузите страницу';
  document.getElementsByTagName("body")[0].appendChild(adb);
  document.getElementsByClassName('adblock')[0].appendChild(adb_cl);
  ta_close.onclick = function () {
   block = document.getElementById('turn_advert');
   block.parentNode.removeChild(block);
  }
 }
}
window.onload = function () {
 checkab();
}