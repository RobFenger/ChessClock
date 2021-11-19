const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const stopwatch1 = document.getElementById("stopwatch1");
const stopwatch2 = document.getElementById("stopwatch2");

const thirtySecondsPlayerOne = document.getElementById("thirtySecondsPlayerOne");
const oneMinutePlayerOne = document.getElementById("oneMinutePlayerOne");
const twoMinutesPlayerOne = document.getElementById("twoMinutesPlayerOne");
const threeMinutesPlayerOne = document.getElementById("threeMinutesPlayerOne");
const fiveMinutesPlayerOne = document.getElementById("fiveMinutesPlayerOne");
const tenMinutesPlayerOne = document.getElementById("tenMinutesPlayerOne");
const fifteenMinutesPlayerOne = document.getElementById("fifteenMinutesPlayerOne");


const thirtySecondsPlayerTwo = document.getElementById("thirtySecondsPlayerTwo");
const oneMinutePlayerTwo = document.getElementById("oneMinutePlayerTwo");
const twoMinutesPlayerTwo = document.getElementById("twoMinutesPlayerTwo");
const threeMinutesPlayerTwo = document.getElementById("threeMinutesPlayerTwo");
const fiveMinutesPlayerTwo = document.getElementById("fiveMinutesPlayerTwo");
const tenMinutesPlayerTwo = document.getElementById("tenMinutesPlayerTwo");
const fifteenMinutesPlayerTwo = document.getElementById("fifteenMinutesPlayerTwo");




let hourOne = 0;
let minuteOne = 0;
let secondOne = 0;
let hour = 0;
let minute = 0;
let second = 0;
let stopwatchOne = false;
let stopwatch = false;




thirtySecondsPlayerOne.onclick = () => {
    thirtySecondsPlayerOne.style.backgroundColor = 'lightgreen';
    oneMinutePlayerOne.style.backgroundColor = '';
    twoMinutesPlayerOne.style.backgroundColor = '';
    threeMinutesPlayerOne.style.backgroundColor = '';
    fiveMinutesPlayerOne.style.backgroundColor = '';
    tenMinutesPlayerOne.style.backgroundColor = '';
    fifteenMinutesPlayerOne.style.backgroundColor = '';
    hourOne = 0;
    minuteOne = 0;
    secondOne = 30;
    if (minuteOne < 10 && secondOne < 10) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:0${secondOne}`;
    } else if (minuteOne < 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:${secondOne}`;
    } else if (minuteOne >= 10 && secondOne < 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:0${secondOne}`;
    } else if (minuteOne >= 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:${secondOne}`;
    }
}

oneMinutePlayerOne.onclick = () => {
    thirtySecondsPlayerOne.style.backgroundColor = '';
    oneMinutePlayerOne.style.backgroundColor = 'lightgreen';
    twoMinutesPlayerOne.style.backgroundColor = '';
    threeMinutesPlayerOne.style.backgroundColor = '';
    fiveMinutesPlayerOne.style.backgroundColor = '';
    tenMinutesPlayerOne.style.backgroundColor = '';
    fifteenMinutesPlayerOne.style.backgroundColor = '';
    hourOne = 0;
    minuteOne = 1;
    secondOne = 0;
    if (minuteOne < 10 && secondOne < 10) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:0${secondOne}`;
    } else if (minuteOne < 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:${secondOne}`;
    } else if (minuteOne >= 10 && secondOne < 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:0${secondOne}`;
    } else if (minuteOne >= 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:${secondOne}`;
    }
}

twoMinutesPlayerOne.onclick = () => {
    thirtySecondsPlayerOne.style.backgroundColor = '';
    oneMinutePlayerOne.style.backgroundColor = '';
    twoMinutesPlayerOne.style.backgroundColor = 'lightgreen';
    threeMinutesPlayerOne.style.backgroundColor = '';
    fiveMinutesPlayerOne.style.backgroundColor = '';
    tenMinutesPlayerOne.style.backgroundColor = '';
    fifteenMinutesPlayerOne.style.backgroundColor = '';
    hourOne = 0;
    minuteOne = 2;
    secondOne = 0;
    if (minuteOne < 10 && secondOne < 10) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:0${secondOne}`;
    } else if (minuteOne < 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:${secondOne}`;
    } else if (minuteOne >= 10 && secondOne < 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:0${secondOne}`;
    } else if (minuteOne >= 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:${secondOne}`;
    }
}

