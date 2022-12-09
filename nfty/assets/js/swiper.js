var swiper = new Swiper(".myswiper", {
  slidesPerView: 3,
  spaceBetween: 12,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swipers = new Swiper(".slider-2", {
  slidesPerView: 2.3,
  spaceBetween: 12,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
