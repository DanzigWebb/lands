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

function lazyScroll() {
  $("body").on('click', '[href*="#"]', function (e) {
    const fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });
}

function scrollToEl(selector, duration = 1000) {
  $('html,body').stop().animate({
    scrollTop: ($(selector).position().top - 100)
  }, duration);
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
  const comments = document.querySelectorAll('textarea')

  comments.forEach((_, i) => initItem(i))

  function initItem(index) {

    const btn = btns[index]
    const textarea = textareas[index]
    const send = sends[index]
    const comment = comments[index]

    btn.addEventListener('click', () => {
      (textarea.matches('.active'))
        ? textareaHide(textarea)
        : textareaShow(textarea)
    })

    send.addEventListener('click', () => {
      comment.value = ''
      hideAllTextarea()
      showAlert()
    })
  }

  function textareaShow(textarea) {
    hideAllTextarea()
    textarea.classList.add('active')
    $(textarea).slideDown(300)
  }

  function textareaHide(textarea) {
    textarea.classList.remove('active')
    $(textarea).slideUp(200)
  }

  function hideAllTextarea() {
    textareas.forEach(item => textareaHide(item))
    sends.forEach(item => {
      item.classList.remove('active')
      item.disabled = true
    })
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
    com.addEventListener('keydown', e => enterHandle(e, i))
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

  function enterHandle(e, i) {
    if (e.key === 'Enter') {
      btns[i].click()
    }
  }
}


function accordion() {
  var acc = document.getElementsByClassName("FAQ__btn");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}