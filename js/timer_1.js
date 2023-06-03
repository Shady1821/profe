function updateTimer() {
    future = Date.parse("2023-01-28T15:00:00+03:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div>' + d + '<span>Dias</span></div>' +
        '<div>' + h + '<span>Horas</span></div>' +
        '<div>' + m + '<span>Minutos</span></div>' +
        '<div>' + s + '<span>Segundos</span></div>';
}
setInterval('updateTimer()', 1000);

var now = new Date();
var nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
var distance = end - nowUTC;