var swiper = new Swiper(".categorySlider", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        531: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        856: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1336: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1556: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});


const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var leftThumbnail = new Swiper(".left-thumbnail", {
    spaceBetween: 23,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 3,
    watchOverflow: true,
    watchSlidesVisibility: false,
    watchSlidesProgress: true,
    direction: 'vertical',
});

var rightThumbnail = new Swiper(".right-thumbnail", {
    watchOverflow: true,
    watchSlidesVisibility: false,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    effect: 'fade',
    thumbs: {
        swiper: leftThumbnail
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".category-slider", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        806: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1336: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1556: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1762: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});