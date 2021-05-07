const messages = ["walcz", "uda ci się"];
const noMessages = "brak rad w zasobniku"

const resetButton = document.querySelector('.clean');
const addButton = document.querySelector('.add');
const adviceButton = document.querySelector('.showAdvice');
const optionsButton = document.querySelector('.showOptions');
const input = document.querySelector('input');
const textPlace = document.querySelector('h1');

resetButton.addEventListener('click', function (event) {
 event.preventDefault();
 messages.splice(0, messages.length)
 clearText;
})

addButton.addEventListener('click', function (event) {
 event.preventDefault();
 const text = input.value;
 if (text) {
  messages.push(text);
  console.log(text);
 }
})

adviceButton.addEventListener('click', function () {
 if (messages.length) {
  textPlace.textContent = messages[Math.floor(Math.random() * messages.length)]
 } else {
  textPlace.textContent = noMessages;
 }
 setTimeout(clearText, 2000);
})

optionsButton.addEventListener('click', function () {
 if (messages.length) {
  alert(messages);
 } else {
  alert(noMessages)
 }
})

function clearText() {
 textPlace.textContent = "";
}