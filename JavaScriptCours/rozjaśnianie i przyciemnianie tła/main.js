/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  console.log(e.keyCode, e.which);
  // 38 - strzałka do góry
  // 40 - strzalka w dół
  if (e.keyCode == 40 && red > 0) {
    red = green = blue -= 10;
  } else if (e.keyCode == 38 && red < 260) {
    red = green = blue += 10;
  }

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

window.addEventListener('keydown', changeColor);