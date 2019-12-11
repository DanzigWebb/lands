const toggleCheck = function () {
  const items = document.querySelectorAll('.poll__toggle');
  items.forEach(item => {
    item.addEventListener('click', () => {
      clearAll()
      item.classList.add('active')
      item.querySelector('.check').classList.add('active')
    })
  })
  const clearAll = function () {
    items.forEach(item => {
      item.classList.remove('active')
      item.querySelector('.check').classList.remove('active')
    })
  }
}

const multiCheck = function () {
  const items = document.querySelectorAll('.poll__ckeck');
  const onlyThis = document.querySelector('.clear-all')
  items.forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('clear-all')) {
        clearAll()
        onlyThis.classList.add('active')
        onlyThis.querySelector('.check').classList.add('active')
      } else {
        onlyThis.classList.remove('active')
        onlyThis.querySelector('.check').classList.remove('active')
        item.classList.toggle('active')
        item.querySelector('.check').classList.toggle('active')
      }
    })
  })
  const clearAll = function () {
    items.forEach(item => {
      item.classList.remove('active')
      item.querySelector('.check').classList.remove('active')
    })
  }

}