window.onload = function () {
  const images = document.querySelectorAll('.img')
  images.forEach(img => {
    img.style.width = '100%'
    img.style.maxWidth = img.naturalWidth + 'px'
  })
}
