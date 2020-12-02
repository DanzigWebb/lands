// ========================>
// slider for reviews
// <=======================
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.btn__next',
    prevEl: '.btn__prev',
  },
  loop: true,
  autoHeight: true,
  spaceBetween: 40
});
// ========================>
// animation scroll
// <=======================
(function () {
  var linkNav = document.querySelectorAll('[href^="#"]'),
    V = .2;
  for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
      e.preventDefault();
      var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1');
      t = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
          r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash
        }
      }
    }, false);
  }
})();
// ========================>
// validate input
// <=======================
(function () {
  var input = document.querySelector('input[name="name"]');
  input.addEventListener('input', function () {
    input.value = input.value.replace(/[0-9]/g, '')
  })
})();

// ========================>
// timer
// <=======================
class minTimer {
  constructor(hour, min, sec) {
    this.hour = document.querySelectorAll(`.${hour}`);
    this.min = document.querySelectorAll(`.${min}`);
    this.sec = document.querySelectorAll(`.${sec}`);
  }
  start() {
    // время таймера
    let timerPar = {
      hour: 14,
      min: 45,
      sec: 4,
    }
    setInterval(() => {
      for (let i = 0; i < this.min.length; i++) {
        let hourString = ("0" + timerPar.hour).slice(-2)
        let minString = ("0" + timerPar.min).slice(-2)
        let secString = ("0" + timerPar.sec).slice(-2)
        this.hour[i].innerHTML = `<span>${hourString[0]}</span><span>${hourString[1]}</span>`
        this.min[i].innerHTML = `<span>${minString[0]}</span><span>${minString[1]}</span>`
        this.sec[i].innerHTML = `<span>${secString[0]}</span><span>${secString[1]}</span>`
      }
      timerPar.sec--;
      if (timerPar.sec == -1) {
        timerPar.sec = 59;
        timerPar.min--
      };
      if (timerPar.min == -1) {
        timerPar.min = 59;
        timerPar.hour--
      }
    }, 1000);
  }
}
const timer = new minTimer('t-hour', 't-min', 't-sec').start();



// ========================>
// pulse btn
// <=======================
// (function () {
//   var offer = document.getElementById('offer');
//   var btn = document.querySelector('.pulse__btn');
//   window.addEventListener('scroll', (e) => {
//     document.documentElement.scrollTop + 300 > offer.offsetTop ? btn.classList.add('show') : btn.classList.remove('show')
//   })
// })();