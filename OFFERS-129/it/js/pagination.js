function pagination() {
  const comments = document.querySelectorAll('.comm');
  const btns = document.querySelectorAll('.pagination button:not(:last-child)');
  const btnNext = document.querySelector('.pagination button:last-child')
  const step = 10;
  let currentPart = 0;

  takePart()
  disableBtn()
  nextBtn()


  function action() {
    disableBtn()
    takePart()
    scrollToEl('#comments-area', 500)
    nextBtn()
  }

  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      currentPart = index
      action()
    });
  });

  btnNext.addEventListener('click', () => {
    currentPart += 1
    action()
  })

  function disableBtn() {
    btns.forEach((btn, index) => {
      btn.disabled = false
      if (index === currentPart) {
        btn.disabled = true
      }
    })
  }

  function nextBtn() {
    btnNext.disabled = (currentPart === 2)
  }


  function takePart() {
    hideComments();
    let count = 0;
    comments.forEach((comment, index) => {
      if (count >= step) {
        return;
      }
      if (index >= currentPart * step) {
        comment.classList.remove('hide');
        count += 1;
      }
    });
  }

  function hideComments() {
    comments.forEach(comment => comment.classList.add('hide'));
  }
}
