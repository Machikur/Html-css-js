const slideList = [{
  img: "images/img1.jpg",
  text: 'Pierwszy tekst'
 },
 {
  img: "images/img2.jpg",
  text: 'Drugi tekst'
 },
 {
  img: "images/img3.jpg",
  text: 'Trzeci tekst'
 }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');

const spanArray = [...document.querySelectorAll('.dots span')];


spanArray.forEach(element => {
 element.addEventListener('click', function () {
  changeDot();
  element.classList.add('active');
 });
})

// Interfejs
const time = 3000;
let active = 0;

function changeDot() {
 const activeNow = spanArray.findIndex(dot => dot.classList.contains('active'));
 spanArray[activeNow].classList.remove('active');
 spanArray[active].classList.add('active');
}

const changeSlide = () => {
 active++;
 if (active === slideList.length) {
  active = 0;
 }
 image.src = slideList[active].img;
 h1.textContent = slideList[active].text;
 changeDot();
}


const changeSlideBack = () => {
 active--;
 if (active < 0) {
  active = slideList.length - 1;
 }
 image.src = slideList[active].img;
 h1.textContent = slideList[active].text;
 changeDot();
}


let interval = setInterval(changeSlide, time)

window.addEventListener('keydown', function (event) {
 let timeout = "";
 if (event.keyCode === 37 || event.keyCode === 39) {
  clearInterval(interval);
  if (event.keyCode === 37) {
   changeSlideBack();
  } else {
   changeSlide();
  }
  interval = setInterval(changeSlide, time)

 }
})