threeMinutesPlayerOne.onclick = () => {
    thirtySecondsPlayerOne.style.backgroundColor = '';
    oneMinutePlayerOne.style.backgroundColor = '';
    twoMinutesPlayerOne.style.backgroundColor = '';
    threeMinutesPlayerOne.style.backgroundColor = 'lightgreen';
    fiveMinutesPlayerOne.style.backgroundColor = '';
    tenMinutesPlayerOne.style.backgroundColor = '';
    fifteenMinutesPlayerOne.style.backgroundColor = '';
    hourOne = 0;
    minuteOne = 3;
    secondOne = 0;
    if (minuteOne < 10 && secondOne < 10) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:0${secondOne}`;
    } else if (minuteOne < 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:${secondOne}`;
    } else if (minuteOne >= 10 && secondOne < 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:0${secondOne}`;
    } else if (minuteOne >= 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:${secondOne}`;
    }
}

fiveMinutesPlayerOne.onclick = () => {
    thirtySecondsPlayerOne.style.backgroundColor = '';
    oneMinutePlayerOne.style.backgroundColor = '';
    twoMinutesPlayerOne.style.backgroundColor = '';
    threeMinutesPlayerOne.style.backgroundColor = '';
    fiveMinutesPlayerOne.style.backgroundColor = 'lightgreen';
    tenMinutesPlayerOne.style.backgroundColor = '';
    fifteenMinutesPlayerOne.style.backgroundColor = '';
    hourOne = 0;
    minuteOne = 5;
    secondOne = 0;
    if (minuteOne < 10 && secondOne < 10) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:0${secondOne}`;
    } else if (minuteOne < 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:${secondOne}`;
    } else if (minuteOne >= 10 && secondOne < 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:0${secondOne}`;
    } else if (minuteOne >= 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:${secondOne}`;
    }
}

tenMinutesPlayerOne.onclick = () => {
    thirtySecondsPlayerOne.style.backgroundColor = '';
    oneMinutePlayerOne.style.backgroundColor = '';
    twoMinutesPlayerOne.style.backgroundColor = '';
    threeMinutesPlayerOne.style.backgroundColor = '';
    fiveMinutesPlayerOne.style.backgroundColor = '';
    tenMinutesPlayerOne.style.backgroundColor = 'lightgreen';
    fifteenMinutesPlayerOne.style.backgroundColor = '';
    hourOne = 0;
    minuteOne = 10;
    secondOne = 0;
    if (minuteOne < 10 && secondOne < 10) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:0${secondOne}`;
    } else if (minuteOne < 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:${secondOne}`;
    } else if (minuteOne >= 10 && secondOne < 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:0${secondOne}`;
    } else if (minuteOne >= 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:${secondOne}`;
    }
}

fifteenMinutesPlayerOne.onclick = () => {
    thirtySecondsPlayerOne.style.backgroundColor = '';
    oneMinutePlayerOne.style.backgroundColor = '';
    twoMinutesPlayerOne.style.backgroundColor = '';
    threeMinutesPlayerOne.style.backgroundColor = '';
    fiveMinutesPlayerOne.style.backgroundColor = '';
    tenMinutesPlayerOne.style.backgroundColor = '';
    fifteenMinutesPlayerOne.style.backgroundColor = 'lightgreen';
    hourOne = 0;
    minuteOne = 15;
    secondOne = 0;
    if (minuteOne < 10 && secondOne < 10) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:0${secondOne}`;
    } else if (minuteOne < 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:${secondOne}`;
    } else if (minuteOne >= 10 && secondOne < 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:0${secondOne}`;
    } else if (minuteOne >= 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:${secondOne}`;
    }
}



