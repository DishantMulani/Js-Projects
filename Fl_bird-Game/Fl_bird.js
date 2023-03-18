let img = document.getElementById("img");
let block = document.getElementById("block");
let space = document.getElementById("space");
let result = document.getElementById("result");
let text = document.getElementById("text");
let game = document.getElementById("GameContainer");
let score = 0;

var jum = 0;
space.addEventListener('animationiteration', () => {
    let ho = (Math.random() * 230) + 25;
    space.style.top = ho + "px";
    score++;
})

let down = setInterval(function () {
    let imgtop = parseInt(window.getComputedStyle(img).getPropertyValue("top"));
    if (jum == 0) img.style.top = (imgtop + 2) + "px";
    let bl = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let ht = parseInt(window.getComputedStyle(space).getPropertyValue("top"));
    if ((imgtop > 315) || ((bl < 130 && bl > 69) && ((imgtop < ht || imgtop > ht + 80)))) {
        result.style.display = "block";
        text.innerText = `Score : ${score}`;
        game.style.display = "none";
    }
}, 10);

window.addEventListener("click", () => {
    jum = 1;
    let imgtop = parseInt(window.getComputedStyle(img).getPropertyValue("top"));
    if (imgtop > 10) img.style.top = (imgtop - 45) + "px";
    setTimeout(function () {
        jum = 0;
    }, 100)
})