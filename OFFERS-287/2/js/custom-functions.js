$(function () {
    UMCB.init();

    $(window).resize(function () {
        UMCB.modalRefresh();
    });
    UMCB.modalRefresh();
    $(document).on("click", "[modal]", function () {
        var modalWindow = $("div#" + $(this).attr("modal"));
        if (modalWindow.length) {
            UMCB.modalShow(modalWindow);
            return false;
        }
    }).on("click", ".icon-close, .modal, .button-close", function (event) {
        if (event.target != this) {
            return false;
        } else {
            UMCB.modalHide($(this).closest(".modal"));
        }
    }).on("keydown", function (key) {
        if (key.keyCode == 27) {
            UMCB.modalHide($(".modal:visible:last"));
        }
    }).on("click", ".modal > *", function (event) {
        event.stopPropagation();
        return true;
    });
    $('#umcb-form input[name=name_last]').val('Обратный звонок').closest('.form-group').hide();
    $('#umcb-form input[name=name_first]').attr('placeholder','Ваше имя');
    $('#umcb-form input[name=phone]').attr('placeholder','Ваш номер телефона');
    $('#umcb-form button[type=submit]').text('Перезвонить мне');
});
var UMCB = (function ($, $n) {
    return $.extend($n, {
        init: function () {
        }, modalHide: function ($modal) {
            $modal.fadeOut("fast", function () {
                if (!$(".modal:visible").length) {
                    $("body").removeClass("modal-show");
                }
            });
        }, modalRefresh: function () {
            if ($(".modal:visible:last").length) {
                var modalBlock = $(".modal:visible:last .modal-block"), width = parseInt(modalBlock.width()), height = parseInt(modalBlock.height());
                if ($(window).height() > height + 20) {
                    modalBlock.addClass("modal-top").removeClass("margin-t-b").css("margin-top", -1 * (height / 2));
                } else {
                    modalBlock.addClass("margin-t-b").removeClass("modal-top");
                }
                if ($(window).width() > width) {
                    modalBlock.addClass("modal-left").removeClass("margin-l").css("margin-left", -1 * (width / 2));
                } else {
                    modalBlock.addClass("margin-l").removeClass("modal-left");
                }
            }
        }, modalShow: function ($modal) {
            $modal.fadeIn("fast");
            $("body").addClass("modal-show");
            this.modalRefresh();
        }, initCallback: function (timeout) {
            try {
                setTimeout(function start_umcb() {
                    $("#umcb").show();
                }, timeout);
            } catch (e) {
            }
        }, initComebacker: function (timeout) {
            try {
                setTimeout(function start_umcomebacker() {
                    var comebacker = true;
                    $(window).on("mouseout", function (event) {
                        if (event.pageY - $(window).scrollTop() < 1 && comebacker) {
                            comebacker = false;
                            $("a[modal=umcb-form]").trigger("click");
                        }
                    });
                }, timeout);
            } catch (e) {
            }
        }, validateAndSendForm: function (jsonRequest) {
            var current = this;
            $("a.order-btn").click(function () {
                $(this).closest("form").submit();
                return false;
            });
        }
    });
})(jQuery, UMCB || {});