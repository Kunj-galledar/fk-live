/**=====================
    Custom Swiper js
==========================**/
var sliderTwo = new Swiper(".screenshots-slider", {
    slidesPerView: 5,
    spaceBetween: 20,
    speed: 1200,
    freeMode: true,
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
        1640: {
            slidesPerView: 5,
        },
    },

    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
});

var variationSlider = new Swiper(".landing-variation-slider", {
    slidesPerView: 3.4,
    spaceBetween: 50,
    centeredSlides: false,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        850: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1640: {
            slidesPerView: 3.4,
            spaceBetween: 50,
        },
    },
});

var imageSlider = new Swiper(".home-image-slider", {
    speed: 1200,
    freeMode: true,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 800,
        disableOnInteraction: false,
    },
});