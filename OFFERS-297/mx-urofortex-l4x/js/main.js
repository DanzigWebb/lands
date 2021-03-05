$(document).ready(function(){
    $('.bxslider').bxSlider({
      controls: true,
      adaptiveHeight: true,
      autoControls: true,
     });

     $('.toforms').click(function() {
          $("html, body").animate({
              scrollTop: $(".forms").offset().top - 300
          }, 2000);
          return false;
        });
});

// JavaScript Document
   $( document ).ready(function() {
    $('.toform').click(function () {
        $("html, body").animate({
            scrollTop: $(".form").offset().top - 300
        }, 1300);
        return false;
    });
});

