import controls from "./controls.js";
import {acc} from "./acc.js";
import {animate, styleBuilder} from "./animateMenu.js";

controls();
acc();

window.addEventListener('resize', () => {
    const pageWidth = document.documentElement.clientWidth;
   styleBuilder(pageWidth);

});
// window.addEventListener('DOMContentLoaded', () => {
//     const pageWidth = document.documentElement.clientWidth;
//     styleBuilder(pageWidth);
//
// })
new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
});






