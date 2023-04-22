var element = document.getElementsByClassName("setting-list")[0];
element.addEventListener("click", myFunction);

function myFunction(e) {
    var elems = document.querySelector(".active");
    if (elems != null) {
        elems.classList.remove("active");
    }
    e.target.className = "active";
}