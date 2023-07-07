var swiper = new Swiper(".slide-1", {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
    },
});

var productThumbnailSlider2 = new Swiper(".product-thumbnail-slider-2", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    // watchSlidesProgress: true,
    direction: "horizontal",
    // breakpoints: {
    //     // 0: {
    //     //     slidesPerView: 1,
    //     //     spaceBetween: 0,
    //     // },
    //     // 420: {
    //     //     slidesPerView: 2,
    //     //     spaceBetween: 14,
    //     // },
    //     // 660: {
    //     //     slidesPerView: 3,
    //     // },
    //     // 980: {
    //     //     slidesPerView: 4,
    //     // },
    //     // 1200: {
    //     //     slidesPerView: 3,
    //     // },
    //     1199: {
    //         direction: "vertical",
    //     },
    //     1400: {
    //         direction: "horizontal",
    //     },
    // },
});
var productRealSlider2 = new Swiper(".product-real-slider-2", {
    spaceBetween: 10,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    thumbs: {
        swiper: productThumbnailSlider2,
    },
});


var swiper = new Swiper(".product-thumbnail-box", {
    spaceBetween: 10,
    slidesPerView: 4,
    // freeMode: true,
    // watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product-real-box", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});