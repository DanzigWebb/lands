calc()
function calc() {
  const loader$ = $('.loading')
  const results$ = $('.calculator__result')
  const scaleBtns$ = $('.calculator__scale button');

  const form$ = $('.calculator form')
  start()

  form$.on('submit', (e) => {
    e.preventDefault()

    form$.slideUp()
    loader$.slideDown()

    // получаем разницу между ростом и весом
    const num = $('[name="growth"]').val() - $('[name="weight"]').val()

    setTimeout(() => {
      loader$.slideUp()
      $(`.calculator__result--${getCurrentResult(num)}`).slideDown()
    }, 1200);
  })

  // Валидация цифровых инпутов (запрещаем вводить символы кроме [0-9])
  form$.on('input', e => {
    if (!e.target.matches('select')) {
      e.target.value = leaveOnlyDigits(e.target.value);

    }
  })


  function start() {
    loader$.hide()
    results$.hide()
    scale()
  }

  function scale() {
    scaleBtns$.each((i, item) => {
      $(item).on('click', handler)
    })

    function handler() {
      reset()
      $(this).addClass('active')
    }

    function reset() {
      scaleBtns$.removeClass('active')
    }
  }
}


function leaveOnlyDigits(text) {
  return text.replace(/[^0-9,.]+/g, '')
}

function getCurrentResult(num) {
  if (num > 115) {
    return 1
  } else if (num >= 104 && num <= 114) {
    return 2
  } else if (num >= 90 && num <= 103) {
    return 3
  } else if (num < 90) {
    return 4
  } else {
    return 1
  }
}