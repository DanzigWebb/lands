$(function() {

    M1.init();

    $(document).on("click", ".m1modal", function(event) {
        if (event.target != this) {
            return false;
        } else {
            M1.modalHide($(this).closest(".m1modal"));
        }
    }).on("click", ".close-m1", function(event) {
        if (event.target != this) {
            return false;
        } else {
            M1.modalHide($(this).closest(".m1modal"));
            M1.panelQuicklyOrderShow();
        }
    }).on("click", ".this-offer-popup__close", function(event) {
        if (event.target != this) {
            return false;
        } else {
            M1.modalHide($(this).closest(".this-offer-popup"));
            M1.panelQuicklyOrderShow();
        }
    }).on("keydown", function(key) {
        if (key.keyCode == 27) {
            M1.modalHide($(".m1modal:visible:last"));
        }
    }).on("click", ".m1modal > *", function(event) {
        event.stopPropagation();
        return true;
    });
});

var M1 = (function($, $n) {
    return $.extend($n, {
        init: function() {
            var current = this;
        },
        modalSelected: null,
        modalSelect: function() {
            if(M1.modalSelected === null) {
                var custom = $(".this-offer-popup"), form = $("#m1-form");
                if (custom.length === 1) {
                    if (custom.data('split')) {
                        random = (Math.floor(Math.random() * 2));
                        M1.modalSelected = random === 1 ? custom : form;
                        M1.setCookie('split_popup', random === 1 ? 'custom' : 'm1', {path: '/'});
                    } else {
                        M1.modalSelected = custom;
                    }
                } else {
                    M1.modalSelected = form;
                }
            }
            return M1.modalSelected;
        },
        modalHide: function($modal) {
            $modal.fadeOut("fast", function() {
                if (!$(".m1modal:visible").length) {
                    $("body").removeClass("m1modal-show");
                }
                $("#overlay-popup-m1").hide();
            });
        },
        modalRefresh: function() {
            if ($(".m1modal:visible:last").length) {
                var modalBlock = $(".m1modal:visible:last .m1modal-block"),
                    width = parseInt(modalBlock.width()),
                    height = parseInt(modalBlock.height());
                if ($(window).height() > height + 20) {
                    modalBlock.addClass("m1modal-top").removeClass("margin-t-b").css("margin-top", -1 * (height / 2));
                } else {
                    modalBlock.addClass("margin-t-b").removeClass("m1modal-top");
                }
                if ($(window).width() > width) {
                    modalBlock.addClass("m1modal-left").removeClass("margin-l").css("margin-left", -1 * (width / 2));
                } else {
                    modalBlock.addClass("margin-l").removeClass("m1modal-left");
                }
            }
        },
        panelQuicklyOrderHide: function() {
            var selector = $('#mobile_div');
            if (selector.length > 0) {
                selector.hide();
            }
        },

        panelQuicklyOrderShow: function() {
            var selector = $('#mobile_div');
            if (selector.length > 0) {
                selector.show();
            }
        },

        modalShow: function($modal) {
            $modal.fadeIn("fast");
            $("body").addClass("m1modal-show");
            this.modalRefresh();
            this.panelQuicklyOrderHide();
        },
        initComebacker: function(timeout) {
            try {
                setTimeout(function() {
                    var comebacker = true;
                    $(window).on("mouseout", function(event) {
                        if (event.pageY - $(window).scrollTop() < 1 && comebacker) {
                            comebacker = false;
                            var modalWindow = M1.modalSelect();
                            M1.modalShow(modalWindow);
                            $("#overlay-popup-m1").show();
                            $("[name=form_id]", modalWindow).val(comebackerFormId);
                            return false;
                        }
                    });
                }, timeout);
            } catch (e) {}
        },
        prepareJsonData: function(form) {
            var datarow = form.serializeArray();
            $(datarow).each(function(item, itemData) {
                if (itemData.name == "name" || itemData.name == "phone" || itemData.name == "is_popup") {
                    delete datarow[item];
                }
            });
        },
        showComebackerAlert: true,
        initComebackerAlert: function(M1Text) {
            var current = this;
            window.onbeforeunload = function(evt) {
                if (current.showComebackerAlert) {
                    current.showComebackerAlert = false;
                    return M1Text.comebacker_text;
                }
            };
        },
        setCookie: function(name, value, options) {

            options = options || {};

            var expires = options.expires;

            if (typeof expires == "number" && expires) {
                var d = new Date();
                d.setTime(d.getTime() + expires * 1000);
                expires = options.expires = d;
            }
            if (expires && expires.toUTCString) {
                options.expires = expires.toUTCString();
            }

            value = encodeURIComponent(value);

            var updatedCookie = name + "=" + value;

            for (var propName in options) {
                updatedCookie += "; " + propName;
                var propValue = options[propName];
                if (propValue !== true) {
                    updatedCookie += "=" + propValue;
                }
            }

            document.cookie = updatedCookie;
        },
    });
})(jQuery, M1 || {});