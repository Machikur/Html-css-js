const time = {
 second: 0,
 miliSecond: 0
}

let active = false;

const mainButton = document.querySelector('.main');
const resetButton = document.querySelector('.reset');
const div = document.querySelector('.time div');

let interval = "";

function startStop() {
 active = !active;
 mainButton.textContent = active ? "Pauza" : "Start";
 if (active) {
  interval = setInterval(addTime, 10);
 } else {
  clearInterval(interval);
 }
}

function addTime() {
 if (time.miliSecond == 100) {
  time.second++;
  time.miliSecond = 1;
 } else {
  time.miliSecond++;
 }
 div.textContent = time.second + ":" + (time.miliSecond < 10 ? "0" + time.miliSecond : time.miliSecond);
}

function reset() {
 time.miliSecond = 0;
 time.second = 0;
}

mainButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);