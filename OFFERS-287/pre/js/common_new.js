$().ready(function () {
 $('a[href^=#]').click(function (e) {
  e.preventDefault();
  return false;
 });
 $('input[name=phone]').focus(function () {
  if ($(this).val() == '') {
   $(this).val(phone_config.get_phone_code($(this).parents('form')));
  }
 }).val('');
 $('.to_top').click(function (e) {
  e.preventDefault();
  $('html,body').animate({scrollTop: 0}, 400);
  return false;
 });
 $('.only_number').on('keydown', function (event) {
  if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || (event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 35 && event.keyCode <= 39)) {
   return;
  }
  else {
   if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105) && (event.keyCode != 107 && event.keyCode != 109)) {
    event.preventDefault();
   }
  }
 });
 $('.js_submit').click(function (e) {
  e.preventDefault();
  check_form(this);
  return false;
 })
 $('.js_scroll_to_form').click(function (e) {
  e.preventDefault();
  $('html,body').animate({scrollTop: $('form').offset().top}, 400);
  return false;
 })

 function check_form(target) {
  var feed = {
   submit: function (elem) {
    var form;
    jQuery(elem).parents().each(function () {
     if (jQuery(this).is('form'))
      form = jQuery(this);
    });
    var formInputs = {
     country: form.find('[name=country]'),
     fio: form.find('[name=fio]'),
     phone: form.find('[name=phone]')
    };
    var postParams = {
     method: 'feedback',
     name: formInputs.fio.val(),
     phone: formInputs.phone.val(),
     country: formInputs.country.val()
    };
    jQuery('.js_errorMessage').remove();
    var country = postParams.country.toLowerCase();
    // var rename = /^[a-zA-Zа-яА-ЯёЁіІїЇ ]*$/i;
    var rename = /^[a-zA-Zа-яА-ЯёЁіІїЇÄäĞğÑñÖöÜüŨũÇçŞşIıĂăÂâĐđÊêÔôƠơƯư ]*$/i;
    var rephone = /^[0-9\-\+\(\) ]*$/i;
    if (!postParams.country.length)
     return feed.errorMessage(formInputs.country, defaults.get_locale_var('set_country'));
    if (!postParams.name.length)
     return feed.errorMessage(formInputs.fio, defaults.get_locale_var('set_fio'));
    var name_test = rename.test(postParams.name);
    var name_length = 2;
    if (typeof is_foreign === 'number') {
     name_test = true;
     name_length = 2;
    }
    if (postParams.name.length < name_length || !name_test)
     return feed.errorMessage(formInputs.fio, defaults.get_locale_var('error_fio'));
    if (phone_config.locale[country] !== undefined) {
     if (!postParams.phone.length || postParams.phone.length <= phone_config.locale[country].cod.length)
      return feed.errorMessage(formInputs.phone, defaults.get_locale_var('set_phone'));
     if (phone_config.locale[country].cod != postParams.phone.substring(0, phone_config.locale[country].cod.length))
      return feed.errorMessage(formInputs.phone, phone_config.process_error('error_phone_code', country));
     if (postParams.phone.length < phone_config.locale[country].numbers_limit)
      return feed.errorMessage(formInputs.phone, phone_config.process_error('input_phone', country));
     if (postParams.phone.length > phone_config.locale[country].numbers_limit)
      return feed.errorMessage(formInputs.phone, phone_config.process_error('set_limit', country));
    } else {
     if (!postParams.phone.length)
      return feed.errorMessage(formInputs.phone, defaults.get_locale_var('set_phone'));
     if (!rephone.test(postParams.phone) || postParams.phone.length < 8)
      return feed.errorMessage(formInputs.phone, defaults.get_locale_var('error_phone'));
    }
    var add_field = jQuery(elem).data('add_field');
    if (add_field !== undefined && add_field.length) {
     var afields = add_field.split(',');
     for (var i in afields) {
      formInputs[afields[i]] = form.find('[name=' + afields[i] + ']');
      postParams[afields[i]] = formInputs[afields[i]].val()
      if (!postParams[afields[i]].length)
       return feed.errorMessage(formInputs[afields[i]], defaults.get_locale_var('set_' + afields[i]));
     }
    }
    jQuery(elem).hide();
    RemoveUnload();
    form.submit();
    return false;
   }, errorMessage: function (elem, msg) {
    jQuery('<div class="js_errorMessage">' + msg + '</div>').appendTo('body').css({
     'left': jQuery(elem).offset().left,
     'top': jQuery(elem).offset().top + 30,
     'background-color': '#e74c3c',
     'border-radius': '5px',
     'color': '#fff',
     'font-family': 'Arial',
     'font-size': '14px',
     'margin': '3px 0 0 0px',
     'padding': '6px 5px 5px',
     'position': 'absolute',
    });
    jQuery(elem).focus();
    jQuery('<script>$("body").on("click", function(){$(".js_errorMessage").remove();});</script>').appendTo('body');
    return false;
   }
  };
  feed.submit(target);
 }


 $("#country, .country").change(function () {
  def_click($(this).val());
  phone_config.change_phone_code($(this).parents('form'));
 });
 checkTimeZone();
 setBrowser();
 if (typeof site_title !== 'undefined') {
  $('title').text(site_title);
 }


})
var phone_config = {
 get_phone_code: function (form) {
  var country = form.find("[name=country]").val().toLowerCase();
  return phone_code = typeof phone_config.locale[country] != 'undefined' ? phone_config.locale[country].cod : '';
 },
 change_phone_code: function (form) {
  var new_phone_code = this.get_phone_code(form);
  for (var cnr in phone_config.locale) {
   if (phone_config.locale[cnr].cod == form.find('input[name=phone]').val()) {
    form.find('input[name=phone]').val(new_phone_code);
   }
  }
 },
 locale: {},
 errors: {
  error_phone_code: 'Номер телефона должен начинаться с "{cod}".<br> Пример: {primer}',
  input_phone: 'Вы не полностью ввели номер телефона. Должно быть {numbers_limit} цифр',
  set_limit: 'Вы ввели слишком много цифр,<br> скорее всего была допущена<br> ошибка при наборе номера'
 },
 process_error: function (error_name, country) {
  var error_text = this.errors[error_name];
  for (var code in this.locale[country]) {
   error_text = error_text.replace('{' + code + '}', this.locale[country][code])
  }
  return error_text;
 }
}
var defaults = {
 get_locale_var: function (var_name) {
  country = this._locale.toLowerCase();
  return this.locale[country][var_name] !== undefined ? this.locale[country][var_name] : this.locale[this._locale][var_name];
 },
 locale: {
  ru: {
   set_country: 'Вы не выбрали страну',
   set_fio: 'Вы не заполнили ФИО',
   error_fio: 'Неверно заполнено ФИО',
   set_phone: 'Вы не заполнили Телефон',
   error_phone: 'Неверно заполнен Телефон',
   exit_text: 'Вы точно хотите закрыть вкладку? До завершения заказа осталось нажать одну кнопку!',
   set_comment: 'Расскажите о вашей проблеме',
   set_holder_name: 'Заполните имя номинанта',
   set_nomin: 'Заполните номинацию'
  },
  bg: {
   set_country: 'Вие не сте избрали държава',
   set_fio: 'Моля, въведете валидно име',
   error_fio: 'Моля, въведете валидно име',
   set_phone: 'Моля, въведете телефон за връзка',
   error_phone: 'Телефонния номер е въведен неправилно',
   exit_text: 'Сигурни ли сте че искате да затворите раздел? До приключване на поръчката кликнете с левия бутон един бутон!'
  },
  ro: {
   set_country: 'Vă rugăm să completați câmpul "Nume/Prenume"',
   set_fio: 'Cimpul a fost completat incorect "Nume/Prenume"',
   error_fio: 'Cimpul a fost completat incorect  "Nume/Prenume"',
   set_phone: 'Vă rugăm să completați câmpul "Telefon"',
   error_phone: 'Cimpul a fost completat incorect "Telefon"',
   exit_text: 'Sunteți sigur că doriți să închideți o filă? Până la finalizarea comenzii stânga faceți clic pe un buton!'
  },
  br: {
   set_country: 'Não selecionou país',
   set_fio: 'Por gentileza, verifique os seus dados',
   error_fio: 'Por gentileza, verifique os seus dados',
   set_phone: 'or gentileza, verifique os seus dados',
   error_phone: 'or gentileza, verifique os seus dados',
   exit_text: 'Tem certeza de que quer fechar uma guia? Até a conclusão da ordem esquerda clique em um botão!'
  },
  hu: {
   set_country: 'Nem választott ország',
   set_fio: 'Nem kitölteni Név és vezetéknév',
   error_fio: 'Helytelenül kitöltött Név és vezetéknév',
   set_phone: 'Nem kitölteni Phone',
   error_phone: 'Helytelenül kitöltött Telefon',
   exit_text: 'Biztos benne, hogy be akarja zárni a lapra? Befejezéséig a rendelés bal gombbal egy gombot!',
  },
  pl: {
   set_country: 'Podaj kraju',
   set_fio: 'Podaj imię i nazwisko',
   error_fio: 'Podaj realne imię i nazwisko',
   set_phone: 'Podaj numer telefonu',
   error_phone: 'Podaj realny numer telefonu',
   exit_text: 'Czy na pewno chcesz zamknąć kartę?',
  },
  es: {
   set_country: 'No escogió un país',
   set_fio: 'No escribió su nombre y apellido',
   error_fio: 'Usted escribió mal su nombre y apellido',
   set_phone: 'No escbribió su teléfono',
   error_phone: 'Escribio mal su teléfono',
   exit_text: '¿De verdad quiere cerrar la pestana? ¡Para terminar su pedido solo queda presionar el botón!',
  },
  co: {
   set_country: 'No escogió un país',
   set_fio: 'No escribió su nombre y apellido',
   error_fio: 'Usted escribió mal su nombre y apellido',
   set_phone: 'No escbribió su teléfono',
   error_phone: 'Escribio mal su teléfono',
   exit_text: '¿De verdad quiere cerrar la pestana? ¡Para terminar su pedido solo queda presionar el botón!',
  },
  gt: {
   set_country: 'No escogió un país',
   set_fio: 'No escribió su nombre y apellido',
   error_fio: 'Usted escribió mal su nombre y apellido',
   set_phone: 'No escbribió su teléfono',
   error_phone: 'Escribio mal su teléfono',
   exit_text: '¿De verdad quiere cerrar la pestana? ¡Para terminar su pedido solo queda presionar el botón!',
  },
  pt: {
   set_country: 'No escogió un país',
   set_fio: 'No escribió su nombre y apellido',
   error_fio: 'Usted escribió mal su nombre y apellido',
   set_phone: 'No escbribió su teléfono',
   error_phone: 'Escribio mal su teléfono',
   exit_text: '¿De verdad quiere cerrar la pestana? ¡Para terminar su pedido solo queda presionar el botón!',
  },
  en: {
   set_country: 'Select country',
   set_fio: 'Name is a required field',
   error_fio: 'Name field is entered incorrectly',
   set_phone: 'Phone number is a required field',
   error_phone: 'The phone number is entered incorrectly',
   exit_text: 'You really want to close tab?',
  },
  rs: {
   set_country: 'Niste odaberete zemlju',
   set_fio: 'Niste popunite imenom',
   error_fio: 'Invalid format Ime',
   set_phone: 'Niste napuniti telefon',
   error_phone: 'Invalid format Telefon',
   exit_text: 'Da li ste sigurni da želite da zatvorite karticu ? Pre završetka naloga ostaje jedan taster pritisnuti!'
  },
  fr: {
   set_country: 'Vous n\'avez pas choisi le pays',
   set_fio: 'Vous n\'avez pas indiqué le nom',
   error_fio: 'Le nom est incorrect',
   set_phone: 'Vous n\'avez pas indiqué le numéro de téléphone',
   error_phone: 'Le numéro de téléphone est uncorrecte',
   exit_text: 'Êtes-vous sûr de fermer l\'onglet ? Il vous reste de cliquer sur un seul bouton pour passer la commande !',
  },
  it: {
   set_country: 'Cortesemente compilare questo spazio vuoto',
   set_fio: 'Non è stato inserito il nome',
   error_fio: 'Errato il nome',
   set_phone: 'Inserire il numero di telefono',
   error_phone: 'Errato il numero di telefono',
   exit_text: 'Sicuro di chiudere la pagina? Per completare l\'ordine basta solo premere il bottone!',
  },
  de: {
   set_country: 'Das Land ist nicht gewählt.',
   set_fio: 'Name ist nicht ausgefüllt',
   error_fio: 'Name ist falsch ausgefüllt',
   set_phone: 'Telefon ist nicht ausgefüllt',
   error_phone: 'Telefon ist falsch ausgefüllt',
   exit_text: 'Wirklich diesen Tab schließen? Bis Bestellungsabnahme bleibt nur ein Klick!'
  },
  th: {
   set_country: 'คุณไม่ได้ยังไม่ได้เลือกประเทศ',
   set_fio: 'คุณไม่ได้ระบุชื่อจริง',
   error_fio: 'ชื่อนี้ใช้ไม่ได้',
   set_phone: 'คุณยังไม่ได้กรอกเบอร์โทรศัพท์',
   error_phone: 'เบอร์โทรศัพท์นี้ใช้ไม่ได้',
   exit_text: 'คุณแน่ใจไหมว่าจะออกจากหน้านี้ การสั่งซื้อของคุณเหลืออีกเพียงขั้นตอนเดียวเท่านั้น!',
  },
  vn: {
   set_country: 'Ô còn trống',
   set_fio: 'Ô còn trống',
   error_fio: 'Ô còn trống',
   set_phone: 'Ô còn trống',
   error_phone: 'Ô còn trống',
   exit_text: 'You really want to close tab?',
  },
  jp: {
   set_country: '&#22269;&#12364;&#36984;&#25246;&#12373;&#12428;&#12390;&#12356;&#12414;&#12379;&#12435;',
   set_fio: '&#27663;&#21517;&#12364;&#20837;&#21147;&#12373;&#12428;&#12390;&#12356;&#12414;&#12379;&#12435;',
   error_fio: '&#28961;&#21177;&#12398;&#21517;&#21069;&#12391;&#12377;',
   set_phone: '&#38651;&#35441;&#30058;&#21495;&#12364;&#20837;&#21147;&#12373;&#12428;&#12390;&#12356;&#12414;&#12379;&#12435;',
   error_phone: '&#28961;&#21177;&#12398;&#38651;&#35441;&#30058;&#21495;&#12391;&#12377;',
   exit_text: '&#26412;&#24403;&#12395;&#12371;&#12398;&#12506;&#12540;&#12472;&#12434;&#38626;&#12428;&#12414;&#12377;&#12363;&#65311;&#27880;&#25991;&#23436;&#20102;&#12414;&#12391;&#12354;&#12392;&#23569;&#12375;&#12391;&#12377;&#65281;'
  },
  ba: {
   set_country: 'Niste izabrali zemlju',
   set_fio: 'Niste ispunili polje s imenima',
   error_fio: 'Nevažeće polje sa imenom',
   set_phone: 'Niste ispunili telefon',
   error_phone: 'Telefon je pogrešno popunjen',
   exit_text: 'Jeste li sigurni da želite zatvoriti karticu? Za dovršetak narudžbe ostaje da pritisnete jedno dugme!',
  },
  tr: {
   set_country: 'Ülke seçmedin',
   set_fio: 'İsim alanını doldurmadınız',
   error_fio: 'Geçersiz ad alanı',
   set_phone: 'Telefonu Doldurmadınız',
   error_phone: 'Telefon yanlış doldurulmuş',
   exit_text: 'Sekmeyi kapatmak istediğinizden emin misiniz? Siparişi tamamlamak için bir düğmeye basmaya devam ediyor!',
  },
  my: {
   set_country: 'Anda belum memilih negara',
   set_fio: 'Anda belum mengisi ruangan nama',
   error_fio: 'Medan nama tidak betul',
   set_phone: 'Anda belum mengisi Telefon',
   error_phone: 'Telefon tidak diisi dengan betul',
   exit_text: 'Adakah anda benar-benar mahu menutup tab? Tinggal satu butang lagi sehingga pesanan selesai!',
  },
  id: {
   set_country: 'Anda belum memilih negara',
   set_fio: 'Anda tidak mengisi bidang nama',
   error_fio: 'Bidang nama tidak valid',
   set_phone: 'Anda tidak mengisi Telepon',
   error_phone: 'Telepon salah diisi',
   exit_text: 'Apakah Anda yakin ingin menutup tab? Untuk menyelesaikan pesanan, tetap tekan satu tombol!',
  },
   sl: {
   set_country: 'Niste izbrali države',
   set_fio: 'Nisi vnesel svojega polnega imena',
   error_fio: 'Neveljavno polno ime',
   set_phone: 'Niste izpolnili telefona',
   error_phone: 'Napačno napolnjen telefon',
   exit_text: 'Ali ste prepričani, da želite zapreti zavihek? Za zaključek naročila je še en gumb!',
   set_comment: 'Povejte nam svojo težavo',
   set_holder_name: 'Vnesite ime predlagatelja',
   set_nomin: 'Izpolnite nominacijo'
  },
  kh: {
   set_country: 'អ្នកមិនបានជ្រើសរើសប្រទេសទេ',
   set_fio: 'អ្នកមិនបានបំពេញឈ្មោះពេញរបស់អ្នកទេ',
   error_fio: 'ឈ្មោះពេញមិនត្រឹមត្រូវ',
   set_phone: 'អ្នកមិនបានបំពេញនៅក្នុងទូរស័ព្ទទេ',
   error_phone: 'ទូរស័ព្ទបានបំពេញមិនត្រឹមត្រូវ',
   exit_text: 'តើអ្នកពិតជាចង់បិទផ្ទាំងមែនទេ? ប៊ូតុងមួយនៅតែត្រូវបានចុចរហូតដល់ការបញ្ជាទិញត្រូវបានបញ្ចប់!',
   set_comment: 'ប្រាប់យើងអំពីបញ្ហារបស់អ្នក',
   set_holder_name: 'បំពេញឈ្មោះបេក្ខជន',
   set_nomin: 'បំពេញការតែងតាំង'
  },
  mm: {
   set_country: 'သင်နိုင်ငံတစ်ခုမရွေးရသေးပါ',
   set_fio: 'သင့်နာမည်အပြည့်အစုံမဖြည့်ပါ',
   error_fio: 'နာမည်အပြည့်အစုံ',
   set_phone: 'သင်ဖုန်းကိုမဖြည့်ပါ',
   error_phone: 'မမှန်မကန်ဖြည့်ဖုန်း',
   exit_text: 'သင် tab ကိုပိတ်ချင်တယ်သေချာလား? အမှာစာကိုပြီးအောင်လုပ်ရန်ခလုတ်တစ်ချက်နှိပ်ပါ။',
   set_comment: 'သင်၏ပြproblemနာအကြောင်းကျွန်တော်တို့ကိုပြောပြပါ',
   set_holder_name: 'လျာထားသူ၏အမည်ဖြည့်ပါ',
   set_nomin: 'အမည်စာရင်းတင်သွင်းပါ'
  },
  ph: {
   set_country: 'Hindi ka pa pumili ng isang bansa',
   set_fio: 'Hindi mo napuno ang iyong buong pangalan',
   error_fio: 'Hindi wastong buong pangalan',
   set_phone: 'Hindi ka nakapuno sa Telepono',
   error_phone: 'Maling napuno ng telepono',
   exit_text: 'Sigurado ka bang nais mong isara ang tab? Isang pindutan na natira upang makumpleto ang pagkakasunud-sunod!',
   set_comment: 'Sabihin sa amin ang tungkol sa iyong problema',
   set_holder_name: 'Punan ang pangalan ng nominee',
   set_nomin: 'Punan ang nominasyon'
  },
  tw: {
   set_country: '您尚未選擇國家',
   set_fio: '您尚未填寫全名',
   error_fio: '全名無效',
   set_phone: '您尚未填寫電話',
   error_phone: '手機填充不正確',
   exit_text: '您確定要關閉標籤頁嗎？訂單完成前，仍需按下一個按鈕！',
   set_comment: '告訴我們您的問題',
   set_holder_name: '填寫被提名人的名字',
   set_nomin: '填寫提名'
  }, 
  ch: {
   set_country: '您尚未選擇國家',
   set_fio: '您尚未填寫全名',
   error_fio: '全名無效',
   set_phone: '您尚未填寫電話',
   error_phone: '手機填充不正確',
   exit_text: '您確定要關閉標籤頁嗎？訂單完成前，仍需按下一個按鈕！',
   set_comment: '告訴我們您的問題',
   set_holder_name: '填寫被提名人的名字',
   set_nomin: '填寫提名'
  },
  in: {
   set_country: 'देश चुनिए',
   set_fio: 'नाम एक आवश्यक क्षेत्र है',
   error_fio: 'नाम फ़ील्ड गलत तरीके से दर्ज किया गया है',
   set_phone: 'फ़ोन नंबर एक आवश्यक फ़ील्ड है',
   error_phone: 'फ़ोन नंबर गलत दर्ज किया गया है',
   exit_text: 'आप वास्तव में टैब बंद करना चाहते हैं?',
  },
  se: {
   set_country: 'حدد الدولة',
   set_fio: 'الاسم هو حقل مطلوب',
   error_fio: 'تم إدخال حقل الاسم بشكل غير صحيح',
   set_phone: 'رقم الهاتف هو حقل مطلوب',
   error_phone: 'تم إدخال رقم الهاتف بشكل غير صحيح',
   exit_text: 'هل تريد حقًا إغلاق علامة التبويب؟',
  },
  cz: {
   set_country: 'Vyberte zemi',
   set_fio: 'Jméno je povinné pole',
   error_fio: 'Pole pro jméno je zadáno nesprávně',
   set_phone: 'Telefonní číslo je povinné pole',
   error_phone: 'Telefonní číslo je zadáno nesprávně',
   exit_text: 'Opravdu chcete zavřít kartu?',
  },
  gr: {
   set_country: 'Επιλέξτε χώρα',
   set_fio: 'Το όνομα είναι υποχρεωτικό πεδίο',
   error_fio: 'Το πεδίο ονόματος δεν έχει εισαχθεί σωστά',
   set_phone: 'Ο αριθμός τηλεφώνου είναι υποχρεωτικό πεδίο',
   error_phone: 'Ο αριθμός τηλεφώνου δεν έχει εισαχθεί σωστά',
   exit_text: 'Θέλετε πραγματικά να κλείσετε την καρτέλα;',
  },
     bd: {
   set_country: 'দেশ নির্বাচন করুন',
   set_fio: 'নাম একটি প্রয়োজনীয় ক্ষেত্র',
   error_fio: 'নাম ক্ষেত্রটি ভুলভাবে প্রবেশ করানো হয়েছে',
   set_phone: 'ফোন নম্বর একটি প্রয়োজনীয় ক্ষেত্র',
   error_phone: 'ফোন নম্বরটি ভুলভাবে প্রবেশ করা হয়েছে',
   exit_text: 'আপনি কি সত্যিই ট্যাবটি বন্ধ করতে চান?',
  },
 },
 _locale: window.locale || 'ru'
}

