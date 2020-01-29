$(document).ready(function () {
  $(".reviews").owlCarousel({
    margin: 10,
    items: 1,
    dots: false,
    nav: true,
    autoHeight: true,
    navText: ['<img src="img/left.png" alt="">', '<img src="img/right.png" alt="">']
  });
});

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