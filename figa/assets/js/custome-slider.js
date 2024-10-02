/**=====================
    charity slider
==========================**/
var swiper = new Swiper(".charity-home-slider", {
  grabCursor: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".charity-team-slider", {
  slidesPerView: 3,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".team-next",
    prevEl: ".team-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
/**=====================
    ad slider
==========================**/
var swiper = new Swiper(".ad-service-slider", {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".service-next",
    prevEl: ".service-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    697: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1052: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1052: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    1624: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".ad-testimonials-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testimonials-next",
    prevEl: ".testimonials-prev",
  },
});

/**================================
consultancy slider
==================================**/
var swiper = new Swiper(".consultancy-testimonials-slider", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".consultancy-blog-slider", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    1624: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/**================================
wedding-planner slider
==================================**/
var swiper = new Swiper(".w-team-slider", {
  loop: true,
  navigation: {
    nextEl: ".w-team-next",
    prevEl: ".w-team-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    1624: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".w-home-slider", {
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".w-home-slider2", {
  slidesPerView: 1,
  spaceBetween: -650,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      spaceBetween: 0,
    },
    991: {
      spaceBetween: -450,
    },
    1199: {
      spaceBetween: -550,
    },
    1400: {
      spaceBetween: -600,
    },
    1500: {
      spaceBetween: -700,
    },
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".seo-testimonials-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/**================================ 
 stratup slider
==================================**/
var swiper = new Swiper(".startup-testimonials-slider", {
  pagination: {
    el: ".testimonials-strtup-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testimonials-strtup-next",
    prevEl: ".testimonials-strtup-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    850: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".logo-slider", {
  slidesPerView: 5,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});

/**================================ 
 event slider
==================================**/
var swiper = new Swiper(".event-testimonials-slider", {
  pagination: {
    el: ".event-testimonials-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".event-testimonials-next",
    prevEl: ".event-testimonials-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    850: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".event-blog-slider", {
  slidesPerView: 5,
  navigation: {
    nextEl: ".event-blog-next",
    prevEl: ".event-blog-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});
/**================================ 
 design slider
==================================**/

var swiper = new Swiper(".design-logo-slider", {
  slidesPerView: 6,
  spaceBetween: 74,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 70,
    },
    1600: {
      slidesPerView: 6,
      spaceBetween: 74,
    },
  },
});

var swiper = new Swiper(".design-testimonials-slider", {
  slidesPerView: 3,
  spaceBetween: 60,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});

var swiper = new Swiper(".design-team-slider", {
  slidesPerView: 3,
  spaceBetween: 60,
  navigation: {
    nextEl: ".design-team-next",
    prevEl: ".design-team-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});
/**================================ 
 marketing slider
==================================**/
var swiper = new Swiper(".marketing-testimonials-slider", {
  slidesPerView: 2,
  direction: "vertical",
  navigation: {
    nextEl: ".marketing-testimonials-next",
    prevEl: ".marketing-testimonials-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/**================================ 
  portfolio slider
==================================**/

var swiper = new Swiper(".portfolio-blog-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".blog-portfolio-next",
    prevEl: ".blog-portfolio-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".portfolio-logo-slider", {
  slidesPerView: 8,
  spaceBetween: 100,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 80,
    },
    1400: {
      slidesPerView: 7,
      spaceBetween: 100,
    },
    1700: {
      slidesPerView: 8,
      spaceBetween: 125,
    },
  },
});

var swiper = new Swiper(".portfolio-testimonial-slider", {
  slidesPerView: 2,
  spaceBetween: 50,
  navigation: {
    nextEl: ".portfolio-testimonials-next",
    prevEl: ".portfolio-testimonials-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
/**================================ 
  cafe  slider
==================================**/
var swiper = new Swiper(".cafe-home-slider", {
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  loop: true,
});
var swiper2 = new Swiper(".main-cafe-slider", {
  spaceBetween: -380,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
var swiper = new Swiper(".cafe-team-slider", {
  slidesPerView: 4,
  spaceBetween: 35,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
  },
});
var swiper = new Swiper(".cafe-logo-slider", {
  slidesPerView: 6,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});
var swiper = new Swiper(".cafe-blog-slider", {
  slidesPerView: 4,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

/**================================ 
  digital agency slider
==================================**/
var swiper = new Swiper(".digital-service-slider", {
  slidesPerView: 4,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".service-arrow-next",
    prevEl: ".service-arrow-prev",
  },
});

var swiper = new Swiper(".digital-team-slider", {
  slidesPerView: 4.5,
  spaceBetween: 50,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".team-arrow-next",
    prevEl: ".team-arrow-prev",
  },
});

var swiper = new Swiper(".left-testimonals-slider", {
  spaceBetween: 30,
  slidesPerView: 4,
  direction: "vertical",
  freeMode: true,
  watchSlidesProgress: true,
  clickable: true,
});
var swiper2 = new Swiper(".right-testimonals-slider", {
  slidesPerView: 2,
  direction: "vertical",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  thumbs: {
    swiper: swiper,
  },
});

/**================================ 
  wedding slider
==================================**/
var swiper = new Swiper(".wedding-blog-slider", {
  slidesPerView: 4,
  centeredSlides: true,
  loop: true,
});

/**================================ 
  portfolio page slider
==================================**/
var swiper = new Swiper(".portfolio-carousel-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

/**================================ 
  blog page slider
==================================**/
var swiper = new Swiper(".blog-gallery-layout-slider", {
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/**================================ 
  product page slider
==================================**/
var swiper = new Swiper(".product-page-slider", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".product-detail-slider", {
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  watchSlidesProgress: true,
  direction: "vertical",
});
var swiper2 = new Swiper(".product-detail-slider2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".product-detail-slider4", {
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product-detail-slider3", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".product-slider-variation", {
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
