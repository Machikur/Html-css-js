// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Siemanko niezłe wdzianko', 'Co tam byku?', "Nie pajentam"]

let index = 0;
let tabIndex = 0;

const timeInterval = 100;

// Implementacja
const addLetter = () => {
 if (index === txt[tabIndex].length) {
  prepareNewMessage();
 } else {
  spnText.textContent += txt[tabIndex][index];
  index++;
  setTimeout(addLetter, timeInterval)
 }
}


addLetter();

function prepareNewMessage() {
 if (++tabIndex < txt.length) {
  index = 0;
  setTimeout(clearSpan, 1950);
  setTimeout(addLetter, 2000);
 }
}

function clearSpan() {
 spnText.textContent = "";
}

// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);