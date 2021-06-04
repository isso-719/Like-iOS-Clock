function univClock() {
    let tokyo = moment().format("H:mm");
    let sydney = moment().add(1, 'hours').format("H:mm");
    let beijing = moment().subtract(1, 'hours').format("H:mm");
    let moscow = moment().subtract(6, 'hours').format("H:mm");
    let paris = moment().subtract(7, 'hours').format("H:mm");
    let rondon = moment().subtract(8, 'hours').format("H:mm");
    let newyork = moment().subtract(13, 'hours').format("H:mm");
    let san_francisco = moment().subtract(16, 'hours').format("H:mm");

    $(".tokyo .time").html(tokyo);
    $(".sydney .time").html(sydney);
    $(".beijing .time").html(beijing);
    $(".moscow .time").html(moscow);
    $(".paris .time").html(paris);
    $(".rondon .time").html(rondon);
    $(".newyork .time").html(newyork);
    $(".san_francisco .time").html(san_francisco);
}