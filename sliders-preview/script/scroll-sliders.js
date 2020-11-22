const config = {
  allSlides: 118
}

const wrapper = document.querySelector('.scroll-sliders')
createScrollSlides(wrapper)

function createScrollSlides(wrapper) {
  initSlides(wrapper)

  const images = wrapper.querySelectorAll('.scroll-sliders img')
  const allSlides = images.length
  hideAll()
  showOne(0)


  const getCurrentSlide = (percent) => {
    const current = Math.round(allSlides * (percent / 100))
    if (current > allSlides) {
      return allSlides
    }
    if (current < 0) {
      return 0
    }

    return current
  }

  $(window).scroll(function () {
    const scrollBehindWrapper = $(window).scrollTop() + ($(window).height() / 1.8) - $(wrapper).offset().top
    const isVisible = scrollBehindWrapper > 0

    if (isVisible) {
      let percentOfScroll = scrollBehindWrapper / wrapper.offsetHeight * 140

      const currentItem = getCurrentSlide(percentOfScroll)
      showItemByIndex(currentItem)

      console.log('currentItem: ', currentItem)
      console.log('precent: ', percentOfScroll)
    }
  })

  function showItemByIndex(index) {
    hideAll()
    const currentIndex = index >= allSlides - 1 ? allSlides - 1 : index
    showOne(currentIndex)
  }

  function hideAll() {
    images.forEach(img => img.hidden = true)
  }

  function showOne(index) {
    images[index].hidden = false
  }

  function hideOne(index) {
    images[index].hidden = true
  }

  function initSlides(wrapper) {
    let i = 1
    while (i <= config.allSlides) {
      wrapper.appendChild(createSlide(i + 2))
      i += 2
    }
  }

  function createSlide(index) {
    const currentIndex = `0000${index}`.slice(-4)
    const img = document.createElement('img')
    img.setAttribute('src', `./slides/${currentIndex}_result.png`)
    return img
  }

}
