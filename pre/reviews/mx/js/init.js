window.onload = function () {
  lazyScroll();
  initDateComments();
  autoImage();
  pagination();


  $('#description').on('click', function(e) {
    e.preventDefault()
    $('.description').show()
    $('.comments__main').hide()
    changeActiveClass($(this))
  })

  $('#reviews-btn').on('click', function(e) {
    e.preventDefault()
    $('.description').hide()
    $('.comments__main').show()
    changeActiveClass($(this))
  })

  function changeActiveClass($el) {
    $('.comments__nav .comments__btn').removeClass('active')
    $el.addClass('active')
  }
};