function showhide() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("toggle");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
    }
}