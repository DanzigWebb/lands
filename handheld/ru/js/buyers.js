// fixed panel
function fixedBuyers() {
  const panel = document.querySelector('.buyers')
  window.addEventListener('scroll', (e) => {
    document.documentElement.scrollTop > 500 ? panel.classList.add('active') : panel.classList.remove('active')
  })
}
fixedBuyers()


function metaBuyers() {

  // проверка на первое пощесение
  if (!localStorage.getItem('lands-meta')) {
    let meta = {
      buyers: 87,
      visits: 2130,
      now: 34
    }
    localStorage.setItem('lands-meta', JSON.stringify(meta))
  }

  const metaElems = document.querySelectorAll('.buyers__meta');
  function SetMetaData() {
    let data = JSON.parse(localStorage.getItem('lands-meta'))
    metaElems[0].innerHTML = data.visits;
    metaElems[1].innerHTML = data.now;
    metaElems[2].innerHTML = data.buyers;
  }
  SetMetaData()

  function updateShop() {
    const comment = document.querySelector('.buyers__comment')
    let interval = random(10, 25) * 1000

    // посетители
    setInterval(() => {
      updateVisits()
      SetMetaData()
    }, random(4,20) * 1000);

    // посетители сейчас
    setInterval(() => {
      updateNowVisits()
      SetMetaData()
    }, random(5,15) * 1000);

    // новые покупки
    setInterval(() => {
      setNewBuyers()
      commentsShow()
      SetMetaData()
    }, interval);
    // уведомление о покупке
    function commentsShow() {
      comment.classList.add('active')
      setTimeout(() => {
        comment.classList.remove('active')
      }, 3500);
    };
  }
  // служебные функции
  //
  // рандомайзер
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // обновление кол-во покупок
  function setNewBuyers() {
    let data = JSON.parse(localStorage.getItem('lands-meta'))
    data.buyers = data.buyers + 1
    localStorage.setItem('lands-meta', JSON.stringify(data))
  }
  // обновление посетителей
  function updateVisits () {
    let data = JSON.parse(localStorage.getItem('lands-meta'))
    data.visits = data.visits += random(4, 20)
    localStorage.setItem('lands-meta', JSON.stringify(data))
  }
  // обновление "сейчас на сайте"
  function updateNowVisits () {
    let data = JSON.parse(localStorage.getItem('lands-meta'))
    data.now = data.now += random(-5, 5)
    localStorage.setItem('lands-meta', JSON.stringify(data))
  }

  setTimeout(() => {
    updateShop()
  }, 1000);
}
metaBuyers()

// ========================>
// review modal
// <=======================
const reviewModal = function () {
  const btn = document.querySelector('#modal-btn');
  const modal = document.querySelector('.rev-modal');
  const overlay = document.querySelector('.rev-modal--overlay')
  const fileInput = document.querySelector('#rev-file')
  const close = modal.querySelector('.close')

  btn.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
  })
  close.addEventListener('click', () => {
    closeModal(modal)
    closeModal(overlay)
  });
  overlay.addEventListener('click', () => {
    closeModal(modal)
    closeModal(overlay)
  });
  fileInput.addEventListener('change', () => {
    if (fileInput.value) {
      document.querySelector('.input-file span').innerHTML = fileInput.value.split('\\').pop()
    }
  })
  const modalForm = document.querySelector('.rev-modal__form')
  modalForm.addEventListener('submit', e => {
    e.preventDefault()
    closeModal(modal)
    closeModal(overlay)
    succesInit()
  })
  // succes
  const succes = document.querySelector('.rev-succes')
  function succesInit() {
    succes.classList.add('active')
    setTimeout(() => {
      succes.classList.remove('active')
    }, 3000);
  };

  function closeModal(elem) {
    elem.classList.add('before-close')
    setTimeout(() => {
      elem.classList.remove('active')
      elem.classList.remove('before-close')
    }, 400);
  }
}

reviewModal()