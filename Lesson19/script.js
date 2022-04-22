const weekArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const body = document.querySelector('body');

let divGreeting = document.createElement('p');
let divToday = document.createElement('p');
let divStrTime = document.createElement('p');

let dateNow = new Date();
let hoursNow = dateNow.getHours();
let todayIndex = (6 + dateNow.getDay()) % 7;
let strTime

if (hoursNow < 5 || hoursNow >= 23) {
    divGreeting.innerHTML = "Добрая ночь!";
} else if (5 <= hoursNow < 10) {
    divGreeting.innerHTML = "Доброе утро!";
} else if (10 <= hoursNow < 18) {
    divGreeting.innerHTML = "Добрый день!";
} else if (18 <= hoursNow < 23) {
    divGreeting.innerHTML = "Добрый вечер!";
}
divToday.innerHTML = "Cегодня: " + weekArray[todayIndex];

body.append(divGreeting);
body.append(divToday)
body.append(divStrTime);

function formatAMPM() {
    dateNow = new Date()
    let hours = dateNow.getHours();
    let minutes = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();

    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    hours = hours == '00' ? 12 : hours;
    strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    divStrTime.innerHTML = "Текущее время: " + strTime;
    console.log('sec');
    
}
formatAMPM()
setInterval(formatAMPM, 500);

  






