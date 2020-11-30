(function(w, d) {

  if (w.LeadrockValidator) return;

  function LV (config) {

    this.config = config;


    var self = this;

    this.init = function(data) {

      this.metrika = new Metrika();
      this.metrika.init();

      this.data = data || {};

      this.data.validation = this.data.validation || {};

      if (!this.data.geo || !this.data.geo.iso_code) {
        self.metrika.goal('no_geo_info');
      }

      this.browser_language = w.navigator.language || w.navigator.userLanguage || '';

      try {
        this.browser_language = this.browser_language ? this.browser_language.split('-')[0].toUpperCase(): 'EN';
      } catch (e) {
        self.metrika.goal('no_browser_language');
        this.browser_language = 'EN'
      }

      d.addEventListener('DOMContentLoaded', this.bind_forms);
      setInterval(this.bind_forms, 1000);
    }

    this.on_submit = function(form) {

      var nua = navigator.userAgent;
      var is_android_browser = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 &&     nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));


      return function(event) {
        event.preventDefault();

        var tooltips = document.querySelectorAll('[data-leadrock-tooltip]');

        for (var i = 0; i < tooltips.length; i++) {
          tooltips[i].remove();
        }

        if (form.getAttribute('data-is-submitting') != undefined) {
          return false;
        }


        self.metrika.goal('submit_button_clicked');
		var name_input = form.querySelector('input[name=name]');

        if (name_input && !(vi = self.validate_name(name_input)).valid) {
          self.tooltip(name_input, vi.msg_code);
          self.metrika.goal('name_invalid');
          return false;
        }
        self.metrika.goal('name_valid');

        var phone_input = form.querySelector('input[name=phone]');

        if (phone_input && !(vi = self.validate_phone(phone_input)).valid) {
          self.tooltip(phone_input, vi.msg_code);
          self.metrika.goal('phone_invalid');
          return false;
        }
        self.metrika.goal('phone_valid');



        var inputs = form.querySelectorAll('input, select, textarea');
        for (var i = 0; i < inputs.length; i++) {
          var input = inputs[i];
          var attr_name = input.getAttribute('name');

          if (attr_name == 'name' || attr_name == 'phone') {
            continue;
          }

          if (! (vi = self.validate_other(input)).valid) {
            self.tooltip(input, vi.msg_code);
            self.metrika.goal('other_invalid');
            return false;
          }
          self.metrika.goal('other_valid');

        }

        form.setAttribute('data-is-submitting', '');
        self.show_loading();
        self.metrika.goal('continue_submitting');
        form.submit();
      }
    };

    this.validate_phone = function (input) {
      var value = input.value;
      if (self.data.validation['phone']) {
        return self.validate_other(input);
      }
      if (!value.length) {
        return {
          valid: false,
          msg_code: 'empty'
        }
      }
      if (value.length < 5) {
        return {
          valid: false,
          msg_code: 'shorter_5'
        }
      }
      if (value.match(/[A-Za-z]/)) {
        return {
          valid: false,
          msg_code: 'incorrect_data'
        }
      }
      return {
        valid: true
      }
    };

    this.validate_name = function (input) {
      var value = input.value;
      if (self.data.validation['name']) {
        return self.validate_other(input);
      }
      if (!value.length) {
        return {
          valid: false,
          msg_code: 'empty'
        }
      }

      return {
        valid: true
      }
    };

    this.validate_other = function (input) {
      var validation_arr = self.data.validation[input.getAttribute('name')];
      if (validation_arr) {
        for (var i = 0; i < validation_arr.length; i++) {
          var validation = validation_arr[i];
          if (!input.value.match(new RegExp(validation.regex))) {
            return {
              valid: false,
              msg_code: validation.msg_code || 'incorrect_data'
            }
          }
        }
      }
      return {
        valid: true
      }
    };

    this.tooltip = function (input, msg_code) {
      var msg = '';
      var msgs;
      var iso_code;

      try {
        iso_code = self.data.geo.iso_code;
      } catch (e) {
        iso_code = null;
      }

      if (iso_code) {
        msgs = self.config.geo_tooltip[iso_code];
      }

      if (!msgs) {
        msgs = self.config.lang_tooltip[self.browser_language];
      }

      if (!msgs) {
        msgs = self.config.geo_tooltip['US'];
      }

      if (self.data.tooltips) {
        var keys = Object.keys(self.data.tooltips);
        for (var i = 0; i < keys.length; i++) {
          msgs[keys[i]] = self.data.tooltips[keys[i]];
        }
      }

      msg = msgs[msg_code];

      var id = 'leadrock-' + Math.random().toString(36).substr(2, 17);
      var html = self.config.tooltip_html.replace(new RegExp('#{id}', 'g'), id);
      html = html.replace(new RegExp('#{text}', 'g'), msg);
      var elem = document.createElement('div');
      d.body.appendChild(elem);
      elem.outerHTML = html;
      elem = document.getElementById(id);
      elem.style.top = input.getBoundingClientRect().top + w.pageYOffset - 10 + 'px';
      elem.style.left = input.getBoundingClientRect().left + w.pageXOffset  + 'px';
      elem.style.maxWidth = input.getBoundingClientRect().width + 'px';
      elem.style.top = parseInt(elem.style.top) - elem.getBoundingClientRect().height + 'px';
      input.style.outline = '2px solid rgba(244, 67, 54, 0.85)';
      input.style.outlineOffset = '1px';
      var focusing_again = false;
      input.addEventListener('focus', function() {
        elem.remove();
        if (!focusing_again) {
          self.metrika.goal('focusing_again');
        }
        focusing_again = true;
        input.style.outline = 'none';
      })

      self.metrika.goal('tooltip');
    };

    this.show_loading = function () {
      var id = 'leadrock-' + Math.random().toString(36).substr(2, 17);
      var html = self.config.ww_html.replace(new RegExp(self.config.loader_id_replace, 'g'), id);
      document.body.insertAdjacentHTML( 'beforeend', html );
      self.config.run_ww(id);
      self.metrika.goal('loading');
    }

    this.bind_forms = function() {
      var forms =  d.querySelectorAll('form');
      for (var i = 0; i < forms.length; i++) {
        var form = forms[i];
        if (form.getAttribute('data-listen') != undefined) {
          continue;
        }
        form.setAttribute('data-listen', '');
        form.addEventListener('submit', self.on_submit(form))
      }
    }

    this.dev_error = function (msg) {
      alert(msg);
      throw msg;
    }

  }


  var geo_tooltip = {
    US: {
        empty: 'Input value cannot be empty',
        incorrect_data: 'Input value is incorrect',
        shorter_5: 'Input value length cannot be shorter than 5',
    },
    PT: {
        empty: 'O campo não pode estar em branco.',
        incorrect_data: 'Dados são incorrectos.',
        shorter_5: 'Não inferior a 5 caracteres.',
    },
    IT: {
        empty: 'Questo campo non può essere vuoto',
        incorrect_data: 'I dati inseriti non sono corretti',
        shorter_5: 'Non meno di 5 simboli',
    },
    ES: {
        empty: 'Esta seccion no puede estar vacia',
        incorrect_data: 'Los datos introducidos no son correctos',
        shorter_5: 'No menos de 5 simbolos',
    },
    ID: {
        empty: 'Kolom ini harus diisi',
        incorrect_data: 'Data yang Anda masukkan salah',
        shorter_5: 'Tidak boleh kurang dari 5 karakter',
    },
    FR: {
        empty: 'Ce champ ne peut pas être vide',
        incorrect_data: 'Les données saisies sont incorrectes',
        shorter_5: 'Au moins 5 caractères',
    },
    DE: {
        empty: 'Dieses Feld kann nicht leer sein',
        incorrect_data: 'Die eingegebenen Dateien sind nicht korrekt',
        shorter_5: 'Nicht weniger als 5 Symbole',
    },
    MY: {
        empty: 'Medan ini tidak boleh kosong',
        incorrect_data: 'Data yang dimasukkan adalah salah',
        shorter_5: 'Sekurang-kurangnya 5 aksara',
    },
    VN: {
        empty: 'Ô này không thể bỏ trống',
        incorrect_data: 'Thông tin đã điền không hợp lệ',
        shorter_5: 'Không được ít hơn 5 ký tự',
        no_letters: 'Ô này không được chứa chữ cái” или “Không được nhập chữ cái'
    },
    HU: {
        empty: 'Ez a mező nem lehet üres.',
        incorrect_data: 'A bevitt adatok helytelen.',
        shorter_5: 'Legalább 5 karakter hosszúságú.',
        no_letters: 'Ez a mező nem tartalmazhat betűket'
    },
    GR: {
        empty: 'Το πεδίο αυτό δεν μπορεί να είναι άδειο.',
        incorrect_data: 'Εισήχθησαν εσφαλμένα δεδομένα.',
        shorter_5: 'Δεν είναι μικρότερο από 5 χαρακτήρες.',
        no_letters: 'Το πεδίο αυτό δεν μπορεί να περιέχει γράμματα'
    },
    CZ: {
        empty: 'Toto pole nemůže být prázdné.',
        incorrect_data: 'Zadány nesprávné údaje.',
        shorter_5: 'Ne méně než 5 znaků.',
        no_letters: 'Toto pole nesmí obsahovat písmena'
    },
    BG: {
        empty: 'Това поле не може да бъде празно.',
        incorrect_data: 'Въведени са неправилни данни.',
        shorter_5: 'Не по-малко от 5 символа.',
        no_letters: 'Това поле не може да съдържа букви'
    },
    PL: {
        empty: 'To pole nie może być puste.',
        incorrect_data: 'Wprowadzono nieprawidłowe dane.',
        shorter_5: 'Nie krótszy niż 5 znaków.',
        no_letters: 'To pole nie może zawierać liter'
    },
    RO: {
        empty: 'Acest câmp nu poate fi gol.',
        incorrect_data: 'Au fost introduse date incorecte.',
        shorter_5: 'Nu mai puțin de 5 caractere.',
        no_letters: 'Acest câmp nu poate conține litere'
    },
    MA: {
        empty: 'لا يمكن أن تكون قيمة الإدخال فارغة',
        incorrect_data: 'قيمة المدخلات غير صحيحة',
        shorter_5: 'لا يمكن أن يكون طول قيمة الإدخال أقصر من 5',
    },
  };

  var lang_tooltip = {
    EN: {
        empty: 'Input value cannot be empty',
        incorrect_data: 'Input value is incorrect',
        shorter_5: 'Input value length cannot be shorter than 5',
    },
    PT: {
        empty: 'O campo não pode estar em branco.',
        incorrect_data: 'Dados são incorrectos.',
        shorter_5: 'Não inferior a 5 caracteres.',
    },
    IT: {
        empty: 'Questo campo non può essere vuoto',
        incorrect_data: 'I dati inseriti non sono corretti',
        shorter_5: 'Non meno di 5 simboli',
    },
    ES: {
        empty: 'Esta seccion no puede estar vacia',
        incorrect_data: 'Los datos introducidos no son correctos',
        shorter_5: 'No menos de 5 simbolos',
    },
    ID: {
        empty: 'Kolom ini harus diisi',
        incorrect_data: 'Data yang Anda masukkan salah',
        shorter_5: 'Tidak boleh kurang dari 5 karakter',
    },
    FR: {
        empty: 'Ce champ ne peut pas être vide',
        incorrect_data: 'Les données saisies sont incorrectes',
        shorter_5: 'Au moins 5 caractères',
    },
    DE: {
        empty: 'Dieses Feld kann nicht leer sein',
        incorrect_data: 'Die eingegebenen Dateien sind nicht korrekt',
        shorter_5: 'Nicht weniger als 5 Symbole',
    },
    MS: {
        empty: 'Medan ini tidak boleh kosong',
        incorrect_data: 'Data yang dimasukkan adalah salah',
        shorter_5: 'Sekurang-kurangnya 5 aksara',
    },
  };


  var tooltip_html = ' \
    <div id="#{id}" data-leadrock-tooltip style="box-sizing: border-box; font-family: Arial; position: absolute; background-color: rgba(244, 67, 54, 0.85); border-radius: 3px; padding: 10px 25px; color: #fff; border: 1px solid #fff; z-index: 1000000;"> \
      #{text} \
    </div> \
    ';

  var ww_html = ' \
  <div id="{leadrock-loader-id}"> \
      <style> \
          #{leadrock-loader-id} { \
              background-color: #fff !important; \
              box-shadow: 0 3px 10px #d5d5d5 !important; \
              border-radius: 3px !important; \
              width: 95% !important; \
              max-width: 300px !important; \
              text-align: center !important; \
              padding: 30px 0 !important; \
              position: fixed !important; \
              z-index: 1000000 !important; \
              top: 0; \
              left: 0; \
          } \
          #{leadrock-loader-id} img { \
              vertical-align: middle !important; \
              animation: {leadrock-loader-id}-leadrock-waiting-loader 1.2s linear infinite !important; \
          } \
          @keyframes {leadrock-loader-id}-leadrock-waiting-loader { \
              0% { \
                  transform: rotate(0deg); \
              } \
              100% { \
                  transform: rotate(360deg); \
              } \
          } \
      </style> \
      <img \
       src="data:image/png;base64,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" alt=""> \
       </div> \
  ';

  function run_ww(id) {
      var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var viewport_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      var w = document.getElementById(id);
      w.style.top = (viewport_height - w.clientHeight) / 2 + 'px';
      w.style.left = (viewport_width - w.clientWidth) / 2 + 'px';
  }

  w.LeadrockValidator = new LV({
    geo_tooltip: geo_tooltip,
    lang_tooltip: lang_tooltip,
    tooltip_html: tooltip_html,
    ww_html: ww_html,
    run_ww: run_ww,
    loader_id_replace: '{leadrock-loader-id}'
  });

  function Metrika() {

    this.init = function () {
      try {
        (function (d, w, c) {
          (w[c] = w[c] || []).push(function() {
            try {
              w.yaCounter50027818 = new Ya.Metrika2({
                id:50027818,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            } catch(e) { }
          });

          var n = d.getElementsByTagName("script")[0],
          s = d.createElement("script"),
          f = function () { n.parentNode.insertBefore(s, n); };
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://mc.yandex.ru/metrika/tag.js";

          if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
          } else { f(); }
        })(document, window, "yandex_metrika_callbacks2");
      } catch (e) {
        console.log('metrika is not available here');
      }
    }

    this.goal = function (name) {
      try {
        w.yaCounter50027818.reachGoal(name);
      } catch (e) {
        console.log('cant send goal info')
      }
    }
  }

})(window, document);
