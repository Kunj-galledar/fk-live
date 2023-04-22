function showhide() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("toggle");

    if (dots.style.display === "none") {
        dots.style.display = "block";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        moreText.style.display = "block";
    }
}