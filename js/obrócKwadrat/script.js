let currentRotate = 0;
let rotateMove = 10;
const deg = 'deg';
// parametry główne. Za pomocą zmiennych stwórz początkową wartość rotate (zero) i wartość o którą będziesz zmieniał stopnie (o 10 stopnii).
const button = document.querySelector('button');
const square = document.querySelector('div');
// pobieramy elementy - pobierz przycisk i div
button.addEventListener('click', function () {
    currentRotate += rotateMove;
    rotateMove += rotateMove;
    square.style.transform = "rotate(" + currentRotate + deg + ")";

})

// podpinamy nasłuchiwanie i umeiszczamy w nim funkcje anonimową. Pamiętaj zmieniamy własciwość transform. Za każdym razie obrót zwiększa się od 10 deg. 


//Bonus dodaj właściwość transition dla div określoną na .5s.