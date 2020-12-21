

$("body").on('click', '[href*="#"]', function (e) {
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 20,
    items: 3,
    dots: true,
    nav: false,
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      820: {
        items: 2,
        dots: true
      },
      1200: {
        items: 3,
        dots: false
      }
    }
  });

  const timer = new minTimer({
    hour: 't-hour',
    min: 't-min',
    sec: 't-sec',
    separation: true
  }).start();

  fixedIntro()
  scrollHeader()
  menuToggle()
  animCircles()

});


function fixedIntro() {
  const $header = $('.header')
  const $main = $('.main')

  $main.css(`margin-top`, `-${$header.height()}px`)
}

function scrollHeader() {
  const $header = $('.header')

  $(window).on('scroll', e => {
    if ($(window).scrollTop() > 40) {
      $header.addClass('on-scroll')
    } else {
      $header.removeClass('on-scroll')
    }
  })
}

function menuToggle() {
  const $header = $('.header')
  const $btn = $('.header__btn')
  const $overlay = $('.overlay')
  const $menu = $('.menu')
  const $menuItems = $('.menu__item')

  $btn.on('click', e => (
    $menu.hasClass('active')
      ? hideMenu()
      : showMenu()
  ))

  $(window).on('scroll', e => {
    $menu.hasClass('active')
      ? $menu.css(`margin-top`, `${$header.height()}px`)
      : $menu.css(`margin-top`, `0px`)
  })

  $menuItems.on('click', e => hideMenu())
  $overlay.on('click', e => hideMenu())

  function showMenu() {
    $header.addClass('menu-open')
    $menu.css(`margin-top`, `${$header.height()}px`)
    $menu.addClass('active')
    $overlay.fadeIn()
  }

  function hideMenu() {
    $header.removeClass('menu-open')
    $menu.css(`margin-top`, `0px`)
    $menu.removeClass('active')
    $overlay.fadeOut()
  }
}

function animCircles() {
  const $area = $('.sect5__grid')
  const $circleWrappers = $('.sect5__circle')
  const $circles = $('.circle-chart__circle')
  resetCircles()
  setPercentText()

  let isShow = false

  $(window).on('scroll', e => {
    const scrollBehindWrapper = $(window).scrollTop() + ($(window).height() / 1.8) - $($area).offset().top
    const isVisible = scrollBehindWrapper > 50

    if (isVisible) {
      startAnimation()
      isShow = true
    }
    // else {
    //   reversAnimation()
    //   isShow = false
    // }
  })

  function startAnimation() {
    if (isShow) {
      return
    }

    $circles.each((i, item) => {
      const percent = item.dataset.percent
      $(item).attr('stroke-dasharray', `${percent},100`)

      $(item).prop('Counter', 0).animate({
        Counter: percent
      }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
          $($circleWrappers.get(i)).find('text').text(Math.ceil(now) + '%')
        }
      });
    })
  }

  function reversAnimation() {
    if (!isShow) {
      return
    }

    $circles.each((i, item) => {
      const percent = 0
      $(item).attr('stroke-dasharray', `${percent},100`)

      $($circleWrappers.get(i)).find('text').text('')
    })
  }

  function resetCircles() {
    $circles.attr('stroke-dasharray', '0,100')
  }

  function setPercentText() {
    $circles.each((i, item) => {
      const percent = 0
      $($circleWrappers.get(i)).find('text').text(percent + '%')
    })
  }
}

wrapTitles()
function wrapTitles() {
  $('.title').wrapInner('<span></span>')
}