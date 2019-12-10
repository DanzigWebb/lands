var app = new Vue({
  el: '#app',

  data: {
    activeSection: 6,
    menuShow: false
  },

  updated() {
    galleryThumbs.update()
    galleryTop.update()
  },
})