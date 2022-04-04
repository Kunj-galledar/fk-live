/*-----------------------------------------------------------------------------------

 Template Name:Voxo
 Template URI: themes.pixelstrap.com/Voxo
 Description: This is Ecommerce website
 Author: Pixelstrap
 Author URI: https://themeforest.net/user/pixelstrap

 ----------------------------------------------------------------------------------- */
// 01.Image to background js
// 02.menu js
// 03.search box function
// 04.color select function
// 05.size select function
// 06.modal function
// 07.Add to wishlist
// 08.Add to cart
// 09.Add to wishlist
// 10.category menu
// 11.footer function

(function ($) {
  "use strict";

  /*=====================
    Image to background js
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
    Menu js
    ==========================*/
  $(".toggle-nav, .sidebar-toggle").click(function () {
    $(".nav-menu").css("right", "0px");
    $(".bg-overlay").addClass("show");
  });
  $(".mobile-back, .bg-overlay").click(function () {
    $(".nav-menu").css("right", "-410px");
    $(".bg-overlay").removeClass("show");
  });

  var contentwidth = jQuery(window).width();
  if (contentwidth < "1200") {
    jQuery(".menu-title").append('<span class="according-menu">+</span>');
    jQuery(".menu-title").click(function () {
      jQuery(".menu-title")
        .removeClass("active")
        .find("span")
        .replaceWith('<span class="according-menu">+</span>');
      jQuery(".menu-content").slideUp("normal");
      if (jQuery(this).next().is(":hidden") == true) {
        jQuery(this).addClass("active");
        jQuery(this)
          .find("span")
          .replaceWith('<span class="according-menu">-</span>');
        jQuery(this).next().slideDown("normal");
      } else {
        jQuery(this)
          .find("span")
          .replaceWith('<span class="according-menu">+</span>');
      }
    });
    jQuery(".menu-content").hide();
  }

  var contentwidth = jQuery(window).width();
  if (contentwidth < "1200") {
    jQuery(".menu-title-level1").append(
      '<span class="according-menu">+</span>'
    );
    jQuery(".menu-title-level1").click(function () {
      jQuery(".menu-title-level1")
        .removeClass("active")
        .find("span")
        .replaceWith('<span class="according-menu">+</span>');
      jQuery(".level1").slideUp("normal");
      if (jQuery(this).next().is(":hidden") == true) {
        jQuery(this).addClass("active");
        jQuery(this)
          .find("span")
          .replaceWith('<span class="according-menu">-</span>');
        jQuery(this).next().slideDown("normal");
      } else {
        jQuery(this)
          .find("span")
          .replaceWith('<span class="according-menu">+</span>');
      }
    });
    jQuery(".nav-sub-childmenu .level1").hide();
  }

  var contentwidth = jQuery(window).width();
  if (contentwidth < "1200") {
    jQuery(".submenu-title").append('<span class="according-menu">+</span>');
    jQuery(".submenu-title").click(function () {
      jQuery(".submenu-title")
        .removeClass("active")
        .find("span")
        .replaceWith('<span class="according-menu">+</span>');
      jQuery(".submenu-content").slideUp("normal");
      if (jQuery(this).next().is(":hidden") == true) {
        jQuery(this).addClass("active");
        jQuery(this)
          .find("span")
          .replaceWith('<span class="according-menu">-</span>');
        jQuery(this).next().slideDown("normal");
      } else {
        jQuery(this)
          .find("span")
          .replaceWith('<span class="according-menu">+</span>');
      }
    });
    jQuery(".submenu-content").hide();
  }

  /*=====================
     search box function
     ==========================*/
  $(".search-box").click(function () {
    $(".search-full").addClass("open");
  });
  $(window).on("load resize", function () {
    // open searchbox
    $(".search-type").on("click", function () {
      $(this).parents(".search-full").addClass("show");
    });

    // close seach
    $(".close-search").click(function () {
      $(".search-full").removeClass("open");
    });
  });

  /*=====================
    color select function
    ==========================*/
  $(".color-variant li").click(function () {
    $(this).addClass("selected").siblings("li").removeClass("selected");
  });

  /*=====================
    size select function
    ==========================*/
  $(".size-detail ul li").click(function () {
    $(this).addClass("selected").siblings("li").removeClass("selected");
  });

  /*=====================
     modal function
     ==========================*/
  $("#quick-view").on("show.bs.modal", function (event) {
    $(window).trigger("resize");
    $(".quick-view-slider").slick("slickNext");
    $(".quick-nav").slick("slickNext");
  });

  /*=====================
     Add to cart
     ==========================*/
  $(".product-box .cart-wrap li .btn").on("click", function () {
    $.notify(
      {
        icon: "fa fa-check",
        title: "Success!",
        message: "Item Successfully added to your cart",
      },
      {
        element: "body",
        position: null,
        type: "success",
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
        template:
          '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
          '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
          '<span data-notify="icon"></span> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-info progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          "</div>" +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          "</div>",
      }
    );
  });

  /*=====================
    Add to wishlist
    ==========================*/
  $(".product-box a.wishlist").on("click", function () {
    $.notify(
      {
        icon: "fa fa-check",
        title: "Success!",
        message: "Item Successfully added in wishlist",
      },
      {
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
        template:
          '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
          '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
          '<span data-notify="icon"></span> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-info progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          "</div>" +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          "</div>",
      }
    );
  });

  /*=====================
    category menu
     ==========================*/
  $(".toggle-category").click(function () {
    $(".category-dropdown").addClass("open");
    $(".bg-overlay").addClass("show");
  });
  $(".back-category, .bg-overlay").click(function () {
    $(".category-dropdown").removeClass("open");
    $(".bg-overlay").removeClass("show");
  });
  var contentwidth = jQuery(window).width();
  if (contentwidth < "1200") {
    jQuery(".category-menu li.submenu >a").append(
      '<span class="according-menu">+</span>'
    );
    jQuery(".category-menu li.submenu >a").click(function () {
      jQuery(".category-menu li.submenu >a")
        .removeClass("active")
        .find("span")
        .replaceWith('<span class="according-menu">+</span>');
      jQuery(".category-mega-menu").slideUp("normal");
      if (jQuery(this).next().is(":hidden") == true) {
        jQuery(this).addClass("active");
        jQuery(this)
          .find("span")
          .replaceWith('<span class="according-menu">-</span>');
        jQuery(this).next().slideDown("normal");
      } else {
        jQuery(this)
          .find("span")
          .replaceWith('<span class="according-menu">+</span>');
      }
    });
    jQuery(".category-mega-menu").hide();
  }

  var contentwidth = jQuery(window).width();
  if (contentwidth < "1200") {
    jQuery(".title-category").append('<span class="according-menu">+</span>');
    jQuery(".title-category").click(function () {
      jQuery(".title-category")
        .removeClass("active")
        .find("span")
        .replaceWith('<span class="according-menu">+</span>');
      jQuery(".category-childmenu ul").slideUp("normal");
      if (jQuery(this).next().is(":hidden") == true) {
        jQuery(this).addClass("active");
        jQuery(this)
          .find("span")
          .replaceWith('<span class="according-menu">-</span>');
        jQuery(this).next().slideDown("normal");
      } else {
        jQuery(this)
          .find("span")
          .replaceWith('<span class="according-menu">+</span>');
      }
    });
    jQuery(".category-childmenu ul").hide();
  }

  /*=====================
     Footer function
     ==========================*/
  var contentwidth = jQuery(window).width();
  if (contentwidth < "576") {
    jQuery(".footer-title h5").append(
      '<span class="according-menu"><i class="fas fa-chevron-down"></i></span>'
    );
    jQuery(".footer-title").click(function () {
      jQuery(".footer-title")
        .removeClass("active")
        .find("span")
        .replaceWith(
          '<span class="according-menu"><i class="fas fa-chevron-down"></i></span>'
        );
      jQuery(".footer-content").slideUp("normal");
      if (jQuery(this).next().is(":hidden") == true) {
        jQuery(this).addClass("active");
        jQuery(this)
          .find("span")
          .replaceWith(
            '<span class="according-menu"><i class="fas fa-chevron-up"></i></span>'
          );
        jQuery(this).next().slideDown("normal");
      } else {
        jQuery(this)
          .find("span")
          .replaceWith(
            '<span class="according-menu"><i class="fas fa-chevron-down"></i></span>'
          );
      }
    });
    jQuery(".footer-content").hide();
  } else {
    jQuery(".footer-content").show();
  }

  /*=====================
     cart function
     ==========================*/
  $(".cart-dropdown .cart-media, .cart-dropdown > button").click(function () {
    $(".cart-dropdown").addClass("show");
    $("body").addClass("o-hidden");
  });

  $(".back-cart").click(function () {
    $(".cart-dropdown").removeClass("show");
    $("body").removeClass("o-hidden");
  });
})(jQuery);

