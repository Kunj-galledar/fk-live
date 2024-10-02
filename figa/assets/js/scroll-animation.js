// text effect
window.addEventListener("scroll", () => {
    const translateAngleright = window.pageYOffset * 0.15;
    const translateAngleleft = window.pageYOffset * 0.15;
    const translateObjectsright = document.querySelectorAll(".translate-right-effect");
    const translateObjectsleft = document.querySelectorAll(".translate-left-effect");
    translateObjectsright.forEach((object) => {
        object.style.transform = `translateX(${translateAngleright}px)`;
    });
    translateObjectsleft.forEach((object) => {
        object.style.transform = `translateX(-${translateAngleleft}px)`;
    });
});