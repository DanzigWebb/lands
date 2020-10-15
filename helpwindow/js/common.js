window.onload = function () {
  minMaxDate()
  callForm()
  callFormPhon()
  limitationButtonDate()
  limitationButtonPhone()
  gu()
}

function call(btn, btn2, item1, item2) {

  item2.hide()

  btn.on('click', (e) => {
    e.preventDefault();
    item1.slideUp();
    item2.slideDown();
  })
  btn2.on('click', (e) => {
    e.preventDefault();

    item2.slideUp();
    item1.slideDown();
  })
}
function callForm() {
  const btn$ = $('.btn-form');
  const formRef$ = $('.form');
  const menu$ = $('.main');
  const btnBack$ = $('.back');
  call(btn$, btnBack$, menu$, formRef$)
}

function callFormPhon() {
  const btn$ = $('.btn_date');
  const btnBack$ = $('.data__btn');
  const formDat = $('.date');
  const formPhon = $('.phone');
  call(btn$, btnBack$, formDat, formPhon)
}
function showAlert() {
  const [description] = document.querySelector('.sweet-text-hidden').children

  swal({
    text: description.textContent,
    buttons: false,
    icon: false,
  })
}