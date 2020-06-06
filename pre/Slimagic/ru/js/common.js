

$("body").on('click', '[href*="#"]', function (e) {
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});


$(document).ready(function () {
  $(".reviews").owlCarousel({
    margin: 14,
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    navText: ['<img src="img/arl.png"></img>', '<img src="img/arr.png"></img>'],
    autoHeight: true,
    responsive : {
      // breakpoint from 0 up
      // breakpoint from 768 up
      640 : {
        items: 2,
      },
      768 : {
        items: 3,
      }
  }
  });
});