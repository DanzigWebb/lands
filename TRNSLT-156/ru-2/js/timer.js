function getDayEnd() {
    var dayEnd = new Date();
    dayEnd.setHours(23, 59, 59);

    return dayEnd;
}

if (window.dayEndTimestamp === undefined) {
    window.dayEndTimestamp = getDayEnd();
}

function getTimeRemaining(endtime) {
    var t       = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours   = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
        'total':   t,
        'hours':   hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ));

    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function initializeClock(id, endtime) {
    var clock       = document.getElementById(id),
        hoursSpan   = clock.querySelector('.hours'),
        minutesSpan = clock.querySelector('.minutes'),
        secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            hoursSpan.innerHTML = ('00');
            minutesSpan.innerHTML = ('00');
            secondsSpan.innerHTML = ('00');
            clearInterval(timeinterval);
        }
    }

    updateClock();

    var timeinterval = setInterval(updateClock, 500);
}

var myClock = (document.cookie && document.cookie.match('myClock')) ?
                (Date.parse(getCookie('myClock')) - Date.now() > -60000) : null;

// if there's a cookie with the name myClock, and timer stoped less then 1 minute (-60000) ago, use that value as the deadline
if (myClock) {
    // get deadline value from cookie
    var deadline = getCookie('myClock');
}
// otherwise, set a deadline 45 minutes from now and
// save it in a cookie with that name
else {
    // create deadline 45 minutes from now
    var timeInMinutes = 45,
        currentTime   = Date.parse(new Date().toString()),
        deadline      = new Date(currentTime + timeInMinutes * 60 * 1000);

    // store deadline in cookie for future reference
    document.cookie = 'myClock=' + deadline;
}
