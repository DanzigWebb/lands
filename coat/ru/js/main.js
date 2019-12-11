var app = new Vue({
  el: '#app',

  data: {
    activeSection: 1,
    menuShow: true
  },
  methods: {
    headerMenu() {
      const links = document.querySelectorAll('.header__link');
      links.forEach((link, i) => {
        link.addEventListener('click', () => {
          this.activeSection = i + 1;
        })
      })
    }
  },
  mounted() {
    this.headerMenu()
  },
  updated() {
    collapse()
    this.headerMenu()
    galleryThumbs.update()
    galleryTop.update()
  },
})