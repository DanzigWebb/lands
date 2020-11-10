function scale() {
  const button$ = $('.gender-btn')
  button$.each((i, item) => {
    $(item).on('click', handler)
  })

  function handler() {
    reset()
    $(this).addClass('active')
  }

  function reset() {
    button$.removeClass('active')
  }
}