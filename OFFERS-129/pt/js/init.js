window.onload = function () {
  lazyScroll();
  initDateComments();
  autoImage();
  pagination();
  like();
  initForms();
  accordion()
  initComments();

  (function () {
    const tabsBtns = document.querySelectorAll('.comments__btn')
    const tabsContents = document.querySelectorAll('.tab_content')

    tabsBtns.forEach((item, i) => {
      setListener(item, () => {
        hideContent()
        setActiveBtn($(item))
        $(tabsContents[i]).show()
      })
    })

    function hideContent() {
      $(tabsContents).hide()
    }
  })();

};

function setActiveBtn($el) {
  $('.comments__nav .comments__btn').removeClass('active')
  $el.addClass('active')
}

function setListener(btn, callback) {
  $(btn).on('click', e => {
    e.preventDefault();
    callback()
  })
}
