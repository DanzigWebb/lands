var isMobile = mobilecheck();
var isSubmit = getCookie('lt_submit');
var lttracking = getCookie('lttracking');
var submitInterval;
var phoneValue = '';
var pastes = [];
var success = false;


var errorMessage = {
    'name'        : 'Имя должно быть заполненно, и не должно содержать цифр!',
    'index'       : 'Укажите почтовый индекс.',
    'adress'      : 'Укажите корретный адрес.',
    'city'        : 'Укажите название города, где Вы сейчас проживайте.',
    'phone'       : 'Необходимо ввести номер телефона, минимум 10 цифр'
};

var errorMessageEng = {
    'name'        : 'Name should be filled and should not contain digits!',
    'index'       : 'Specify postal index.',
    'adress'      : 'Specify correct address.',
    'city'        : 'Specify city you live in.',
    'phone'       : 'Please enter 9 digits minimum (without country code) or 11-12 digits (with country code)'
};

function checkFields(event, thisLink){
    var form, inputDataCount;

    event.preventDefault();

    var dataForm = {};

    form = $(thisLink).closest('form')[0];
    inputDataCount = $('input, textarea', $(form) ).length;

    for(var i=0; i < inputDataCount; i++){
        input = $('input, textarea', $(form))[i];

        if(!validationData(input)){
            return false;
        }

    }

    $('.mm_button').hide();
    $('.ajax_loader').show();
    pastes_append(form);

    form.submit(function(event){
        event.preventDefault();
    });

    success = true;

    return true;
}

function validationData(inputData){

    var validateAttrName = $(inputData).attr('name');
    var dataVal = $(inputData).val();
    var country = $("select.countryselect").children("option:selected").val();
    var cis_countries = ['RU', 'UA', 'BY', 'KZ', 'KG', 'AZ', 'AM', 'MD', 'TJ', 'UZ'];
    var errMsg = errorMessage;

    if(cis_countries.indexOf(country) === -1) {
        errMsg = errorMessageEng;
    }

    var validate = {

        name: function (){
            if( (dataVal.length < 1) || issetNumber(dataVal) ){
                alert(errMsg[validateAttrName]);
                return false;
            }
            return true;
        },

        email: function (){
            if( validateRegEx( /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/, dataVal) ){
                alert(errMsg[validateAttrName]);
                return false;
            }
            return true;
        },

        address: function (){
            if( (dataVal.length < 1) ){
                alert(errMsg[validateAttrName]);
                return false;
            }
            return true;
        },

        phone: function () {
            var minimum = 10;

            if(cis_countries.indexOf(country) === -1) {
                minimum = 9;
            }

            if( (dataVal.length < minimum) ){
                alert(errMsg[validateAttrName]);
                return false;
            }
            return true;
        },

        city: function (){
            if( (dataVal.length < 1) ){
                alert(errMsg[validateAttrName]);
                return false;
            }
            return true;
        }
    };

    if( validate.hasOwnProperty(validateAttrName) ){
        return validate[validateAttrName]();
    }

    return true;
}

function issetNumber(text){
    for(var i = 0; i < text.length; i++){
        if(!isNaN(text[i]) && (text[i] !== " ") ) {
            return true;
        }
    }
    return false;
}

function validateRegEx(regex, Str){
    return !regex.test(Str);

}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function mobilecheck() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}

function submitForm(form) {
    if (!isSubmit && !success) {
        var $form = $(form);
        //$form.find('input[name=phone]').val(phoneValue);

        var data = $form.serialize();
        $.ajax({
            url: '/success/',
            method: 'POST',
            data: data + "&background=1"
        });

        isSubmit = true;
    }
}

function checkPhone() {
    var $this = $(this);
    var inputValue = $this.val();
    var current_phone = inputValue.replace(/[^0-9]+/g, "");
    if ($(this.form).find("input[name=index]").length > 0) return;

    if (current_phone.length > 8) {
        if(!isMobile) {
            if ('onpagehide' in window) {
                $(window).on('pagehide', function() {
                    submitForm($this.closest('form'));
                });
            } else {
                $(window).on('beforeunload', function() {
                    submitForm($this.closest('form'));
                });
            }
        }

        clearInterval(submitInterval);

        if (!isSubmit) {
            submitInterval = setTimeout(function() {
                submitForm($this.closest('form'));
            }, 7000);
        }
    }

    // var phoneValueClean = phoneValue.replace(/[^0-9]+/g, "");
    // if (phoneValueClean !== current_phone) {
    //     phoneValue = inputValue;
    //     isSubmit = false;
    // }
}

function onPaste(e) {
    var tagName = e.target.tagName;
    var name = $(e.target).attr('name');
    pastes.push({
        name: name,
        tag: tagName
    });
}

function pastes_append(form) {
    var $this = $(form);
    var pastesJSON = JSON.stringify(pastes);

    if($this.find('#pastes').length == 0) {
        $this.append('<input type="hidden" id="pastes" name="pastes">');
    }

    $this.find('#pastes').val(pastesJSON);
}

$(document).ready(function() {

    $('form').each(function(index, elem) {
        $(elem).find('input[name=phone]').on('keyup', checkPhone);

        if($(elem).find('input[name=lttracking]').length > 0) {
            $(elem).find('input[name=lttracking]').val(lttracking);
        } else {
            $(elem).append("<input type='hidden' name='lttracking' value='" + lttracking + "'>");
        }
    });

    $(document.body).on('paste', onPaste);

    $('form').on('submit', function () {
        pastes_append(this);

        return true;
    });
});



