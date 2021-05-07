const chars = 'ABCDEFGIJK0123456789';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 1000;
const charsNumber = 40;

const codesGeneretor = () => {
 for (let i = 0; i < codesNumber; i++) {
  let code = "";
  for (let i = 0; i < charsNumber; i++) {
   const index = Math.floor(Math.random() * chars.length)
   code += chars[index];
  }
  const div = document.createElement('div');
  div.textContent = code;
  section.appendChild(div)
 }
}

btn.addEventListener('click', codesGeneretor)