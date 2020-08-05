$(document).ready(function () {
  lazyScroll()
  
  $(".reviews").owlCarousel({
    margin: 20,
    items: 1,
    dots: true,
    autoHeight: true
  });
});


function lazyScroll() {
  $("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });
}


