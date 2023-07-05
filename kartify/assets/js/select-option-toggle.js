document.querySelector(".select-btn").addEventListener("click", function () {
    document.querySelector(".select-option-box").classList.add("show");
});

function closeSidebar() {
    document.querySelector(".select-option-box").classList.remove("show");
}