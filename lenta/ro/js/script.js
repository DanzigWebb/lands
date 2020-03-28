$(document).ready(function () {

    /* scroll */

    $("a[href^='#']").click(function () {
        var target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top + "px"
        });
        return false;
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
        $(".timer .hours").text(pad(hrs));
        $(".timer .minutes").text(pad(min));
        $(".timer .seconds").text(pad(sec));
        setTimeout(update, 200);
    }

    function pad(s) {
        return ('00' + s).substr(-2)
    }
    update();

    /* sliders */
    $('.your-class').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                }
               },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
               }
            ]

    });

    $(".reviews_list").owlCarousel({
        smartSpeed: 300,
        mouseDrag: false,
        pullDrag: false,
        dots: false,
        navText: "",
        responsive: {
            0: {
                items: 1,
                margin: 0,
                nav: true,
                loop: true
            },
            640: {
                items: 2,
                margin: 20,
                nav: true,
                loop: true
            },
            960: {
                items: 3,
                margin: 20,
                nav: false,
                loop: false
            }
        }
    });



});