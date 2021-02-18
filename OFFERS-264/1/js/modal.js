$(function () {
    function TemplateRefresh() {
        ModalRefresh();
    }

    $(window).resize(function () {
        TemplateRefresh();
    });
    TemplateRefresh();

    /* -----------------------------------------------------------------------------------------
     * Modal Refresh
     */
    function ModalRefresh() {
        if ($('.modal').is(':visible')) {
            var modalBlock = $('.modal:visible .modal-block'),
                width = parseInt(modalBlock.width()),
                height = parseInt(modalBlock.height());
            if ($(window).height() > height + 20) {
                modalBlock.addClass('modal-top').removeClass('margin-t-b').css('margin-top', -1 * (height / 2));
            }
            else {
                modalBlock.addClass('margin-t-b').removeClass('modal-top');
            }
            if ($(window).width() > width) {
                modalBlock.addClass('modal-left').removeClass('margin-l').css('margin-left', -1 * (width / 2));
            }
            else {
                modalBlock.addClass('margin-l').removeClass('modal-left');
            }
        }
    }


    /* -----------------------------------------------------------------------------------------
     * Modal Show
     */
    $(document).on('click', 'a[modal]', function(){
        var modalWindow = $('div#' + $(this).attr('modal'));
        if (modalWindow.length){
            modalWindow.fadeIn('fast');
            $('body').addClass('modal-show');
            ModalRefresh();
            return false;
        }
    });


    /* -----------------------------------------------------------------------------------------
     * Modal Hide
     */
    function ModalHide() {
        $('.modal:visible').fadeOut('fast', function(){
            $('body').removeClass('modal-show');
        });
    }

    $(document)
        .on('click', '.icon-close, .modal', function (event) {
            if (event.target != this)
                return false;
            else
                ModalHide();
        })
        .on('keydown', function (key) {
            if (key.keyCode == 27)
                ModalHide();
        })
        .on('click', '.modal > *', function (event) {
            event.stopPropagation();
            return true;
        })
        .on('submit', '#kmacb-form form', function () {
            var name = $('#kmacb-form form input[name=name]').val(),
                phone = $('#kmacb-form form input[name=phone]').val();
            $('form:first input[name=name]').val(name);
            $('form:first input[name=phone]').val(phone);
            $('form:first').submit();
            $('form:first input[name=name]').val('');
            $('form:first input[name=phone]').val('');
			return false;
        });


	try {
		//var kmainputs = kmacb();
		//$('#kmacb-form form').append(kmainputs);
		//$('body').append('<div id="kmacb"><a title="Перезвонить Вам" href="#" modal="kmacb-form"><div class="kmacb-circle"></div><div class="kmacb-circle-fill"></div><div class="kmacb-img-circle"></div></a></div>');
		setTimeout(
			function start_kmacb() {
				$('body').append('<div id="kmacb"><a title="Перезвонить Вам" href="#" modal="kmacb-form"><div class="kmacb-circle"></div><div class="kmacb-circle-fill"></div><div class="kmacb-img-circle"></div></a></div>');
			},
			30000
		);
	}
	catch (e) {}
})