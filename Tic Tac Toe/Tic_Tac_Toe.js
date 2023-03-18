window.onload = function () {
    let turn = 'X';
    let GameOver = false;
    let c = 0;

    const won = () => {
        let box = document.querySelectorAll(".box");
        let text = document.querySelectorAll(".text");

        let Wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        c++;
        Wins.forEach(Element => {
            if (text[Element[0]].innerText === text[Element[1]].innerText && text[Element[1]].innerText === text[Element[2]].innerText && text[Element[0]].innerText !== "") {
                document.getElementById("boxes").style.display = "none";
                document.getElementById("information").style.display = "flex";
                document.getElementById("info").style.display = "none";
                document.getElementById("Winner").innerText = text[Element[0]].innerText + "  Won";
                GameOver = true;
            }
            else if (c == 9) {
                document.getElementById("boxes").style.display = "none";
                document.getElementById("information").style.display = "flex";
                document.getElementById("info").style.display = "none";
                document.getElementById("Winner").innerText = "Match Draw.....";
            }

        })
    };

    let box = document.querySelectorAll(".box");

    Array.from(box).forEach(Element => {
        let text = Element.querySelector(".text");
        Element.addEventListener('click', () => {
            // e.preventDegault();
            if (text.innerText === "" && !GameOver) {
                text.innerText = turn;
                if (text.innerText === 'X') {
                    text.style.color = "red";
                }
                else {
                    text.style.color = "green";
                }
                turn = (turn === 'X' ? '0' : 'X');
                console.log("Turn : ", turn);
                document.getElementById("info").innerText = `Turn For ${turn}`;
                won();
            }
        })
    });

    let reset = document.getElementById("reset");
    reset.addEventListener('click', () => {
        let text = document.getElementsByClassName("text");
        Array.from(text).forEach(Element => {
            console.log("hii");
            Element.innerText = "";
            c = 0;
            turn = 'X';
            document.getElementById("boxes").style.display = "grid";
            document.getElementById("information").style.display = "none";
            document.getElementById("info").style.display = "flex";
            document.getElementById("info").innerText = `Turn For X`;
            GameOver = false;
        })
    })
}
