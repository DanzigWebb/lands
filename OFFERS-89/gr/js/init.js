$(document).ready(function () {

    $('a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    });

    /* timer */
    now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.2,
        "fg_width": 0.04,
        "circle_bg_color": "#fafafa",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#fff600",
                "show": false
            },
            "Hours": {
                "text": "Ω",
                "color": "#fff600",
                "show": true
            },
            "Minutes": {
                "text": "Λ",
                "color": "#fff600",
                "show": true
            },
            "Seconds": {
                "text": "Δ",
                "color": "#fff600",
                "show": true
            }
        }
    });

});

