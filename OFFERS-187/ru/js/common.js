$(function () {

  $('section').magnificPopup({
    delegate: 'a.gal1',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
            // titleSrc: function(item) {
            //   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
            // }
          },
          gallery: {
            enabled: true
          }
        });
  $('.tabs__content').each(function () {
    $(this).magnificPopup({
      delegate: 'a.gal2',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
                // titleSrc: function(item) {
                //   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
                // }
              },
              gallery: {
                enabled: true
              },
              zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                  return element.find('img');
                }
              }
            });
  })

  $('.rev-item').slick({
    infinite: true,
    autoplay: false,
    adaptiveHeight: false,
    dots: true,
    arrows: true,
    fade: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
    nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>'
  });

  $('.img-wrap-top .btn-wrap-small .btn').click(function () {
    $('.img-wrap-top .btn-wrap-small .btn').removeClass('active');
    $(this).addClass('active');
  })

  var toggMnu = $(".toggle-mnu").click(function () {
    $(this).toggleClass("on");
    $("body").toggleClass("fixed");
    $(".hidden-mnu").slideToggle();
    return false;
  });

  $(function () {
    $('.hidden-mnu ul li a').on('click', function () {
      $(".toggle-mnu").click();
    });
  });

  $(".header-text-wrap a, .main-r a, .s-opis .btn-accent, .landingMenu a, .landingMenu2 a, .btn-d, .btn-d, .s-work a, .btn-accent.s-d, .main-r .btn-accent").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({scrollTop: destination}, 1100);
    return false;
  });

  var i, c, y, v, s, n;
  v = document.getElementsByClassName("youtube");
  if (v.length > 0) {
    s = document.createElement("style");
    s.type = "text/css";
    s.innerHTML = '.video-container{height:0;position:relative;padding-bottom:57.7%;}.video-container iframe, .video-container object, .video-container embed{position:absolute;display:block;width:100%;height:100%;top:0;left:0;}.youtube{position:absolute;left:0;top:0;width:100%;max-width:100%;height:100%;background-color:#000;overflow:hidden;cursor:hand;cursor:pointer;}.youtube .thumb{bottom:0;display:block;left:0;margin:auto;max-width:100%;position:absolute;right:0;top:0;width:100%;height:auto}.youtube .play{filter:alpha(opacity=80);opacity:.8;height:77px;left:50%;margin-left:-38px;margin-top:-38px;position:absolute;top:50%;width:77px;background:url("img/youtube-play-icon.png") no-repeat}';
    document.body.appendChild(s)
  }
  for (n = 0; n < v.length; n++) {
    y = v[n];
    i = document.createElement("img");
    i.setAttribute("src", "https://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
    i.setAttribute("class", "thumb");
    c = document.createElement("div");
    c.setAttribute("class", "play");
    y.appendChild(i);
    y.appendChild(c);
    y.onclick = function() {
      var a = document.createElement("iframe");
      a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&rel=0&showinfo=0&border=0&wmode=opaque&enablejsapi=1");
      a.setAttribute("allowfullscreen","");
      a.style.width = this.style.width;
      a.style.height = this.style.height;
      this.parentNode.replaceChild(a, this)
    }
  };

  GetCount();

});

const $$cookieDisclaimer = document.querySelector('.js-cookie-disclaimer');

if (!localStorage.getItem('cookieDisclaimer')) {
  $$cookieDisclaimer.classList.add('is-active');
}

$$cookieDisclaimer.querySelector('button').addEventListener('click', () => {
  localStorage.setItem('cookieDisclaimer', true);
  $$cookieDisclaimer.classList.remove('is-active');
});