thirtySecondsPlayerTwo.onclick = () => {
    thirtySecondsPlayerTwo.style.backgroundColor = 'lightgreen';
    oneMinutePlayerTwo.style.backgroundColor = '';
    twoMinutesPlayerTwo.style.backgroundColor = '';
    threeMinutesPlayerTwo.style.backgroundColor = '';
    fiveMinutesPlayerTwo.style.backgroundColor = '';
    tenMinutesPlayerTwo.style.backgroundColor = '';
    fifteenMinutesPlayerTwo.style.backgroundColor = '';
    hour = 0;
    minute = 0;
    second = 30;
    if (minute < 10 && second < 10) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:0${second}`;
    } else if (minute < 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:${second}`;
    } else if (minute >= 10 && second < 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:0${second}`;
    } else if (minute >= 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:${second}`;
    }
}

oneMinutePlayerTwo.onclick = () => {
    thirtySecondsPlayerTwo.style.backgroundColor = '';
    oneMinutePlayerTwo.style.backgroundColor = 'lightgreen';
    twoMinutesPlayerTwo.style.backgroundColor = '';
    threeMinutesPlayerTwo.style.backgroundColor = '';
    fiveMinutesPlayerTwo.style.backgroundColor = '';
    tenMinutesPlayerTwo.style.backgroundColor = '';
    fifteenMinutesPlayerTwo.style.backgroundColor = '';
    hour = 0;
    minute = 1;
    second = 0;
    if (minute < 10 && second < 10) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:0${second}`;
    } else if (minute < 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:${second}`;
    } else if (minute >= 10 && second < 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:0${second}`;
    } else if (minute >= 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:${second}`;
    }
}

twoMinutesPlayerTwo.onclick = () => {
    thirtySecondsPlayerTwo.style.backgroundColor = '';
    oneMinutePlayerTwo.style.backgroundColor = '';
    twoMinutesPlayerTwo.style.backgroundColor = 'lightgreen';
    threeMinutesPlayerTwo.style.backgroundColor = '';
    fiveMinutesPlayerTwo.style.backgroundColor = '';
    tenMinutesPlayerTwo.style.backgroundColor = '';
    fifteenMinutesPlayerTwo.style.backgroundColor = '';
    hour = 0;
    minute = 2;
    second = 0;
    if (minute < 10 && second < 10) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:0${second}`;
    } else if (minute < 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:${second}`;
    } else if (minute >= 10 && second < 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:0${second}`;
    } else if (minute >= 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:${second}`;
    }
}

threeMinutesPlayerTwo.onclick = () => {
    thirtySecondsPlayerTwo.style.backgroundColor = '';
    oneMinutePlayerTwo.style.backgroundColor = '';
    twoMinutesPlayerTwo.style.backgroundColor = '';
    threeMinutesPlayerTwo.style.backgroundColor = 'lightgreen';
    fiveMinutesPlayerTwo.style.backgroundColor = '';
    tenMinutesPlayerTwo.style.backgroundColor = '';
    fifteenMinutesPlayerTwo.style.backgroundColor = '';
    hour = 0;
    minute = 3;
    second = 0;
    if (minute < 10 && second < 10) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:0${second}`;
    } else if (minute < 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:${second}`;
    } else if (minute >= 10 && second < 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:0${second}`;
    } else if (minute >= 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:${second}`;
    }
}

fiveMinutesPlayerTwo.onclick = () => {
    thirtySecondsPlayerTwo.style.backgroundColor = '';
    oneMinutePlayerTwo.style.backgroundColor = '';
    twoMinutesPlayerTwo.style.backgroundColor = '';
    threeMinutesPlayerTwo.style.backgroundColor = '';
    fiveMinutesPlayerTwo.style.backgroundColor = 'lightgreen';
    tenMinutesPlayerTwo.style.backgroundColor = '';
    fifteenMinutesPlayerTwo.style.backgroundColor = '';
    hour = 0;
    minute = 5;
    second = 0;
    if (minute < 10 && second < 10) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:0${second}`;
    } else if (minute < 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:${second}`;
    } else if (minute >= 10 && second < 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:0${second}`;
    } else if (minute >= 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:${second}`;
    }
}

tenMinutesPlayerTwo.onclick = () => {
    thirtySecondsPlayerTwo.style.backgroundColor = '';
    oneMinutePlayerTwo.style.backgroundColor = '';
    twoMinutesPlayerTwo.style.backgroundColor = '';
    threeMinutesPlayerTwo.style.backgroundColor = '';
    fiveMinutesPlayerTwo.style.backgroundColor = '';
    tenMinutesPlayerTwo.style.backgroundColor = 'lightgreen';
    fifteenMinutesPlayerTwo.style.backgroundColor = '';
    hour = 0;
    minute = 10;
    second = 0;
    if (minute < 10 && second < 10) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:0${second}`;
    } else if (minute < 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:${second}`;
    } else if (minute >= 10 && second < 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:0${second}`;
    } else if (minute >= 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:${second}`;
    }
}

