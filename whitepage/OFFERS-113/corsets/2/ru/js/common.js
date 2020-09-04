window.onload = function () {
  counter()
  initMobMenu()
}


function counter() {
  const counterRef = document.querySelector('.quatity');
  const number = counterRef.querySelector('.number');
  const basketNum = document.querySelector('.header__basket span')

  counterRef.addEventListener('click', ({ target }) => {
    if (target.matches('.plus')) {
      plus()
    }
    if (target.matches('.minus')) {
      minus()
    }
  })

  function plus() {
    const num = +number.textContent;
    number.textContent = num + 1;
    basketNum.textContent = `(${num + 1})`;
  }

  function minus() {
    const num = +number.textContent;
    if (num) {
      number.textContent = num - 1;
      basketNum.textContent = `(${num - 1})`;
    }
  }
}

function createMenu() {
  let overlay;
  const nav = document.querySelector('.header__nav');

  const close = () => {
    nav.classList.remove('active')
    overlay.remove()
  }

  const open = () => {
    nav.classList.add('active')
    overlay = createOverlay()
  }

  const toggle = () => {
    nav.matches('active') ? close() : open()
  }

  const createOverlay = () => {
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    overlay.addEventListener('click', () => close(), {once: true})
    document.body.append(overlay)
    return overlay
  }

  return {
    close, open, toggle
  }
}

function initMobMenu() {
  const menu = createMenu()
  const btn = document.querySelector('.header__mob');
  btn.addEventListener('click', () => menu.toggle());
}