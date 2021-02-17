
// Check Order Form
var feed = {
  submit: function(elem) {
	var form;
	jQuery(elem).parents().each(function() {
	  if(jQuery(this).is('form'))
		form = jQuery(this);
		});
	
	var postParams = {
	  method: 'feedback',
	  name: form.find('[name=name]').val(),
	  phone: form.find('[name=phone]').val()
	};
	
	jQuery('.errorMessage').remove();
	
	var rename = /^[a-zA-Zа-яА-ЯёЁ ]*$/i;
	var rephone = /^[0-9\-\+\(\) ]*$/i;
	var addr = /\d+/;
	var addr2 = /^\d+$/;

	if(!postParams.name.length || postParams.name == form.find('[name=name]').attr('data-holder'))
	  return feed.errorMessage(form.find('[name=name]'), 'Вы не заполнили поле "ФИО"');

	if(postParams.name.length < 4)
	  return feed.errorMessage(form.find('[name=name]'), 'Неверно заполнено поле "ФИО"');
	  
	if(!postParams.phone.length || postParams.phone == form.find('[name=phone]').attr('data-holder') || postParams.phone.length < 5)
	  return feed.errorMessage(form.find('[name=phone]'), 'Вы не заполнили поле "Телефон"');
	  
	if(!rephone.test(postParams.phone))
	  return feed.errorMessage(form.find('[name=phone]'), 'Неверно заполнено поле "Телефон"');
	
	form.submit();
	return false;
  },
  errorMessage: function(elem, msg) {
	jQuery('<div class="errorMessage">' + msg + '</div>').appendTo('body').css({
	  'left': jQuery(elem).offset().left,
	  'top': jQuery(elem).offset().top + 30
	});
	return false;
  }
};


/**
 * Мягкий скролинг до якоря
 */
var scrollTo = function() {

	var anchor = $(this).attr("href");
	//положение элемента
	var hAnchor = $(anchor).offset().top;	

	//скролим
	$('html,body').animate( { scrollTop: hAnchor }, 700 );

	return false;
};
$(function(){
    $('.js-scrollto').on('click', scrollTo);
});



$(function(){
	$('input[name*="phone"]').each(function(){$(this).attr("placeholder", "Телефон");});
	$('input[name*="name"]').each(function(){$(this).attr("placeholder", "ФИО");});
});




