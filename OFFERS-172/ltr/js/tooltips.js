//Цвет подсказки
let tooltipColor = '#e74c3c'
//Позиция подсказки (справа/слева)
let tooltipPosition = 'right'
//Имя
let tooltipName = "Heidye Carranza Cerna"
//Телефон
let tooltipPhone = "+51(XXX)XXX-XXX"

let tooltipStyle = '<style>.input-group{position:relative;}.input-group input{width:100%;box-sizing:border-box;}.input-group:before{content:attr(data-content)"";position:absolute;top:-15px;'+tooltipPosition+':0;background:'+tooltipColor+';color:#fff;border-radius:5px;padding:3px 5px;font-family: Arial;font-size: 14px}.tooltip-hide.input-group:before{display: none;}</style>'
$(document).ready(function () {
    $(document.body).append(tooltipStyle);
    $('.input-group').click(function () {
        let $input = $(this).find('input[name]')
        let currentInput = $input.attr('name')
        switch (currentInput) {
            case 'name':
                $(this).attr('data-content',tooltipName)
                break
            case 'phone':
                $(this).attr('data-content',tooltipPhone)
                $input.addClass('only-phone')
                $(this).on("keydown", function(t) {
                    46 == t.keyCode || 8 == t.keyCode || 9 == t.keyCode || 27 == t.keyCode || 187 == t.keyCode || 65 == t.keyCode && !0 === t.ctrlKey || 35 <= t.keyCode && t.keyCode <= 39 || (t.keyCode < 48 || 57 < t.keyCode) && (t.keyCode < 96 || 105 < t.keyCode) && t.preventDefault()
                });
                break
        }
        $(this).removeClass('tooltip-hide')
    })
});

