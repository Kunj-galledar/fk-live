/*-----------------------------------------------------------------------------------

 Template Name:Fastkart
 Template URI: themes.pixelstrap.com/Fastkart
 Description: This is Ecommerce website
 Author: Pixelstrap
 Author URI: https://themeforest.net/user/pixelstrap

 ----------------------------------------------------------------------------------- */

// 01. Image to background js
// 02. Shop Page Grid Setting Js
// 03. Footer function js
// 04. Feather js
// 05. mobile menu active class js
// 06. btn-cart open close js
// 07. quantity js
// 08. Tap to Top js
// 09. User Dashboard Left Sidebar Show js
// 10. Tooltip js
// 11. Cookie Bar js
// 12. Image To Background js
// 13. Hide header on scroll down js
// 14. search box function Js
// 15. Wishlist Js
// 16. Loader Js
// 17. header Dropdown Js
// 18. Add to Cart Show Js
// 19. active class Js

(function ($) {
    "use strict";
    /*=====================
    01. Image to background js
    ==========================*/
    $(".bg-top").parent().addClass("b-top");
    $(".bg-bottom").parent().addClass("b-bottom");
    $(".bg-center").parent().addClass("b-center");
    $(".bg-left").parent().addClass("b-left");
    $(".bg-right").parent().addClass("b-right");
    $(".bg_size_content").parent().addClass("b_size_content");
    $(".bg-img").parent().addClass("bg-size");
    $(".bg-img.blur-up").parent().addClass("blur-up lazyload");
    $(".bg-img").each(function () {
        var el = $(this),
            src = el.attr("src"),
            parent = el.parent();

        parent.css({
            "background-image": "url(" + src + ")",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
            display: "block",
        });

        el.hide();
    });

    /*=====================
    02. Shop Page Grid Setting Js
    ==========================*/
    $(".grid-option .grid-btn").on("click", function () {
        $(".product-list-section").removeClass("list-style");
    });

    $(".grid-option .list-btn").on("click", function () {
        $(".product-list-section").addClass("list-style");
    });
    $('.two-grid').on('click', function (e) {
        $(".product-list-section").removeClass("row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 list-style").addClass("row-cols-2");
    });
    $('.three-grid').on('click', function (e) {
        $(".product-list-section").removeClass("row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 list-style").addClass("row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2");
    });
    $('.grid-btn').on('click', function (e) {
        $(".product-list-section").removeClass("row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 list-style").addClass("row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2");
    });
    $('.five-grid').on('click', function (e) {
        $(".product-list-section").removeClass("list-style").addClass("row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2");
    });
    var contentwidth = $(window).width();
    if (contentwidth < "1199") {
        $(".grid-options .grid-btn").addClass("active");
    }
    if (contentwidth < "991") {
        $(".grid-options .three-grid").addClass("active");
    }
    if (contentwidth < "767") {
        $(".grid-options .two-grid").addClass("active");
    }
})(jQuery);

/*=====================
    03. Footer function js
==========================*/
var contentwidth = $(window).width();
if (contentwidth < "576") {
    $(".footer-title h4").append(
        '<span class="according-menu float-end"><i class="fa-solid fa-angle-down"></i></span>'
    );
    $(".footer-title").on("click", function () {
        $(".footer-title")
            .removeClass("active")
            .find("span")
            .replaceWith(
                '<span class="according-menu float-end"><i class="fa-solid fa-angle-down"></i></span>'
            );
        $(".footer-contact, .footer-contain").slideUp("normal");
        if ($(this).next().is(":hidden") == true) {
            $(this).addClass("active");
            $(this)
                .find("span")
                .replaceWith(
                    '<span class="according-menu float-end"><i class="fas fa-chevron-up"></i></span>'
                );
            $(this).next().slideDown("normal");
        } else {
            $(this)
                .find("span")
                .replaceWith(
                    '<span class="according-menu float-end"><i class="fa-solid fa-angle-down"></i></span>'
                );
        }
    });
    $(".footer-contact, .footer-contain").hide();
} else {
    $(".footer-contact, .footer-contain").show();
}

/*=====================
  04. Feather js
   ==========================*/
feather.replace();

/*=====================
  05. mobile menu active class js
   ==========================*/
