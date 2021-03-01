var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
function spin() {
    if (wheel.classList.contains('rotated')) {
        resultWrapper.style.display = "block";
    } else {
        wheel.classList.add('super-rotation');
        setTimeout(function() {
            resultWrapper.style.display = "block";
            $(function () {
                console.log($('.price_main .price_main_value').html());
                $({numberValue: $('.wheel-price_old .price_main_value').html()}).delay(2000).animate({numberValue: $('.price_main .price_main_value').html()}, {
                    duration: 1500, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
                    easing: "linear",
                    step: function (val) {
                        // console.log(val);
                        $(".wheel-price_main .price_main_value").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                    }
                });
            });
        }, 8000);
        setTimeout(function() {
            $('.spin-wrapper').slideUp();
            $('.order_block').slideDown();
            start_timer();
        }, 10000);
        wheel.classList.add('rotated');
    }
}
var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function(e){
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
    var top = $('.toform2').offset().top;
    $('body,html').animate({scrollTop: top}, 800);
});

function outputDat(m, fullM) {
    var d = new Date();
    var p = new Date(d.getTime() - m * 86400000);
    var monthA = (fullM === false) ? '01,02,03,04,05,06,07,08,09,10,11,12'.split(',') : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
    var w = p.getDate();
    var ret = (fullM === false) ? p.getDate() + '.' + monthA[p.getMonth()] + '.' + p.getFullYear() : p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + p.getFullYear();
    return ret;
}

var time = 600;
var intr;
function start_timer() {
    intr = setInterval(tick, 1000);
}
function tick() {
    time = time-1;
    var mins = Math.floor(time/60);
    var secs = time - mins*60;
    if( mins == 0 && secs == 0 ) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0"+secs;
    $("#min").html("0"+mins);
    $("#sec").html(secs);
}
//document.onload = function () {
//var old = document.querySelector('.price_old')
//    for (var p=0; p<old.length; p++) {
//        old[p].innerHTML = '<span class="price_old_value">' + 100000 + '</span><span class="price_old_currency">' + 'd' + "</span>";
//    }
//
//var main = document.querySelector('.price_main')
//    for (var o = 0; o < main.lenght; o++) {
//        main[o].innerHTML = '<span class="price_main_value">' + 50000 + '</span><span class="price_main_currency">' + 'd' + "</span>";
//}}