/*====================
   Custom Swiper JS
=======================*/
var productSlider = new Swiper(".product-slider-7", {
    slidesPerView: 7,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        484: {
            slidesPerView: 2,
        },
        758: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1288: {
            slidesPerView: 5,
        },
        1540: {
            slidesPerView: 6,
        },
        1817: {
            slidesPerView: 7,
        },
    },
});

var categoryBox = new Swiper(".category-box-slide", {
    slidesPerView: 11,
    spaceBetween: 13,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        380: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        500: {
            spaceBetween: 8,
            slidesPerView: 4,
        },
        660: {
            spaceBetween: 8,
            slidesPerView: 5,
        },
        850: {
            slidesPerView: 6,
        },
        991: {
            slidesPerView: 7,
        },
        1242: {
            slidesPerView: 8,
        },
        1288: {
            slidesPerView: 9,
        },
        1388: {
            slidesPerView: 10,
        },
        1530: {
            slidesPerView: 11,
        },
    },
});

var swiper = new Swiper(".category-slider", {
    slidesPerView: 6,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        460: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        712: {
            slidesPerView: 4,
        },
        845: {
            slidesPerView: 5,
        },
        1478: {
            slidesPerView: 6,
        },
    },
});

var categoryBox1 = new Swiper(".category-slide-2", {
    slidesPerView: 14,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        380: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        490: {
            spaceBetween: 8,
            slidesPerView: 5,
        },
        646: {
            spaceBetween: 8,
            slidesPerView: 6,
        },
        812: {
            slidesPerView: 7,
        },
        991: {
            slidesPerView: 8,
        },
        1388: {
            slidesPerView: 9,
        },
        1288: {
            slidesPerView: 10,
        },
        1530: {
            slidesPerView: 13,
        },
    },
});

var categorySlide3 = new Swiper(".category-slide-3", {
    slidesPerView: 12,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        380: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        480: {
            spaceBetween: 4,
            slidesPerView: 5,
        },
        650: {
            spaceBetween: 6,
            slidesPerView: 5,
        },
        930: {
            slidesPerView: 7,
        },
        1145: {
            slidesPerView: 9,
        },
        1210: {
            slidesPerView: 10,
        },
        1400: {
            slidesPerView: 11,
        },
        1695: {
            slidesPerView: 12,
        },
    },
});

var categorySlider2 = new Swiper(".category-slider-2", {
    spaceBetween: 15,
    slidesPerView: 7,
    freeMode: true,
    navigation: {
        nextEl: ".category-next",
        prevEl: ".category-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        650: {
            slidesPerView: 4,
        },
        830: {
            slidesPerView: 5,
        },
        1015: {
            slidesPerView: 6,
        },
        1199: {
            slidesPerView: 7,
        },
        1200: {
            slidesPerView: 5,
        },
        1410: {
            slidesPerView: 6,
        },
        1680: {
            slidesPerView: 7,
        },
    },
});

var categorySlider3 = new Swiper(".category-slider-3", {
    spaceBetween: 15,
    slidesPerView: 6,
    freeMode: true,
    navigation: {
        nextEl: ".category-three-next",
        prevEl: ".category-three-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        730: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
        1410: {
            slidesPerView: 6,
        },
        1680: {
            slidesPerView: 7,
        },
    },
});

var recommendationsSlider = new Swiper(".recommendations-slider", {
    slidesPerView: 3,
    spaceBetween: 11,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        679: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 2,
        },
        1555: {
            slidesPerView: 3,
        },
    },
});

var slider = new Swiper(".slider-2", {
    slidesPerView: 2,
    spaceBetween: 15,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 1,
        },
        1530: {
            slidesPerView: 2,
        }
    },
});

var swiperThumbnail = new Swiper(".swiper-thumbnail", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    direction: "vertical",
    watchSlidesProgress: true,
    breakpoints: {
        0: {
            direction: "horizontal",
        },
        400: {
            direction: "vertical",
        },
    },
});

var swiper2 = new Swiper(".swiper-main", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperThumbnail,
    },
});

var swiperThumbnail1 = new Swiper(".swiper-thumbnail1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    direction: "vertical",
    watchSlidesProgress: true,
    breakpoints: {
        0: {
            direction: "horizontal",
        },
        401: {
            direction: "vertical",
        },
    },
});

var swiper3 = new Swiper(".swiper-main1", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperThumbnail1,
    },
});

var slider1 = new Swiper(".slide-1", {
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 6,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1199: {
            slidesPerView: 1,
        },
    },
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
    },
});

var bannerSlider = new Swiper(".banner-slider", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 6,
        },
        590: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1356: {
            slidesPerView: 4,
        },
    },
})

var productBanner = new Swiper(".product-banner-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        576: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
    },
});

var thumbSwiper = new Swiper(".product-thumbnail-slider", {
    spaceBetween: 10,
    slidesPerView: 4,
    direction: "vertical",
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        0: {
            direction: "horizontal",
        },
        376: {
            direction: "vertical",
        },
    },
});

var productRealSlider = new Swiper(".product-real-slider", {
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
    },
    thumbs: {
        swiper: thumbSwiper,
    },
});

var productSlider1 = new Swiper(".product-one-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var productSlider6 = new Swiper(".product-six-slider", {
    spaceBetween: 15,
    slidesPerView: 6,
    freeMode: true,
    navigation: {
        nextEl: ".product-six-next",
        prevEl: ".product-six-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 6,
        },
        450: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        630: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1050: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        },
        1610: {
            slidesPerView: 6,
        },
    },
});

var productSlider3 = new Swiper(".product-three-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".product-three-slider-next",
        prevEl: ".product-three-slider-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        670: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 2,
        },
        1740: {
            slidesPerView: 3,
        },
    },
});

var productSlider2 = new Swiper(".product-two-slider", {
    spaceBetween: 15,
    slidesPerView: 2,
    freeMode: true,
    navigation: {
        nextEl: ".product-two-slider-next",
        prevEl: ".product-two-slider-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },
});

var brandSlider = new Swiper(".brand-slider", {
    spaceBetween: 15,
    slidesPerView: 6,
    freeMode: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".brand-next",
        prevEl: ".brand-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        620: {
            slidesPerView: 4,
        },
        810: {
            slidesPerView: 5,
        },
        1199: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 5,
        },
        1600: {
            slidesPerView: 6,
        },
    },
});

var product5Slider = new Swiper(".product-five-slider", {
    slidesPerView: 5,
    spaceBetween: 25,
    navigation: {
        nextEl: ".product-five-slider-next",
        prevEl: ".product-five-slider-prev",
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        420: {
            slidesPerView: 2,
            spaceBetween: 14,
        },
        660: {
            slidesPerView: 3,
        },
        980: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 3,
        },
        1320: {
            slidesPerView: 4,
        },
        1672: {
            slidesPerView: 5,
        },
    },
});

var swiper = new Swiper(".product-thumbnail-slider-2", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product-real-slider-2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

var swiper = new Swiper(".recent-product-slider", {
    slidesPerView: 10,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".recent-product-next",
        prevEl: ".recent-product-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        470: {
            spaceBetween: 15,
            slidesPerView: 3,
        },
        670: {
            slidesPerView: 4,
        },
        840: {
            slidesPerView: 5,
        },
        1040: {
            slidesPerView: 6,
        },
        1210: {
            slidesPerView: 7,
        },
        1380: {
            slidesPerView: 8,
        },
        1590: {
            slidesPerView: 9,
        },
        1776: {
            slidesPerView: 10,
        },
    },
});