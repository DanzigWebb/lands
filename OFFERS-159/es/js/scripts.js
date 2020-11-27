$(document).ready(function() {

    /* scroll */

    $("a[href^='#order_form']").click(function() {
        var target = $(this).attr("href");
        var product = $(this).parent().parent().find("h4 span").text();
        $(".order_form select[name='comment'] option[value='" + product + "']").prop("selected", true);
        $("html, body").animate({
            scrollTop: $(target).offset().top + "px"
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


});