/*=====================
    Mouseup functions
 ==========================*/
// $(document).mouseup(function (e) {
//   // searchbox
//   var searchbar = $(".search-full");
//   if (!searchbar.is(e.target) && searchbar.has(e.target).length === 0) {
//     $(".search-full").removeClass("show");
//   }

//   // menu sidebar
//   var navMenu = $(".nav-menu");
//   if (!navMenu.is(e.target) && navMenu.has(e.target).length === 0) {
//     $(".nav-menu").css("right", "-410px");
//     $("body").removeClass("o-hidden");
//   }

//   // category menu
//   var categoryMenu = $(".category-dropdown");
//   if (!categoryMenu.is(e.target) && categoryMenu.has(e.target).length === 0) {
//     $(".category-dropdown").removeClass("open");
//     $("body").removeClass("o-hidden");
//   }

//   // category menu
//   var categoryMenu = $(".cart-dropdown");
//   if (!categoryMenu.is(e.target) && categoryMenu.has(e.target).length === 0) {
//     $(".cart-dropdown").removeClass("show");
//     $("body").removeClass("o-hidden");
//   }
// });

/*=====================
    Home Section Slick Slider
 ==========================*/
$(document).ready(function () {
  $(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    responsive: [
      {
        breakpoint: 360,
        settings: {
          infinite: false,
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});

/*=====================
    Service Slick Slider
 ==========================*/
$(document).ready(function () {
  $(".custome-service-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});

$(document).ready(function () {
  $(".arrivals-shoes-image").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    adaptiveHeight: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });
});

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  focusOnSelect: true,
  vertical: true,
});
