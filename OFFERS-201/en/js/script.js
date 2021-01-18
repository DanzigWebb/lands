$(document).ready(function() {
	/* scroll */
	$('a[href^="#"]').click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 60;
		jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
	});

	/* set price */
	$('[name="country"]').on('change', function () {
		var geoKey = $(this).find('option:selected').val();
		var data = $jsonData.prices[geoKey];
		var price = data.price;
		var oldPrice = data.old_price;
		var currency = data.currency;
		$("[value = " + geoKey + "]").attr("selected", true).siblings().attr('selected', false);

		$('.price_land_s1').text(price);
		$('.price_land_s2').text(oldPrice);
		$('.price_land_curr').text(currency);
	});

	$('.slider_main').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		// infinite: true,
		dots: true,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					centerMode: true,
					centerPadding: '0',
					arrows: false,
					adaptiveHeight: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '0',
					arrows: false,
					adaptiveHeight: true,
					dots: true
				}
			}
		]
	});

	$('.change-package-selector2').on('change', (function () {
		$('.item-gift').hide();
		$('.' + $(this).val() + '_pack').show();
		$('.change-package-selector2 [value="' + $(this).val() + '"]').prop("selected", true);

		var package_id = $(this).val();
		set_package_prices(package_id);
	}));

});




