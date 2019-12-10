var app = new Vue({
  el: '#app',

  data: {
    activeSection: 2,
    menuShow: false
  },

  updated() {
    galleryThumbs.update()
    galleryTop.update()
  },
})