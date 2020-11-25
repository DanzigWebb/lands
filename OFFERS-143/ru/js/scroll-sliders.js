const config = {
  allImages: 118
}
$("html").easeScroll({
  frameRate: 60,
  animationTime: 1000,
  stepSize: 120,
  pulseAlgorithm: 2,
  pulseScale: 8,
  pulseNormalize: 1,
  accelerationDelta: 20,
  accelerationMax: 1,
  keyboardSupport: true,
  arrowScroll: 80,
  touchpadSupport: true,
  fixedBackground: true
});


const wrapper = document.querySelector('.scroll-sliders')
createScrollSlides(wrapper)

function createScrollSlides(wrapper) {
  renderSlides(wrapper)

  const images = initImages()
  const allImages = images.images.length

  const getCurrentSlide = (percent) => {
    const current = Math.round(allImages * (percent / 100))
    if (current > allImages) {
      return allImages
    }
    if (current < 0) {
      return 0
    }

    return current
  }

  $(window).on('scroll', e => {
    const scrollBehindWrapper = $(window).scrollTop() + ($(window).height() / 1.8) - $(wrapper).offset().top
    const isVisible = scrollBehindWrapper > 0

    if (isVisible) {
      let percentOfScroll = scrollBehindWrapper / wrapper.offsetHeight * 140

      const currentItem = getCurrentSlide(percentOfScroll)
      images.showItemByIndex(currentItem)
    }
  })

  function initImages() {
    const images = wrapper.querySelectorAll('.scroll-sliders img')

    hideAll()
    showOne(0)

    function showItemByIndex(index) {
      hideAll()

      const currentIndex = index >= allImages - 1
        ? allImages - 1
        : index

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

    return {
      images,
      showItemByIndex,
      hideAll,
      showOne,
      hideOne
    }
  }
}

// генерация слайдов на страницы
function renderSlides(wrapper) {

  create()

  function create() {
    let i = 1
    while (i <= config.allImages) {
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

