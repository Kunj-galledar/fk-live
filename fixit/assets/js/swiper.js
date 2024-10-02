/**=====================
    Swiper Js
==========================**/

/* service slider */
var serviceSlider = new Swiper(".service-slider", {
    slidesPerView: 1.2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay: {
        enabled: true,
        delay: 0,
        pauseOnMouseEnter: false,
        disableOnInteraction: true,
    },
    freeMode: true,
    speed: 7000,
    freeModeMomentum: false,
    breakpoints: {
        1600: {
            slidesPerView: 6.5,
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: 5.5,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 18,
            centeredSlides: false,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 18,
            centeredSlides: false,
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 15,
            centeredSlides: false,
        },
        575: {
            slidesPerView: 2.5,
            spaceBetween: 12,

        },
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        // 0: {
        //     slidesPerView: 1.5,
        //     spaceBetween: 15,
        // },
    }

});

/*  Offer slider  */
var offerSlider = new Swiper(".offer-slider", {
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    },
    breakpoints: {
        1400: {
            slidesPerView: 3,

        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 24,
        },

        740: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        }

    }
});

/*  Feature slider  */
var featureSlider = new Swiper(".feature-slider", {
    freeMode: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
        1660: {
            slidesPerView: 4,
            spaceBetween: 30,

        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

    }
});

/*  Service Package slider  */
var serviceSlider = new Swiper(".service-package-slider", {
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    breakpoints: {
        1600: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 3,

        },
        740: {
            slidesPerView: 2,
        },

    }
});

/*  Service Package slider  */
var aboutSlider = new Swiper(".about-us-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,

        },
        740: {
            slidesPerView: 2,
        },
    }
});

/*  About us slider  */
var aboutUsSlider = new Swiper(".about-us-slider-1", {
    spaceBetween: 20,
    roundLengths: true,
    loop: true,
    centeredSlides: true,
    loopAdditionalSlides: 20,
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        1500: {
            slidesPerView: 3,

        },
        800: {
            slidesPerView: 2,
        },
    }
});

/*  Service Detail slider  */
var offerSlider = new Swiper(".service-detail-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next5",
        prevEl: ".swiper-button-prev5",
    },
});