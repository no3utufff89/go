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






