  // cvv image
  jQuery(function ($) {
    $(".cvv-link").click(function () {
      $(this).siblings(".cvv-image").slideToggle();
    });
  });

  // cvv image
  jQuery(function ($) {
    $(".cvv-link").click(function () {
      $(this).parent().siblings(".cvv-image").slideToggle();
    });
  });
  jQuery(function ($) {
    $(".cvv-link").click(function () {
      $(this).parent().parent().siblings(".cvv-image").slideToggle();
    });
  });

  // anchor
  jQuery(function ($) {
    $('a[href^="#"]').click(function () {
      var target = $(this).attr("href");
      if (target) {
        $("html, body").animate({ scrollTop: $(target).offset().top }, 1000);
      }
      return false;
    });
  });
  // end anchor

  // fades
  $(function () {
    /*-------------------animation----------------------*/
    $("#fades p").hide();
    function fades($div, cb) {
      $div.fadeIn(2000, function () {
        $div.fadeOut(2000, function () {
          var $next = $div.next();
          if ($next.length > 0) {
            fades($next, cb);
          } else {
            // The last element has faded away, call the callback
            cb();
          }
        });
      });
    }

    function startFading($firstDiv) {
      fades($firstDiv, function () {
        startFading($firstDiv);
      });
    }

    startFading($("#fades p:first-child"));
  });
  /*-------------------animation----------------------*/
  // end fades

  //date 2
  jQuery(function($){
    var date = new Date();
    var shipdate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + Number($("#lf-shipdate").attr("addDays")));

    var options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };

    $("#lf-shipdate").html(shipdate.toLocaleDateString($("#lf-shipdate").attr("data-locale"), options));
  });
  //date end

  // clock
  jQuery(function ($) {
    var spd = 100;
    var spdVal = 10;
    var cntDown = 10 * 60 * spdVal;
    setInterval(function () {
      var mn, sc, ms;
      cntDown--;
      if (cntDown < 0) {
        return false;
      }
      mn = Math.floor(cntDown / spdVal / 60);
      mn = mn < 10 ? "0" + mn : mn;
      sc = Math.floor((cntDown / spdVal) % 60);
      sc = sc < 10 ? "0" + sc : sc;
      ms = Math.floor(cntDown % spdVal);
      ms = ms < 10 ? "0" + ms : ms;
      var result = mn + ":" + sc;
      if (document.getElementById("time")) {
        document.getElementById("time").innerHTML = result;
      }
    }, spd);
  });
  // end clock


  // clock 16
  jQuery(function ($) {
    var spd = 100;
    var spdVal = 16;
    var cntDown = 16 * 60 * spdVal;
    setInterval(function () {
      var mn, sc, ms;
      cntDown--;
      if (cntDown < 0) {
        return false;
      }
      mn = Math.floor(cntDown / spdVal / 60);
      mn = mn < 10 ? "0" + mn : mn;
      sc = Math.floor((cntDown / spdVal) % 60);
      sc = sc < 10 ? "0" + sc : sc;
      ms = Math.floor(cntDown % spdVal);
      ms = ms < 10 ? "0" + ms : ms;
      var result = mn + ":" + sc;
      if (document.getElementById("time16")) {
        document.getElementById("time16").innerHTML = result;
      }
    }, spd);
  });
  // end clock

