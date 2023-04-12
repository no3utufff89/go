import {pageElements} from "./pageElements.js";

const {nav} = pageElements();

export const styleBuilder = (pageWidth) => {
    if (pageWidth > 1000) {
        nav.classList.remove('nav-mobile');
        // nav.style.cssText = `transform: translateX(-${pageWidth}px);`
    }

}
export const animate = () => {
    const pageWidth = document.documentElement.clientWidth;

    let left =0,
        durationFly = 500,
        startTime = NaN,
        distance = pageWidth;
    const menuOpenAnimate = (timestamp) => {
        startTime ||= timestamp;
        const progress = ((timestamp - startTime) / durationFly).toFixed(3);
        left = progress * distance;
        console.log(left)
        nav.style.left = left + 'px';
        if (progress < 1) {
            requestAnimationFrame(menuOpenAnimate);
        } else {
            startTime = NaN;
        }
    };
    requestAnimationFrame(menuOpenAnimate)
}





