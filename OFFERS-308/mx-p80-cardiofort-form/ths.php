<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>¡Gracias! ¡Su pedido ha sido aceptado!</title>
    <link rel="stylesheet" href="ths/ths.css" />
  </head>
    
<img height="1" width="1" src="https://www.facebook.com/tr?id=<?php echo ($data["px"])?>&ev=Lead&noscript=1"/>
  
  <body>
    <div class="wrap">
      <div class="left">
        <div class="header">
          <div class="title">
            ¡Gracias! <br />
            ¡Su pedido ha <br>sido aceptado!
          </div>
          <span>Pronto el operador se pondrá en contacto con usted para confirmar la orden.</span>
        </div>

        <div class="form">
          <p>Por favor, compruebe la exactitud de los datos introducidos.</p>
          <div class="form-wrap">
            <div class="wrap-input">
              <div class="input">
                <label for="name">Nombre</label>
                <div><?php echo ($data["name"])?></div>
              </div>
              <div class="input">
                <label for="name">Teléfono</label>
                <div><?php echo ($data["phone"])?></div>
              </div>
            </div>
            <button type="button" onclick="{showForm()}" id="hideButton">
              Editar datos
            </button>

			<form class="hidden-form" id="form" geo="mx" method="post" 
			onsubmit="return validate_form(this, 'Por favor ingrese un número de teléfono válido');" action="api.php">
              <input
                type="text"
                name="name"
                required=""
                placeholder="Introduzca su nombre"
              />

              <input type="text" required="" name="phone" 
			  placeholder="Introduzca su teléfono"
              />

              <button type="submit">Editar datos</button>
			  
      <input name="subid" type="hidden" value="{subid}">
      <input name="px" type="hidden" value="{px}">
			  
            </form>
          </div>

          <div class="img">
            <img src="ths/girl.png" alt="" />
          </div>
        </div>
      </div>
	    
    </div>
  </body>
  
  <script>
    const showForm = () => {
      var showForm = document.getElementById("form");
      var hideButton = document.getElementById("hideButton");
      showForm.classList.add("showMeBaby");
      hideButton.classList.add("hideButton")
    };
  </script>
  
<script>
		var phonePattern = {
			'ru': '+7 (___) ___-__-__',
			'ua': '+38-___-___-__-__',
			'by': '+375 ___ ___ ___',
			'kz': '+7 ___ ___ ____',
			'kg': '+___ ___ __ __ __',
			'md': '0 ___ _____',
			'az': '+___-__-___-__-__',
			'ge': '+995 ___ __ __ __',
			'es': '+34 ___ __ __ __',
			'pe': '+51 ___ ___ _?_',
			'cl': '+56 _ ____ ____',
			'ar': '+54 __ ____ ____',
			'co': '+57 _______??_',
			'mx': '+52 __ ____ ____',
			'it': '+39-___-___-____',
			'esp': '+34 ___ __ __ __',
			'pt': '+351 ___ ___ ___',
			'prt': '+351 ___ ___ ___',
			'id': '+62 ___ ___ ___',
			'gr': '+30 ___ _______',
			'cy': '+357 __ ______',
			'ro': '+40 ___ ___ __? _',
			'bg': '+359 ___ __ __? _',
			'cz': '+420 ___ ___ ___',
			'sk': '+421 ___ ___ ___',
			'si': '+386 _ ___ __ __',
			'pl': '+48 ___ ___ ___',
			'al': '+355 __ ___ ____',
			'rs': '+381 __ _____?_',
			'ph': '+63 _ ____ __?_',
			'hu': '+36 _ ___ ____',
			'hr': '+385 _ ____ __?_',
			'ba': '+387 __ ______',
			/* --- */
		}

		const inputs = document.querySelectorAll('form input[name="phone"]')


		//функция на проверку соответствия количества введенных в инпут символов, количеству необходимых в маске
		function validate_form(form, alert_text = "Please enter valid phone number") {
			var input_ln = form.querySelector('input[name="phone"]').value.replace(/ /g, '').length,
				pattern_ln = phonePattern[form.getAttribute('geo')].replace(/\?| /g, '').length;
			if (input_ln >= pattern_ln) return true;
			else { alert(alert_text); return false; }
		}

		//сама маска, срабатывающая от ивентов ввода, фокуса, потери фокуса и нажатия кнопки мыши
		document.addEventListener("DOMContentLoaded", function () {

			var isTimeoutSeted = false;
			var inputInterval;

			function createInterval(input) {
				if (!isTimeoutSeted) {
					isTimeoutSeted = true;

					inputInterval = setInterval(() => {
						input.selectionStart = input.value.length
						input.setSelectionRange(input.value.length, input.value.length);
					}, 15)
				}
			}

			function deleteInterval() {
				clearInterval(inputInterval)
				isTimeoutSeted = false;
			}

			function setSelectionStart(input) {
				input.selectionStart = input.value.length
			}

			function mask(event) {
				var input = event.currentTarget;
				var geo = input.form.getAttribute('geo');
				var matrix = phonePattern[geo];
				var i = 0;
				var def = matrix.replace(/\D/g, "");
				var val = input.value.replace(/\D/g, "");

				if (!event.type == "blur") {
					setSelectionStart(input)
				}

				// Ставим интервал для инпута
				createInterval(input)

				if (event.type == "blur") {
					// Сбрасываем интервал для инпута
					deleteInterval()
					if (input.value.length == 2) {
						input.value = ""
					}
				}

				if (def.length >= val.length) {
					val = def
				};

				input.value = matrix.replace(/./g, function (a) {
					return /[_|?\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
				});


			};

			inputs.forEach(input => {
				input.addEventListener("input", mask, false);
				input.addEventListener("blur", mask, false);
				input.addEventListener("focus", mask, false);
			})
		});

		$(document).ready(function () {
			// Load GDPR
			$(document).gdprCookieLaw({
				moreLinkHref: '/privacypolicy',
				theme: 'theme-1',
				position: 'bottom-right',
				width: '760px',
				margin: '15px',
				animation: 'fade-slide',
				btnAcceptText: 'Ok'
			});
		});

</script>

</html>
