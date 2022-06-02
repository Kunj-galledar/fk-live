// $(document).ready(function () {
//     // hidden things
//     $(".form-business").hide();

//     // next button
//     $(".next").on({
//         click: function () {
//             $("#myTab").find(".active").next().addClass("active");
//             $(this).parents(".tab-pane").fadeOut("slow", function () {
//                 $(this).next(".tab-pane").fadeIn("slow");
//             });
//         }
//     });

//     // back button
//     $(".back").on({
//         click: function () {
//             $("#myTab .nav-item .nav-link.active").last().removeClass("active");
//             $(this).parents(".tab-pane").fadeOut("slow", function () {
//                 $(this).prev(".tab-pane").fadeIn("slow");
//             });
//         }
//     });
// });



$(document).ready(function () {
    // hidden things
    $(".form-business").hide();
    // next button
    $(".proceed-btn").on({
        click: function () {
            $("#myTab").find(".active").parent().next().find('.nav-link').addClass("active");
            $(this).parents(".tab-pane").fadeOut("slow", function () {
                $(this).next(".tab-pane").fadeIn("slow");
            });
        }
    });
    // back button
    $(".backward-btn").on({
        click: function () {
            $("#myTab .active").parent().last().find('.nav-link').removeClass("active");
            $(this).parents(".tab-pane").fadeOut("slow", function () {
                $(this).prev(".tab-pane").fadeIn("slow");
            });
        }
    });
});