$(document).ready(function () {
    $('.select-popap, .select-header').on('keypress', function () {
        var ul = $('.header-bankspro__popap-city_ul');
        $.ajax({
            type: 'POST',
            url: '/site/getCityList',
            data: {name: $(this).val()},
            success: function (result) {
                ul.html('');
                var html = "";
                $.each(result, function (index, item) {
                    html += "<li data-id='" + index + "'>" + item + "</li>";
                });
                ul.html(html);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Проблемы с получением данных')
            },
        });
    });
});