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

var categorySlider = new Swiper(".category-slider", {
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

var categorySlider3_1 = new Swiper(".category-slider-3-1", {
    spaceBetween: 15,
    slidesPerView: 5,
    freeMode: true,
    navigation: {
        nextEl: ".electronic-category-next",
        prevEl: ".electronic-category-prev",
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
            slidesPerView: 5,
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

var bannerSlider2 = new Swiper(".banner-slider2", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".banner-two-next",
        prevEl: ".banner-two-prev",
    },
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

var productCartSlider = new Swiper(".product-cart-slider", {
    spaceBetween: 15,
    slidesPerView: 6,
    freeMode: true,
    navigation: {
        nextEl: ".product-cart-next",
        prevEl: ".product-cart-prev",
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
            spaceBetween: 15,
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

var topCategorySlider = new Swiper(".top-category-swiper", {
    slidesPerView: 7,
    spaceBetween: 10,
    grabCursor: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        422: {
            slidesPerView: 3,
        },
        582: {
            slidesPerView: 4,
        },
        830: {
            slidesPerView: 5,
        },
        1000: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 7,
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

var recentProductSlider = new Swiper(".recent-product-slider", {
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

var dailySlider = new Swiper(".daily-deal-slider", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".daily-deal-next",
        prevEl: ".daily-deal-prev",
    },
});

var electronicCategorySlider = new Swiper(".electronic-category-slider", {
    slidesPerView: 8,
    spaceBetween: 15,
    navigation: {
        nextEl: ".electronic-category-next",
        prevEl: ".electronic-category-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        400: {
            slidesPerView: 3,
        },
        550: {
            slidesPerView: 4,
        },
        685: {
            slidesPerView: 5,
        },
        830: {
            slidesPerView: 6,
        },
        975: {
            slidesPerView: 7,
        },
        1130: {
            slidesPerView: 8,
        },
        1399: {
            slidesPerView: 9,
        },
        1400: {
            slidesPerView: 6,
        },
        1590: {
            slidesPerView: 7,
        },
        1770: {
            slidesPerView: 8,
        },
    },
});

var bestSellerSlider = new Swiper(".best-seller-slider", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".best-seller-next",
        prevEl: ".best-seller-prev",
    },
});

var discoverProduct = new Swiper(".discover-product-slider", {
    spaceBetween: 20,
    loop: true,
    slidesPerView: 8,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".discover-product-next",
        prevEl: ".discover-product-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        536: {
            slidesPerView: 3,
        },
        760: {
            slidesPerView: 4,
        },
        940: {
            slidesPerView: 5,
        },
        1115: {
            slidesPerView: 6,
        },
        1360: {
            slidesPerView: 7,
        },
        1650: {
            slidesPerView: 8,
        },
    },
});

var arrivalsSlider = new Swiper(".arrivals-slider", {
    slidesPerView: 8,
    spaceBetween: 25,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        536: {
            slidesPerView: 3,
        },
        760: {
            slidesPerView: 4,
        },
        940: {
            slidesPerView: 5,
        },
        1115: {
            slidesPerView: 6,
        },
        1360: {
            slidesPerView: 7,
        },
        1650: {
            slidesPerView: 8,
        },
    },
});

var toyCollectionSlider = new Swiper(".toy-collection-slider", {
    slidesPerView: 7,
    spaceBetween: 25,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        536: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        760: {
            slidesPerView: 4,
        },
        940: {
            slidesPerView: 5,
        },
        1115: {
            slidesPerView: 6,
        },
        1650: {
            slidesPerView: 7,
        },
    },
});

var bannerSlider3 = new Swiper(".banner-slider3", {
    slidesPerView: 5,
    spaceBetween: 25,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        440: {
            spaceBetween: 15,
            slidesPerView: 2,
        },
        710: {
            slidesPerView: 3,
        },
        1035: {
            slidesPerView: 4,
        },
        1390: {
            slidesPerView: 5,
        },
    },
});

var brandSlider2 = new Swiper(".brand-slider2", {
    slidesPerView: 9,
    spaceBetween: 25,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        536: {
            slidesPerView: 3,
        },
        760: {
            slidesPerView: 4,
        },
        940: {
            slidesPerView: 5,
        },
        1115: {
            slidesPerView: 6,
        },
        1360: {
            slidesPerView: 7,
        },
        1650: {
            slidesPerView: 9,
        },
    },
});

var dealHotSlider = new Swiper(".deal-hot-slider", {
    slidesPerView: 1,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        730: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 1,
        },
    },
});

var specialOffer = new Swiper(".special-offer-slider", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".special-offer-next",
        prevEl: ".special-offer-prev",
    },
});

var relatedProducts = new Swiper(".related-products", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 15,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1370: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1632: {
            slidesPerView: 6,
        },
    },
});

var thumbnailProductSlider = new Swiper(".thumbnail-product-slider", {
    spaceBetween: 15,
    slidesPerView: 4,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    freeMode: true,
    watchSlidesProgress: true,
});
var productOriginalSlider = new Swiper(".product-original-slider", {
    spaceBetween: 10,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    thumbs: {
        swiper: thumbnailProductSlider,
    },
});

var productSlider = new Swiper(".product-slider", {
    spaceBetween: 15,
    slidesPerView: 4,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
});