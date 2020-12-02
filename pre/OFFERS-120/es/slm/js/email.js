const results = $('.results__wrapper');
const successMessage = $('.result--positive'); // успеъ
const formEmail = $('.calculator_form');


showResults()

$("#form_email").on("submit", (e) => {
  e.preventDefault();
  $.ajax({
    url: 'https://testaff.site/mail/swiftm__slimatika/public/form_action.php',
    method: 'post',
    dataType: 'html',
    data: $("#form_email").serialize(),
  }).done(handler);
});

function handler(data) {
  if (isError(data)) {
    showError(data);
    return
  }

  showSuccess()
}


function showSuccess() {
  showResults();
  formEmail.slideUp();
  successMessage.slideDown();
  scrollToMessage()
}

function showError(errorMessage) {
  showResults();
  const currentError = $(`.${errorMessage}`);
  currentError.slideDown();
  scrollToMessage()
}

function scrollToMessage() {
  // const screenHeight = 
  setTimeout(() => {
    $([document.documentElement, document.body]).animate({
      scrollTop: results.position().top - (window.outerHeight / 4)
    }, 400);
  }, 50);
}

function isError(res) {
  return res === 'WrongEmailAddress' || res === 'AlreadyExists';
}

// Прячем все подсказки
function showResults() {
  results.children().each((i, item) => $(item).slideUp())
}