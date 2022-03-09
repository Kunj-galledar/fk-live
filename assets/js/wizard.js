$(document).ready(function () {
    // hidden things
    $(".form-business").hide();
    $("#successMessage").hide();
    // next button
    // $(".next").on({
    //     click: function () {
    //         // select any card
    //         var getValue = $(this).parents(".row").find(".card").hasClass("active-card");
    //         if (getValue) {
    //             $("#progressBar").find(".active").next().addClass("active");
    //             $("#alertBox").addClass("d-none");
    //             $(this).parents(".row").fadeOut("slow", function () {
    //                 $(this).next(".row").fadeIn("slow");
    //             });

    //         } else {
    //             $("#alertBox").removeClass("d-none");
    //         }
    //     }
    // });
    // back button
    $(".back").on({
        click: function () {
            $("#progressBar .active").last().removeClass("active");
            $(this).parents(".row").fadeOut("slow", function () {
                $(this).prev(".row").fadeIn("slow");
            });
        }
    });
    //finish button
    $(".submit-button").on({
        click: function () {
            $("#wizardRow").fadeOut(300);
            $(this).parents(".row").children("#successForm").fadeOut(300);
            $(this).parents(".row").children("#successMessage").fadeIn(3000);
        }
    });
    //Active card on click function
    $(".card").on({
        click: function () {
            $(this).toggleClass("active-card");
            $(this).parent(".col").siblings().children(".card").removeClass("active-card");
        }
    });
    //back to wizard
    $(".back-to-wizard").on({
        click: function () {
            location.reload(true);
        }
    });
});