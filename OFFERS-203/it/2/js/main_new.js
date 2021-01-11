var b1 = $("#b1");
var b2 = $("#b2");
var b3 = $("#b3");
var b4 = $("#b4");
var b5 = $("#b5");
var b6 = $("#b6");
var b7 = $("#b7");


var b1isHide = false;
var b2isHide = true;
var b3isHide = true;
var b4isHide = true;
var b5isHide = true;
var b6isHide = true;
var b7afterForm = true;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var c = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearTimeout(c)
        }
    }, 1000);

}

$(b1).show()
$('.s0').addClass('martop')
setTimeout(function () {
    $('.s0').removeClass('martop')
    $(b1).slideUp(200);
}, 5000);
$(window).scroll(function () {
    var scrollPos = $(window).scrollTop()

    if (scrollPos >= $('#secondB2').offset().top && b2isHide == true) {
        b2isHide = false
        $(b1).hide()
        $(b2).show()
        setTimeout(function () {
            $(b2).slideUp(200)
        }, 5000)
    }
    if (scrollPos >= $('#B3').offset().top && b3isHide == true) {
        b3isHide = false
        $(b1).hide()
        $(b2).hide()
        $(b3).show()
        setTimeout(function () {
            $(b3).slideUp(200)
        }, 5000)
    }
    if (scrollPos >= $('#B4').offset().top && b4isHide == true) {
        b4isHide = false
        $(b1).hide()
        $(b2).hide()
        $(b3).hide()
        $(b4).show()
        setTimeout(function () {
            $(b4).slideUp(200)
        }, 5000)
    }
    if (scrollPos >= $('#B5').offset().top && b5isHide == true) {
        b5isHide = false
        $(b1).hide()
        $(b2).hide()
        $(b3).hide()
        $(b4).hide()
        $(b5).show()
        setTimeout(function () {
            $(b5).slideUp(200)
        }, 5000)
    }
    if ((scrollPos >= $('#B6').offset().top) && !(scrollPos <= $('#B6').offset().top) && b6isHide == true) {
        b6isHide = false
        $(b1).hide()
        $(b2).hide()
        $(b3).hide()
        $(b4).hide()
        $(b5).hide()
        $(b6).show()
        var fiveMinutes = 60 * 3,
            display = document.querySelector('.timeCounter');
        startTimer(fiveMinutes, display);

    }

})


function hideBanner(anh) {
    anh.fadeOut("slow");
}

function showBanner(anh) {
    anh.fadeIn("slow");
}

var hightDevice = document.documentElement.clientHeight;
var heightBody = document.body.offsetHeight;
var whenShowB2 = heightBody;
var whenShowB3 = heightBody;
var whenShowB4 = heightBody;
var whenShowB5 = heightBody;
var whenShowB6 = heightBody;


$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();

                if (target.selector == '#form')
                    form = 54;
                else
                    form = 0;

                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - form
                    },
                    1000,
                    function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    }
                );
            }
        }
    });

function showComments() {
    if ($(".opinion-box .comments button span").hasClass("active")) {
        $(".opinion-box .comments .content").fadeOut("slow");
        $(".opinion-box .comments button span").removeClass("active");
    } else {
        $(".opinion-box .comments .content").fadeIn("slow");
        $(".opinion-box .comments button span").addClass("active");
    }
}

function showNewComments() {
    if ($(".opinion-box .comments-new button span").hasClass("active")) {
        $(".opinion-box .comments-new .content").fadeOut("slow");
        $(".opinion-box .comments-new button span").removeClass("active");
    } else {
        $(".opinion-box .comments-new .content").fadeIn("slow");
        $(".opinion-box .comments-new button span").addClass("active");
    }
}

function ExpiryTime() {
    hideBanner(b6);
    if (b7afterForm)
        showBanner(b7);
}

function counterBanner() {
    showBanner(b6);
    $(document).ready(function () {
        if (typeof countdown !== 'undefined' && $.isFunction(countdown)) {
            $(".timeCounter").countdown({
                until: "+3min",
                compact: true,
                format: "MS",
                description: "",
                onExpiry: ExpiryTime
            });
        }
    });
}

