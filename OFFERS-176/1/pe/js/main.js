document.addEventListener("DOMContentLoaded", function () {

    $('.preloader-background').delay(1200).fadeOut('slow');

    $('.preloader-wrapper')
        .delay(1500)
        .fadeOut();

});

$(document).ready(function () {


    $(window).easeScroll({
        frameRate: 120,
        animationTime: 1300,
        stepSize: 120,
        pulseAlgorithm: 1,
        pulseScale: 7,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });

    $('[data-goto]').on('click', function (e) {
        e.preventDefault();

        var that = $(this).data('goto');

        $("html, body").animate({scrollTop: $(that).offset().top - 150}, 1500).sideNav('hide');
        return false;
    });

    $('select').material_select();

    $(".button-collapse").sideNav();

    $('.parallax').parallax();

    $("img.lazy").lazyload({
        threshold: 200,
        effect: "fadeIn"
    });

    var count = $(".countBox").html(),
        speed = 7000,
        counterInfo = parseInt(count);

    setInterval(function () {
        if (counterInfo !== 8) {
            $(".countBox").html(counterInfo--);
        }
    }, speed)

});