var startLoadTime = Date.now();
$(document).on('ready', function () {
//  var loadTime = (Date.now() - startLoadTime) / 1000;
//  if (loadTime <= 3) {
//    setTimeout(function () {
//      appPreStart();
//    }, 10000)
//  } else {
//    appPreStart();
//  }
  
  var botTypingTimeout = 2; //sec
  var waitingTimeout = 20; //sec
  
  var msgForm = $('.message-form');
  var userInput = msgForm.find('.message-form__input');
  var layout = $('#layout');
  var isGo = true;
  var waitingTimerId = null;
  var waitingCounter = 0;
  
  var chat = {
    user: {},
    position: 0,
    msg: []
  };
  var templateStore = {
    male: [],
    female: [],
    helpers: [],
    helperEnd: [],
    isright: []
  };
  
  function appPreStart() {
    $('.preloader').toggleClass('active');
    $('.start-block').fadeIn();
    $('.start-block__btn').on('click', function () {
      appStart();
      chatInit(chat.position);
    });
    parser();
  }
  
  function appStart() {
    $('.start-block').fadeOut(700);
    $('.title__text-wrap').children().toggleClass('active');
    msgForm.toggleClass('active');
    msgForm.find('.message-form-form').off('submit');
    msgForm.on('submit', formSubmit);
  }
  
  function validateForm(value, query) {
    var result = true;
    if (query === 'name') {
      result = value.length >= 3;
    } else if (query === 'age') {
      result = +value >= 5 && +value <= 99;
    } else if (query === 'weight') {
      result = +value >= 30 && +value <= 300;
    } else if (query === 'loseweight') {
      result = +value <= +chat.user.weight && +value <= +chat.user.weight * 0.8;
    } else if (query === 'height') {
      result = +value >= 90 && +value <= 250;
    } else if (query === 'sleeptime') {
      result = +value >= 1 && +value <= 14;
    }
    return result;
  }
  
  function formSubmit(e) {
    e.preventDefault();
    var value = userInput.val().trim();
    if (!value.length) {
      return;
    }
    if (layout.children().last('.message').data('end')) {
      userMessageRender(value);
      var index = getRandomInt(0, templateStore.helperEnd.length - 1);
      botMessageRender(templateStore.helperEnd[index]).appendTo(layout);
      scrollBottom();
      return;
    }
    if (userInput.data('questions')) {
      showHint(templateStore.helpers[6].text);
      return;
    }
    var query = userInput.data('query');
    
    if (!validateForm(value, query)) {
      userMessageRender(value);
      var rand = getRandomInt(0, templateStore.isright.length - 1);
      botMessageRender(templateStore.isright[rand]).appendTo(layout);
      scrollBottom();
      return;
    }
    if (query === 'name') {
      chat.user.name = value;
      chat.user.ava = value.charAt(0);
    } else if (query) {
      chat.user[query] = value;
    }
    hideHint();
    userMessageRender(value);
    chatInit(++chat.position);
    userInput.val('');
    clearInterval(waitingTimerId);
    waitingTimerId = null;
  }
  
  function parser() {
    var startParseTime = Date.now();
    
    function getId(str) {
      return parseInt(str.replace('msg', ''));
    }
    
    function postData($elem) {

      var data = {
        id: getId($elem.data('id')),
        text: $elem.find('.msg').html() || '',
        type: $elem.data('type') || 'message',
        timeout: $elem.data('timeout') || botTypingTimeout
      };
      
      if ($elem.children().is('img') && data.type !== 'question-body-type') {
        data.img = $elem.children('img').attr('src');
      } else if (data.type === 'question-body-type') {
        data.imgs = [];
        $elem.children('img').each(function (i, img) {
          data.imgs.push($(img).attr('src'));
        });
      } else if (data.type === 'question') {
        data.questions = [];
        $elem.children('.question-var').each(function (i, txt) {
          data.questions.push({
            text: $(txt).html(),
            value: $(txt).data('value') || null
          });
        })
      }
      
      if ($elem.children().is('.hint')) {
        data.hint = $elem.children('.hint').text();
      }
      
      if ($elem.data('query')) {
        data.query = $elem.data('query');
      }
      if ($elem.data('agebefore')) {
        data.agebefore = $elem.data('agebefore');
      }
      if ($elem.data('end') === '') {
        data.end = true;
      }
      return data;
    }
    
    $('#data').children().each(function (i, elem) {
      var $elem = $(elem);
      var gender = $elem.data('gender');
      var post = postData($elem);
      if (post.type === 'helper') {
        templateStore.helpers.push(post);
        return;
      }
      if (post.type === 'waiting') {
        post.gender = gender || null;
        templateStore.helpers.push(post);
        return;
      }
      if (post.type === 'helper-end') {
        post.end = true;
        templateStore.helperEnd.push(post);
        return;
      }
      if (post.type === 'isright') {
        templateStore.isright.push(post);
        return;
      }
      if (gender === 'female') {
        templateStore.female.push(post);
      } else if (!gender) {
        templateStore.female.push(post);
        templateStore.male.push(post);
      }
      else if (gender === 'male') {
        templateStore.male.push(post);
      }
    });
//    console.log(templateStore);
    console.log((Date.now() - startParseTime) / 100 + ' sec');
  }
  
  function chatInit(position) {
    var gender = 'male';
    if (chat.user.gender === 'female') {
      gender = 'female';
    }
    var data = templateStore[gender];
    userInput.data('questions', null);
    var i = position;
    var timer = setInterval(function () {
      if (!isGo) {
        return;
      }
      if (i >= data.length) {
        clearInterval(timer);
      } else {
        if (chat.user.age >= data[i].agebefore) {
          chat.position = i;
          clearInterval(timer);
          chatInit(++chat.position);
          return;
        } else if (data[i].agebefore) {
          data.splice(i + 1, 1);
        }
        showTyping(data[i]);
        if (data[i].questions || data[i].query || data[i].imgs) {
          if (data[i].query) {
            userInput.data('query', data[i].query);
          }
          if (data[i].questions || data[i].imgs) {
            userInput.data('questions', 'questions');
          }
          chat.position = i;
          clearInterval(timer);
        }
        i++;
      }
    }, 500);
  }
  
  function frameMessageRender() {
    $("a").leadprofit({ hash: "e13d8c8c-4525-4f2a-9e66-29724c99269d" }).leadprofitPreland();
    var msgBox = $(document.createElement('div')).addClass('message');
    var msgHld = $(document.createElement('div')).addClass('message-holder');
    var msgAvaWrap = $(document.createElement('div')).addClass('message__ava-wrap');
    var msgBodyWrap = $(document.createElement('div')).addClass('message__body-wrap');
    var msgBody = $(document.createElement('div')).addClass('message__body');
    
    msgBody.appendTo(msgBodyWrap);
    msgHld.appendTo(msgBox);
    msgAvaWrap.appendTo(msgHld);
    msgBodyWrap.appendTo(msgHld);
    
    return msgBox;
  }
  
  function botMessageRender(data) {
    var frameMsg = frameMessageRender();
    frameMsg.data('type', 'bot');
    frameMsg.data('id', chat.position);
    if (data.end) {
      frameMsg.data('end', true);
    }
    if (layout.children().last('.message').data('type') !== 'bot') {
      var botAva = $('.start-block__ava-img').attr('src');
      var msgAva = $(document.createElement('div')).addClass('message__ava');
      var msgAvaImg = $(document.createElement('img')).addClass('message__ava-img');
      msgAva.appendTo(frameMsg.find('.message__ava-wrap'));
      msgAvaImg.appendTo(msgAva);
      msgAvaImg.attr('src', botAva);
    }
    
    var msgBodyTxt = $(document.createElement('p')).addClass('message__body-text');
    var msgTime = $(document.createElement('p')).addClass('message__time');
    
    msgBodyTxt.appendTo(frameMsg.find('.message__body'));
    msgTime.appendTo(frameMsg.find('.message__body-wrap'));
    msgTime.text(getTimeStamp(new Date));
    msgBodyTxt.html(data.text);
    
    var nameElem = msgBodyTxt.find('.name');
    var heightElem = msgBodyTxt.find('.height');
    var loseWeightElem = msgBodyTxt.find('.loseweight');
    
    if (nameElem) {
      nameElem.text(chat.user.name);
    }
    if (heightElem) {
      heightElem.text(chat.user.height);
    }
    if (loseWeightElem) {
      loseWeightElem.text(chat.user.loseweight);
    }
    
    if (data.img) {
      var msgBodyImg = $(document.createElement('img')).addClass('message__body-img');
      msgBodyImg.attr('src', data.img);
      msgBodyImg.appendTo(frameMsg.find('.message__body'));
    }
    
    if (data.type === 'question') {
      data.questions.forEach(function (item) {
        var question = $(document.createElement('button')).addClass('message__btn');
        question.html(item.text);
        question.appendTo(frameMsg.find('.message__body-wrap'));
        question.data('value', item.value);
        question.on('click', questionHandler);
      });
    } else if (data.type === 'question-body-type') {
      frameMsg.find('.message__ava-wrap').remove();
      frameMsg.find('.message__body-wrap').remove();
      data.imgs.forEach(function (item) {
        var card = $(document.createElement('div')).addClass('message__card');
        var img = $(document.createElement('img')).addClass('message__card-img');
        img.attr('src', item);
        img.appendTo(card);
        card.appendTo(frameMsg.find('.message-holder'));
        card.on('click', questionHandler);
      });
    }
    return frameMsg;
  }
  
  function showTyping(data) {
    isGo = false;
    var typing = typingMessageRender();
    var frameMsg = botMessageRender(data);
    typing.appendTo(layout);
    setTimeout(function () {
      frameMsg.appendTo(layout);
      typing.remove();
      if (data.hint) {
        showHint(data.hint);
      }
      scrollBottom();
      if (window.innerWidth >= 768) {
        userInput.focus();
      }
      
      isGo = true;
      waitingMessageRender(data);
    }, data.timeout * 1000);
    
  }
  
  function getRandomInt(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  function waitingMessageRender(data) {
    if (!(data.questions || data.query || data.imgs)) {
      return;
    }
    var msgCounter = 0;
    
    waitingTimerId = setInterval(function () {
      if (msgCounter >= 2) {
        clearInterval(waitingTimerId);
        return;
      }
      msgCounter++;
      var data = templateStore.helpers.filter(function (item) {
        if (chat.user.gender) {
          return (item.type === 'waiting' && item.gender === chat.user.gender) || (item.type === 'waiting' && !item.gender);
        } else {
          return item.type === 'waiting' && !item.gender;
        }
      });
      var frame = botMessageRender(data[waitingCounter++]);
      if (waitingCounter >= data.length) {
        waitingCounter = 0;
      }
      
      frame.data('waiting', true);
      scrollBottom();
      frame.css({display: 'none'});
      frame.insertBefore(layout.children(':last-child'));
      frame.show(1000);
    }, waitingTimeout * 1000);
  }
  
  function questionHandler(e) {
    var elem = $(e.currentTarget);
    var height = elem.innerHeight();
    if (!elem.parents('.message').is(':last-child')
      && !layout.children().last('.message').data('waiting')) {
      return;
    }
    if (elem.data('value')) {
      chat.user.gender = elem.data('value');
    }
    if (elem.hasClass('message__card')) {
      elem.siblings('.message__card').fadeOut(600, function () {
        elem.parents('.message-holder').css({'height': 30 + height + 'px'});
        elem.attr('disabled', 'disabled')
          .animate({
            right: '0'
          }, 1000);
      });
    } else {
      elem.siblings('.message__btn').fadeOut(600, function () {
        var bodyHeight = elem.siblings('.message__body').innerHeight();
        elem.parents('.message__body-wrap').css({'height': 40 + bodyHeight + height + 'px'});
        elem.attr('disabled', 'disabled')
          .animate({
            right: '0'
          }, 1000);
      });
    }
    
    clearInterval(waitingTimerId);
    hideHint();
    chatInit(++chat.position);
  }
  
  function userMessageRender(val) {
    var frameMsg = frameMessageRender();
    
    frameMsg.addClass('message_user');
    frameMsg.find('.message__body-wrap').prependTo(frameMsg.find('.message-holder'));
    
    var msgAva = $(document.createElement('div')).addClass('message__ava');
    var msgAvaImg = $(document.createElement('div')).addClass('message__ava-img');
    var msgAvaImgSym = $(document.createElement('span')).addClass('message__ava-symbol');
    var msgBodyTxt = $(document.createElement('p')).addClass('message__body-text');
    var msgTime = $(document.createElement('p')).addClass('message__time');

//    msgAva.appendTo(frameMsg.find('.message__ava-wrap'));
//    msgAvaImg.appendTo(msgAva);
//    msgAvaImgSym.appendTo(msgAvaImg);
    
    msgTime.text(getTimeStamp(new Date));
    msgAvaImgSym.text(chat.user.ava || '');
    
    msgBodyTxt.appendTo(frameMsg.find('.message__body'));
    msgBodyTxt.text(val);
    
    msgTime.appendTo(frameMsg.find('.message__body-wrap'));
    
    frameMsg.appendTo(layout);
    scrollBottom();
//    userInput.focus();
  }
  
  function showHint(hint) {
    $('.message-form-hint').text(hint).addClass('active');
  }
  
  function hideHint() {
    $('.message-form-hint').removeClass('active');
  }
  
  function getTimeStamp(time) {
    var hours = time.getHours();
    var min = time.getMinutes();
    if (hours <= 9) {
      hours = '0' + hours;
    }
    if (min <= 9) {
      min = '0' + min;
    }
    return hours + ':' + min;
  }
  
  function scrollBottom() {
    $(".content").animate({
      scrollTop: layout.outerHeight()
    }, 1000);
  }
  
  function typingMessageRender() {
    var typingFrame = frameMessageRender();
    var typing = $(document.createElement('span')).addClass('message__body-typing');
    typing.appendTo(typingFrame.find('.message__body'));
    return typingFrame;
  }
  
  
  function animateSVG() {
    function init() {
      var svg = Snap('.load-animation');
      var firstCircle = svg.circle(250, 240, 0);
      var secondCircle = svg.circle(250, 240, 0);
      var thirdCircle = svg.circle(250, 240, 0);
      
      firstCircle.attr({
        fill: '#8fb53c'
      });
      secondCircle.attr({
        fill: '#aed241'
      });
      thirdCircle.attr({
        fill: '#8fb53c'
      });
      
      firstCircle.animate({r: 600}, 700, function () {
        secondCircle.animate({r: 600}, 700, function () {
          thirdCircle.animate({r: 600}, 700, function () {
            appPreStart();
          });
        });
      });
    }
    
    init();
  }
  
  animateSVG();
});


