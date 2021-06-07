let timer_hour = 0;
let timer_min = 0;
let timer_sec = 1;
let timer_time = 0;
let timer_stats = false;

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
}

function countTimer() {
    if(timer_stats == true) {
        timer_time -= 1;
    }
}