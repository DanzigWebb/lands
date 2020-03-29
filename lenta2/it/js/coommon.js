window.onload = function () {
	
	document.onscroll = function () {
		fixedHeader();
	}

	var minImg = document.querySelectorAll('.product__thumb');
	for(var i = 0; i < minImg.length; i++) {
		minImg[i].onmouseover = function(){
			var index = this.getAttribute('data-slider-index');
			var current = document.querySelector('[data-slider-index="' +index+'"]');
			var item = document.querySelectorAll('.product__slide');
			for(var k = 0; k < item.length; k++) {
				item[k].classList.remove('product__slide--active');
				item[0].classList.add('product__slide--active');
				item[8].classList.add('product__slide--active');

			}

			current.classList.add('product__slide--active');
		}
	}

	var time = new Timer({
		hour: '.hour', 
		min: '.min', 
		sec: '.sec' ,
		hourRes: '.hour', 
		minRes: '.min', 
		secRes: '.sec' ,
	})


	$('[data-scroll]').on('click', function(){
		$('html, body').animate({
			scrollTop: $('.subtitle--product').offset().top - 80
		}, 800)
	})


















}


function fixedHeader() {
	var header = document.querySelector('.header');
	var headerTop = header.getBoundingClientRect().top;
	var headerBottom = header.getBoundingClientRect().bottom;
	if(headerTop < 0 && window.pageYOffset > headerBottom) {
		header.classList.add('header--active');
	} else if(window.pageYOffset < headerBottom) {
		header.classList.remove('header--active');
	}
}


function Timer(obj) {
	this.hour = typeof obj.hour == 'string' ? document.querySelector(obj.hour).innerHTML: obj.hour; 
	this.min = typeof obj.min == 'string' ? document.querySelector(obj.min).innerHTML: obj.min;
	this.sec = typeof obj.sec == 'string' ? document.querySelector(obj.sec).innerHTML: obj.sec;
	this.hourRes = document.querySelectorAll(obj.hourRes);
	this.minRes = document.querySelectorAll(obj.minRes);
	this.secRes = document.querySelectorAll(obj.secRes);
	ctx = this;


	var timeInterval = setInterval(function(){
		ctx.sec--;
		if(ctx.sec < 0) {
			ctx.sec = 59;
			ctx.min--;
		} else if (ctx.sec < 10 && (typeof ctx.sec == 'number' || ctx.sec.length < 2)) {
			ctx.sec = '0' + ctx.sec;
		}

		if(ctx.min < 0) {
			ctx.min = 59;
			ctx.hour--;
		} else if (ctx.min < 10 && (typeof ctx.min == 'number' || ctx.min.length < 2)) {
			ctx.min = '0' + ctx.min;
		}

		if(ctx.hour < 0) {
			clearInterval(timeInterval);
			ctx.hour = '0' + 0;
			ctx.min = '0' + 0;
			ctx.sec = '0' + 0;

		} else if (ctx.hour < 10 && (typeof ctx.hour == 'number' || ctx.hour.length < 2)) {
			ctx.hour = '0' + ctx.hour;
		}
		//console.log(ctx.hour, ctx.min, ctx.sec);

		for(var i = 0; i < ctx.secRes.length; i++) {

		ctx.hourRes[i].innerHTML = ctx.hour;
		ctx.minRes[i].innerHTML = ctx.min;
		ctx.secRes[i].innerHTML = ctx.sec;

	}
	}, 1000)

}

