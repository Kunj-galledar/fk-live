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
        // 380: {
        //     slidesPerView: 2,
        //     spaceBetween: 6,
        // },
        // 602: {
        //     spaceBetween: 3,
        //     slidesPerView: 6,
        // },
        // 791: {
        //     slidesPerView: 4,
        // },
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

// var categoryBox1 = new Swiper(".category-slide-3", {
//     slidesPerView: 11,
//     spaceBetween: 10,
//     // breakpoints: {
//     //     0: {
//     //         slidesPerView: 2,
//     //         spaceBetween: 8,
//     //     },
//     //     380: {
//     //         slidesPerView: 2,
//     //         spaceBetween: 8,
//     //     },
//     //     490: {
//     //         spaceBetween: 8,
//     //         slidesPerView: 5,
//     //     },
//     //     646: {
//     //         spaceBetween: 8,
//     //         slidesPerView: 6,
//     //     },
//     //     812: {
//     //         slidesPerView: 7,
//     //     },
//     //     991: {
//     //         slidesPerView: 8,
//     //     },
//     //     1388: {
//     //         slidesPerView: 9,
//     //     },
//     //     1288: {
//     //         slidesPerView: 10,
//     //     },
//     //     1530: {
//     //         slidesPerView: 13,
//     //     },
//     // },
// });

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
        1465: {
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


var swiper = new Swiper(".slide-1", {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
    },
});

var swiper = new Swiper(".banner-slider", {
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