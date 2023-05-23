export const pageElements = () => {
    const callBackBtn = document.querySelector('.callback-btn');
    const callBackBtnMobile = document.querySelector('.callback-btn_mobile');
    const overlay = document.querySelector('.overlay');
    const callbackModal = document.querySelector('.callBack-modal');
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');
    const navList = document.querySelector('.nav__list');
    const header = document.querySelector('.header');
    const navItems = Array.from(navList.querySelectorAll('.nav__link'));
    const btnUp = document.querySelector('.btnUp');
    const items = document.querySelectorAll('.questions__item');
    const buttons = document.querySelectorAll('.item__header');
    const faqWrapper = document.querySelectorAll('.item-wrapper');
    const modalCloseBtn = document.querySelector('.callBack-modal__close-btn');
    const callBackForm = document.querySelector('.callBack-form')
    return {
        callBackBtn,
        overlay,
        callbackModal,
        menuBtn,
        nav,
        navList,
        header,
        navItems,
        btnUp,
        buttons,
        items,
        faqWrapper,
        modalCloseBtn,
        callBackBtnMobile,
        callBackForm
    }
}