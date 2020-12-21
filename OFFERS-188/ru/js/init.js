$(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    })

    $('.reviews_slider_rev1').slick({
      dots: true,
      infinite: true,
      adaptiveHeight: true,
      speed: 500,
      fade: false,
      cssEase: 'linear'
  });
    

    var itembox = $(".review_radio");
    itembox.click(function(){
        var _this = $(this);
        _this.addClass("active").siblings(itembox).removeClass("active").find("input[type='radio']").removeAttr("checked");

        if(_this.hasClass('active')){
          _this.find("input[type='radio']").attr("checked","checked");
      }
  });


    var itembox = $(".review_radio");
    itembox.click(function(){
        itembox.hide();
        $(".review_result").fadeIn();
        $(".green_result").addClass("green_view");
        $(".red_result").addClass("red_view");
        $(".blue_result").addClass("blue_view");
    });


});