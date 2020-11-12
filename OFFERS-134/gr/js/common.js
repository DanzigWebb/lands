window.onload = function () {
  initDateComments()
  autoImage()
  text()
}

function baner() {
  const baner = document.querySelector('.sidebar__baner');
  const btn = document.querySelector('.baner_btn');
  btn.addEventListener('click', () => {
    baner.classList.add('none')
  })
}

function initDateComments() {
  const getDay = (num) => {
    let now = new Date();
    let newDate = new Date(now.setDate(now.getDate() - num));
    return `${('0' + newDate.getDate()).slice(-2)}.${('0' + newDate.getMonth()).slice(-2)}.${newDate.getFullYear()}`
  }

  const commentsDate = document.querySelectorAll('.get-date');
  commentsDate.forEach(item => {
    item.innerHTML = getDay(item.getAttribute('data-day-delay'))
  })
}

function autoImage() {
  const images = document.querySelectorAll('.img img')
  images.forEach(img => {
    img.style.width = '100%'
    const width = img.naturalWidth || ' '
    img.parentNode.style.maxWidth = width + 'px'
  })
}

function navbar() {
  const btn = document.querySelector('.header__mob');
  const navbarRef = document.querySelector('.navbar');
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
function text() {
  const contents = document.querySelectorAll('.comment__text');
  const btns = document.querySelectorAll('.comment__btn');
  const mains = document.querySelectorAll('.text__bottom')
  contents.forEach((_, i) => initItem(i))

  function initItem(index) {

    const btn = btns[index]
    const content = contents[index]
    const main = mains[index]
    textareaHide(content, main)

    btn.addEventListener('click', () => {
      (main.matches('.active'))
        ? textareaHide(content, main)
        : textareaShow(content, main)
    })
  }

  function textareaShow(item,main) {
    main.classList.add('active')
    $(item).slideDown()
  }

  function textareaHide(item,main) {
    main.classList.remove('active')
    $(item).slideUp()
  }
}