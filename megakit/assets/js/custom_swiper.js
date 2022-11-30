 /**=====================
     Custom Swiper js
==========================**/
 var swiper = new Swiper(".slider-1", {
     slidesPerView: 1,
     spaceBetween: 12,
     centeredSlides: false,
     slidesPerGroup: 1,
     slidesPerView: "auto",
     //  spaceBetween: 30,
     //  loop: true,
     //  loopFillGroupWithBlank: true,
     //  pagination: {
     //      el: ".swiper-pagination",
     //      clickable: true,
     //  },
     //  navigation: {
     //      nextEl: ".swiper-button-next",
     //      prevEl: ".swiper-button-prev",
     //  },
 });

 var swiper = new Swiper(".story-slider", {
     slidesPerView: 5,
     spaceBetween: 11,
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
     },
 });