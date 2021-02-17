$(document).ready(function () {
	$('input[type=radio]').styler();

	$(".star__slider-body").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,

	});

	$(".feedback__slider-body").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,

	});


	$('.test__form-btn button').click(function () {
		if ($('input:radio[name=color]:checked').val() == 'c1') {
			$('.test__rezult-pack').html('<img src="build/images/test-pack2.png"/*tpa=build/images/test-pack2.png*/ alt="" /><p><span>темно-коричневый оттенок пудры</span></p><p>BeautyStamp</p>');
		} else if ($('input:radio[name=color]:checked').val() == 'c2') {
			$('.test__rezult-pack').html('<img src="build/images/test-pack2.png"/*tpa=build/images/test-pack2.png*/ alt="" /><p><span>темно-коричневый оттенок пудры</span></p><p>BeautyStamp</p>');
		} else if ($('input:radio[name=color]:checked').val() == 'c3') {
			$('.test__rezult-pack').html('<img src="build/images/test-pack1.png"/*tpa=build/images/test-pack1.png*/ alt="" /><p><span>черный оттенок пудры</span></p><p>BeautyStamp</p>');
		} else if ($('input:radio[name=color]:checked').val() == 'c4') {
			$('.test__rezult-pack').html('<img src="build/images/test-pack1.png"/*tpa=build/images/test-pack1.png*/ alt="" /><p><span>черный оттенок пудры</span></p><p>BeautyStamp</p>');
		} else if ($('input:radio[name=color]:checked').val() == 'c5') {
			$('.test__rezult-pack').html('<img src="build/images/test-pack2.png"/*tpa=build/images/test-pack2.png*/ alt="" /><p><span>темно-коричневый оттенок пудры</span></p><p>BeautyStamp</p>');
		}

		if ($('input:radio[name=type]:checked').val() == 'f1') {
			$('.test__rezult-form').html('<img src="build/images/test-form3.png"/*tpa=build/images/test-form3.png*/ alt="" /><p><span>форма бровей “домиком”</span></p>');
		} else if ($('input:radio[name=type]:checked').val() == 'f2') {
			$('.test__rezult-form').html('<img src="build/images/test-form2.png"/*tpa=build/images/test-form2.png*/ alt="" /><p><span>прямая форма бровей</span></p>');
		} else if ($('input:radio[name=type]:checked').val() == 'f3') {
			$('.test__rezult-form').html('<img src="build/images/test-form1.png"/*tpa=build/images/test-form1.png*/ alt="" /><p><span>круглая форма бровей</span></p>');
		} else if ($('input:radio[name=type]:checked').val() == 'f4') {
			$('.test__rezult-form').html('<img src="build/images/test-form1.png"/*tpa=build/images/test-form1.png*/ alt="" /><p><span>круглая форма бровей</span></p>');
		} else if ($('input:radio[name=type]:checked').val() == 'f5') {
			$('.test__rezult-form').html('<img src="build/images/test-form3.png"/*tpa=build/images/test-form3.png*/ alt="" /><p><span>форма бровей “домиком”</span></p>');
		}

		$('.test__form').css('display', 'none');
		$('.test__rezult').css('display', 'block');
	});



});