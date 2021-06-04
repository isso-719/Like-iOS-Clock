function switch_univClock() {
    $(".universalClock").css('display', 'block');
    $(".stopWatch").css('display', 'none');
    $(".timer").css('display', 'none');

    $(".univClock-btn").addClass("selected");
    $(".stopWatch-btn").removeClass("selected");
    $(".timer-btn").removeClass("selected");

    $(".title").html("世界時計");
}

function switch_stopWatch() {
    $(".universalClock").css('display', 'none');
    $(".stopWatch").css('display', 'block');
    $(".timer").css('display', 'none');

    $(".univClock-btn").removeClass("selected");
    $(".stopWatch-btn").addClass("selected");
    $(".timer-btn").removeClass("selected");

    $(".title").html("ストップウォッチ");
}

function switch_timer() {
    $(".universalClock").css('display', 'none');
    $(".stopWatch").css('display', 'none');
    $(".timer").css('display', 'block');

    $(".univClock-btn").removeClass("selected");
    $(".stopWatch-btn").removeClass("selected");
    $(".timer-btn").addClass("selected");

    $(".title").html("タイマー");
}