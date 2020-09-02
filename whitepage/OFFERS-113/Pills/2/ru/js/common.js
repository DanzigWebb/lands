window.onload = function () {
  counter()
  initNavbar()
}


function counter() {
  const counterRef = document.querySelector('.specials__item .controls');
  const number = counterRef.querySelector('.num');

  counterRef.addEventListener('click', ({ target }) => {
    if (target.matches('.plus')) {
      plus()
    }
    if (target.matches('.min')) {
      minus()
    }
  })

  function plus() {
    const num = +number.textContent;
    number.textContent = num + 1;
  }

  function minus() {
    const num = +number.textContent
    if (num - 1) {
      number.textContent = num - 1
    }
  }
}

class Navbar {
  constructor(selector, overlay) {
    this.ref = document.querySelector(selector)
    this.overlay = document.querySelector(overlay)
  }

  toggle() {
    this.ref.matches('active')
      ? this.close()
      : this.open()
  }

  open() {
    this.ref.classList.add('active')
    this.overlay.classList.add('active')
    this.overlay.addEventListener('click', () => this.close(), { once: true })
  }

  close() {
    this.ref.classList.remove('active')
    this.overlay.classList.remove('active')
  }
}

const navbar = new Navbar('.nav', '.overlay')

function initNavbar() {
  const btn = document.querySelector('.nav--mob button');
  btn.addEventListener('click', () => navbar.toggle())
}
