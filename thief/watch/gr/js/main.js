$(document).ready(function(){

	/* scroll */
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    /*timer*/
    now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.8,
        "fg_width": 0.045,
        "circle_bg_color": "#7c667f",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#ffffff",
                "show": false
            },
            "Hours": {
                "text": "ώρες",
                "color": "#ffffff",
                "show": true
            },
            "Minutes": {
                "text": "λεπτά",
                "color": "#ffffff",
                "show": true
            },
            "Seconds": {
                "text": "δευτερολέπτων",
                "color": "#ffffff",
                "show": true
            }
        }
    }); 

});
