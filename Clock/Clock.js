window.onload = function () {
    let Hour = document.getElementById("hour");
    let Minute = document.getElementById("minute");
    let Second = document.getElementById("second");
    setInterval(() => {
        D = new Date();
        H = D.getHours();
        M = D.getMinutes();
        S = D.getSeconds();
        
        HR = H * 30 + M / 2;
        MR = M * 6;
        SR = S * 6;

        Hour.style.transform = 'rotate(' + HR + 'deg)';
        Minute.style.transform = "rotate(" + MR + "deg)";
        Second.style.transform = `rotate(${SR}deg)`;
    }, 1000);
}



