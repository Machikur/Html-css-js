let size = 10;
let orderElement = 1;

const init = () => {
 const button = document.createElement('button');
 button.innerText = "Dodaj 10 elementów listy";
 button.addEventListener('click', createLiElements);
 document.body.appendChild(button);

 document.body.appendChild(document.createElement('ul'));
}

const createLiElements = () => {
 for (let i = 0; i < 10; i++) {
  const liElement = document.createElement('li');
  liElement.textContent = "Jestem nr " + orderElement;
  liElement.style.fontSize = size + "px";
  liElement.style.order = orderElement;
  document.querySelector('ul').appendChild(liElement);
  orderElement++;
  size++;
 }
}

init()