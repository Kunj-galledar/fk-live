 /**=====================
     Custom Swiper js
==========================**/
 var swiper = new Swiper(".slider-1", {
     slidesPerView: 1,
     spaceBetween: 12,
     centeredSlides: false,
     slidesPerGroup: 1,
     slidesPerView: "auto",
 });

 var swiper = new Swiper(".story-slider", {
     slidesPerView: 5,
     spaceBetween: 11,
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
     },
 });

 var swiper = new Swiper(".cab-onboarding-slider", {
     slidesPerView: 1,
     pagination: {
         el: ".swiper-pagination",
     },
 });