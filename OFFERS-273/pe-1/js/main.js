$(document).ready(function () {
    var clock = new FlipClock($('.timer'), 615, {
        countdown: true,
    });

    $(".go-form").on("touchend, click", function (e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: $('#order_form,.scrollform').offset().top}, 400);
    });

});