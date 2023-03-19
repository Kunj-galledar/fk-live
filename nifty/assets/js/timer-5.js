var second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

var countDown = new Date("Dec 31, 2023 00:00:00").getTime(),
    x = setInterval(function () {
        var now = new Date().getTime(),
            distance = countDown - now;

        (document.getElementById("days5").innerText = Math.floor(distance / day)),
        (document.getElementById("hours5").innerText = Math.floor(
            (distance % day) / hour
        )),
        (document.getElementById("minutes5").innerText = Math.floor(
            (distance % hour) / minute
        )),
        (document.getElementById("seconds5").innerText = Math.floor(
            (distance % minute) / second
        ));
    }, second);