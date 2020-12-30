$(document).ready(function() {

    upd_int();

    $('.countryselect').change( function() {
        changeCountry =  $(this).val();

        $('.countryselect option[value='+changeCountry+']').prop("selected", true);

        upd_int();
    });

});


function upd_int() {
    curs  = $('.countryselect').children(":selected").val();

    producInfo = $jsonData[curs];

    producInfo.productsum = Math.round(producInfo.productsum * 10) / 10;
    producInfo.delivery = Math.round(producInfo.delivery * 10) / 10;
    producInfo.totalsum = Math.round(producInfo.totalsum * 10) / 10;
    producInfo.oldproductsum = Math.round(producInfo.oldproductsum * 10) / 10;

    $("input[name=productsum]").val(producInfo.productsum + producInfo.currency).trigger('change');
    $(".productsum").html(producInfo.productsum + producInfo.currency);

    $("input[name=delivery]").val(producInfo.delivery + producInfo.currency).trigger('change');
    $(".delivery").html(producInfo.delivery + producInfo.currency);

    $("input[name=totalsum]").val(producInfo.totalsum + producInfo.currency).trigger('change');
    $(".totalsum").html(producInfo.totalsum + producInfo.currency);

    $(".oldproductsum").html(producInfo.oldproductsum + producInfo.currency);


    $("#note_name b").text(producInfo.name_template);
    $("#note_phone b").text(producInfo.phone_template);
    $("#note_address b").text(producInfo.address_template);
}