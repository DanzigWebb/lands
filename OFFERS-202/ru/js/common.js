(function($)
{
	var jQuery = $;

	function getParameterByName(name, url)
	{
		if(!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, '\\$&').toLowerCase();// This is just to avoid case sensitiveness for query parameter name
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if(!results) return null;
		if(!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}

	jQuery.init = function(params)
	{
		var geo = getParameterByName('geo') == null ? '' : getParameterByName('geo').toLowerCase();
		var web_id = getParameterByName('web_id') ? getParameterByName('web_id') : '';
		var click_id = getParameterByName('click_id') ? getParameterByName('click_id') : '';
		var offer_id = getParameterByName('offer_id') ? getParameterByName('offer_id') : '';
		var test = getParameterByName('test') == null ? false : true;
		var land_lang = getParameterByName('lang') ? getParameterByName('lang') : 'RU';

		var currency = '';
		var price = 0;
		var old_price = 0;
		var delivery_price = 0;
		var sum_price = 0;
		var time_zone = parseInt((new Date().getTimezoneOffset())/-60);
		if(time_zone > 0) {
			time_zone = '+' + time_zone;
		}
		if(typeof(params) !== 'object') {
			params = {};
		}

		$.post('/order/index.php',
			{
                click_id: click_id,
                action: 'confirm_transit'
			},
			function (data){},
			'json'
		);

        var formSelector = params.reportFormSelector != undefined ? 'form:not('+ params.reportFormSelector +')' : 'form';

		var messages = {
			ru: {
				alert1: 'Укажите корректные ФИО!',
				alert2: 'Номер телефона может содержать только цифры, символы "+", "-", "(", ")" и пробелы',
				alert3: 'В вашем телефоне слишком мало цифр!'
			},
			hr: {
				alert1: 'Navedite tačno ime i prezime!',
				alert2: 'Broj telefona može da sadrži samo cifre "+" , " - " , " ( " , " ) " , i razmak',
				alert3: 'Vaš telefon sadrži suviše malo brojka !'
			},
			mk: {
				alert1: 'Пополнете уште еднаш коректни податоци',
				alert2: 'Бројот на телефонот може да содржи само цифри симболи "+" , " - " , " ( " , " ) " , празни места.',
				alert3: 'Во вашиот телефон има многу малку цифри!'
			},
			es: {
				alert1: 'Indique el nombre y los apellidos correctamente!',
				alert2: 'El número de teléfono puede contener solamente números, símbolos "+", "-", "(", ")" y espacio.',
				alert3: 'El número indicado está incompleto!'
			},
			it: {
				alert1: 'Indique el nombre y los apellidos correctamente!',
				alert2: 'Inserisci il nome corretto! Il numero di telefono può contenere solo cifre, “+”, “-”, “(”, “)”, e spazi',
				alert3: 'Il tuo numero di telefono è troppo breve!'
			},
			en: {
				alert1: 'Please enter correct full name',
				alert2: 'Enter correct name! The phone number may contain only digits, "+", "-", "(", ")", and spaces',
				alert3: 'Your phone number is too short!'
			},
			pt: {
				alert1: 'Preenche seu nome corretamente',
				alert2: 'O número de telefone pode conter apenas dígitos, "+", "-", "(", ")", e espaços',
				alert3: 'Seu número de telefone é muito curto!'
			}
		};
		messages.ua = messages.ru;
		messages.by = messages.ru;
		messages.kz = messages.ru;
		messages.rs = messages.hr;
		messages.ba = messages.hr;
		messages.hu = messages.en;
		var lang = (messages[geo] === undefined) ? 'ru' : geo;

		var phonePattern = {
			'ru': '+7 (ddd) ddd-dd-dd',
			'ua': '+38-ddd-ddd-dd-dd',
            'by': '+375 ddd ddd ddd',
			'kz': '+7 ddd ddd dddd',
			'kg': '+ddd ddd dd dd dd',
			'md': '0 ddd ddddd',
			'az': '+ddd-dd-ddd-dd-dd',
			'ge': '+995 ddd dd dd dd',
			'es': '+34 ddd dd dd dd',
            /* add */
            'it': '+39-ddd-ddd-dddd',
            'esp': '+34 ddd dd dd dd',
            'pt': '+351 ddd ddd ddd',
            'prt': '+351 ddd ddd ddd',
            'id': '+62 ddd ddd ddd',
			'gr': '+30 ddd ddddddd',
			'cy': '+357 dd dddddd',
            'ro': '+40 fdd ddd ddd? d',
            'bg': '+359 fdd dd ddd? d',
            /* --- */
            'cz': '+420 ddd ddd ddd',
			'sk': '+421 ddd ddd ddd',
			'pl': '+48 ddd ddd ddd',
			'hu': '+36 d ddd dddd',
			'hr': '+385 d dddd ddd? d',
			'mx': '+52 dd dddd dddd',
			'pe': '+51 ddd ddd dd?d'
		};

		var query = '';
		var counters = ['ya','ga','vk','mr','fb','fb_ev', 'tt'];

		for(var i=0; i < counters.length; i++) {
			if(getParameterByName(counters[i])) {
				query += (query.length ? '&' : '?') + counters[i] + '=' + getParameterByName(counters[i]) ;
			}
		}

		$('input[type="hidden"]').not('[name="comment"]')
								 .not('[name="info"]')
								 .not('[name="good_id"]')
								 .not('[name="good_price"]')
								 .remove();
		$('form').append(
			'<input name="offer_id" type="hidden" value="">'+
			'<input name="geo" type="hidden" value="">' +
			'<input name="web_id" type="hidden" value="">' +
			'<input name="click_id" type="hidden" value="">' +
			'<input name="time_zone" type="hidden" value="+3">' +
			'<input name="lang" type="hidden" value="RU">' +
			(test ? '<input name="test" type="hidden" value="">' : '')
		);

		$('input[name="offer_id"]').val(offer_id);
		$('input[name="geo"]').val(geo);
		$('input[name="web_id"]').val(web_id);
		$('input[name="click_id"]').val(click_id);
		$('input[name="time_zone"]').val(time_zone);
		$('input[name="lang"]').val(land_lang);

		$('form').attr('action', '/order/' + query);
        if (params.reportFormSelector != undefined) {
            $(params.reportFormSelector).attr('action', '/order/send_mail.php?' + query)
        }
		$('form').attr('method', 'POST');
		$('form').attr('onsubmit', '');
		$('form').attr('onclick', '');

		$.post('/order/get_offer_data.php',
			{
				offer_id: offer_id,
				geo: geo
			},
			function (data) {
                if(data.geo != undefined) {
                    geo = data.geo.toLowerCase();
                    $('input[name="geo"]').val(geo);
                    if(messages[geo] !== undefined) lang = geo;
                }
                if(data.price != undefined) price = data.price;
                if(data.currency != undefined) currency = data.currency;
                if(data.delivery_price != undefined) delivery_price = data.delivery_price;
                if(data.old_price != undefined) {
                    old_price = data.old_price;
                }
                else {
                    old_price = price * 2;
                }
                sum_price = parseFloat(price) + parseFloat(delivery_price);

                if(params.currencySelector != undefined) {
                    $(params.currencySelector).text(currency);
                }
                else {
                    price += ' ' + currency;
                    old_price += ' ' + currency;
                    delivery_price += ' ' + currency;
                    sum_price += ' ' + currency;
                }
                if(params.priceSelector != undefined) {
                    $(params.priceSelector).text(price);
                }
                if(params.oldPriceSelector != undefined) {
                    $(params.oldPriceSelector).text(old_price);
                }
                if(params.deliveryPriceSelector != undefined) {
                    $(params.deliveryPriceSelector).text(delivery_price);
                }
                if(params.sumPriceSelector != undefined) {
                    $(params.sumPriceSelector).text(sum_price);
                }

                // Change privacy lang
                $('a[href="/privacy/"]').attr('href', '/privacy_policy/?geo=' + geo);

                // Load inputmask script
                if(phonePattern[geo] !== undefined) {
                    $('body:first').append('<script src="/libs/js/maskinput.js"></script>');
                    if($.mask !== undefined) {
                        $.mask.definitions['9'] = '';
                        $.mask.definitions['f'] = '[1-9]';
                        $.mask.definitions['d'] = '[0-9]';
                        $("input[name=phone]").mask(phonePattern[geo]);
                    }
                }

                // Load GDPR
                $('head:first').append('<link rel="stylesheet" type="text/css" href="/libs/js/gdpr.css">');
                $('head:first').append('<script src="/libs/js/gdpr.js"></script>');
                $(document).gdprCookieLaw({
                    moreLinkHref: '/privacy_policy/?geo=' + geo,
                    theme: 'theme-1',
                    position: 'bottom-right',
                    width: '760px',
                    margin: '15px',
                    animation: 'fade-slide',
                    btnAcceptText: 'Ok'
                });

                // Callback after changing prices
                if(params.callback != undefined) {
                    var data_for_callback = {
                        geo: geo,
                        price: parseFloat(price),
                        currency: currency,
                    };
                    params.callback(data_for_callback);
                }
            },
			'json'
		);

		$(formSelector).submit(function()
		{
			var $this = $(this);
			$('input[name="name"]', this).val($.trim($('input[name="name"]', this).val()));
			
			if(!$('input[name="name"]', this).val()) {
				alert(messages[lang].alert1);
				return false;
			}
			var name_val = $('input[name="name"]', this).val();
			var phone_val = $('input[name="phone"]', this).val();
			var reg1 = new RegExp('[^0-9]*', 'g'),
				reg2 = new RegExp('[^0-9-+ ()]', 'g');
			var phone_txt = phone_val.replace(reg1, '');
			if(phone_val.search(reg2) != -1) {
				alert(messages[lang].alert2);
				return false;
			}
			if(!phone_txt || phone_txt.length < 7) {
				alert(messages[lang].alert3);
				return false;
			}

			if (params.commentBuildFields != undefined) {
				var comment = [];
				$.each(params.commentBuildFields, function (i, v) {
					comment.push($(v).val());
                });
				comment = comment.join(', ');

				if ($('[name="comment"]', $this).length <1) {
					$this.append('<input type="hidden" name="comment" value="">');
				} else {
					comment = $('[name="comment"]', $this).val() + ', ' + comment;
				}
				$('[name="comment"]', $this).val(comment);
			}

			return true;
		});

        if (params.reportFormSelector != undefined) {
            $(params.reportFormSelector).on('submit', function(e)
            {
                e.preventDefault();
                var rFrm = $(this);
                $('input[name="name"]', this).val($.trim($('input[name="name"]', this).val()));

                if(!$('input[name="name"]', this).val()) {
                    alert(messages[lang].alert1);
                    return false;
                }
                var name_val = $('input[name="name"]', this).val();
                var phone_val = $('input[name="phone"]', this).val();
                var message_val = $('input[name="message"]', this).val();
                var email_val = $('input[name="email"]', this).val();
                var reg1 = new RegExp('[^0-9]*', 'g'),
                    reg2 = new RegExp('[^0-9-+ ()]', 'g');
                var phone_txt = phone_val.replace(reg1, '');
                if(phone_val.search(reg2) != -1) {
                    alert(messages[lang].alert2);
                    return false;
                }
                if (!email_val || email_val.length < 6) { // a@a.aa
                    //
                }
                if(!phone_txt || phone_txt.length < 7) {
                    alert(messages[lang].alert3);
                    return false;
                }

                $.post($(this).attr('action'),
                    $(this).serializeArray(),
					function (result) {
                        result = $.parseJSON(result);
                        console.log(result);
                        if (result.result) {
                            rFrm.trigger('reset');
                            //return true;
                        } else {
                            //return false;
                        }
                        if (params.reportCallback != undefined) {
                            params.reportCallback(result);
                        }
					},
					'json'
				);
                /*$.ajax({
                    method: 'POST',
                    url: $(this).attr('action'),
                    data: $(this).serializeArray(),
                    success: function(result)
                    {
                        result = $.parseJSON(result);
                        console.log(result);
                        if (result.result) {
                            rFrm.trigger('reset');
                            //return true;
                        } else {
                            //return false;
                        }
						if (params.reportCallback != undefined) {
							params.reportCallback(result);
						}
                    }
                });*/

                return false;
            });
        }
	} // init

	jQuery.yaMetrika = function(param)
	{
		try {
			var yaID = parseInt(getParameterByName(param));
			if(yaID) {
				(function (d, w, c) {
					(w[c] = w[c] || []).push(function() {
						try {
							w['yaCounter' + yaID] = new Ya.Metrika({
								id:yaID,
								clickmap:true,
								trackLinks:true,
								accurateTrackBounce:true,
								webvisor:true
							});
						} catch(e) { }
					});

					var n = d.getElementsByTagName('script')[0],
						s = d.createElement('script'),
						f = function () { n.parentNode.insertBefore(s, n); };
					s.type = 'text/javascript';
					s.async = true;
					s.src = 'https://mc.yandex.ru/metrika/watch.js';

					if(w.opera == '[object Opera]') {
						d.addEventListener('DOMContentLoaded', f, false);
					} else { f(); }
				})(document, window, 'yandex_metrika_callbacks');
			}
		} catch(e) {}
	}; // yaMetrika

	jQuery.counterGA = function(param)
	{
		try {
			var gaID = getParameterByName(param);
			if(gaID) {
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

				ga('create', gaID, 'auto');
				ga('send', 'pageview');	
			}
		} catch(e) {}
	}; // counterGA

    jQuery.pixelGa = function(param, param2)
    {
        try {
            var gaID = getParameterByName(param);
            var gaConvID = getParameterByName(param2);
            if(gaID) {

                var n = d.getElementsByTagName('script')[0],
                    s = d.createElement('script'),
                    f = function () { n.parentNode.insertBefore(s, n); };
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaID;

                if(w.opera == '[object Opera]') {
                    d.addEventListener('DOMContentLoaded', f, false);
                } else {
                	f();
                }

                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', gaID);

                var match = window.location.href.split('?')[0].match(/\/\/[^\/]*(\/order\/)/);

                if(match != null && match[1] == '/order/')
                {
                    gaConvID = gaConvID.split('|');
					var leadId = getParameterByName('lead_id');

                    for(var i = 0 ; i < gaConvID.length ; i++ )
                    {
                        gtag('event', 'conversion', {
                            'send_to': gaConvID[i],
                            'transaction_id': leadId
                        });
                    }
                }

            }
        } catch(e) {}
    }; // counterGA

	jQuery.counterTT = function (param)
	{
		try {
			let tikTokKey = getParameterByName(param);
			if (tikTokKey) {
				(function() {
					var ta = document.createElement('script'); ta.type = 'text/javascript'; ta.async = true;
					ta.src = document.location.protocol + '//' + 'analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=' + tikTokKey;
					var s = document.getElementsByTagName('script')[0];
					s.parentNode.insertBefore(ta, s);
				})();
			}
		} catch (e) {}
	};

	jQuery.counterVK = function(param)
	{
		try {
			var vkID = getParameterByName(param);
			if(vkID) {
				(window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=' + vkID;
			}
		} catch(e) {}
	}; // counterVK

	jQuery.counterMR = function(param)
	{
		try {
			var mrID = getParameterByName(param);
			if(mrID) {
				var _tmr = window._tmr || (window._tmr = []);
				_tmr.push({id: mrID, type: 'pageView', start: (new Date()).getTime()});
				(function (d, w, id) {
					if(d.getElementById(id)) return;
					var ts = d.createElement('script'); ts.type = 'text/javascript'; ts.async = true; ts.id = id;
					ts.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//top-fwz1.mail.ru/js/code.js';
					var f = function () {var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ts, s);};
					if(w.opera == '[object Opera]') { d.addEventListener('DOMContentLoaded', f, false); } else { f(); }
				})(document, window, 'topmailru-code');
			}
		} catch(e) {}
	}; // counterMR

	jQuery.counterFB = function(param)
	{
        var fbEventsArr = [
            {id: 1, text: 'Lead'},
            {id: 2, text: 'AddToCart'},
            {id: 4, text: 'Purchase'}
        ];
        try {
            var fbID = getParameterByName(param);
            var fbEvents = parseInt(getParameterByName('fb_ev'));
            var responseCode = parseInt(getParameterByName('status_code'));
            console.log('Facebook pixelId: ', fbID, ', event: ', fbEvents);
            if (fbID)
            {
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                    document,'script','//connect.facebook.net/en_US/fbevents.js');
                // Insert Your Facebook Pixel ID below.
                fbq('init', fbID);
                fbq('track', 'PageView');

                var match = window.location.href.split('?')[0].match(/\/\/[^\/]*(\/order\/)/);

                if(match != null && match[1] == '/order/' && responseCode == 200)
                {
                	$.each(fbEventsArr, function (i, fbEvent) {
                        console.log(fbEvent, fbEvents, (fbEvent.id & fbEvents));
                        if(fbEvent.id & fbEvents && fbEvent.id != 4) {
                            fbq('track', fbEventsArr[i].text);
                        }

                        if(fbEvent.id & fbEvents && fbEvent.id == 4) {
                            fbq('track', fbEventsArr[i].text, '{currency: "'+ this.currency +'", value: ' + String(this.price) + '}');
                        }
					});
                }
            }
        } catch(e) {
        	console.log(e);
            console.log(e.name, e.message, e.stack);
        }
	} // counterFB

	jQuery.comebacker = function(param)
	{
		var cb_on = getParameterByName(param),
			landingUrl = getParameterByName('url');

		if(cb_on == '1') {
			createBlocks(landingUrl);
			$(window).one('beforeunload', function(e) 
			{
				e.preventDefault();
				e.stopPropagation();

				$('#onbeforeunload_audio').get(0).play();
				var message = [
					'******************************',
					'ОДНУ СЕКУНДУ!',
					'******************************',
					'Прежде чем вы уйдете, мы хотим предложить вам ПОДАРОК!',
					'',
					'Чтобы получить его - кликните на кнопку "Остаться" на этой странице',
				].join('\n');

				if(landingUrl) {
					$('#onbeforeunload_block').show();
					
					setTimeout(function() 
					{
						document.location.href = landingUrl;
					}, 500);
				}
				return message;
			});

			$('a').on('click', function()
			{
				$('#onbeforeunload_block').remove();
				$(window).off('beforeunload');
			});
			$('form').submit(function()
			{
				$('#onbeforeunload_block').remove();
				$(window).off('beforeunload');
			});
		} // if

		function createBlocks(landingUrl)
		{
			if(landingUrl) {
				var iframeBox = document.createElement('div');
				$(iframeBox).css({
					'background': 'white',
					'width': '100%',
					'height': '177px',
					'z-index': '10000',
					'position': 'fixed',
					'top': '0px',
					'left': '0px',
					'right': '0px',
					'display': 'none',
					'text-align': 'center',
					'width': '100%',
					'height': '100%',
				}).attr('id', 'onbeforeunload_block');

				var iframeEl = document.createElement('iframe');
				$(iframeEl).attr('frameborder', '0').attr('src', landingUrl).css({
					'position': 'absolute',
					'top': 0,
					'left': 0,
					'width': '100%',
					'height': '100%'
				});
				$(iframeBox).append(iframeEl);
				$('body').prepend(iframeBox);
			}

			var audioBox = document.createElement('audio');
			$(audioBox).attr('id', 'onbeforeunload_audio');

			var audioSource = document.createElement('source');
			$(audioSource).attr('src', '/libs/audio/audiojoined.mp3').attr('type', 'audio/mpeg');

			$(audioBox).append(audioSource);
			$('body').prepend(audioBox);
		} // createBlocks

	} // comebacker

	jQuery.prelandInit = function(param)
	{
		var url = getParameterByName(param),
			nw_on = getParameterByName('nw_on');
		if(url) {
			$('a').each(function() {
				$(this).attr('href', url).attr('target', nw_on == '1' ? '_blank' : '_self');
			});

			$('form').each(function() {
				$(this).attr('action', url);
			});
		}
	} // prelandInit
	
	$(document).ready(function() {
		jQuery.yaMetrika('ya');
		jQuery.counterGA('ga');
		jQuery.counterVK('vk');
		jQuery.counterTT('tt');
		jQuery.counterMR('mr');
		jQuery.counterFB('fb');
        jQuery.pixelGa('gtag', 'gtag_conv');
		jQuery.comebacker('cb_on');
		jQuery.prelandInit('url');
	});
})(jQuery);
