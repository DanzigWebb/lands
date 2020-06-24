window.onload = function() {
  const initDateComments = () => {
    const commentsDate = document.querySelectorAll('.get-date');
    commentsDate.forEach(item => {
      item.innerHTML = getDay(item.getAttribute('data-day-delay'))
    })
  }
  
  const getDay = (num) => {
    let now = new Date();
    let newDate = new Date(now.setDate(now.getDate() - num));
    return `${ ('0' + newDate.getDate()).slice(-2) }.${('0' + newDate.getMonth()).slice(-2)}.${ newDate.getFullYear() }`
  }
  initDateComments()
  
  const images = document.querySelectorAll('.img img')
  images.forEach(img => {
    img.style.width = '100%'
    img.parentNode.style.maxWidth = img.naturalWidth+ 'px'
  })

}
