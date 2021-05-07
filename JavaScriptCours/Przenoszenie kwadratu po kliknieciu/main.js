const div = document.querySelector('div');
let divX = 150;
let divY = 50;

let drawActive = false;

let insertDiveX;
let insertDiveY;

div.addEventListener('mousedown', (e) => {
 div.style.backgroundColor = "gray";
 drawActive = true;
 insertDiveX = e.offsetX;
 insertDiveY = e.offsetY;
});

div.addEventListener('mousemove', (e) => {
 if (drawActive) {
  divX = e.clientX;
  divY = e.clientY;
  div.style.left = `${divX - insertDiveX}px`
  div.style.top = `${divY  - insertDiveY}px`
 }
});

div.addEventListener('mouseup', () => {
 drawActive = false;
});