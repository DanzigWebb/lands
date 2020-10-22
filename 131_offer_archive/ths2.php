<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Obrigada! Seu pedido foi aceito!</title>
    <link rel="stylesheet" href="ths/ths.css" />
  </head>

  <body>
    <div class="wrap">
      <div class="left">
        <div class="header">
          <div class="title">
            Obrigada! <br />
            Seu pedido foi <br>aceito!
          </div>
          <span>Em breve, o operador entrará em contato para confirmar o pedido.</span>
        </div>

        <div class="form">
          <p>Por favor, verifique se os dados inseridos estão corretos.</p>
          <div class="form-wrap">
            <div class="wrap-input">
              <div class="input">
                <label for="name">Nome</label>
                <div><?php echo ($data["name"])?></div>
              </div>
              <div class="input">
                <label for="name">Telefone</label>
                <div><?php echo ($data["phone"])?></div>
              </div>
            </div>
            <button type="button" onclick="{showForm()}" id="hideButton">
              Alterar dados
            </button>

			<form class="hidden-form" id="form" geo="pt" method="post" 
			onSubmit="return validate_form(this, 'Digite o número de telefone correto');" action="api.php">
              <input
                type="text"
                name="name"
                required
                placeholder="Digite seu nome"
              />

              <input type="text" required="" name="phone" 
			  placeholder="Digite seu telefone"
              />

              <button type="submit">Alterar dados</button>
			  
			  
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
            'sk': '+421 ___ ___ ___'
            /* --- */
        },
        forms = document.getElementsByClassName('hidden-form'),
        inputs = [];
    for(let form of forms)
        inputs.push(form.querySelector('input[name="phone"]'));

    //функция на проверку соответствия количества введенных в инпут символов, количеству необходимых в маске
    function validate_form(form, alert_text = "Please enter valid phone number") {
        var input_ln = form.querySelector('input[name="phone"]').value.replace(/ /g, '').length,
            pattern_ln = phonePattern[form.getAttribute('geo')].replace(/\?| /g, '').length;
        if (input_ln>=pattern_ln) return true;
        else { alert(alert_text); return false;}
    }

    //сама маска, срабатывающая от ивентов ввода, фокуса, потери фокуса и нажатия кнопки мыши
    document.addEventListener("DOMContentLoaded", function() {

        function mask(event) {

            var input = event.currentTarget,
                geo = input.form.getAttribute('geo'),
                matrix = phonePattern[geo],
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = input.value.replace(/\D/g, "");
            if (def.length >= val.length) val = def;
            if (!(/_|\?|-|\(\)/.test(matrix[input.selectionStart])))
                input.selectionStart = input.value.length;

            input.value = matrix.replace(/./g, function (a) {
                return /[_|?\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
            });
            if (event.type == "blur") {
                if (input.value.length == 2) input.value = ""
            }
        };

        for (const input of inputs) {
            input.addEventListener("input", (e) => mask(e), false);
            input.addEventListener("focus", (e) => mask(e), false);
            input.addEventListener("blur", (e) => mask(e), false);
            input.addEventListener("mouseup", (e) => mask(e), false);
        }
    });
</script>
</html>
