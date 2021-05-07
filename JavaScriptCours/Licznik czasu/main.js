const time = () => {
 let seconds = 0;

 function addSecond() {
  seconds++;
  document.querySelector('body').textContent = seconds + " sekund upłyneło";
 }
 return addSecond;
}
const counter = time();
setInterval(counter, 1000);