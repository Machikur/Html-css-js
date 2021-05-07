const input = document.getElementById('pass');
const div = document.querySelector('.message')
const passwords = ["user", "wiosna", "Ania"];
const messages = ["Wyjechałam na zawsze", "piekna pora roku", "Fajny styl masz"]

input.addEventListener('input', function (e) {

 div.textContent = "";
 const text = this.value;

 passwords.forEach((password, index) => {

  if (password === text) {
   div.textContent = messages[index];
   this.value = "";
  }
 })
})
input.addEventListener('focus', function () {
 input.classList.add('active')
})

input.addEventListener('blur', function () {
 input.classList.remove('active')
})