$(document).ready(function () {
    $('.mobile-menu ul li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});

/*=====================
  06. btn-cart open close js
   ==========================*/
$(document).ready(function () {
    $('.button-item').on("click", function () {
        $('.item-section').addClass("active");
    });

    $('.close-button').on("click", function () {
        $('.item-section').removeClass("active");
    });

    $('.btn-cart').on("click", function () {
        setTimeout(function () {
            $('.item-section').addClass("active")
        }, 1500);
        setTimeout(function () {
            $('.item-section').removeClass('active');
        }, 5000);
    });
});

/*=====================
  07. quantity js
   ==========================*/
$('.qty-box .quantity-right-plus').on('click', function () {
    var $qty = $(this).parents(".qty-box").find(".input-number");
    var currentVal = parseInt($qty.val(), 10);
    if (!isNaN(currentVal)) {
        $qty.val(currentVal + 0);
    }
});
$('.qty-box .quantity-left-minus').on('click', function () {
    var $qty = $(this).parents(".qty-box").find(".input-number");
    var currentVal = parseInt($qty.val(), 10);
    if (!isNaN(currentVal) && currentVal > 0) {
        $qty.val(currentVal - 0);
    }
});


/*=====================
  08. Tap to Top js
   ==========================*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('.back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

/*=====================
   09. User Dashboard Left Sidebar Show Js
   ==========================*/
$(".left-dashboard-show").click(function () {
    $(".bg-overlay, .dashboard-left-sidebar").addClass("show");
});
$(".close-button, .bg-overlay, .user-nav-pills .nav-item .nav-link").click(function () {
    $(".bg-overlay, .dashboard-left-sidebar").removeClass("show");
});

/*=====================
   10. Tooltip Js
   ==========================*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*=====================
   11. Cookie Bar Js
   ==========================*/
$(".ok-button").click(function () {
    $(".cookie-bar-box").addClass("hide");
});

/*=====================
   12. Image To Background Js
   ==========================*/
$(".bg-top").parent().addClass("b-top");
$(".bg-bottom").parent().addClass("b-bottom");
$(".bg-center").parent().addClass("b-center");
$(".bg-left").parent().addClass("b-left");
$(".bg-right").parent().addClass("b-right");
$(".bg_size_content").parent().addClass("b_size_content");
$(".bg-img").parent().addClass("bg-size");
$(".bg-img.blur-up").parent().addClass("blur-up lazyload");
$(".bg-img").each(function () {
    var el = $(this),
        src = el.attr("src"),
        parent = el.parent();

    parent.css({
        "background-image": "url(" + src + ")",
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat",
        display: "block",
    });

    el.hide();
});

/*=====================
   13. Hide header on scroll down js
==========================*/
$(function () {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $("header");
    var headerHeight = $header.outerHeight();

    $window.scroll(function () {
        var windowTop = $window.scrollTop();

        if (windowTop >= headerHeight) {
            $header.addClass("nav-down");
        } else {
            $header.removeClass("nav-down");
            $header.removeClass("nav-up");
        }

        if ($header.hasClass("nav-down")) {
            if (windowTop < lastScrollTop) {
                $header.addClass("nav-up");
            } else {
                $header.removeClass("nav-up");
            }
        }
        $("#lastscrolltop").text("LastscrollTop: " + lastScrollTop);
        lastScrollTop = windowTop;
        $("#windowtop").text("scrollTop: " + windowTop);
    });
});

/*=====================
   14. search box function Js
   ==========================*/
$(".search-box").on("click", function () {
    $(this).closest(".rightside-box").find(".search-full").addClass("open");
});
$(window).on("load resize", function () {
    // open searchbox
    $(".search-type").on("click", function () {
        $(this).parents(".search-full").addClass("show");
    });

    // close seach
    $(".close-search").on("click", function () {
        $(this).closest(".rightside-box").find(".search-full").removeClass("open");
    });
});

/*=====================
   15. Wishlist Js
   ==========================*/
$(".notifi-wishlist").on("click", function () {
    $.notify({
        icon: "fa fa-check",
        title: "Success!",
        message: "Item Successfully added in wishlist",
    }, {
        element: "body",
        position: null,
        type: "info",
        allow_dismiss: true,
        newest_on_top: false,
        showProgressbar: true,
        placement: {
            from: "top",
            align: "right",
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5000,
        animate: {
            enter: "animated fadeInDown",
            exit: "animated fadeOutUp",
        },
        icon_type: "class",
        template: '<div data-notify="container" class="col-xs-6 col-lg-5 col-md-6 col-sm-7 col-12 alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-info progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            "</div>" +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            "</div>",
    });
});

/*=====================
   16. Loader Js
   ==========================*/
const loaderEl = document.getElementsByClassName("fullpage-loader")[0];
document.addEventListener("readystatechange", (event) => {
    const readyState = "complete";
    if (document.readyState == readyState) {
        loaderEl.classList.add("fullpage-loader--invisible");

        setTimeout(() => {
            loaderEl.parentNode.removeChild(loaderEl);
        }, 2000);
    }
});

/*=====================
    17. header Dropdown Js
 ==========================*/
$(".dropdown-menu li a").on('click', function () {
    var a = $(this).closest("a");
    var getSampling = a.text();
    var getImage = a.find('img').attr('src');

    // console.log("src path", getImage);
    $(this).closest(".dropdown-menu").prev('.dropdown-toggle').find('span').text(getSampling);
    $(this).closest(".dropdown-menu").prev('.dropdown-toggle').find('img').attr("src", getImage);
});

/*=====================
   18. Add to Cart Show Js
   ==========================*/
$(".addCart").click(function () {
    $(".add-cart-box").addClass("show");
    setTimeout(function () {
        $(".add-cart-box").removeClass("show");
    }, 5000);
});
$(".add-cart-box .btn-close").click(function () {
    $(".add-cart-box").removeClass("show");
});

/*=====================
   19. active class Js
   ==========================*/
$(".product-packege .select-packege li a").click(function () {
    $("li a").removeClass("active");
    $(this).addClass("active");
});

/*=====================
   20. Hide header on scroll down js
   ==========================*/
$(function () {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $("header");
    var headerHeight = $header.outerHeight();

    $window.scroll(function () {
        var windowTop = $window.scrollTop();

        if (windowTop >= headerHeight) {
            $header.addClass("nav-down");
        } else {
            $header.removeClass("nav-down");
            $header.removeClass("nav-up");
        }

        if ($header.hasClass("nav-down")) {
            if (windowTop < lastScrollTop) {
                $header.addClass("nav-up");
            } else {
                $header.removeClass("nav-up");
            }
        }
        $("#lastscrolltop").text("LastscrollTop: " + lastScrollTop);

        lastScrollTop = windowTop;

        $("#windowtop").text("scrollTop: " + windowTop);
    });
});