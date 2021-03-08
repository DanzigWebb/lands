try {
    function addCountries(selectObject, defaultValueByCountryCode) {
        for (var code in countryList) {
            selectObject.append('<option value="' + code + '" class="different option">' + countryList[code] + '</option>');
        }
        selectObject.find("option[value='" + defaultValueByCountryCode + "']").attr("selected", true);
        selectObject.val(defaultValueByCountryCode);
    }
    function update_country_state(textSelect) {
        if (countryStateDict[$('#id_country').val()]) {
            $('#state_div').show();
            $('#id_state').replaceWith('<select name="state" class="form-control" id="id_state"></select>');
            $('#id_state').append('<option value="" disabled selected>' + textSelect + '</option>');
            $.each(countryStateDict[$('#id_country').val()], function (index, stateDict) {
                $('#id_state').append('<option value="' + stateDict.stateCode + '">' + stateDict.stateName + '</option>');
            });
        } else {

            $('#id_state').empty();
            $('#id_state').replaceWith('<input type="text" class="form-control" name="state" id="id_state" placeholder="State" />');

            $('#id_state').keydown(function () {
                $(this).removeClass('error');
                $(this).parent().removeClass('has-error');
            });

            $('#state_div').hide();
        }
    }

} catch (e) {
    var params = {
        errormessage: e.message + '. countries_states_handler_i.js',
        name: e.name,
        stack: e.stack,
        screen: { width: window.screen.width, height: window.screen.height }
    };
}

