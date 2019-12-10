var galleryThumbs = new Swiper('.gallery-thumbs', {
  // spaceBetween: 10,
  slidesPerView: 4,
  loop: false,
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

var swiper = new Swiper('.menu-carousel', {
  slidesPerView: 4,
  freeMode: true,
  slidesPerView: 'auto',
});


