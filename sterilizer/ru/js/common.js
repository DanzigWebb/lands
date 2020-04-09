

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
    // navText: ['<img src="img/arl.svg"></img>', '<img src="img/arr.svg"></img>'],
    autoHeight: true
  });
});


const addCount = (select) => {
  const items = document.querySelectorAll(select);
  items.forEach((item, index) => {
    item.innerHTML = index + 1
  })
}
addCount('.sect3__item span')
addCount('.sect6__item span')