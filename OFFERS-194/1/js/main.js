    $('.form-popup-btn').click( function() {
        $('body').css('overflow','hidden');
        $("#order-form-popup").show();
    });
    
    $('.close-popup-btn').click( function(){
        $('#order-form-popup').hide();
        $('body').css('overflow','visible');
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