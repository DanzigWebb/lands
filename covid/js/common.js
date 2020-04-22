$(document).ready(function () {

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
    });
  });


  $(document).ready(function () {
    $(".slider").owlCarousel({
      margin: 20,
      items: 1,
      dots: true,
      nav: true,
      loop: true,
      navText: ['<img src="img/left.svg"></img>', '<img src="img/right.svg"></img>'],
      autoHeight: true,
    });
  });


  var hiddenText = $('.hidden-content');
  var accItems = $('.acca__item');
  var ticket = $('.ticket');

  function showAccItems() {
    hiddenText.slideUp(400);
    accItems.removeClass('active');
    ticket.html('<img src="img/plus.svg" alt="">')
  }
  accItems.each(function (index) {
    $(this).on('click', function () {
      if ($(this).hasClass('active')) return
      showAccItems();
      $(hiddenText[index]).slideDown(400);
      $(ticket[index]).html('<img src="img/minus.svg" alt="">')
      $(this).addClass('active');
    });
  });


  $('.header__btn').on('click', function () {
    $('.mob__nav').slideDown(200);
  })

  $('.mob__link').on('click', function () {
    $('.mob__nav').slideUp(200);
  })

  $('.mob__nav-close').on('click', function () {
    $('.mob__nav').slideUp(200);
  })


  $('input[name="phone"]').mask('+7(000) 000-00-00');

});