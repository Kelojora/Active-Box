let e=document.querySelector(".header");window.addEventListener("scroll",function(){window.scrollY>0?e.classList.add("scrolled"):e.classList.remove("scrolled")});let n=document.querySelector(".header__burger"),t=document.querySelector(".header__nav"),c=document.querySelector(".banner__container");function l(){t.classList.remove("open")}n.addEventListener("click",function(){t.classList.toggle("open"),n.classList.toggle("open"),c.classList.toggle("hide")}),document.querySelectorAll(".header__link").forEach(function(e){e.addEventListener("click",l)}),new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",clickable:!0}});
//# sourceMappingURL=index.b2ffae11.js.map