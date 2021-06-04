let stopWatchTime = 0;
let rapTime = 0;
let rapStats = false;
let statsStopWatch = false;

function displayStopWatch() {
    let hour = Math.floor(stopWatchTime / 360000);
    let min = Math.floor((stopWatchTime % 360000 / 6000));
    let sec = Math.floor(stopWatchTime % 6000 / 100);
    let milli = Math.floor(stopWatchTime % 100);

    let h = ('0' + hour).slice(-2);
    let m = ('0' + min).slice(-2);
    let s = ('0' + sec).slice(-2);
    let mm = ('0' + milli).slice(-2);

    if(h == 0) {
        $(".stopWatchDisplay").html(m + ":" + s + "." + mm);
        $(".stopWatchDisplay").css('font-size', '90px');
    } else {
        $(".stopWatchDisplay").html(h + ":" + m + ":" + s + "." + mm);
        $(".stopWatchDisplay").css('font-size', '64px');
    }

}

function displayRapTime() {
    let hour = Math.floor(rapTime / 360000);
    let min = Math.floor((rapTime % 360000 / 6000));
    let sec = Math.floor(rapTime % 6000 / 100);
    let milli = Math.floor(rapTime % 100);

    let h = ('0' + hour).slice(-2);
    let m = ('0' + min).slice(-2);
    let s = ('0' + sec).slice(-2);
    let mm = ('0' + milli).slice(-2);

    if(h == 0) {
        $("body > main > div.stopWatch > div.raps > div:first-child > div:nth-child(2)").html(m + ":" + s + "." + mm);
    } else {
        $("body > main > div.stopWatch > div.raps > div:first-child > div:nth-child(2)").html(h + ":" + m + ":" + s + "." + mm);
    }
}

function countStopWatch() {
    if(statsStopWatch == true) {
        stopWatchTime += 1;
        rapTime += 1;
        displayStopWatch();
        displayRapTime();
    } else {
        displayStopWatch();
        displayRapTime();
    }
}

function startTimer() {
    statsStopWatch = true;
    $(".start").css('display', 'none');
    $(".stop").css('display', 'block');
    $(".rap").css('display', 'block');
    $('.rap').prop('disabled', false);
    $(".reset").css('display', 'none');
}

function stopTimer() {
    statsStopWatch = false;
    $(".start").css('display', 'block');
    $(".stop").css('display', 'none');
    $(".rap").css('display', 'none');
    $(".reset").css('display', 'block');
}

function resetTimer() {
    stopWatchTime = 0;
    rapTime = 0;

    let raps_parent = $(".raps")
    raps_parent.html('<div class="rap-detail"><div>ラップ1</div><div>00:00.00</div></div>')

    $(".rap").css('display', 'block');
    $('.rap').prop('disabled', true);
    $(".reset").css('display', 'none');
}

function rapTimer() {
    rapTime = 0;
    $(".raps").prepend('<div class="rap-detail"><div>ラップ'+ ($(".rap-detail").length + 1) +'</div><div>00:00.00</div></div>');
}