$(document).ready(function () {

	$('.feedback').click(function () {
		$('.popup-window').removeClass('hidden');
	});
	$('.close-popup').click(function () {
		$('.popup-window').addClass('hidden');
	});
	$('body').click(function (evt) {
		if ((!evt.target.closest('.popup-window')) && (!evt.target.closest('.feedback'))) {
			$('.popup-window').addClass('hidden');
		}
	});

	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	});

	/* sliders */

	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		nav: true,
		navText: ""
	});

	/* timer */

	function update() {
		var Now = new Date(),
			Finish = new Date();
		Finish.setHours(23);
		Finish.setMinutes(59);
		Finish.setSeconds(59);
		if (Now.getHours() === 23 && Now.getMinutes() === 59 && Now.getSeconds === 59) {
			Finish.setDate(Finish.getDate() + 1);
		}
		var sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor(sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor(sec / 60);
		sec -= min * 60;
		$(".timer .hours").html(pad(hrs));
		$(".timer .minutes").html(pad(min));
		$(".timer .seconds").html(pad(sec));
		setTimeout(update, 200);
	}

	function pad(s) {
		s = ("00" + s).substr(-2);
		return "<span><i>" + s[0] + "</i></span><span><i>" + s[1] + "</i></span>";
	}
	update();

});

(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(70865272, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});