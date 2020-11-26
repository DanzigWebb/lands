$(document).ready(function() {
	var clock2;

    clock2 = $(".clock2").FlipClock({
      clockFace: "hourly",
      autoStart: false,
      language: "it",
      callbacks: {
        stop: function() {
          $(".message").html("The clock has stopped!");
        }
      }
    });

    clock2.setTime(22880);
    clock2.setCountdown(true);
    clock2.start();

    var clock;

    clock = $(".clock").FlipClock({
      clockFace: "hourly",
      autoStart: false,
      language: "it",
      callbacks: {
        stop: function() {
          $(".message").html("The clock has stopped!");
        }
      }
    });

    clock.setTime(22880);
    clock.setCountdown(true);
    clock.start();
	// scroll
	
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	// slider
	$(".must-have-slider").owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 300,
        mouseDrag: true,
        pullDrag: false,
        dots: true,
        nav: false,
        navText: "",
        autoplay : true,
        autoplayTimeout : 3000
    });
    $(".reviews-slider").owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 300,
        mouseDrag: true,
        pullDrag: false,
        dots: true,
        nav: false,
        navText: "",
        autoplay : true,
        autoplayTimeout : 3000
    });

})