window.onload = function () {
  initDateComments()
  autoImage()
 // navbar()
  setAva()
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

//function navbar() {
//  const btn = document.querySelector('.header__mob');
//  const navbarRef = document.querySelector('.navbar');
//  const overlay = document.querySelector('.overlay')
//
//  btn.addEventListener('click', () => {
//
//
//    (navbarRef.matches('.active'))
//      ? hide()
//      : show()
//  })
//
//
//  function show() {
//    overlay.classList.add('active')
//    navbarRef.classList.add('active')
//    overlay.addEventListener('click', () => hide(), { once: true })
//  }
//
//  function hide() {
//    overlay.classList.remove('active')
//    navbarRef.classList.remove('active')
//  }
//
//}

function setAva() {
  const commentsAva = document.querySelectorAll('.comment__head .user img')
  commentsAva.forEach((ava, index) => {
    ava.setAttribute('src', `img/ava${index + 1}.png`)
  })
}