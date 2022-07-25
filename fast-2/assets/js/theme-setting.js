/*=====================
      Color Picker
==========================*/
var color_picker1 = document.getElementById("colorPick").value;
document.getElementById("colorPick").onchange = function () {
    color_picker1 = this.value;
    document.body.style.setProperty("--theme-color", color_picker1);
};

/*========================
 Dark local storage setting js
 ==========================*/
$("#darkButton").on("click", function () {
    var href = $("#color-link").attr("href");
    $("body").removeClass("light");
    $("body").addClass("dark");
    document
        .getElementById("color-link")
        .setAttribute("href", "../assets/css/dark.css");
});
$("#lightButton").on("click", function () {
    var href = $("#color-link").attr("href");
    $("body").removeClass("dark");
    $("body").addClass("light");
    document
        .getElementById("color-link")
        .setAttribute("href", "../assets/css/style.css");
});

/*========================
   RTL local storage setting js
   ==========================*/
$(".rtl").on("click", function () {
    if ($("body").hasClass("ltr")) {
        $("html").attr("dir", "rtl");
        $("body").removeClass("ltr");
        $("body").addClass("rtl");
        // $(this).text("LTR");
        $("#rtl-link").attr("href", "../assets/css/vendors/bootstrap.rtl.css");
    } else {
        $("html").attr("dir", "");
        $("body").removeClass("rtl");
        // $(this).text("RTL");
        $("body").addClass("ltr");
        $("#rtl-link").attr("href", "../assets/css/vendors/bootstrap.css");
    }
});