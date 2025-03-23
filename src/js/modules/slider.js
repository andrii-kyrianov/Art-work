import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.main-swiper',{
    loop: true,
    slidesPerView: 4.5,
    spaceBetween: 111,
    centeredSlides: true,
    speed: 500,

    autoplay: {
        delay: 3000,
      },

    breakpoints: {
        320: {          // для екранів ≥ 320px
            slidesPerView: 1,
            spaceBetween: 20,
        },
        480: {          // для екранів ≥ 480px
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {          // для екранів ≥ 768px
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {         // для екранів ≥ 1024px
            slidesPerView: 4.5,
            spaceBetween: 111,
        }
}
});



// swiper products---------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    let swiperThumbs = new Swiper(".swiper-thumbs", {
      direction: window.innerWidth > 950 ? "vertical" : "horizontal",
      slidesPerView: 3,
      spaceBetween: 10,
      watchSlidesProgress: true,
      breakpoints: {
        950: { direction: "vertical" },
        0: { direction: "horizontal" }
      }
      
    });
  
    let swiperMain = new Swiper(".swiper-focus", {
      spaceBetween: 10,
      thumbs: {
        swiper: swiperThumbs,
      },
    });
  });

// Динамічна зміна напрямку при зміні розміру екрану
window.addEventListener("resize", () => {
  let direction = window.innerWidth > 950 ? "vertical" : "horizontal";
  if (swiperThumbs.params.direction !== direction) {
    swiperThumbs.changeDirection(direction);
  }
}); 



