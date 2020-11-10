window.onload = function () {

  (function () {
    const tabsBtns = document.querySelectorAll('.btn')
    const tabsContents = document.querySelectorAll('.content')
    const starTab = document.querySelector('.item--main')
    tabsBtns.forEach((item, i) => {
      hideContent()
      setListener(item, () => {
        $(starTab).hide()
        hideContent()
    
        $(tabsContents[i]).show()
      })
    })

    function hideContent() {
      $(tabsContents).hide()
    }
  })();
  
  scale()

}
function setListener(btn, callback) {
  $(btn).on('click', e => {
    e.preventDefault();
    callback()
  })
}
