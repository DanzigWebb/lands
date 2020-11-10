
(function inputValid() {
  const input$ = $('.item--input input')
  const inputs = document.querySelectorAll('.item--input input')
  const btns = document.querySelectorAll('.item--input .btn')
  input$.on('input', e => {
    if (!e.target.matches('select')) {
      e.target.value = leaveOnlyDigits(e.target.value);
   
    }
  })
  function leaveOnlyDigits(text) {
    return text.replace(/[^0-9,.]+/g, '')
  }


  inputs.forEach((com, i) => {
    com.addEventListener('input', e => {changeBackground(i)
    
    })
    com.addEventListener('keydown', e => enterHandle(e, i))
  })

  function changeBackground(i) {
    const input = inputs[i]
    const btn = btns[i]

    if (input.value !== '') {
      btn.classList.add('active')
      btn.disabled = false

    } else {
      btn.classList.remove('active')
      btn.disabled = true
    }
  }

  function enterHandle(e, i) {
    if (e.key === 'Enter') {
      btns[i].click()
    }
  }
})()
