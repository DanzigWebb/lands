var app = new Vue({
  el: '#app',

  data: {
    activeSection: 2
  },

  updated() {
    galleryThumbs.update()
    galleryTop.update()
  },
})