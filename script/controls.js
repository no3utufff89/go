import { pageElements } from "./pageElements.js";
import {animate, styleBuilder} from "./animateMenu.js";
const controls = () => {
    const {callBackBtn, overlay, callbackModal, menuBtn, nav, navList, header, navItems, btnUp, modalCloseBtn,callBackBtnMobile, callBackForm} = pageElements();

    const closeMenu = () => {
        menuBtn.classList.remove('menu-btn_active');
        overlay.classList.remove('active');
        nav.classList.remove('active');
        nav.classList.remove('nav-mobile');
        navList.classList.remove('active');
        callBackForm.reset();
    }
    document.addEventListener('click', e => {
        let target = e.target;
        if (target === menuBtn) {
           menuBtn.classList.toggle('menu-btn_active');
           if (menuBtn.classList.contains('menu-btn_active')) {
               overlay.classList.add('active');
               nav.classList.add('nav-mobile');
               requestAnimationFrame(animate)
               navList.classList.add('active');
           } else {
               overlay.classList.remove('active');
               nav.classList.remove('active');
               nav.classList.remove('nav-mobile');
               navList.classList.remove('active');

           }
        }
        if (target === overlay) {
            closeMenu();
            callbackModal.classList.remove('active')
        }
        if (target === callBackBtn) {
            console.log('sdfsdf')
        }
        if (target === callBackBtn || target === callBackBtnMobile) {
            if (menuBtn.classList.contains('menu-btn_active')) {
                menuBtn.classList.remove('menu-btn_active');
                nav.classList.remove('active');
                navList.classList.remove('active');
            }
            overlay.classList.add('active');
            callbackModal.classList.add('active');
        }

        if (target === modalCloseBtn) {
            overlay.classList.remove('active');
            callbackModal.classList.remove('active');
            callBackForm.reset();

        }

    })
    window.addEventListener('resize', () => {
        closeMenu();

    });
    navItems.forEach(elem => {
        elem.addEventListener('click', closeMenu);
    })

    function scrollToY(pos){
        window.scrollTo({
            top: pos,
            behavior: "smooth"
        });
    }
    window.addEventListener('scroll', function(e){
        let pos = window.pageYOffset;
        pos > window.innerHeight ? btnUp.classList.add('btnUp-open') : btnUp.classList.remove('btnUp-open');
    });
    btnUp.addEventListener('click', function(e){
        scrollToY(0);
    });


}
export default controls;
