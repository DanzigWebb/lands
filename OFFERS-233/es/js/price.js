$(function() {
    country = $.url(location.href).param('country');

    if (country == 'ES') {
        es_selected = 'selected="selected"';
    } else {
        es_selected = '';
    }

    selects = $("select[name='country']");
    selects.append('<option value="ES" ' + es_selected + '>España</option>');

    var change = 0,
        updatePrices = function(item) {
            change = 1;

            $(item.children).each(function() {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'ES';
            }

            if (sel == 'ES') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('EUR');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('EUR');
		$('.new_price_sig').html('EUR');
                $('select').val('ES').trigger('change');
                initializeMask({ mask: "(+34)99999999[999]", removeMaskOnSubmit: false })
            }

            change = 0;
        };
    $("select").change(function() {

        if (change == 0) updatePrices(this);
    }).change();

    function initializeMask(mask) {
        $('[name=phone]').inputmask(mask);
    }
});