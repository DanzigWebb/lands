var app = new Vue({
  el: '#app',
  data: {
    polls: 7,
    active: 1
  },
  methods: {
    nextPoll() {
      this.active ++
    }
  },
  mounted() {
    toggleCheck()
    multiCheck()
  },
  updated() {
    if (this.active > this.polls) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    } else {
      window.scrollTo({
        top: 100,
        behavior: "smooth"
      })
    }

    setTimeout(() => {
      toggleCheck()
      multiCheck()
    }, 444);

  }
})


