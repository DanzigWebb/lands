$(function(){
	
	$('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

	/* timer */
    
    now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
        "animation": "smooth",
        "bg_width": 1,
        "fg_width": 0.04,
        "circle_bg_color": "#f3f5f7",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#36d0f8",
                "show": false
            },
            "Hours": {
                "text": "часов",
                "color": "#36d0f8",
                "show": true
            },
            "Minutes": {
                "text": "минут",
                "color": "#36d0f8",
                "show": true
            },
            "Seconds": {
                "text": "секунд",
                "color": "#36d0f8",
                "show": true
            }
        }
    });

	
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
		$(".timer .hours").text( pad(hrs));
		$(".timer .minutes").text( pad(min));
		$(".timer .seconds").text( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) { return ('00'+s).substr(-2) }
	update();

	/* sliders */

    $('.gallery').slick({
      dots: false,
      infinite: true,
      speed: 200,
      fade: false,
      cssEase: 'linear'
    }); 
    
    $('.reviews').slick({
      dots: false,
      infinite: false,
      speed: 200,
      fade: false,
      cssEase: 'linear'
    });    
});