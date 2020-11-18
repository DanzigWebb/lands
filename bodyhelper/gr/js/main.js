"use strict";
function _instanceof(e, n) {
  return null != n && "undefined" != typeof Symbol && n[Symbol.hasInstance]
    ? !!n[Symbol.hasInstance](e)
    : e instanceof n;
}
function _classCallCheck(e, n) {
  if (!_instanceof(e, n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, n) {
  for (var t = 0; t < n.length; t++) {
    var a = n[t];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function _createClass(e, n, t) {
  return (
    n && _defineProperties(e.prototype, n), t && _defineProperties(e, t), e
  );
}
var minTimer = (function () {
    function n(e) {
      _classCallCheck(this, n),
        (this.hour = document.querySelectorAll("".concat(e.hour))),
        (this.min = document.querySelectorAll("".concat(e.min))),
        (this.sec = document.querySelectorAll("".concat(e.sec))),
        (this.separation = e.separation);
    }
    return (
      _createClass(n, [
        {
          key: "start",
          value: function () {
            var o = this;
            setInterval(function () {
              var e, n, t, a, r, i, s;
              (e = new Date()),
                (n = e.getTimezoneOffset()),
                (t = Math.floor(e / 1e3 - 60 * n)),
                (a =
                  60 * Math.ceil((e / 1e3 / 60 - n) / 60 / 24) * 60 * 24 - t),
                (r = ("0" + ~~(a / 60 / 60)).slice(-2)),
                (i = ("0" + ~~((a / 60) % 60)).slice(-2)),
                (s = ("0" + ~~(a % 60)).slice(-2)),
                o.separation
                  ? (function () {
                      for (var e = 0; e < o.min.length; e++)
                        (o.hour[e].innerHTML = "<span>"
                          .concat(r[0], "</span><span>")
                          .concat(r[1], "</span>")),
                          (o.min[e].innerHTML = "<span>"
                            .concat(i[0], "</span><span>")
                            .concat(i[1], "</span>")),
                          (o.sec[e].innerHTML = "<span>"
                            .concat(s[0], "</span><span>")
                            .concat(s[1], "</span>"));
                    })()
                  : (function () {
                      for (var e = 0; e < o.min.length; e++)
                        (o.hour[e].innerHTML = r),
                          (o.min[e].innerHTML = i),
                          (o.sec[e].innerHTML = s);
                    })();
            }, 1e3);
          },
        },
      ]),
      n
    );
  })(),
  timer = new minTimer({
    hour: ".t-hour",
    min: ".t-min",
    sec: ".t-sec",
    separation: !0,
  }).start();
$(".befaf__slider").slick({ arrows: !1, dots: !0 }),
  $(".cta__slider").slick({ arrows: !1, dots: !0 }),
  $(".reviews__slider").slick({ arrows: !1, dots: !0, adaptiveHeight: !0 }),
  $(document).on("click", 'a[href^="#"]', function (e) {
    var n = $(this).attr("href"),
      t = $(n);
    if (0 !== t.length) {
      e.preventDefault();
      var a = t.offset().top;
      $("body, html").animate({ scrollTop: a });
    }
  });
