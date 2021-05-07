// const burger = document.querySelector(".burger");

// const iconBurger = document.querySelector(".fa-bars");
// const iconX = document.querySelector(".fa-times");
// const aside = document.querySelector("aside");

// burger.addEventListener("click", function () {
//     iconBurger.classList.toggle('show');
//     iconX.classList.toggle('show');
//     aside.classList.toggle("show");
// })

// $('burger').on("click", function () {
//     $('.fas, aside').toggleClass("show");
// })

$(".burger").on("click", function () {
    $(".fas, aside, .wrapper").toggleClass("show");
})