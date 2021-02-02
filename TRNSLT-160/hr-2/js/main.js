

$(document).ready(function () {

  $("#drop1").click(function () {
    $("#box1").toggleClass("active-content");
    $("#arrow1").toggleClass("active-arrow");
  });
  $("#drop2").click(function () {
    $("#box2").toggleClass("active-content");
    $("#arrow2").toggleClass("active-arrow");
  });
  $("#drop3").click(function () {
    $("#box3").toggleClass("active-content");
    $("#arrow3").toggleClass("active-arrow");
  });


  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
});