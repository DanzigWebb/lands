

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

  var sect5 = $(".sect5__slider").owlCarousel({
    margin: 20,
    items: 1,
    dots: false,
    nav: false,
    autoHeight: true,
  });

  $('.sect5__control img:first-child').click(function () {
    sect5.trigger('prev.owl.carousel');
  })
  $('.sect5__control img:last-child').click(function () {
    sect5.trigger('next.owl.carousel');
  })

  sect5.on('changed.owl.carousel', function (event) {
    var item = event.item.index;
    $('.sect5__control p span').text(item + 1)
  })


  var revs = $(".reviews").owlCarousel({
    margin: 20,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    autoHeight: true
  });


  $('.reviews__control img:first-child').click(function () {
    revs.trigger('prev.owl.carousel');
  })
  $('.reviews__control img:last-child').click(function () {
    revs.trigger('next.owl.carousel');
  })

  addDecorForTitle()
});


function addDecorForTitle() {
  const span = document.querySelectorAll('.sect2__item h2 span');

  function createImg(index) {
    const img = document.createElement('img');
    img.src = `img/hed${index + 1}.png`;
    return img
  }

  span.forEach((item, index) => {
    item.append(createImg(index))
  })
}

