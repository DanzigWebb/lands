// ========================>
// slider for reviews
// <=======================
// var swiper = new Swiper('.reviews__slider', {
//   pagination: {
//     el: '.reviews__pag',
//     clickable: true,
//   },
//   // loop: true,
//   autoHeight: true,
//   spaceBetween: 40
// });
var galleryThumbs = new Swiper('.gallery-thumbs', {
  // spaceBetween: 10,
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
  thumbs: {
    swiper: galleryThumbs,
  },
});

// validInput();



// ========================>
// validate input
// <=======================

function validInput() {
  var input = document.querySelector('input[name="name"]');
  input.addEventListener('input', function () {
    input.value = input.value.replace(/[0-9]/g, '');
  });
}


