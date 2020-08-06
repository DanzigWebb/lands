const Media = {
  dk: 1030,
  tb: 768,
  mb: 480,
  mn: 370,
  'dsd': ''
}

$(document).ready(function () {
  lazyScroll()

  $(".reviews").owlCarousel({
    margin: 20,
    items: 1,
    dots: false,
    autoHeight: true,
    responsive: {
      0: {
        dots: true
      },
      768: {
        items: 2
      },
      1030: {
        items: 3,
        margin: 0
      }
    }
  });
});


function lazyScroll() {
  $("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });
}


const firstElement = $('.sect3 h2')
const lastElement = $('.sect3__img1')
const bgRef = $('.sect3__mob-bg')

function setBgBetweenElements() {
  const offsetHeight = lastElement.offset().top - firstElement.offset().top
  bgRef.css('height', offsetHeight)
}


setBgBetweenElements()

$(window).on('resize', () => {
  setBgBetweenElements()
})
