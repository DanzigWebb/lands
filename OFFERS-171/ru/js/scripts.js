jQuery(document).ready(function($) {
    $('.rating-carousel').owlCarousel({
        loop: true,
        items: 2,
        autoplay:true,
        autoplayHoverPause:false,
        dots: false,
        nav: true,
        lazyLoad:true,
        responsive : {
                0 : {
                  items: 1,
                  nav: true
              },
              480 : {
                  items: 1,
                  nav: true
              },
              768 : {
                  items: 2,
                  nav: true
              },
              1280 : {
                  items: 2,
                  nav: true
              },
              1920 : {
                  items: 2,
                  nav: true
              },
        }
    });
});