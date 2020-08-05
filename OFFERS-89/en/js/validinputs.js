$(function(){

    $('form').submit(function(event){
        var name = $(this).find("[name='Order[fio]']");
        var phone = $(this).find("[name='Order[phone]']");

        if(name.val().trim().length <= 0 || phone.val().trim().length <= 0)
            alert("Введите все данные");
        else
            return true;
        
        event.preventDefault();
    });
});


$(document).ready(function () {

    var country_codes= [];
    for(var k in phone_masks) country_codes.push(k);


    $("input[name='Order[phone]']").intlTelInput({
        initialCountry: country_code_server,
        onlyCountries: country_codes,                                  
        nationalMode: false,
        preventInvalidDialCodes: true        
    });

    $("input[name='Order[phone]']").on("countrychange", function(e, countryData) {
        var countyCode = countryData.iso2;

        $("input[name='Order[phone]']").val('');
        $("input[name='Order[phone]']").mask(phone_masks[countyCode.toUpperCase()], {
            translation: {
                'x': {
                    pattern: /[0-9]/, optional: true
                }
            },
            placeholder: phone_masks[countyCode.toUpperCase()]
        });       
        $("input[name='Order[phone]']").val(countryData.dialCode);                

        $(".selected-flag .iti-flag").attr('class', 'iti-flag ' + countyCode);

    });

    $("input[name='Order[phone]']").mask(phone_masks[country_code_server], {
        translation: {
            'x': {
                pattern: /[0-9]/, optional: true
            }
        },
        placeholder: phone_masks[country_code_server]
    });

    



});