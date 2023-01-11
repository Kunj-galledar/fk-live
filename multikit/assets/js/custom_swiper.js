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

 var swiper = new Swiper(".card-swiper", {
     slidesPerView: "auto",
     spaceBetween: 12,
     loop: true,
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
     },
 });

 var swiper = new Swiper(".slider-1-1", {
     slidesPerView: 1.1,
     spaceBetween: 10,
     centeredSlides: true,
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
     },
 });

 var swiper = new Swiper(".category-slider", {
     slidesPerView: 3.8,
     //  slidesPerView: "auto",
     spaceBetween: 10,
 });

 var swiper = new Swiper(".feature-slider", {
     slidesPerView: 2.3,
     //  slidesPerView: "auto",
     spaceBetween: 10,
 });

 var swiper = new Swiper(".slider-4", {
     slidesPerView: 4.3,
     //  slidesPerView: "auto",
     spaceBetween: 10,
 });

 var swiper = new Swiper(".hotel-slider", {
     effect: "fade",
     pagination: {
         el: ".swiper-pagination",
     },
 });

 var swiper = new Swiper(".hotel-slider-4", {
     slidesPerView: 5,
     breakpoints: {
         0: {
             slidesPerView: 4.5,
         },
         406: {
             slidesPerView: 5,
         },
     },
 });

 var swiper = new Swiper(".view-slider", {
     slidesPerView: 1.7,
     spaceBetween: 16,
 });