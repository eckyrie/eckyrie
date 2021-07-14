const daysEL = document.getElementById('days');
const hourssEL = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secondsEL = document.getElementById('seconds');


const birthday = 'Sep 21 2021';

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const totalseconds = (birthdayDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysEL.innerHTML = formatTime(days);
    hourssEL.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(mins);
    secondsEL.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
// initial call


countdown();
setInterval(countdown, 1000)