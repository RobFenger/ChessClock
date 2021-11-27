const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const stopwatch1 = document.getElementById("stopwatch1");
const stopwatch2 = document.getElementById("stopwatch2");

let hourOne = 0;
let minuteOne = 0;
let secondOne = 0;
let hour = 0;
let minute = 0;
let second = 0;
let stopwatchOne = false;
let stopwatch = false;
let incrementP1;
let incrementP2;


$(document).ready(() => {
    $('#setting-icon').on('click', () => {
        $('#settings').toggle();
    })
    $('#x').on('click', () => {
        $('#settings').hide();
    })

    $('#pause').on('click', () => {
        clearInterval(player1On);
        clearInterval(player2On);
        stopwatch = false;
        stopwatchOne = false;
    })

    $('#reset-icon').on('click', () => {
        clearInterval(player1On);
        clearInterval(player2On);
        stopwatch = false;
        stopwatchOne = false;
        $('#player1').css('backgroundColor', 'lightgray');
        $('#player2').css('backgroundColor', 'lightgray');
        hourOne = 0;
        minuteOne = 0;
        secondOne = 0;
        hour = 0;
        minute = 0;
        second = 0;
        incrementP1 = 0;
        incrementP2 = 0;
        $('#stopwatch1').html('00:00:00');
        $('#stopwatch2').html('00:00:00');
        $('.playTimePlayerOne').children().css('backgroundColor', '');
        $('.playTimePlayerTwo').children().css('backgroundColor', '');
        $('.incrementTimePlayerOne').children().css('backgroundColor', '');
        $('.incrementTimePlayerTwo').children().css('backgroundColor', '');
    })

    const displayTime = () => {
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

    const displayTimeP2 = () => {
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

    $('#thirtySecondsPlayerOne').on('click', event => {
        $(event.currentTarget).css("backgroundColor", 'lightgreen');
        $(event.currentTarget).siblings().css("backgroundColor", '');
        hourOne = 0;
        minuteOne = 0;
        secondOne = 30;
        displayTime();
    })
    $('#oneMinutePlayerOne').on('click', event => {
        $(event.currentTarget).css("backgroundColor", 'lightgreen');
        $(event.currentTarget).siblings().css("backgroundColor", '');
        hourOne = 0;
        minuteOne = 1;
        secondOne = 0;
        displayTime();
    })
    $('#twoMinutesPlayerOne').on('click', event => {
        $(event.currentTarget).css("backgroundColor", 'lightgreen');
        $(event.currentTarget).siblings().css("backgroundColor", '');
        hourOne = 0;
        minuteOne = 2;
        secondOne = 0;
        displayTime();
    })
    $('#threeMinutesPlayerOne').on('click', event => {
        $(event.currentTarget).css("backgroundColor", 'lightgreen');
        $(event.currentTarget).siblings().css("backgroundColor", '');
        hourOne = 0;
        minuteOne = 3;
        secondOne = 0;
        displayTime();
    })
    $('#fiveMinutesPlayerOne').on('click', event => {
        $(event.currentTarget).css("backgroundColor", 'lightgreen');
        $(event.currentTarget).siblings().css("backgroundColor", '');
        hourOne = 0;
        minuteOne = 5;
        secondOne = 0;
        displayTime();
    })
    $('#tenMinutesPlayerOne').on('click', event => {
        $(event.currentTarget).css("backgroundColor", 'lightgreen');
        $(event.currentTarget).siblings().css("backgroundColor", '');
        hourOne = 0;
        minuteOne = 10;
        secondOne = 0;
        displayTime();
    })
    $('#fifteenMinutesPlayerOne').on('click', event => {
        $(event.currentTarget).css("backgroundColor", 'lightgreen');
        $(event.currentTarget).siblings().css("backgroundColor", '');
        hourOne = 0;
        minuteOne = 15;
        secondOne = 0;
        displayTime();
    })

    $('#thirtySecondsPlayerTwo').on('click', event => {
        $(event.currentTarget).css("backgroundColor", 'lightgreen');
        $(event.currentTarget).siblings().css("backgroundColor", '');
        hour = 0;
        minute = 0;
        second = 30;
        displayTimeP2();
    })
    $('#oneMinutePlayerTwo').on('click', event => {
        $(event.currentTarget).css("backgroundColor", 'lightgreen');
        $(event.currentTarget).siblings().css("backgroundColor", '');
        hour = 0;
        minute = 1;
        second = 0;
        displayTimeP2();
    })
    $('#twoMinutesPlayerTwo').on('click', event => {
        $(event.currentTarget).css("backgroundColor", 'lightgreen');
        $(event.currentTarget).siblings().css("backgroundColor", '');
        hour = 0;
        minute = 2;
        second = 0;
        displayTimeP2();
    })
    $('#threeMinutesPlayerTwo').on('click', event => {
        $(event.currentTarget).css("backgroundColor", 'lightgreen');
        $(event.currentTarget).siblings().css("backgroundColor", '');
        hour = 0;
        minute = 3;
        second = 0;
        displayTimeP2();
    })
    $('#fiveMinutesPlayerTwo').on('click', event => {
        $(event.currentTarget).css("backgroundColor", 'lightgreen');
        $(event.currentTarget).siblings().css("backgroundColor", '');
        hour = 0;
        minute = 5;
        second = 0;
        displayTimeP2();
    })
    $('#tenMinutesPlayerTwo').on('click', event => {
        $(event.currentTarget).css("backgroundColor", 'lightgreen');
        $(event.currentTarget).siblings().css("backgroundColor", '');
        hour = 0;
        minute = 10;
        second = 0;
        displayTimeP2();
    })
    $('#fifteenMinutesPlayerTwo').on('click', event => {
        $(event.currentTarget).css("backgroundColor", 'lightgreen');
        $(event.currentTarget).siblings().css("backgroundColor", '');
        hour = 0;
        minute = 15;
        second = 0;
        displayTimeP2();
    })

    $('#oneSecondP1').on('click', event => {
        if (incrementP1 !== 1) {
            $(event.currentTarget).css('backgroundColor', 'lightgreen');
            $(event.currentTarget).siblings().css('backgroundColor', '');
            incrementP1 = 1;
        } else if (incrementP1 === 1) {
            $(event.currentTarget).css('backgroundColor', '');
            incrementP1 = 0;
        }
    })
    $('#twoSecondsP1').on('click', event => {
        if (incrementP1 !== 2) {
            $(event.currentTarget).css('backgroundColor', 'lightgreen');
            $(event.currentTarget).siblings().css('backgroundColor', '');
            incrementP1 = 2;
        } else if (incrementP1 === 2) {
            $(event.currentTarget).css('backgroundColor', '');
            incrementP1 = 0;
        }
    })
    $('#threeSecondsP1').on('click', event => {
        if (incrementP1 !== 3) {
            $(event.currentTarget).css('backgroundColor', 'lightgreen');
            $(event.currentTarget).siblings().css('backgroundColor', '');
            incrementP1 = 3;
        } else if (incrementP1 === 1) {
            $(event.currentTarget).css('backgroundColor', '');
            incrementP1 = 0;
        }
    })
    $('#fiveSecondsP1').on('click', event => {
        if (incrementP1 !== 5) {
            $(event.currentTarget).css('backgroundColor', 'lightgreen');
            $(event.currentTarget).siblings().css('backgroundColor', '');
            incrementP1 = 5;
        } else if (incrementP1 === 5) {
            $(event.currentTarget).css('backgroundColor', '');
            incrementP1 = 0;
        }
    })
    $('#tenSecondsP1').on('click', event => {
        if (incrementP1 !== 10) {
            $(event.currentTarget).css('backgroundColor', 'lightgreen');
            $(event.currentTarget).siblings().css('backgroundColor', '');
            incrementP1 = 10;
        } else if (incrementP1 === 10) {
            $(event.currentTarget).css('backgroundColor', '');
            incrementP1 = 0;
        }
    })
    $('#fifteenSecondsP1').on('click', event => {
        if (incrementP1 !== 15) {
            $(event.currentTarget).css('backgroundColor', 'lightgreen');
            $(event.currentTarget).siblings().css('backgroundColor', '');
            incrementP1 = 15;
        } else if (incrementP1 === 15) {
            $(event.currentTarget).css('backgroundColor', '');
            incrementP1 = 0;
        }
    })

    $('#oneSecondP2').on('click', event => {
        if (incrementP2 !== 1) {
            $(event.currentTarget).css('backgroundColor', 'lightgreen');
            $(event.currentTarget).siblings().css('backgroundColor', '');
            incrementP2 = 1;
        } else if (incrementP2 === 1) {
            $(event.currentTarget).css('backgroundColor', '');
            incrementP2 = 0;
        }
    })
    $('#twoSecondsP2').on('click', event => {
        if (incrementP2 !== 2) {
            $(event.currentTarget).css('backgroundColor', 'lightgreen');
            $(event.currentTarget).siblings().css('backgroundColor', '');
            incrementP2 = 2;
        } else if (incrementP2 === 2) {
            $(event.currentTarget).css('backgroundColor', '');
            incrementP2 = 0;
        }
    })
    $('#threeSecondsP2').on('click', event => {
        if (incrementP2 !== 3) {
            $(event.currentTarget).css('backgroundColor', 'lightgreen');
            $(event.currentTarget).siblings().css('backgroundColor', '');
            incrementP2 = 3;
        } else if (incrementP2 === 3) {
            $(event.currentTarget).css('backgroundColor', '');
            incrementP2 = 0;
        }
    })
    $('#fiveSecondsP2').on('click', event => {
        if (incrementP2 !== 5) {
            $(event.currentTarget).css('backgroundColor', 'lightgreen');
            $(event.currentTarget).siblings().css('backgroundColor', '');
            incrementP2 = 5;
        } else if (incrementP2 === 5) {
            $(event.currentTarget).css('backgroundColor', '');
            incrementP2 = 0;
        }
    })
    $('#tenSecondsP2').on('click', event => {
        if (incrementP2 !== 10) {
            $(event.currentTarget).css('backgroundColor', 'lightgreen');
            $(event.currentTarget).siblings().css('backgroundColor', '');
            incrementP2 = 10;
        } else if (incrementP2 === 10) {
            $(event.currentTarget).css('backgroundColor', '');
            incrementP2 = 0;
        }
    })
    $('#fifteenSecondsP2').on('click', event => {
        if (incrementP2 !== 15) {
            $(event.currentTarget).css('backgroundColor', 'lightgreen');
            $(event.currentTarget).siblings().css('backgroundColor', '');
            incrementP2 = 15;
        } else if (incrementP2 === 15) {
            $(event.currentTarget).css('backgroundColor', '');
            incrementP2 = 0;
        }
    })
})

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











