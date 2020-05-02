

$("body").on('click', '[href*="#"]', function (e) {
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

const timer = new minTimer({
  hour: 't-hour',
  min: 't-min',
  sec: 't-sec',
  separation: true
}).start();

$(document).ready(function () {
  $(".reviews").owlCarousel({
    margin: 20,
    items: 1,
    dots: true,
    nav: false,
    autoHeight: true,
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1,
      },
      580: {
        items: 2,
        loop: false
      },
      800: {
        items: 3,
        loop: false
      }
    }
  });
});

const items = document.querySelectorAll('.sect6__item')
function init(w, r, operation) { // позиционируем элементы по кругу
  if (operation === 'none') {
    items.forEach(item => {
      item.style.left = 0;
      item.style.top = 0;
      return;
    })
    return
  }
  const wrap = w;
  const radius = r;
  for (let i = 0; i < items.length; i++) {
    let f = 2 / items.length * i * Math.PI;
    let left = wrap + radius * Math.sin(f) * 1.5 + 'rem';
    let top = wrap + radius * Math.cos(f) * 0.8 + 'rem';
    items[i].style.left = left
    items[i].style.top = top;
  }
}


const resizing = (width) => {
  if (width >= 900) {
    init(2.6, 3.2);
    return;
  }
  if (width <= 900 && width > 840) {
    init(2.2, 2.6);
    return
  }
  if (width < 840) {
    console.log('lalala');

    init(2.2, 2, 'none');
    return;
  }
}


resizing(window.innerWidth)

window.addEventListener('resize', () => {
  resizing(window.innerWidth)
})