fifteenMinutesPlayerTwo.onclick = () => {
    thirtySecondsPlayerTwo.style.backgroundColor = '';
    oneMinutePlayerTwo.style.backgroundColor = '';
    twoMinutesPlayerTwo.style.backgroundColor = '';
    threeMinutesPlayerTwo.style.backgroundColor = '';
    fiveMinutesPlayerTwo.style.backgroundColor = '';
    tenMinutesPlayerTwo.style.backgroundColor = '';
    fifteenMinutesPlayerTwo.style.backgroundColor = 'lightgreen';
    hour = 0;
    minute = 15;
    second = 0;
    if (minute < 10 && second < 10) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:0${second}`;
    } else if (minute < 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:${second}`;
    } else if (minute >= 10 && second < 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:0${second}`;
    } else if (minute >= 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:${second}`;
    }
}






const oneSecondP1 = document.getElementById("oneSecondP1");
const twoSecondsP1 = document.getElementById("twoSecondsP1");
const threeSecondsP1 = document.getElementById("threeSecondsP1");
const fiveSecondsP1 = document.getElementById("fiveSecondsP1");
const tenSecondsP1 = document.getElementById("tenSecondsP1");
const fifteenSecondsP1 = document.getElementById("fifteenSecondsP1");
let incrementP1;

oneSecondP1.onclick = () => {
    if (oneSecondP1.style.backgroundColor === '') {
        oneSecondP1.style.backgroundColor = 'lightgreen';
        twoSecondsP1.style.backgroundColor = '';
        threeSecondsP1.style.backgroundColor = '';
        fiveSecondsP1.style.backgroundColor = '';
        tenSecondsP1.style.backgroundColor = '';
        fifteenSecondsP1.style.backgroundColor = '';
        incrementP1 = 1;
    } else if (oneSecondP1.style.backgroundColor === 'lightgreen') {
        oneSecondP1.style.backgroundColor = '';
        incrementP1 = 0;
    }
}

twoSecondsP1.onclick = () => {
    if (twoSecondsP1.style.backgroundColor === '') {
        twoSecondsP1.style.backgroundColor = 'lightgreen';
        oneSecondP1.style.backgroundColor = '';
        threeSecondsP1.style.backgroundColor = '';
        fiveSecondsP1.style.backgroundColor = '';
        tenSecondsP1.style.backgroundColor = '';
        fifteenSecondsP1.style.backgroundColor = '';
        incrementP1 = 2;
    } else if (twoSecondsP1.style.backgroundColor === 'lightgreen') {
        twoSecondsP1.style.backgroundColor = '';
        incrementP1 = 0;
    }
}

threeSecondsP1.onclick = () => {
    if (threeSecondsP1.style.backgroundColor === '') {
        oneSecondP1.style.backgroundColor = '';
        twoSecondsP1.style.backgroundColor = '';
        threeSecondsP1.style.backgroundColor = 'lightgreen';
        fiveSecondsP1.style.backgroundColor = '';
        tenSecondsP1.style.backgroundColor = '';
        fifteenSecondsP1.style.backgroundColor = '';
        incrementP1 = 3;
    } else if (threeSecondsP1.style.backgroundColor === 'lightgreen') {
        threeSecondsP1.style.backgroundColor = '';
        incrementP1 = 0;
    }
}

fiveSecondsP1.onclick = () => {
    if (fiveSecondsP1.style.backgroundColor === '') {
        oneSecondP1.style.backgroundColor = '';
        twoSecondsP1.style.backgroundColor = '';
        threeSecondsP1.style.backgroundColor = '';
        fiveSecondsP1.style.backgroundColor = 'lightgreen';
        tenSecondsP1.style.backgroundColor = '';
        fifteenSecondsP1.style.backgroundColor = '';
        incrementP1 = 5;
    } else if (fiveSecondsP1.style.backgroundColor === 'lightgreen') {
        fiveSecondsP1.style.backgroundColor = '';
        incrementP1 = 0;
    }
}

