var galleryThumbs = new Swiper('.gallery-thumbs', {
  // spaceBetween: 10,
  slidesPerView: 4,
  loop: false,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  autoplay: true
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop: true,
  // autoplay: true,
  loopedSlides: 5, //looped slides should be the same
  thumbs: {
    swiper: galleryThumbs,
  },
});

var galleryThumbs = new Swiper('.gallery-thumbs2', {
  // spaceBetween: 10,
  slidesPerView: 4,
  loop: false,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  autoplay: true
});
var galleryTop = new Swiper('.gallery-top2', {
  spaceBetween: 10,
  loop: true,
  // autoplay: true,
  loopedSlides: 5, //looped slides should be the same
  thumbs: {
    swiper: galleryThumbs,
  },
});
