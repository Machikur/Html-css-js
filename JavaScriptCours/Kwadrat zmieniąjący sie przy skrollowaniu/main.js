const div = document.querySelector('div');
let size = 0;
let growUp = true;
document.addEventListener('scroll', function () {
    changeSize();
    div.style.width = size + "px";
    div.style.height = size + "px";
})

function changeSize() {
    size = (growUp == true ? size += 10 : size -= 10);
    if (size >= 500 || size <= 0) {
        growUp = !growUp;
    }
}