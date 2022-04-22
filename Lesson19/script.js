const info = (newYear) => {
    const weekArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    const body = document.querySelector('body');
    let divTimeOfDay = document.createElement('div');
    let divWeekDay = document.createElement('div');
    let divTime = document.createElement('div');
    let divDaysNY = document.createElement('div');
    
    let dateNow = new Date();
    let hours = dateNow.getHours();
    let minutes = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();
    let todayIndex = (6 + dateNow.getDay()) % 7;
    let timeOfDay
    let strTime
    let remains

    const Greeting = () => {
        hours = dateNow.getHours();
        if (hours < 5) {
            timeOfDay = "Доброй ночи!";
        } else if (hours < 9) {
            timeOfDay = "Доброе утро!";
        } else if (hours < 18) {
            timeOfDay = "Добрый день!";
        } else if (hours < 22) {
            timeOfDay = "Добрый вечер!";
        } else {
            timeOfDay = "Доброй ночи!";
        }
        return timeOfDay
    }

    const formatAMPM = () => {
        let ampm = hours >= 12 ? 'PM' : 'AM';
        dateNow = new Date();
        hours = dateNow.getHours();
        minutes = dateNow.getMinutes();
        seconds = dateNow.getSeconds();
        hours = hours % 12;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        hours = hours == '00' ? 12 : hours;
        strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        return strTime    
    }

    const daysBeforNY = () => {
        let dateNY = new Date(newYear).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateNY - dateNow) / 1000;
        remains = Math.ceil(timeRemaining / 60 / 60 / 24) ;
        let remainsnumLast = remains.toString().split('').pop()

        if (remainsnumLast == 1) {
            remains = remains + ' день';
        } else if (1 < remainsnumLast < 5) {
            remains = remains + ' дня';
        } else {
            remains = remains + ' дней';
        }
        return remains
    }
    
    const innerHTML = () => {
        Greeting();
        formatAMPM();
        daysBeforNY();
        divTimeOfDay.innerHTML = `${timeOfDay}`
        divWeekDay.innerHTML = `Сегодня: ${weekArray[todayIndex]}`
        divTime.innerHTML =`Текущее время: ${strTime}`
        divDaysNY.innerHTML = `До нового года осталось ${remains}`
    }

    body.append(divTimeOfDay);
    body.append(divWeekDay);
    body.append(divTime);
    body.append(divDaysNY);

    innerHTML()
    setInterval(innerHTML, 500)
}

info('01 January 2023')