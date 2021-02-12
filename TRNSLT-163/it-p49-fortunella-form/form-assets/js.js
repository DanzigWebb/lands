class minTimer {
  constructor(options) {
    this.hour = document.querySelectorAll(`.${options.hour}`);
    this.min = document.querySelectorAll(`.${options.min}`);
    this.sec = document.querySelectorAll(`.${options.sec}`);
    this.separation = options.separation
  }
  start(duration) {
    // время таймера
    var timer =
      duration,
      minutes,
      seconds;
    const update = () => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      let hourString = '00'
      let minString = ("0" + minutes).slice(-2)
      let secString = ("0" + seconds).slice(-2)
      // каждая цифра в отдельном элементе
      const separation = () => {
        for (let i = 0; i < this.min.length; i++) {
          this.hour[i].innerHTML = `<span>${hourString[0]}</span><span>${hourString[1]}</span>`
          this.min[i].innerHTML = `<span>${minString[0]}</span><span>${minString[1]}</span>`
          this.sec[i].innerHTML = `<span>${secString[0]}</span><span>${secString[1]}</span>`
        }
      }
      // цифры вместе
      const together = () => {
        for (let i = 0; i < this.min.length; i++) {
          this.hour[i].innerHTML = hourString
          this.min[i].innerHTML = minString
          this.sec[i].innerHTML = secString
        }
      }
      this.separation ? separation() : together()

      if (--timer < 0) {
        timer = duration;
      }
    }
    setInterval(() => {
      update()
    }, 1000);
  }
}

document.querySelectorAll('.price_old').forEach(item => item.innerHTML = oldPrice);
document.querySelectorAll('.price_main').forEach(item => item.innerHTML = newPrice);
// инициализация
const timer = new minTimer({
  hour: 't-hour',
  min: 't-min',
  sec: 't-sec',
  separation: true
}).start(minutes * 60);
if (!timerShow) document.querySelectorAll('.timer-wrapper').forEach(item => item.style.display = 'none')
if (!showFooter) document.querySelectorAll('.show-warning').forEach(item => item.style.display = 'none')
