// ========================>
// slider for reviews
// <=======================
var swiper = new Swiper('.reviews__slider', {
  pagination: {
    el: '.reviews__pag',
    clickable: true,
  },
  // loop: true,
  autoHeight: true,
  spaceBetween: 40
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop:true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
lazyScroll();
validInput();



// ========================>
// validate input
// <=======================

function validInput() {
  var input = document.querySelector('input[name="name"]');
  input.addEventListener('input', function () {
    input.value = input.value.replace(/[0-9]/g, '');
  });
}
// ========================>
// animation scroll
// <=======================
function lazyScroll() {
  var linkNav = document.querySelectorAll('[href^="#"]'), V = .2;
  for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
      e.preventDefault();
      var w = window.pageYOffset, hash = this.href.replace(/[^#]*(.*)/, '$1');
      t = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null)
          start = time;
        var progress = time - start, r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        }
        else {
          location.hash = hash;
        }
      }
    }, false);
  }
  ;
}

