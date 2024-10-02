// 01. Image to background js
// 02. dropdown category function js
// 03. search box function js
// 04. Footer function js
// 05. search box function js
// 06. Add to Cart js
// 07. Add to wishlist js
// 08. category menu js
// 09. Wishlist Button js
// 10. Counter Number js
// 11. feather js
// 12. Bootstrap tooltip js
// 13. mobile menu active class js
// 14. Tap to top button

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
        02. dropdown category function js
    ==========================*/
    $(function () {
        var list = $(".js-dropdown-list");
        var link = $(".js-link");
        link.click(function (e) {
            e.preventDefault();
            list.slideToggle(200);
        });
        list.find("li").click(function () {
            var text = $(this).html();
            var icon = '<i class="fa fa-chevron-down"></i>';
            link.html(text + icon);
            list.slideToggle(200);
        });
    });

    /*=====================
       03. search box function js
    ==========================*/
    $(".search-box").on("click", function () {
        $(".search-full").addClass("open");
    });
    $(window).on("load resize", function () {
        // open searchbox
        $(".search-type").on("click", function () {
            $(this).parents(".search-full").addClass("show");
        });

        // close seach
        $(".close-search").on("click", function () {
            $(".search-full").removeClass("open");
        });
    });

})(jQuery);

/*=====================
    04.  Footer function js
==========================*/
var contentwidth = $(window).width();
if (contentwidth < "576") {
    $(".footer-title h4").append(
        '<span class="according-menu"><i class="fas fa-chevron-down"></i></span>'
    );
    $(".footer-title").on("click", function () {
        $(".footer-title")
            .removeClass("active")
            .find("span")
            .replaceWith(
                '<span class="according-menu"><i class="fas fa-chevron-down"></i></span>'
            );
        $(".footer-list, .footer-address").slideUp("normal");
        if ($(this).next().is(":hidden") == true) {
            $(this).addClass("active");
            $(this)
                .find("span")
                .replaceWith(
                    '<span class="according-menu"><i class="fas fa-chevron-up"></i></span>'
                );
            $(this).next().slideDown("normal");
        } else {
            $(this)
                .find("span")
                .replaceWith(
                    '<span class="according-menu"><i class="fas fa-chevron-down"></i></span>'
                );
        }
    });
    $(".footer-list, .footer-address").hide();
} else {
    $(".footer-list, .footer-address").show();
}

/*=====================
   05. search box function js
   ==========================*/
$(".search-box").on("click", function () {
    $(".search-full").addClass("open");
});
$(window).on("load resize", function () {
    // open searchbox
    $(".search-type").on("click", function () {
        $(this).parents(".search-full").addClass("show");
    });

    // close seach
    $(".close-search").on("click", function () {
        $(".search-full").removeClass("open");
    });
});

/*=====================
    06. Add to Cart js
    ==========================*/
$(function () {
    $(".btn-cart").on("click", function () {
        $.notify({
            title: "<strong>Success</strong>",
            message: "Item Successfully added in Cart",
            icon: "fas fa-check"
        }, {
            type: "success",
            allow_dismiss: true,
            delay: 3000,
            placement: {
                from: "top",
                align: "right"
            }
        });
    });
});

/*=====================
    07. Add to wishlist js
    ==========================*/
$(function () {
    $(".btn-wishlist").on("click", function () {
        $.notify({
            title: "<strong>Success</strong>",
            message: "Item Successfully added in wishlist",
            icon: "fas fa-check"
        }, {
            type: "danger",
            allow_dismiss: true,
            delay: 3000,
            placement: {
                from: "top",
                align: "right"
            }
        });
    });
});

/*=====================
  08. category menu js
   ==========================*/
$(".toggle-category").on("click", function () {
    $(".category-dropdown").addClass("open");
    $(".bg-overlay").addClass("show");
});
$(".back-category, .bg-overlay").on("click", function () {
    $(".category-dropdown").removeClass("open");
    $(".bg-overlay").removeClass("show");
});
var contentwidth = $(window).width();
if (contentwidth < "1200") {
    $(".category-menu li.submenu >a").append(
        '<span class="according-menu">+</span>'
    );
    $(".category-menu li.submenu >a").on("click", function () {
        $(".category-menu li.submenu >a")
            .removeClass("active")
            .find("span")
            .replaceWith('<span class="according-menu">+</span>');
        $(".category-mega-menu").slideUp("normal");
        if ($(this).next().is(":hidden") == true) {
            $(this).addClass("active");
            $(this)
                .find("span")
                .replaceWith('<span class="according-menu">-</span>');
            $(this).next().slideDown("normal");
        } else {
            $(this)
                .find("span")
                .replaceWith('<span class="according-menu">+</span>');
        }
    });
    $(".category-mega-menu").hide();
}

var contentwidth = $(window).width();
if (contentwidth < "1200") {
    $(".title-category").append('<span class="according-menu">+</span>');
    $(".title-category").on("click", function () {
        $(".title-category")
            .removeClass("active")
            .find("span")
            .replaceWith('<span class="according-menu">+</span>');
        $(".category-childmenu ul").slideUp("normal");
        if ($(this).next().is(":hidden") == true) {
            $(this).addClass("active");
            $(this)
                .find("span")
                .replaceWith('<span class="according-menu">-</span>');
            $(this).next().slideDown("normal");
        } else {
            $(this)
                .find("span")
                .replaceWith('<span class="according-menu">+</span>');
        }
    });
    $(".category-childmenu ul").hide();
}

/*=====================
    09. Wishlist Button js
   ==========================*/
$(".button").click(function () {
    if ($(this).hasClass("deactivate")) {
        $(this).removeClass("deactivate")
    }
    if ($(this).hasClass("active")) {
        $(this).addClass("deactivate")
    }
    $(this).toggleClass("animate");
    $(this).toggleClass("active");
    $(this).toggleClass("inactive");
});

/*=====================
  10. Counter Number js
   ==========================*/
function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}

/*=====================
  11. feather js
   ==========================*/
feather.replace();

/*=====================
  12. Bootstrap tooltip js
   ==========================*/
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
});

/*=====================
  13. mobile menu active class js
   ==========================*/
$(document).ready(function () {
    $('.mobile-menu ul li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});

/*=====================
  14. btn-cart open close js
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
  15. quantity js
   ==========================*/
$('.qty-box .quantity-right-plus').on('click', function () {
    var $qty = $(this).parents(".qty-box").find(".input-number");
    var currentVal = parseInt($qty.val(), 10);
    if (!isNaN(currentVal)) {
        $qty.val(currentVal + 1);
    }
});
$('.qty-box .quantity-left-minus').on('click', function () {
    var $qty = $(this).parents(".qty-box").find(".input-number");
    var currentVal = parseInt($qty.val(), 10);
    if (!isNaN(currentVal) && currentVal > 1) {
        $qty.val(currentVal - 1);
    }
});

/*=====================
  15. Tap to Top js
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