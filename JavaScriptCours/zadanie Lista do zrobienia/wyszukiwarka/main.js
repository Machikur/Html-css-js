const array = [...document.querySelectorAll('ul li')];
const input = document.querySelector('input');
const list = document.querySelector('ul');


input.addEventListener('input', function (e) {
 const searchText = e.target.value.toLowerCase();
 list.textContent = "";
 const tempArray = array.filter(element => element.textContent.toLowerCase().includes(searchText));
 tempArray.forEach(el => list.appendChild(el));
})