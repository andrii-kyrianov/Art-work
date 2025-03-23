// // Галерея и лайтбоксы от Fancybox
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Fancybox.bind('[data-fancybox]', {
// 	// Your custom options
// });

// ---------------------------------------------------------------------

// Підключення слайдера
import Swiper from './modules/slider.js';

// --------------------------------------------------------------------
// форма пошуку
const btn = document.querySelector('.nav__btn');
const search = document.querySelector('.nav__btn-search');

search.onclick = function() {
    btn.classList.add('search-active');
};

const clear = document.querySelector('.nav__btn-clear');

clear.onclick = function() {
    btn.classList.remove('search-active');
    document.getElementById("mySearch").value = '';
};


// --------------------------------------------------------------------

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

