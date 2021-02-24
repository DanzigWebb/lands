$('a.btn').click( function(){
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
    }
    return false;
});

$(".gallery a").click(function(e) {
	e.preventDefault();
	srcAttr = $(this).attr("class");

	$(".gallery-open").fadeIn().css("display", "flex");
	$(".gallery-open ." + srcAttr).fadeIn();
});

$(".gallery-open .close").click(function() {
	$(this).parent().parent().fadeOut();
	$(".gallery-open").fadeOut();
});