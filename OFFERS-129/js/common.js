window.onload = function () {
  initDateComments()
  like()
  initComments()
  initForms()
}


function like() {
  const likes = document.querySelectorAll('.like')

  likes.forEach(item => {
    item.addEventListener('click', e => {
      (item.matches('.active'))
        ? item.classList.remove('active')
        : item.classList.add('active')
    })
  })
}

function initComments() {

  const btns = document.querySelectorAll('.comment')
  const textareas = document.querySelectorAll('.textarea')
  const sends = document.querySelectorAll('.send')
  const commens = document.querySelectorAll('textarea')

  commens.forEach((_, i) => initItem(i))

  function initItem(index) {

    const btn = btns[index]
    const textarea = textareas[index]
    const send = sends[index]
    const commen = commens[index]

    btn.addEventListener('click', () => {
      (textarea.matches('.active'))
        ? textarea.classList.remove('active')
        : textarea.classList.add('active')
    })

    send.addEventListener('click', () => {
      commen.value = ""
      showAllTextarea()
      showAlert()
    })
  }

  function showAllTextarea() {
    textareas.forEach(item => item.classList.remove('active'))
  }

  function showAlert() {
    const [description] = document.querySelector('.sweet-text-hidden').children

    swal({
      text: description.textContent,
      buttons: false,
      icon: false,
    })
  }
}

function initForms() {
  const comments = document.querySelectorAll('.commen')
  const btns = document.querySelectorAll('.send')

  comments.forEach((com, i) => {
    com.addEventListener('input', _ => changeBackground(i))
  })

  function changeBackground(i) {
    const comment = comments[i]
    const btn = btns[i]

    if (comment.value !== '') {
      btn.classList.add('active')
      btn.disabled = false

    } else {
      btn.classList.remove('active')
      btn.disabled = true
    }
  }
}

function initDateComments() {
  const getDay = (num) => {
    let now = new Date()
    let newDate = new Date(now.setDate(now.getDate() - num))

    return `${('0' + newDate.getDate()).slice(-2)}.${('0' + (newDate.getMonth() + 1)).slice(-2)}.${newDate.getFullYear()}`
  }

  const commentsDate = document.querySelectorAll('.get-date')
  commentsDate.forEach(item => (
    item.innerHTML = getDay(item.getAttribute('data-day-delay'))
  ))
}