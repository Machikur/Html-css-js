const spnText = document.querySelector('.text');
const cursor = document.querySelector('span.cursor');
const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC'

// Parametry
let indexText = 0;
const time = 20;

// Implementacja
const addLetter = () => {
 spnText.textContent += txt[indexText];
 indexText++;
 if (indexText === txt.length) clearInterval(indexTyping);
}
const indexTyping = setInterval(addLetter, time);

function flashCursor() {
 cursor.classList.toggle("active");
}


setInterval(flashCursor, 300);