$(document).ready(function () {
    $(".slide").css("width", $(window).width() - 4 * 8 - 24);

    var incSlideCount = $("#incSlider ul li").length;
    var incSlideWidth = $("#incSlider ul li").width();
    var incSliderUlWidth = incSlideCount * incSlideWidth;

    function moveLeftInc() {
        $("#incSlider ul").animate(
            {
                left: +incSlideWidth
            },
            500,
            function () {
                $("#incSlider ul li:last-child").prependTo("#incSlider ul");
                $("#incSlider ul").css("left", "");
            }
        );
    }

    function moveRightInc() {
        $("#incSlider ul").animate(
            {
                left: -incSlideWidth
            },
            500,
            function () {
                $("#incSlider ul li:first-child").appendTo("#incSlider ul");
                $("#incSlider ul").css("left", "");
            }
        );
    }

    $("#incSlider ul").css({
        width: incSliderUlWidth,
        marginLeft: -incSlideWidth
    });

    $("#incSlider ul li:last-child").prependTo("#incSlider ul");


    $("#incSlider a.slide-back").click(function () {
        moveLeftInc();
    });

    $("#incSlider a.slide-next").click(function () {
        moveRightInc();
    });

    if (navigator.msMaxTouchPoints) {
        $('#incSlider').addClass('touchSlider');
        $('#incSlider').on('scroll', function () {
            $('#incSlider ul li').css('transform', 'translate3d(-' + (100 - $(this).scrollLeft() / 6) + 'px,0,0)');
        });
    } else {
        var slider = {
            el: {
                slider: $("#incSlider"),
                holder: $("#incSlider ul"),
                boxSlide: $("#incSlider ul li:last-child")
            },
            incSlideWidth: $("#incSlider ul li").width(),
            touchstartx: undefined,
            touchstarty: undefined,
            touchmovex: undefined,
            touchmovey: undefined,
            movex: undefined,
            index: 0,
            upMargin: 25,
            difference: undefined,
            differenceY: undefined,
            longTouch: undefined,
            allowTest: undefined,
            scrollOnSides: undefined,
            init: function () {
                this.bindUiEvents();
            },
            bindUiEvents: function () {
                this.el.holder.on("touchstart", function (event) {
                    slider.start(event);
                });
                this.el.holder.on("touchmove", function (event) {
                    slider.move(event);
                });
                this.el.holder.on("touchend", function (event) {
                    slider.end(event);
                });
            },
            start: function (event) {
                this.longTouch = false;
                setTimeout(function () {
                    this.longTouch = true;
                }, 250);
                this.touchstartx = event.originalEvent.touches[0].pageX;
                this.touchstarty = event.originalEvent.touches[0].pageY;
                this.allowTest = true;
            },
            move: function (event) {
                this.touchmovex = event.originalEvent.touches[0].pageX;
                this.touchmovey = event.originalEvent.touches[0].pageY;
                this.differenceY = this.positive(this.touchmovey - this.touchstarty);
                this.difference = this.positive(this.touchmovex - this.touchstartx);
                this.movieTest();
                if (this.scrollOnSides && this.difference > 40) {
                    this.slider(this.touchmovex - this.touchstartx);
                }
            },
            end: function (event) {
                if (this.difference > 80 && this.scrollOnSides) {
                    if (this.touchstartx < this.touchmovex) {
                        this.left();
                    } else if (this.touchstartx > this.touchmovex) {
                        this.right();
                    }
                } else {
                    this.reversion()
                }
                this.reset();
            },
            left: function () {
                this.el.holder.animate({
                        left: +this.incSlideWidth
                    },
                    500,
                    function () {
                        $("#incSlider ul li:last-child").prependTo("#incSlider ul");
                        $("#incSlider ul").css("left", "");
                    });
            },
            right: function () {
                this.el.holder.animate(
                    {
                        left: -this.incSlideWidth
                    },
                    500,
                    function () {
                        $("#incSlider ul li:first-child").appendTo("#incSlider ul");
                        $("#incSlider ul").css("left", "");
                    }
                );
            },
            slider: function (event) {
                if (event < 0 && (-1) * this.incSlideWidth > event) event = -this.incSlideWidth;
                else if (event > 0 && event > this.incSlideWidth) event = this.incSlideWidth;
                this.el.holder.animate({
                    left: event
                }, 1);
            },
            reset: function () {
                this.touchstartx = undefined;
                this.touchmovex = undefined;
            },
            reversion: function () {
                this.el.holder.animate({
                    left: 0
                }, 500);
            },
            positive: function (elem) {
                if (elem < 0) elem *= (-1);
                return elem;
            },
            movieTest: function () {
                if (this.allowTest) {
                    if (this.differenceY > 10) {
                        this.allowTest = false;
                        this.scrollOnSides = false;
                    } else if (this.difference > 10) {
                        this.allowTest = false;
                        this.scrollOnSides = true;
                    }
                }
            }
        };
        slider.init();
    }


    // $('.button').on('click', function (event) {
    //     if ($('#name2').val() != '' && $('#phone2').val() != '' && $('#phone2').val().length >= 12 && $('#phone2').val().length <= 13) {
    //         $('#step1').fadeOut();
    //         $('header').fadeOut();
    //         $('.content').fadeOut(0);
    //         $('footer').fadeOut(0);
    //         $('.s0').fadeOut(0);
    //         $("#b6").fadeOut(0);
    //         $('.foot-btn-bl').hide()
    //         $('#step2').fadeIn();
    //         window.scrollTo(0, 0)
    //     } else {
    //         if ($('#name2').val() == '') {
    //             $('#name2').addClass('form__input_error');
    //         } else {
    //             $('#name2').removeClass('form__input_error');
    //         }
    //         if ($('#phone2').val() == '' || $('#phone2').val().length < 12 || $('#phone2').val().length > 13) {
    //             $('#phone2').addClass('form__input_error');
    //             $('#phone_error').show();
    //         } else {
    //             $('#phone2').removeClass('form__input_error');
    //             $('#phone_error').hide();
    //         }
    //     }
    //
    // })
    $('.btn').on('click', function () {
        $('html, body').animate({
            scrollTop: $(".prod-bl-2").offset().top
        }, 1000);
    });
});