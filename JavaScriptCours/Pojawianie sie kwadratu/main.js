const allLiElements = new Array(...document.querySelectorAll('li'));
let display = false;
let fontSize = 10;
const button = document.querySelector('button');

button.addEventListener('click', function () {
 if (!display)
  allLiElements.forEach(element => element.style.display = "block");
 allLiElements.forEach(element => element.style.fontSize = fontSize + "px");
 fontSize++;
})