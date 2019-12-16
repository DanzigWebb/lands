// fixed panel
function fixedBuyers () {
  const panel = document.querySelector('.buyers')
  window.addEventListener('scroll', (e) => {
    document.documentElement.scrollTop > 500 ? panel.classList.add('active') : panel.classList.remove('active')
  })
}
fixedBuyers()

function commentsShop () {
  const comment = document.querySelector('.buyers__comment')

  setInterval(() => {
    show()
  }, 5000);

  function show() {
    comment.classList.add('active')
    setTimeout(() => {
      comment.classList.remove('active')
    }, 4000);
  }
}

commentsShop()