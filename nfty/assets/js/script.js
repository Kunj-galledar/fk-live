/*-----------------------------------------------------------------------------------

 Template Name: Niftzy
 Template URI: 
 Description: This is NFT website
 Author: 
 Author URI: 

 ----------------------------------------------------------------------------------- */
// 01.Tap to top
// 02. Ratio js


/* ---------------- Tap to top js ----------------*/
$(window).on("scroll", function () {
    if (window.scrollY > window.outerHeight) {
        $("#scrollToTop").addClass("active");
        // setTimeout(function () {
        //     var theta = ($(window).scrollTop() - (window.outerHeight + (window.outerHeight / 2))) / 500;
        //     $('#scrollToTop').css({
        //         transform: 'rotate(' + theta + 'rad)'
        //     });
        // })
    } else {
        $("#scrollToTop").removeClass("active");
    }
});

$('#scrollToTop').on('click', function () {
    $("html, body").animate({
        scrollTop: 0
    }, 500);
})

/* ---------------- Ratio JS ----------------*/
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
})

// Hide and show filter menu js
$(".toggle-button").click(function () {
    $(".bg-overlay, .filter-menu-box").addClass("show");
});
$(".close-icon, .bg-overlay").click(function () {
    $(".bg-overlay, .filter-menu-box").removeClass("show");
});