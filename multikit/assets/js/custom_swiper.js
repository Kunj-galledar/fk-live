/**=====================
    Custom Swiper js
==========================**/
const swiper = new Swiper(".slider-1", {
  slidesPerView: 1,
  spaceBetween: 12,
  centeredSlides: false,
  slidesPerGroup: 1,
  slidesPerView: "auto",
});

const swiper2 = new Swiper(".story-slider", {
  slidesPerView: 5,
  spaceBetween: 11,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper3 = new Swiper(".cab-onboarding-slider", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper4 = new Swiper(".card-swiper", {
  slidesPerView: "auto",
  spaceBetween: 12,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper5 = new Swiper(".slider-1-1", {
  slidesPerView: 1.1,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper6 = new Swiper(".category-slider", {
  slidesPerView: 3.8,
  spaceBetween: 10,
});

const swiper7 = new Swiper(".feature-slider", {
  slidesPerView: 2.3,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    420: {
      slidesPerView: 2.3,
    },
  },
});

const swiper8 = new Swiper(".slider-4", {
  slidesPerView: 4.3,
  spaceBetween: 10,
});

const swiper9 = new Swiper(".hotel-slider", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper10 = new Swiper(".hotel-slider-4", {
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

const swiper11 = new Swiper(".view-slider", {
  slidesPerView: 1.7,
  spaceBetween: 16,
});

const swiper12 = new Swiper(".fingHotel", {
  spaceBetween: 10,
  loop: true,
  loopFillGroupWithBlank: true,
});

const swiper13 = new Swiper(".room-view-slider", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

const swiper14 = new Swiper(".top-reviewer-slider", {
  slidesPerView: 1.1,
  spaceBetween: 16,
});

const swiper15 = new Swiper(".brand-slider", {
  slidesPerView: 3,
  centeredSlides: true,
  speed: 6000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  allowTouchMove: false,
  disableOnInteraction: true,
});

const swiper16 = new Swiper(".thumbs-image", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper17 = new Swiper(".main-slider", {
  pagination: {
    el: ".swiper-pagination",
    paginationClickable: true,
    clickable: true,
  },
  spaceBetween: 10,
  thumbs: {
    swiper: swiper16,
  },
});

const swiper18 = new Swiper(".banner-slider", {
  slidesPerView: 1.15,
  spaceBetween: 13,
});

const swiper19 = new Swiper(".slider-2-3", {
  slidesPerView: 2.3,
  spaceBetween: 11,
});

const swiper20 = new Swiper(".financial-slider", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper21 = new Swiper(".bill-slider", {
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

const swiper22 = new Swiper(".onboarding-content-slider", {
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

const swiper23 = new Swiper(".relative-slider", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  fade: true,
  direction: "vertical",
  watchSlidesProgress: true,
});
const swiper24 = new Swiper(".main-slider", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper23,
  },
});

const swiper25 = new Swiper(".slider-2-3", {
  slidesPerView: 2.3,
  spaceBetween: 11,
});