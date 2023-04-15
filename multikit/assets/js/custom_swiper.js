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
     centeredSlides: true,
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
     spaceBetween: 10,
 });

 var swiper = new Swiper(".feature-slider", {
     slidesPerView: 2.3,
     spaceBetween: 10,
 });

 var swiper = new Swiper(".slider-4", {
     slidesPerView: 4.3,
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

 var swiper = new Swiper(".fingHotel", {
     spaceBetween: 10,
     loop: true,
     loopFillGroupWithBlank: true,
 });

 var swiper = new Swiper(".room-view-slider", {
     slidesPerView: 1,
     centeredSlides: true,
     spaceBetween: 30,
     grabCursor: true,
     pagination: {
         el: ".swiper-pagination",
         type: "fraction",
     },
 });

 var swiper = new Swiper(".top-reviewer-slider", {
     slidesPerView: 1.1,
     spaceBetween: 16,
 });

 var swiper = new Swiper(".brand-slider", {
     slidesPerView: 3,
     centeredSlides: true,
     speed: 6000,
     autoplay: {
         delay: 1,
     },
     loop: true,
     allowTouchMove: false,
     disableOnInteraction: true
 });

 var swiper = new Swiper(".thumbs-image", {
     spaceBetween: 10,
     slidesPerView: 4,
     freeMode: true,
     watchSlidesProgress: true,
 });
 var swiper2 = new Swiper(".main-slider", {
     pagination: {
         el: '.swiper-pagination',
         paginationClickable: true,
         clickable: true,
     },
     spaceBetween: 10,
     thumbs: {
         swiper: swiper,
     },
 });

 var swiper = new Swiper(".banner-slider", {
     slidesPerView: 1.15,
     spaceBetween: 13,
 });

 var swiper = new Swiper(".slider-2-3", {
     slidesPerView: 2.3,
     spaceBetween: 11,
 });

 var swiper = new Swiper(".financial-slider", {
     pagination: {
         el: ".swiper-pagination",
     },
 });

 var swiper = new Swiper(".bill-slider", {
     slidesPerView: 2.2,
     spaceBetween: 15,
     breakpoints: {
         0: {
             slidesPerView: 1.7,
         },
         380: {
             slidesPerView: 2,
         },
         405: {
             slidesPerView: 2.2,
         },
         480: {
             slidesPerView: 2.5,
         },
     },
 });

 var swiper = new Swiper(".onboading-content-slider", {
     slidesPerView: 1,
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
     },
     autoplay: {
         delay: 5000,
         disableOnInteraction: false,
     },
 });