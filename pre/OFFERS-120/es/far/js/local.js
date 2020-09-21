const months = {
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  es: [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ]
}

function setMonthName() {
  const selector = '.set-month'
  const lang = document.querySelector('html').getAttribute('lang')
  const currentMonth = new Date().getMonth()
  const month = months[lang][currentMonth]


  document.querySelectorAll(selector).forEach(item => item.textContent = month.toLowerCase())
}

setMonthName()
