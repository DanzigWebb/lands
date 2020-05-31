class Lander {
  constructor(options) {
    this.price = options.price
    this.meta = options.meta
    this.names = options.names
    this.commentDuration = options.commentDuration
  }
  init() {
    this.metaBuyers()
  }
  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  metaBuyers() {
    const self = this
    // проверка на первое посещение
    if (!localStorage.getItem('lands-meta')) {
      let meta = {
        buyers: 87,
        visits: 2130,
        now: 34,
        balance: 148,
        firstShowOnOffer: false
      }
      localStorage.setItem('lands-meta', JSON.stringify(meta))
    }

    const metaElems = document.querySelectorAll('.buyers__meta');
    const balanceElems = document.querySelectorAll('.buyers__balance');

    function SetMetaData() {
      let data = JSON.parse(localStorage.getItem('lands-meta'))
      metaElems[0].innerHTML = data.visits;
      metaElems[1].innerHTML = data.now;
      metaElems[2].innerHTML = data.buyers;
      balanceElems.forEach(el => {
        el.innerHTML = data.balance
      })
    }
    SetMetaData()

    function updateShop() {
      const comment = document.querySelector('.buyers__comment')
      const commentInnerText = comment.querySelector('p')

      function interval() {
        // посетители
        setInterval(() => {
          updateVisits()
          SetMetaData()
        }, self.random(10, 20) * 1000)
        // новые покупки
        setInterval(() => {
          commentsShow()
        }, self.random(30, 45) * 1000)
      }
      interval()

      const names = self.names
      const price = self.price

      // уведомление о покупке
      function commentsShow() {
        const random = self.random(0, names.length - 1)
        if (names.length > 1) {
          commentInnerText.innerHTML = `${names[random]}, сделал(a) заказ на сумму ${price}, 1 шт`;
          names.splice(random, 1)
          comment.classList.add('active')
          setTimeout(() => {
            comment.classList.remove('active')
          }, self.commentDuration * 1000);
          setNewBuyers()
          SetMetaData()
        }
      };
      // быстрое стартовое появление коммента
      setTimeout(() => {
        commentsShow()
      }, self.random(10, 15) * 1000);

      // покупка при скролле до формы
      const offer = document.querySelector('#offer')
      window.addEventListener('scroll', (e) => {
        let data = JSON.parse(localStorage.getItem('lands-meta'))
        if (!data.firstShowOnOffer) {
          if (document.documentElement.scrollTop + 300 > offer.offsetTop) {
            data.firstShowOnOffer = true
            localStorage.setItem('lands-meta', JSON.stringify(data))
            commentsShow()
          }
        }
      })
    }
    // служебные функции
    //
    // обновление кол-во покупок
    function setNewBuyers() {
      let data = JSON.parse(localStorage.getItem('lands-meta'))
      data.buyers = data.buyers + 1
      data.balance = data.balance - 1
      localStorage.setItem('lands-meta', JSON.stringify(data))
    }
    // обновление посетителей
    function updateVisits() {
      let data = JSON.parse(localStorage.getItem('lands-meta'));
      let random = self.random(-2, 2);
      data.now = data.now += random;
      if (random > 0) {
        data.visits = data.visits += random;
      }
      localStorage.setItem('lands-meta', JSON.stringify(data));
    };
    updateShop();
  }
}

const lander = new Lander({
  price: '49€',
  meta: {
    buyers: 87,
    visits: 2130,
    now: 34,
    balance: 148
  },
  names: [
    'Игорь, Санкт-Петербург',
    'Светлана, Иваново',
    'Иван, Новгород',
    'Наталья, Ставрополь',
    'Дмитрий, Нижневартовск',
    'Николай, Москва',
    'Евгения, Екатеринбург',
    'Денис, Владивосток',
    'Петр, Рязань',
    'Сергей, Санкт-Петербург',
    'Анна, Выборг',
  ],
  commentDuration: 5
}).init()


// ========================>
// fixed panel
// <=======================
function fixedBuyers() {
  const panel = document.querySelector('.buyers')
  window.addEventListener('scroll', (e) => {
    document.documentElement.scrollTop > 500 ? panel.classList.add('active') : panel.classList.remove('active')
  })
}
fixedBuyers()
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
    }, 5000);
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