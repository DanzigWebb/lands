$('.reviews').slick({
  dots: true,
  infinite: true,
  adaptiveHeight: true,
  arrows: false,
  slidesToShow: 1
});

var hiddenText = $('.hidden-content');
var accItems = $('.block9__item');
function showAccItems() {
  hiddenText.slideUp(400);
  accItems.removeClass('active');
}
accItems.each(function (index) {
  $(this).on('click', function () {
    if ($(this).hasClass('active')) return
    showAccItems();
    $(hiddenText[index]).slideDown(400);
    $(this).addClass('active');
  });
});


function formPoller() {
  var currentPoll = $('.quest__head .now');
  var allPoll = $('.quest__head .all');
  var formItem = $('.form__item');

  var inputs = $('.offer input')

  var progress = $('.progress .line')
  var nextBtn = $('.form__item button.next');
  var count = 1

  allPoll.html(formItem.length);
  currentPoll.html(count);

  formItem.not(':first').hide();
  nextBtn.on('click', function (e) {
    e.preventDefault();
    if ($(inputs[count - 1]).val().length <= 2) swal("Ошибка!", "Введите корректное значение", "error")
    else {
      nextPoll(count);
      progress.css('width', 100 / (formItem.length - 1) * count + '%');
      count += 1;
      currentPoll.html(count);
    }
  })

  function nextPoll(count) {
    formItem.hide();
    $(formItem[count]).fadeIn();
  }
}
formPoller()


$('form').keydown(function (event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    return false;
  }
});
