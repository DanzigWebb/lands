$(function() {
	$('a[href^="#"]').click(function (){
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 60;
		jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
	});
});
    $('.button').click( function () {
        let selectZodiakVal = $(this).offsetParent().find('.zodiac-sign').val();
        console.log( selectZodiakVal);
        if( selectZodiakVal == 0) {
            alert('выберете знак зодиака!');
            return false;
        } 
    });

    
    if ($(window).width() < 881)  {
        $('.owl-carousel').owlCarousel({
            stagePadding: 50,
            center:true,
            loop:true,
            margin:10,
            nav:false,
            items: 1
        });
    }