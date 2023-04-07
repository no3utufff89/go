import {pageElements} from "./pageElements.js";

const {items, buttons, faqWrapper} = pageElements();

export const acc = () => {
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            for (let i =0; i < items.length; i+=1) {
                if(index === i) {
                    faqWrapper[i].style.height = items[i].classList.contains('questions__item_active') ?
                        '' : `${faqWrapper[i].scrollHeight}px`;
                    items[i].classList.toggle('questions__item_active')
                } else {
                    items[i].classList.remove('questions__item_active')
                    faqWrapper[i].style.height = '';
                }
            }

        })
    })
}
