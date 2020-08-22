// получить текущую дату в формате "dd month yyyy"
var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
var date = new Date()
var yyyy = date.getFullYear();
var mm = date.getMonth() + 1;
if (mm < 10) mm = '0' + mm;
var dd = date.getDate();
if (dd < 10) dd = '0' + dd;

// alert(dd);

// получить день недели
var weekDays = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
var numtDayWeekShow = date.getDay();
var textDayWeekShow = weekDays[numtDayWeekShow];
// alert(textDayWeekShow);
// вывести день недели
var elements = document.getElementsByClassName('dayWeekShow');
for (var i=0; i < elements.length; i++) {
	elements[i].innerText = textDayWeekShow;
}


// вывести дату 
var elements = document.getElementsByClassName('dateShow');
for (var i=0; i < elements.length; i++) {
	var dateCopy = new Date(date);
	dateCopy.setDate(date.getDate() - elements[i].id);
	var yyyy = dateCopy.getFullYear();
	var mm = dateCopy.getMonth() + 1;
	if (mm < 10) mm = '0' + mm;
	var dd = dateCopy.getDate();
	if (dd < 10) dd = '0' + dd;
	var textDateShow = dd + " " + months[dateCopy.getMonth()] + " " + yyyy;
	elements[i].innerText = textDateShow;
}


// получить часы и минуты
var hh = date.getHours();
if (hh < 10) hh = '0' + hh;
var mm = date.getMinutes();
if (mm < 10) mm = '0' + mm;
var textTimeShow =  hh + ":" + mm;
// получить кол-во минут за сегодня
var minutsToday = date.getHours() * 60 + date.getMinutes();
// alert(minutsToday);
// вывести время
var elements = document.getElementsByClassName('timeShow');
for (var i=0; i < elements.length; i++) {
	var curTime = minutsToday - elements[i].id;
	
	var textHours = ~~(curTime / 60);
	if (textHours < 0) {
		textHours = 24 + textHours;
	}
	if (textHours < 10) {
		textHours = '0' + textHours;
	}

	var textMinuts = curTime % 60;
	if (textMinuts < 0) {
		textMinuts = ~textMinuts;
	}
	if (textMinuts < 10) {
		textMinuts = '0' + textMinuts;
	}

	elements[i].innerText = textHours + ":" + textMinuts;
}


// вывести год
var elements = document.getElementsByClassName('yearShow');
for (var i=0; i < elements.length; i++) {
	elements[i].innerText = yyyy;
}