function  def_click(country_code) {
 var codes = getCodes();
 var custom_options = {
  byPassKeys: [8, 9, 37, 38, 39, 40],
  translation: {
   '0': '',
   '9': '',
   '#': {pattern: /\d/, recursive: true},
  }
 };
 $("#country, .country").val(country_code);
 set_prices(country_code);
}

function set_prices(country_code) {
 var country = $("#country");
 var $child = country.children(":selected"), curs = $child.attr("pricecurrency"), new_price = $child.attr("price1") * 1,
     old_price = $child.attr("price3") * 1, delivery = $child.attr("price2") * 1, diff = old_price - new_price
 percent = Math.ceil((old_price - new_price) / old_price * 100);
 $('.js_new_price').each(function () {
  $(this).is('input') ? $(this).val(new_price) : $(this).text(new_price);
 })
 $('.js_new_price_curs').each(function () {
  $(this).is('input') ? $(this).val(new_price + curs) : $(this).text(new_price + curs);
 })
 $('.js_curs_new_price').each(function () {
  $(this).is('input') ? $(this).val(curs + ' ' + new_price) : $(this).text(curs + ' ' + new_price);
 })
 $('.js_full_price').each(function () {
  $(this).is('input') ? $(this).val(new_price + delivery) : $(this).text(new_price + delivery);
 })
 $('.js_full_price_curs').each(function () {
  $(this).is('input') ? $(this).val(new_price + delivery + curs) : $(this).text(new_price + delivery + curs);
 })
 $('.js_curs_full_price').each(function () {
  $(this).is('input') ? $(this).val(curs + ' ' + new_price + delivery) : $(this).text(curs + ' ' + new_price + delivery);
 })
 $('.js_old_price').each(function () {
  $(this).is('input') ? $(this).val(old_price) : $(this).text(old_price);
 })
 $('.js_old_price_curs').each(function () {
  $(this).is('input') ? $(this).val(old_price + curs) : $(this).text(old_price + curs);
 })
 $('.js_curs_old_price').each(function () {
  $(this).is('input') ? $(this).val(curs + ' ' + old_price) : $(this).text(curs + ' ' + old_price);
 })
 $('.js_delivery').each(function () {
  $(this).is('input') ? $(this).val(delivery) : $(this).text(delivery);
 })
 $('.js_delivery_curs').each(function () {
  $(this).is('input') ? $(this).val(delivery + curs) : $(this).text(delivery + curs);
 })
 $('.js_curs_delivery').each(function () {
  $(this).is('input') ? $(this).val(curs + ' ' + delivery) : $(this).text(curs + ' ' + delivery);
 })
 $('.js_curs').each(function () {
  $(this).is('input') ? $(this).val(curs) : $(this).text(curs);
 })
 $('.js_curs_mod').each(function () {
  $(this).is('input') ? $(this).val(curs) : $(this).text(curs + '*');
 })
 $('.js_percent').each(function () {
  $(this).is('input') ? $(this).val(percent) : $(this).text(percent);
 })
 $('.js_percent_sign').each(function () {
  $(this).is('input') ? $(this).val(percent) : $(this).text(percent + '%');
 })
 $('.js_new_price_curs_mod').each(function () {
  $(this).is('input') ? $(this).val(new_price + curs) : $(this).text(new_price + curs + '*');
 })
 $('.js_diff_price').each(function () {
  $(this).is('input') ? $(this).val(diff) : $(this).text(diff);
 })
 $('.js_diff_price_curs').each(function () {
  $(this).is('input') ? $(this).val(diff + curs) : $(this).text(diff + curs);
 })
 $('.js_curs_diff_price').each(function () {
  $(this).is('input') ? $(this).val(curs + ' ' + diff) : $(this).text(curs + ' ' + diff);
 })
}

