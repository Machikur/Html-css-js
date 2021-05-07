const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function (e) {
  h1.textContent = e.clientX + ", " + e.clientY;
  document.body.style.backgroundColor = `rgb(${e.clientX/6},${e.clientY/2},${(e.clientY + e.clientY)/12})`;


})