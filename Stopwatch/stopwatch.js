let Hour = 0;
let Minute = 0;
let Second = 0;
let MilliSecond = 0;
let Interval;
$(document).ready(() => {
    const hour = $(".hour");
    const minute = $(".minute");
    const second = $(".second");
    const milliSecond = $(".milliSecond");
    $(".btn1").click(() => {
        // console.log("hii");
        Interval = setInterval(function () {
            MilliSecond++;
            if (MilliSecond <= 9) {
                // console.log("MilliSecond");
                // milliSecond.innerHTML = "0" + MilliSecond;
                milliSecond.html("0" + MilliSecond);
            }
            if (MilliSecond > 9) {
                milliSecond.html(MilliSecond);
            }
            if (MilliSecond > 99) {
                Second++;
                second.html("0" + Second);
                MilliSecond = 0;
                milliSecond.html("0" + MilliSecond);
            }
            if (Second > 9) {
                second.html(Second);
            }
            if (Second > 59) {
                m++;
                minute.html("0" + Minute);
                Second = 0;
                second.html("0" + Second);
            }
            if (Minute > 9) {
                minute.html(Minute);
            }
            if (Minute > 59) {
                Hour++;
                hour.html("0" + Hour);
                m = 0;
                minute.html("0" + Minute);
            }
            if (Hour > 9) {
                hour.html(Hour);
            }
        }, 10);
    });
    $(".btn2").click(() => {
        clearInterval(Interval);
        Hour = 0;
        Minute = 0;
        Second = 0;
        MilliSecond = 0;
        hour.html("0" + Hour);
        minute.html("0" + Minute);
        second.html("0" + Second);
        milliSecond.html("0" + MilliSecond);
    })
    $(".btn3").click(() => {
        clearInterval(Interval);
    })
})