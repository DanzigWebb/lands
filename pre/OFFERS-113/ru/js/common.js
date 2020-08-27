window.onload = function () {
  navbar()
  newsItemsAutoHeight()
}


function navbar() {
  const btn = document.querySelector('.sidebar-trigger');
  const navbarRef = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay')

  btn.addEventListener('click', () => {
    (navbarRef.matches('.active'))
      ? hide()
      : show()
  })


  function show() {
    overlay.classList.add('active')
    navbarRef.classList.add('active')
    overlay.addEventListener('click', () => hide(), { once: true })
  }

  function hide() {
    overlay.classList.remove('active')
    navbarRef.classList.remove('active')
  }
}


function newsItemsAutoHeight() {
  const items = document.querySelectorAll('.news__item')
  const [first] = items

  setHeight()

  window.addEventListener('resize', setHeight)

  function setHeight() {
    items.forEach(item => item.style.height = first.offsetWidth + 'px')
  }
}