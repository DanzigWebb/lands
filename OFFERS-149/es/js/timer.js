// timer
class minTimer {
  constructor(options) {
    this.hour = document.querySelectorAll(`.${options.hour}`);
    this.min = document.querySelectorAll(`.${options.min}`);
    this.sec = document.querySelectorAll(`.${options.sec}`);
    this.separation = options.separation
  }
  start() {
    // время таймера
    const update = () => {
      let date = new Date
      let tz = date.getTimezoneOffset()
      let now = Math.floor(date / 1000 - tz * 60)
      let next = Math.ceil((date / 1000 / 60 - tz) / 60 / 24) * 60 * 60 * 24
      let left = next - now;
      let hour = 2
      let hourString = ("0" + hour).slice(-2)
      let minString = ("0" + ~~(left / 60 % 60)).slice(-2)
      if (~~(left / 60 % 60) == 59) {
        hour -= 1
      }
      let secString = ("0" + ~~(left % 60)).slice(-2)
      // каждая цифра в отдельном элементе
      const separation = () => {
        for (let i = 0; i < this.min.length; i++) {
          this.hour[i].innerHTML = `<div class="">
            <span>${hourString[0]}</span>
          </div><div class="">
            <span>${hourString[1]}</span>
          </div>`
          this.min[i].innerHTML = `<div class="">
            <span>${minString[0]}</span>
          </div><div class="">
            <span>${minString[1]}</span>
          </div>`
          this.sec[i].innerHTML = `<div class="">
            <span>${secString[0]}</span>
          </div><div class="">
            <span>${secString[1]}</span>
          </div>`
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
    }
    setInterval(() => {
      update()
    }, 1000);
  }
}
// инициализация
// const timer = new minTimer({
//   hour: 't-hour',
//   min: 't-min',
//   sec: 't-sec',
//   separation: true
// }).start();