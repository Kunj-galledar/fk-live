// var loadFile = function (event) {
//     var image = document.getElementById("output");
//     image.src = URL.createObjectURL(event.target.files[0]);
// };

/*========================
 Manifest js
 ==========================*/
// window.onload = () => {
//     'use strict';
//     if ('serviceWorker' in navigator) {
//         navigator.serviceWorker.register('../../sw.js');
//     }
// }

/*====================
  Theme Setting Option Js
======================*/
let elements = document.querySelectorAll('.theme-icon');

elements.forEach(i => {
    i.addEventListener('click', function () {
        elements.forEach(j => j.classList.toggle('show'));
    });
});