// clock 16
jQuery(function ($) {
  var spd = 100;
  var spdVal = 16;
  var cntDown = 15 * 60 * spdVal;
  setInterval(function () {
    var mn, sc, ms;
    cntDown--;
    if (cntDown < 0) {
      return false;
    }
    mn = Math.floor(cntDown / spdVal / 60);
    mn = mn < 10 ? "0" + mn : mn;
    sc = Math.floor((cntDown / spdVal) % 60);
    sc = sc < 10 ? "0" + sc : sc;
    ms = Math.floor(cntDown % spdVal);
    ms = ms < 10 ? "0" + ms : ms;
    var result = mn + ":" + sc;
    if (document.getElementById("time15")) {
      document.getElementById("time15").innerHTML = result;
    }
  }, spd);
});
    // end clock

    // clock 2 minutes
    jQuery(function ($) {
      var spd = 100;
      var spdVal = 10;
      var cntDown = 2 * 60 * spdVal;
      setInterval(function () {
        var mn, sc, ms;
        cntDown--;
        if (cntDown < 0) {
          return false;
        }
        mn = Math.floor(cntDown / spdVal / 60);
        mn = mn < 10 ? "0" + mn : mn;
        sc = Math.floor((cntDown / spdVal) % 60);
        sc = sc < 10 ? "0" + sc : sc;
        ms = Math.floor(cntDown % spdVal);
        ms = ms < 10 ? "0" + ms : ms;
        var result = mn + ":" + sc;
        if (document.getElementById("timer")) {
          document.getElementById("timer").innerHTML = result;
        }
      }, spd);
    });
    // end clock 2 minutes

  // popup
  jQuery(function ($) {
    var OpenPopupLink = $("a.open-popup-link");
    var ClosePopupLink = $("a.close-popup-link");
    var PopupWrapper = $(".popup-wrapper");

    OpenPopupLink.click(function () {
      var clickId = this.id;
      $("#popup-" + clickId).fadeIn(300);
      PopupWrapper.fadeIn(300);
      $("body").css("overflow", "hidden").css("height", "100%");
    });
    ClosePopupLink.click(function () {
      $(this).parents(".popup").fadeOut(300);
      PopupWrapper.fadeOut(300);
      $("body").css("overflow", "auto").css("height", "auto");
    });
    $(document).keydown(function (eventObject) {
      if ($('[id^="popup-"]').is(":visible")) {
        if (eventObject.which == "27") {
          $('[id^="popup-"]').fadeOut(300);
          PopupWrapper.fadeOut(300);
          $("body").css("overflow", "auto").css("height", "auto");
        }
      }
    });
  });
  // end popup

  //date
  jQuery(function ($) {
    var mydate = new Date();
    var montharray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    $(".date-container").text(" " + montharray[mydate.getMonth()] + " " + mydate.getDate() + ", " + mydate.getFullYear());
  });
  //date end

  jQuery(function ($) {
    var mydate = new Date();
    var montharray = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ];
    $(".date-container_fr").text(mydate.getDate() + " " + montharray[mydate.getMonth()] + " " + " " + mydate.getFullYear());
  });
  
  jQuery(function($) {
    var mydate = new Date();
    var month = mydate.getMonth() + 1;
    var dayarray = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi ",
      "Jeudi",
      "Vendredi",
      "Samedi"];
    $('.date-container2_fr').
        text(dayarray[mydate.getDay()] + ', ' + mydate.getDate() + '/' + month + '/' + mydate.getFullYear());
  });
  
  jQuery(function ($) {
    var mydate = new Date();
    var montharray = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    $(".date-container_es").text("de " + mydate.getDate() + " de " + montharray[mydate.getMonth()] + " de " +  mydate.getFullYear());
    $(".date-container3_es").text(montharray[mydate.getMonth()] + " " + mydate.getDate() + ", " +  mydate.getFullYear());
  });
  

  jQuery(function($) {
    var mydate = new Date();
    var month = mydate.getMonth() + 1;
    var dayarray = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'];
    $('.date-container2').
        text(dayarray[mydate.getDay()] + ', ' + month + '/'
            + mydate.getDate() + '/' + mydate.getFullYear());
  });
  

  
  jQuery(function($) {
    var mydate = new Date();
    var month = mydate.getMonth() + 1;
    var dayarray = [
      'Bomingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'];
    $('.date-container2_es').
        text(dayarray[mydate.getDay()] + ', ' + month + '/'
            + mydate.getDate() + '/' + mydate.getFullYear());
  });

  //date de
  jQuery(function ($) {
    var mydate = new Date();
    var montharray = [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ];
    $(".date-container_de").text(' ' + mydate.getDate() + ". " + montharray[mydate.getMonth()] + " " + mydate.getFullYear());
  });
  //date de end

  //date ru
  jQuery(function ($) {
    var mydate = new Date();
    var montharray = [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ];
    $(".date-container_ru").text(mydate.getDate() + ' ' + montharray[mydate.getMonth()]);
  });
  //date de end

  //---------------------modal------------------//
  $('.modal-link').click(function(event) {
    event.preventDefault();
    this.blur();
    $.get(this.href, function(html) {
      $(html).appendTo('body').modal({
        fadeDuration: 100,
        fadeDelay: 0.30,
      });
      $(".modal.popup.video").on($.modal.CLOSE, function() {
        $(this).remove()
      })
      if($('.popup').hasClass('geo-terms')) {
         changeGeo ();
      }
      if($('.popup').hasClass('get-phones')) {
        window.offer.getPhone();
      }
    });
  });
  //---------------------End modal------------------//

//---------------------Timer Countdown------------------//
function Countdown(elem, seconds) {
  var that = {};

  that.elem = elem;
  that.seconds = seconds;
  that.totalTime = seconds * 100;
  that.usedTime = 0;
  that.startTime = +new Date();
  that.timer = null;

  that.count = function () {
    that.usedTime = Math.floor((+new Date() - that.startTime) / 10);

    var tt = that.totalTime - that.usedTime;
    if (tt <= 0) {
      that.elem.html('00:00.00');
      clearInterval(that.timer);
    } else {
      var mi = Math.floor(tt / (60 * 100));
      var ss = Math.floor((tt - mi * 60 * 100) / 100);
      var ms = tt - Math.floor(tt / 100) * 100;

      that.elem.html(that.fillZero(mi) + ":" + that.fillZero(ss) + "." + that.fillZero(ms));
    }
  };

  that.init = function () {
    if (that.timer) {
      clearInterval(that.timer);
      that.elem.html('00:00.00');
      that.totalTime = seconds * 100;
      that.usedTime = 0;
      that.startTime = +new Date();
      that.timer = null;
    }
  };

  that.start = function () {
    if (!that.timer) {
      that.timer = setInterval(that.count, 10);
    }
  };

  that.fillZero = function (num) {
    return num < 10 ? '0' + num : num;
  };

  return that;
}

jQuery(function ($) {
  if ($('#cdmintimer')) {
    var span = $('#cdmintimer');
    var countdown = new Countdown(span, Number($('#cdmintimer').attr("min") * 60));
    countdown.start();
  }
});
//---------------------Timer Countdown------------------//

//---------------------Shipping Date------------------//
jQuery(function ($) {
  var shipDate = $("#lf-shipdate");
  if (shipDate) {
    var date = new Date();
    var shipdate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + Number(shipDate.attr("addDays")));
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    shipDate.html(shipdate.toLocaleDateString(shipDate.attr("data-locale"), options));
  }
});
//---------------------Shipping Date------------------//

jQuery(function ($) {
  var date = new Date();
  $(".container-year").text(date.getFullYear());
})