tenSecondsP1.onclick = () => {
    if (tenSecondsP1.style.backgroundColor === '') {
        oneSecondP1.style.backgroundColor = '';
        twoSecondsP1.style.backgroundColor = '';
        threeSecondsP1.style.backgroundColor = '';
        fiveSecondsP1.style.backgroundColor = '';
        tenSecondsP1.style.backgroundColor = 'lightgreen';
        fifteenSecondsP1.style.backgroundColor = '';
        incrementP1 = 10;
    } else if (tenSecondsP1.style.backgroundColor === 'lightgreen') {
        tenSecondsP1.style.backgroundColor = '';
        incrementP1 = 0;
    }
}

fifteenSecondsP1.onclick = () => {
    if (fifteenSecondsP1.style.backgroundColor === '') {
        oneSecondP1.style.backgroundColor = '';
        twoSecondsP1.style.backgroundColor = '';
        threeSecondsP1.style.backgroundColor = '';
        fiveSecondsP1.style.backgroundColor = '';
        tenSecondsP1.style.backgroundColor = '';
        fifteenSecondsP1.style.backgroundColor = 'lightgreen';
        incrementP1 = 15;
    } else if (fifteenSecondsP1.style.backgroundColor === 'lightgreen') {
        fifteenSecondsP1.style.backgroundColor = '';
        incrementP1 = 0;
    }
}


const oneSecond = document.getElementById("oneSecondP2");
const twoSeconds = document.getElementById("twoSecondsP2");
const threeSeconds = document.getElementById("threeSecondsP2");
const fiveSeconds = document.getElementById("fiveSecondsP2");
const tenSeconds = document.getElementById("tenSecondsP2");
const fifteenSeconds = document.getElementById("fifteenSecondsP2");
let incrementP2;

oneSecond.onclick = () => {
    if (oneSecond.style.backgroundColor === '') {
        oneSecond.style.backgroundColor = 'lightgreen';
        twoSeconds.style.backgroundColor = '';
        threeSeconds.style.backgroundColor = '';
        fiveSeconds.style.backgroundColor = '';
        tenSeconds.style.backgroundColor = '';
        fifteenSeconds.style.backgroundColor = '';
        incrementP2 = 1;
    } else if (oneSecond.style.backgroundColor === 'lightgreen') {
        oneSecond.style.backgroundColor = '';
        incrementP2 = 0;
    }   
}

twoSeconds.onclick = () => {
    if (twoSeconds.style.backgroundColor === '') {
        oneSecond.style.backgroundColor = '';
        twoSeconds.style.backgroundColor = 'lightgreen';
        threeSeconds.style.backgroundColor = '';
        fiveSeconds.style.backgroundColor = '';
        tenSeconds.style.backgroundColor = '';
        fifteenSeconds.style.backgroundColor = '';
        incrementP2 = 2;
    } else if (twoSeconds.style.backgroundColor === 'lightgreen') {
        twoSeconds.style.backgroundColor = '';
        incrementP2 = 0;
    }   
}

threeSeconds.onclick = () => {
    if (threeSeconds.style.backgroundColor === '') {
        oneSecond.style.backgroundColor = '';
        twoSeconds.style.backgroundColor = '';
        threeSeconds.style.backgroundColor = 'lightgreen';
        fiveSeconds.style.backgroundColor = '';
        tenSeconds.style.backgroundColor = '';
        fifteenSeconds.style.backgroundColor = '';
        incrementP2 = 3;
    } else if (threeSeconds.style.backgroundColor === 'lightgreen') {
        threeSeconds.style.backgroundColor = '';
        incrementP2 = 0;
    }   
}

fiveSeconds.onclick = () => {
    if (fiveSeconds.style.backgroundColor === '') {
        oneSecond.style.backgroundColor = '';
        twoSeconds.style.backgroundColor = '';
        threeSeconds.style.backgroundColor = '';
        fiveSeconds.style.backgroundColor = 'lightgreen';
        tenSeconds.style.backgroundColor = '';
        fifteenSeconds.style.backgroundColor = '';
        incrementP2 = 5;
    } else if (fiveSeconds.style.backgroundColor === 'lightgreen') {
        fiveSeconds.style.backgroundColor = '';
        incrementP2 = 0;
    }   
}

