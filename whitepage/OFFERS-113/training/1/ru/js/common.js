window.onload = function () {
  newsItemsAutoHeight()
}

function newsItemsAutoHeight() {
  const items = document.querySelectorAll('.products__item')
  const [first] = items

  setHeight()

  window.addEventListener('resize', setHeight)

  function setHeight() {
    items.forEach(item => item.style.height = first.offsetWidth + 'px')
  }
}
function slider() {
  const items = document.querySelectorAll('.intro__item')
  const btnleft = document.querySelectorAll('.intro .left')
  const btnright = document.querySelectorAll('.intro .right')
  
}