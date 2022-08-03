/*=====================
   Hide header on scroll down js
   ==========================*/
// $(function () {
//     var $window = $(window);
//     var lastScrollTop = 0;
//     var $header = $("header");
//     var headerHeight = $header.outerHeight();

//     $window.scroll(function () {
//         var windowTop = $window.scrollTop();

//         if (windowTop >= headerHeight) {
//             $header.addClass("nav-down");
//         } else {
//             $header.removeClass("nav-down");
//             $header.removeClass("nav-up");
//         }

//         if ($header.hasClass("nav-down")) {
//             if (windowTop < lastScrollTop) {
//                 $header.addClass("nav-up");
//             } else {
//                 $header.removeClass("nav-up");
//             }
//         }
//         $("#lastscrolltop").text("LastscrollTop: " + lastScrollTop);

//         lastScrollTop = windowTop;

//         $("#windowtop").text("scrollTop: " + windowTop);
//     });
// });

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('header').addClass('active')
    } else {
        $('header').removeClass('active')
    }
});

$(window)
    .scroll(function () {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $("section").each(function (i) {
                // The number at the end of the next line is how pany pixels you from the top you want it to activate.
                if ($(this).position().top <= windscroll - 0) {
                    $(".navbar-collapse .navbar-nav .nav-item .nav-link.active").removeClass("active");
                    $(".navbar-collapse .navbar-nav .nav-item .nav-link").eq(i).addClass("active");
                }
            });
        } else {
            $(".navbar-collapse .navbar-nav .nav-item .nav-link.active").removeClass("active");
            $(".navbar-collapse .navbar-nav .nav-item .nav-link:first").addClass("active");
        }
    })
    .scroll();