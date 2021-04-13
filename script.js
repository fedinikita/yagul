'use strict';

let timer = document.querySelector('.seven');
let num = 1000;
let x = 0;
let y = 10;

function gul() {
    if (num > -150) {
        let inner = document.createElement('div');
        inner.textContent = num;
        timer.appendChild(inner);
        num = num - 7;
        if (num < 900) {
            window.scroll(x, y);
            y = y + 20;
        }
    }
}

function main() {
    soundClick();
    setTimeout(() => {setInterval(gul, 115);}, 8000);
}

main();


function soundClick() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'gul.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}
