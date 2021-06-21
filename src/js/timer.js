let timer_hour = 0;
let timer_min = 0;
let timer_sec = 1;
let timer_time = 0;
let timer_endOfTime = 0;
let timer_stats = false;
let audio_stats = false;

function pickDisplay() {
    let h = ('0' + timer_hour).slice(-2);
    let m = ('0' + timer_min).slice(-2);
    let s = ('0' + timer_sec).slice(-2);
    $(".pickNumberHour").html(h);
    $(".pickNumberMin").html(m);
    $(".pickNumberSec").html(s);

    if(timer_hour == 0 && timer_min == 0 && timer_sec == 0) {
        $('.timer-start').prop('disabled', true);
    } else {
        $('.timer-start').prop('disabled', false);
    }
}

function upHour() {
    if(timer_hour + 1 < 100) {
        timer_hour += 1;
    }
    pickDisplay();
}

function upMin() {
    if(timer_min + 1 < 60) {
        timer_min += 1;
    }
    pickDisplay();
}

function upSec() {
    if(timer_sec + 1 < 60) {
        timer_sec += 1;
    }
    pickDisplay();
}

function downHour() {
    if (timer_hour - 1 >= 0) {
        timer_hour -= 1;
    }
    pickDisplay();
}

function downMin() {
    if (timer_min - 1 >= 0) {
        timer_min -= 1;
    }
    pickDisplay();
}

function downSec() {
    if (timer_sec - 1 >= 0) {
        timer_sec -= 1;
    }
    pickDisplay();
}

function startTimer() {
    $(".timePicker").css('display', 'none');
    $(".timerMain").css('display', 'block');
    timer_stats = true;
    timer_time += timer_sec * 1;
    timer_time += timer_min * 60;
    timer_time += timer_hour * 3600;
    timer_time *= 100;

    timer_endOfTime = timer_time;
}

function displayTimer() {
    let timer_hour = Math.floor(timer_time / 360000);
    let timer_min = Math.floor((timer_time % 360000 / 6000));
    let timer_sec = Math.floor(timer_time % 6000 / 100);

    let h = ('0' + timer_hour).slice(-2);
    let m = ('0' + timer_min).slice(-2);
    let s = ('0' + timer_sec).slice(-2);

    if(h == 0) {
        $(".textTimer").html(m + ":" + s);
        $(".textTimer").css('font-size', '90px');
    } else {
        $(".textTimer").html(h + ":" + m + ":" + s);
        $(".textTimer").css('font-size', '64px');
    }
}

function endOfTimer() {
    var music = new Audio('./audio/radar.mp3');
    music.play();
    music.currentTime = 0;
    timer_stats = false;
    timer_hour = 0;
    timer_min = 0;
    timer_sec = 1;
    timer_time = 0;
    timer_endOfTime = 0;
    $(".timePicker").css('display', 'block');
    $(".timerMain").css('display', 'none');
    $(".pause").css('display', 'block');
    $(".timerMain .timerControllers .start").css('display', 'none');
    pickDisplay();
}

function cancelTimer() {
    timer_stats = false;
    timer_hour = 0;
    timer_min = 0;
    timer_sec = 1;
    timer_time = 0;
    timer_endOfTime = 0;
    $(".timePicker").css('display', 'block');
    $(".timerMain").css('display', 'none');
    $(".pause").css('display', 'block');
    $(".timerMain .timerControllers .start").css('display', 'none');
    pickDisplay();
}

function pauseTimer() {
    timer_stats = false;
    $(".pause").css('display', 'none');
    $(".timerMain .timerControllers .start").css('display', 'block');
}

function reStartTimer() {
    timer_stats = true;
    $(".pause").css('display', 'block');
    $(".timerMain .timerControllers .start").css('display', 'none');
}

function countTimer() {
    if(timer_stats == true) {
        timer_time -= 1;

        displayTimer();

        if (timer_time == 0) {
            endOfTimer();
        }
    }
}