tenSeconds.onclick = () => {
    if (tenSeconds.style.backgroundColor === '') {
        oneSecond.style.backgroundColor = '';
        twoSeconds.style.backgroundColor = '';
        threeSeconds.style.backgroundColor = '';
        fiveSeconds.style.backgroundColor = '';
        tenSeconds.style.backgroundColor = 'lightgreen';
        fifteenSeconds.style.backgroundColor = '';
        incrementP2 = 10;
    } else if (tenSeconds.style.backgroundColor === 'lightgreen') {
        tenSeconds.style.backgroundColor = '';
        incrementP2 = 0;
    }    
}

fifteenSeconds.onclick = () => {
    if (fifteenSeconds.style.backgroundColor === '') {
        oneSecond.style.backgroundColor = '';
        twoSeconds.style.backgroundColor = '';
        threeSeconds.style.backgroundColor = '';
        fiveSeconds.style.backgroundColor = '';
        tenSeconds.style.backgroundColor = '';
        fifteenSeconds.style.backgroundColor = 'lightgreen';
        incrementP2 = 15;
    } else if (fifteenSeconds.style.backgroundColor === 'lightgreen') {
        fifteenSeconds.style.backgroundColor = '';
        incrementP2 = 0;
    }
}






const timerOne = () => {
    stopwatchOne = true;
    if (hourOne === 0 && minuteOne === 0 && secondOne === 0) {
        player1.style.backgroundColor = 'red';
        stopwatch1.innerHTML = 'GAME OVER!';
        navigator.vibrate(200);
    } else if (secondOne === 0 && minuteOne !== 0) {
        minuteOne = minuteOne - 1;
        secondOne = 59;
    } else if (secondOne === 0 && minuteOne === 0 && hourOne !== 0)  {
        hourOne = hourOne - 1;
        minuteOne = 59;
        secondOne = 59;
    } else if (hourOne !== 0 || minuteOne !== 0 || secondOne !== 0) {
        secondOne = secondOne - 1;
    }

    if (minuteOne < 10 && secondOne < 10 && (minuteOne !== 0 || secondOne !== 0)) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:0${secondOne}`;
    } else if (minuteOne < 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:${secondOne}`;
    } else if (minuteOne >= 10 && secondOne < 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:0${secondOne}`;
    } else if (minuteOne >= 10 && secondOne >= 10) {
        stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:${secondOne}`;
    }
}

