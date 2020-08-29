window.onload = function () {
  counter()
  timer()
}


function counter() {
  const counterRef = document.querySelector('.info_quantity_control');
  const number = counterRef.querySelector('.number');

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
  }

  function minus() {
    const num = +number.textContent;
    if (num) {
      number.textContent = num - 1;
    }
  }
}

function timer() {
  const items = document.querySelectorAll('.timer__item .num');

  const [hour, min, sec] = items;

  const data = {
    hour: +hour.textContent,
    min: +min.textContent,
    sec: +sec.textContent,
  }

  const interval = setInterval(() => {
    tick();
  }, 1000);

  function tick() {
    if (!data.sec) {
      data.min -= 1;
      data.sec = 59;
    } else {
      data.sec -= 1;
    }

    if (!data.min && !data.sec) {
      clearInterval(interval)
    }

    updateView();
  }

  const setTime = (num) => `0${num}`.slice(-2);

  function updateView() {
    hour.textContent = setTime(data.hour);
    min.textContent = setTime(data.min);
    sec.textContent = setTime(data.sec);
  }
}