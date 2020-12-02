$(function(){
    var phoneCheck = function (elem, isFocus){
        var elemName = elem.attr("name"),
            form = elem.parents("form"),
            value = $.trim(elem.val());

        if (isFocus && elem.is(":invalid")){
            return false;
        }

        if (elemName!="phone"){
            var phoneElem = $("[name=phone]", form),
                phoneValue = phoneElem.val();

            if (phoneValue==phonePrefix || phoneValue.length<phonePrefix.length){
                phoneElem.val("");
            }
            return true;
        }

        if (elemName=="phone"){
            if (!value || value.length<phonePrefix.length){
                elem.val(phonePrefix);
            }
        }
    };

    $(document).on("focus", ".main-order-form [type=text], .main-order-form [type=tel]", function(e){
        var elem = $(this);
        phoneCheck(elem, true);
    });

    $(document).on("click", ".main-order-form [type=text], .main-order-form [type=tel]", function(e){
        var elem = $(this);
        phoneCheck(elem, false);
    });

    $(document).on("keypress", ".main-order-form [name=phone]", function(e){
        var elem = $(this),
            elemValue = $.trim(elem.val());

        if (!/[\d\+]+/.test(e.key)){
            return false;
        }

        if (elemValue.substr(0, 1)!="+" && e.key!="+"){
            elem.val("+"+elemValue);
        }

        if (elemValue.length>0 && !/\d+/.test(e.key)){
            return false;
        }

        return true;
    });
});