const timerTwo = () => {
    stopwatch = true;
    if (hour === 0 && minute === 0 && second === 0) {
        player2.style.backgroundColor = 'red';
        stopwatch2.innerHTML = `GAME OVER!`;
        navigator.vibrate(200);
    } else if (second === 0 && minute !== 0) {
        minute = minute - 1;
        second = 59 ;
    } else if (second === 0 && minute === 0 && hour !== 0) {
        hour = hour - 1;
        minute = 59;
        second = 59;
    } else if (hour !== 0 || minute !== 0 || second !== 0) {
        second = second - 1;
    }

    if (minute < 10 && second < 10 && (minute !== 0 || second !== 0)) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:0${second}`;
    } else if (minute < 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:0${minute}:${second}`;
    } else if (minute >= 10 && second < 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:0${second}`;
    } else if (minute >= 10 && second >= 10) {
        stopwatch2.innerHTML = `0${hour}:${minute}:${second}`;
    }
}


let player1On;
let player2On;

player2.onclick = () => {
    if ((hour !== 0 || minute !== 0 || second !== 0) && (hourOne !== 0 || minuteOne !== 0 || secondOne !== 0)) {
    if (stopwatchOne === false) {
        player1.style.backgroundColor = 'lightgreen';
        player2.style.backgroundColor = 'lightgray';
        clearInterval(player2On);
        if (incrementP2 === 1 && stopwatch) {
            second = second + 1;
            if (second > 59) {
                minute = minute + 1;
                second = second - 60;
            }
            if (minute > 59) {
                hour = hour + 1;
                minute = minute - 60;
            }
        } else if (incrementP2 === 2 && stopwatch) {
            second = second + 2;
            if (second > 59) {
                minute = minute + 1;
                second = second - 60;
            }
            if (minute > 59) {
                hour = hour + 1;
                minute = minute - 60;
            }
        } else if (incrementP2 === 3 && stopwatch) {
            second = second + 3;
            if (second > 59) {
                minute = minute + 1;
                second = second - 60;
            }
            if (minute > 59) {
                hour = hour + 1;
                minute = minute - 60;
            }
        } else if (incrementP2 === 5 && stopwatch) {
            second = second + 5;
            if (second > 59) {
                minute = minute + 1;
                second = second - 60;
            }
            if (minute > 59) {
                hour = hour + 1;
                minute = minute - 60;
            }
        } else if (incrementP2 === 10 && stopwatch) {
            second = second + 10;
            if (second > 59) {
                minute = minute + 1;
                second = second - 60;
            }
            if (minute > 59) {
                hour = hour + 1;
                minute = minute - 60;
            }
        } else if (incrementP2 === 15 && stopwatch) {
            second = second + 15;
            if (second > 59) {
                minute = minute + 1;
                second = second - 60;
            }
            if (minute > 59) {
                hour = hour + 1;
                minute = minute - 60;
            }
        }
        if (minute < 10 && second < 10 && (minute !== 0 || second !== 0)) {
            stopwatch2.innerHTML = `0${hour}:0${minute}:0${second}`;
        } else if (minute < 10 && second >= 10) {
            stopwatch2.innerHTML = `0${hour}:0${minute}:${second}`;
        } else if (minute >= 10 && second < 10) {
            stopwatch2.innerHTML = `0${hour}:${minute}:0${second}`;
        } else if (minute >= 10 && second >= 10) {
            stopwatch2.innerHTML = `0${hour}:${minute}:${second}`;
        }
        player1On = setInterval(timerOne, 1000);
        stopwatch = false;  
    } 
}}

player1.onclick = () => {
    if ((hour !== 0 || minute !== 0 || second !== 0) && (hourOne !== 0 || minuteOne !== 0 || secondOne !== 0)) {
    if (stopwatch === false) {
        player1.style.backgroundColor = 'lightgray';
        player2.style.backgroundColor = 'lightgreen';
        clearInterval(player1On);
        if (incrementP1 === 1 && stopwatchOne) {
            secondOne = secondOne + 1;
            if (secondOne > 59) {
                minuteOne = minuteOne + 1;
                secondOne = secondOne - 60;
            }
            if (minuteOne > 59) {
                hourOne = hourOne + 1;
                minuteOne = minuteOne - 60;
            }
            
        } else if (incrementP1 === 2 && stopwatchOne) {
            secondOne = secondOne + 2;
            if (secondOne > 59) {
                minuteOne = minuteOne + 1;
                secondOne = secondOne - 60;
            }
            if (minuteOne > 59) {
                hourOne = hourOne + 1;
                minuteOne = minuteOne - 60;
            }
        } else if (incrementP1 === 3 && stopwatchOne) {
            secondOne = secondOne + 3;
            if (secondOne > 59) {
                minuteOne = minuteOne + 1;
                secondOne = secondOne - 60;
            }
            if (minuteOne > 59) {
                hourOne = hourOne + 1;
                minuteOne = minuteOne - 60;
            }
        } else if (incrementP1 === 5 && stopwatchOne) {
            secondOne = secondOne + 5;
            if (secondOne > 59) {
                minuteOne = minuteOne + 1;
                secondOne = secondOne - 60;
            }
            if (minuteOne > 59) {
                hourOne = hourOne + 1;
                minuteOne = minuteOne - 60;
            }
        } else if (incrementP1 === 10 && stopwatchOne) {
            secondOne = secondOne + 10;
            if (secondOne > 59) {
                minuteOne = minuteOne + 1;
                secondOne = secondOne - 60;
            }
            if (minuteOne > 59) {
                hourOne = hourOne + 1;
                minuteOne = minuteOne - 60;
            }
        } else if (incrementP1 === 15 && stopwatchOne) {
            secondOne = secondOne + 15;
            if (secondOne > 59) {
                minuteOne = minuteOne + 1;
                secondOne = secondOne - 60;
            }
            if (minuteOne > 59) {
                hourOne = hourOne + 1;
                minuteOne = minuteOne - 60;
            }
        }
        if (minuteOne < 10 && secondOne < 10 && (minuteOne !== 0 || secondOne !== 0)) {
            stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:0${secondOne}`;
        } else if (minuteOne < 10 && secondOne >= 10) {
            stopwatch1.innerHTML = `0${hourOne}:0${minuteOne}:${secondOne}`;
        } else if (minuteOne >= 10 && secondOne < 10) {
            stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:0${secondOne}`;
        } else if (minuteOne >= 10 && secondOne >= 10) {
            stopwatch1.innerHTML = `0${hourOne}:${minuteOne}:${secondOne}`;
        }
        player2On = setInterval(timerTwo, 1000);
        stopwatchOne = false;
       
    }
}}

const pause = document.getElementById("pause");
pause.onclick = () => {
    clearInterval(player1On);
    clearInterval(player2On);
    stopwatch = false;
    stopwatchOne = false;
}

const resetIcon = document.getElementById("reset-icon");
resetIcon.onclick = () => {
    clearInterval(player1On);
    clearInterval(player2On);
    stopwatch = false;
    stopwatchOne = false;
    player1.style.backgroundColor = 'lightgray';
    player2.style.backgroundColor = 'lightgray';
    hourOne = 0;
    minuteOne = 0;
    secondOne = 0;
    hour = 0;
    minute = 0;
    second = 0;
    incrementP1 = 0;
    incrementP2 = 0;
    stopwatch1.innerHTML = '00:00:00';
    stopwatch2.innerHTML = '00:00:00';
    oneSecond.style.backgroundColor = '';
    twoSeconds.style.backgroundColor = '';
    threeSeconds.style.backgroundColor = '';
    fiveSeconds.style.backgroundColor = '';
    tenSeconds.style.backgroundColor = '';
    fifteenSeconds.style.backgroundColor = '';
    oneSecondP1.style.backgroundColor = '';
    twoSecondsP1.style.backgroundColor = '';
    threeSecondsP1.style.backgroundColor = '';
    fiveSecondsP1.style.backgroundColor = '';
    tenSecondsP1.style.backgroundColor = '';
    fifteenSecondsP1.style.backgroundColor = '';
    thirtySecondsPlayerOne.style.backgroundColor = '';
    oneMinutePlayerOne.style.backgroundColor = '';
    twoMinutesPlayerOne.style.backgroundColor = '';
    threeMinutesPlayerOne.style.backgroundColor = '';
    fiveMinutesPlayerOne.style.backgroundColor = '';
    tenMinutesPlayerOne.style.backgroundColor = '';
    fifteenMinutesPlayerOne.style.backgroundColor = '';
    thirtySecondsPlayerTwo.style.backgroundColor = '';
    oneMinutePlayerTwo.style.backgroundColor = '';
    twoMinutesPlayerTwo.style.backgroundColor = '';
    threeMinutesPlayerTwo.style.backgroundColor = '';
    fiveMinutesPlayerTwo.style.backgroundColor = '';
    tenMinutesPlayerTwo.style.backgroundColor = '';
    fifteenMinutesPlayerTwo.style.backgroundColor = '';
}

let a = window.matchMedia("(min-device-width: 375px)");
let b = window.matchMedia("(max-device-width: 667px)");

const settingIcon = document.getElementById("setting-icon");
const settings = document.getElementById("settings");
settingIcon.onclick = () => {
    if (settings.style.visibility === 'hidden') {
        settings.style.visibility = 'visible';
    } else {
        settings.style.visibility = 'hidden';
    }
}

const x = document.getElementById("x");
x.onclick = () => {
    settings.style.visibility = 'hidden';
}

const P1Name = document.getElementById("P1-name-input");
const P2Name = document.getElementById("P2-name-input");

const playerOne = document.getElementById("player-one");
const playerTwo = document.getElementById("player-two");

P1Name.addEventListener('input', handleEventP1);
P2Name.addEventListener('input', handleEventP2);

function handleEventP1 (e) {
    playerOne.innerHTML = e.target.value;
}

function handleEventP2 (e) {
    playerTwo.innerHTML = e.target.value;
}
