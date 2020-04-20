$(document).ready(function(){
	$('a[href^="#"]').click(function (){
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
	}) 


	$('.char2_for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		adaptiveHeight: true,
        autoplay: true
	});  
	
	$('.reviews-3').slick({
		dots: true,
		infinite: true,
		speed: 200,
		fade: true,
		cssEase: 'linear',
		adaptiveHeight: true    
	});
	

	$("[data-fancybox]").fancybox({
		loop: true
	});

	/* передает в инпут модель */
	$('.catalog .cat-item .button-m').on('click', function(){
		var nameProd = $(this).siblings('h3').text();
		$('input[name="comment"]').val(nameProd);
	});
	
});

/* timer */
function update() {
	var Now = new Date(), Finish = new Date();
	Finish.setHours( 23);
	Finish.setMinutes( 59);
	Finish.setSeconds( 59);
	if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
		Finish.setDate( Finish.getDate() + 1);
	}
	var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
	var hrs = Math.floor( sec / 3600);
	sec -= hrs * 3600;
	var min = Math.floor( sec / 60);
	sec -= min * 60;
	$(".timer .hours").html( pad(hrs));
	$(".timer .minutes").html( pad(min));
	$(".timer .seconds").html( pad(sec));
	setTimeout( update, 200);
}
function pad(s) {
	s = ("00"+s).substr(-2);
	return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
}
update();

// ============================
// FAQ
// ============================
$('.faq__question').click(function(event) {
	event.preventDefault();
	$(this).toggleClass('faq__question_active');

	if ( $(this).hasClass('faq__question_active') ) {
		$(this)
			.next('.faq__answer')
			.slideDown(300);
	} else {
		$(this)
			.next('.faq__answer')
			.slideUp(300);
	};
});