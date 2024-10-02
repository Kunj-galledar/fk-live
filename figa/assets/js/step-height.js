/*====================
   step-height js
=======================*/
window.addEventListener('load', handleLoadOrResize);
window.addEventListener('resize', handleLoadOrResize);

function handleLoadOrResize() {
    let stepBox = document.getElementsByClassName("step-body")[0].offsetHeight;
    let stepHeader = document.getElementsByClassName("step-header");
    Array.from(stepHeader).forEach((elem) => elem.style.height = `${stepBox}px`)
}