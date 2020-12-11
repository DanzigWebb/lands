"use strict";
function Timer(e) {
  (this.hour = document.querySelectorAll("".concat(e.hour))),
    (this.min = document.querySelectorAll("".concat(e.min))),
    (this.sec = document.querySelectorAll("".concat(e.sec))),
    (this.separation = e.separation),
    (Timer.prototype.start = function () {
      var s = this;
      setInterval(function () {
        var e, n, t, o, a, r, i;
        (e = new Date()),
          (n = e.getTimezoneOffset()),
          (t = Math.floor(e / 1e3 - 60 * n)),
          (o = 60 * Math.ceil((e / 1e3 / 60 - n) / 60 / 24) * 60 * 24 - t),
          (a = ("0" + ~~(o / 60 / 60)).slice(-2)),
          (r = ("0" + ~~((o / 60) % 60)).slice(-2)),
          (i = ("0" + ~~(o % 60)).slice(-2)),
          s.separation
            ? (function () {
                for (var e = 0; e < s.min.length; e++)
                  (s.hour[e].innerHTML = "<span>"
                    .concat(a[0], "</span><span>")
                    .concat(a[1], "</span>")),
                    (s.min[e].innerHTML = "<span>"
                      .concat(r[0], "</span><span>")
                      .concat(r[1], "</span>")),
                    (s.sec[e].innerHTML = "<span>"
                      .concat(i[0], "</span><span>")
                      .concat(i[1], "</span>"));
              })()
            : (function () {
                for (var e = 0; e < s.min.length; e++)
                  (s.hour[e].innerHTML = a),
                    (s.min[e].innerHTML = r),
                    (s.sec[e].innerHTML = i);
              })();
      }, 1e3);
    });
}

$( document ).ready(function() {
  var timer = new Timer({
    hour: ".t-hour",
    min: ".t-min",
    sec: ".t-sec",
    separation: !1,
  }).start(),
  swiper = new Swiper(".swiper-container", {
    loop: !0,
    autoHeight: true,
    spaceBetween: 60,
    autoplay: { delay: 3000, disableOnInteraction: !1 },
    pagination: { el: ".swiper-pagination", type: "fraction" },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })


});

var  menuToggle = $(".toggleMenu"), navMenu = $(".menu");

function easeInOutQuart(e) {
  var n = e - 1;
  return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * n * n * n * n;
}
function smoothScroll(e, n, a) {
  var r = $(window).scrollTop(),
    i = n - r,
    s = null;
  window.requestAnimationFrame(function e(n) {
    s || (s = n);
    var t = n - s,
      o = easeInOutQuart(t / a) * i + r;
    window.scrollTo(0, o), t < a && window.requestAnimationFrame(e);
  });
}
$(document).on("click touch", function (e) {
  e.stopPropagation(),
    navMenu.get(0).is !== e.target &&
      (navMenu.hide(),
      menuToggle.removeClass("toggled"),
      $("body, html").removeClass("menuOpened"));
}),
  $(menuToggle).on("click touch", function (e) {
    e.preventDefault(),
      e.stopPropagation(),
      menuToggle.toggleClass("toggled"),
      navMenu.toggle(),
      $("body, html").toggleClass("menuOpened");
  }),
  $(document).on("click", 'a[href^="#"]', function (e) {
    var n = $(this).attr("href"),
      t = $(n);
    if (0 !== t.length) {
      e.preventDefault(), navMenu.hide(), menuToggle.removeClass("toggled");
      t.offset().top;
      smoothScroll(
        $(window),
        $($(e.currentTarget).attr("href")).offset().top,
        600
      );
    }
  });
