var yandex = {
    "v22": 67199803,
    "v23": 67209259,
	"v24": 67772206,
	"v25": 67715269,
	"v26": 67758058,
	"v27": 67949689,
    "v28": 68260846,
    "v29": 68493829,
    "v30": 68440285,
    "v31": 68611543,
    "v32": 68727808,
    "v33": 69588103,
    "v34": 68722015,
    "v35": 69313861,
    "v36": 69314257,
	"v37": 70187620,
    "v38": 69268924,
    "v39": 69268936,
    "v40": 69564424,
    "v41": 71130814,
    "v42": 71192224,
    "v43": 71161303,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('es', '').replace('39', '').replace('prelp', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('es', '')
        .replace('39', '')
        .replace('confirm.html', '');

}
(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(yandex[site], "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});