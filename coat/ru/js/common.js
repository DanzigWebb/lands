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
  autoplay: true,
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

const collapse = function () {
  const btns = document.querySelectorAll('.sect2__item');
  const contents = document.querySelectorAll('.sect2__item-content');
  closedAll()
  contents[0].style.maxHeight = contents[0].scrollHeight + 'px'
  contents[0].classList.add('active')
  btns.forEach((items, i) => {
    items.addEventListener('click', () => {
      closedAll()
      items.classList.add('active')
      contents[i].style.maxHeight = contents[i].scrollHeight + 'px'
      contents[i].classList.add('active')
    })
  })
  function closedAll() {
    btns.forEach((el, i) => {
      el.classList.remove('active')
      contents[i].style.maxHeight = 0
      contents[i].classList.remove('active')
    })
  }
}
setInterval(() => {
  document.querySelector('#app').style.height = window.innerHeight + 'px'
}, 200);
