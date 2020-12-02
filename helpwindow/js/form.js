function minMaxDate() {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  const today = year + "-" + month + "-" + day;
  document.getElementById("theDate").value = today;
}

function limitationButton(item,btn) {

  item.addEventListener('input', changeBackground)
  function changeBackground() {
    if (item.value !== '' ) {
      btn.classList.add('active');
      btn.disabled = false;

    } else {
      btn.classList.remove('active');
      btn.disabled = true;
    }
  }


}
function limitationButtonDate() {
  const inputTime = document.querySelector('.input__time');
  const buttnon = document.querySelector('.btn_date');
  limitationButton(inputTime, buttnon)
}

function limitationButtonPhone() {
  const inputPhone = document.querySelector('.phone');
  const buttnon = document.querySelector('.button');
  limitationButton(inputPhone, buttnon)
  buttnon.addEventListener('click', (e) =>{
    e.preventDefault();
    showAlert()
  })
}

function gu(){
  const btn = document.querySelector('.btn_date');
  const inputTime = document.querySelector('.input__time');
  const inputDate = document.querySelector('.input__date');
  const dataDate = document.querySelectorAll('.data__text--date');
  const dataTime = document.querySelectorAll('.data__text--time');
  
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    dataDate.forEach(item => {
      item.innerHTML = `${inputDate.value}`;
  })
    dataTime.forEach(item => {
      item.innerHTML = `${inputTime.value}`;
    })
  })
}
const example = flatpickr('.input__date');

