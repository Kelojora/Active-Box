// Получаем ссылку на элемент
let scrollingElement = document.querySelector(".header");
// Функция, которая будет вызываться при прокрутке
function handleScroll() {
    // Проверяем, насколько прокручена страница по вертикали
    var scrollPosition = window.scrollY;
    // Условие, при котором добавляем класс
    if (scrollPosition > 0) scrollingElement.classList.add("scrolled");
    else scrollingElement.classList.remove("scrolled");
}
// Добавляем прослушиватель события прокрутки
window.addEventListener("scroll", handleScroll);
// Получаем ссылки на элементы
let menuButton = document.querySelector(".header__burger");
let menu = document.querySelector(".header__nav");
let bannerContainer = document.querySelector(".banner__container");
// Добавляем слушатели событий
menuButton.addEventListener("click", toggleMenu);
// Функция для открытия/закрытия меню
function toggleMenu() {
    menu.classList.toggle("open");
    menuButton.classList.toggle("open");
    bannerContainer.classList.toggle("hide");
}
// Добавляем слушатель события для каждого пункта меню
var menuItems = document.querySelectorAll(".header__link");
menuItems.forEach(function(item) {
    item.addEventListener("click", closeMenu);
});
// Функция для закрытия меню
function closeMenu() {
    menu.classList.remove("open");
}
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

//# sourceMappingURL=index.e30615c8.js.map
