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
    scrollTop: $(selector).position().top
  }, duration);
}

