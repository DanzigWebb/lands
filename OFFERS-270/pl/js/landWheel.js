           var resultWrapper = document.querySelector('.spin-result-wrapper');
           var wheel = document.querySelector('.wheel-img');

           function spin() {
               if (wheel.classList.contains('rotated')) {
                   resultWrapper.style.display = "block";
               } else {
                   wheel.classList.add('super-rotation');
                   setTimeout(function() {
                       resultWrapper.style.display = "block";
                   }, 5700);
                   setTimeout(function() {
                       $('.spin-wrapper').slideUp();
                        $('.order_block').slideDown();
                        start_timer();
                   }, 5700);
                   wheel.classList.add('rotated');
               }
           }
           var closePopup = document.querySelector('.close-popup');






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
  mins = mins >= 10 ? mins : "0" + mins;
  $("#min").html(mins);
  $("#sec").html(secs);
  }
  
window.isShow = 0;
    var stateObj = {foo: "bar"};
    var curURL = window.location.href;
    var curTitle = document.title;
    history.pushState(stateObj, curTitle, curURL);
    window.onpopstate = function (event) {

        if (isShow == 0) {
            history.pushState(stateObj, curTitle, curURL);
            document.getElementById('comeback').style.display = 'block';
            isShow = 1;
        }
        ;
    };

    document.body.onmouseout = function (event) {
        if (event.clientY < 0 && window.isShow == 0) {
            document.getElementById('comeback').style.display = 'block';
            isShow = 1;
        }
        document.getElementById('comeback').onclick = function (event) {
            if (event.target.id == "comeback") {
                document.getElementById('comeback').style.display = 'none';
            }
        };
    };

        var closePopup = document.querySelector('.close-popup');
        var spinResult = document.querySelector('.spin-result-wrapper');
        var okButton = document.querySelector('.pop-up-button');
        okButton.href="#order0";
        closePopup.addEventListener('click', function(e) {
             e.preventDefault();
          spinResult.style.display = 'none';
        });
        okButton.addEventListener('click', function(e) {
          e.preventDefault();
          spinResult.style.display = 'none';
        });