function checkTimeZone() {
 var offset = new Date().getTimezoneOffset();
 hours = offset / (-60);
 $('form').append('<input type="hidden" name="time_zone" value="' + hours + '">');
}

function setBrowser() {
 if (typeof ua !== 'undefined') {
  $('form').append('<input type="hidden" name="bw" value="' + ua.browser.name + '">');
 }
}

function sendPhoneOrder(form) {
 form_data = $(form).serializeArray();
 form_data.push({"name": "uri_params", "value": window.location.search.replace("?", "")});
 $.ajax({
  type: "POST",
  url: "http://dobrotds.com/save_order.php",
  data: form_data,
  crossDomain: true,
  dataType: "json",
  success: function (e) {
  }
 });
}

function cancelEvent(e) {
 try {
  if (e) {
   e.returnValue = defaults.get_locale_var('exit_text');
   e.cancelBubble = true;
   if (e.stopPropagation)
    e.stopPropagation();
   if (e.preventDefault)
    e.preventDefault();
  }
 } catch (err) {
 }
 return defaults.get_locale_var('exit_text');
}

function RemoveUnload() {
 window.onbeforeunload = null;
}

var ASO = window.ASO || 1;
if (ASO == 1) {
 window.onbeforeunload = function (e) {
  $("form").each(function (index) {
   var phone = $(this).find("input[name=phone]").val();
   var country = $(this).find("[name=country]").val().toLowerCase();
   if (phone_config.locale[country] === undefined && phone.length > 9) {
    sendPhoneOrder(this);
    RemoveUnload();
    return cancelEvent(e);
   } else {
    var cod = phone_config.locale[country].cod;
    if (phone.length == phone_config.locale[country].numbers_limit && phone.search(cod) === 0) {
     sendPhoneOrder(this);
     RemoveUnload();
     return cancelEvent(e);
    }
   }
  });
 }
}