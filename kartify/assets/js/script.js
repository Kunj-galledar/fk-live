/*-----------------------------------------------------------------------------------

 Template Name: Kartify
 Template URI: themes.pixelstrap.com/Kartify
 Description: This is Ecommerce website
 Author: Pixelstrap
 Author URI: https://themeforest.net/user/pixelstrap

 ----------------------------------------------------------------------------------- */

/*====================
   01. Ratio js
=======================*/
window.addEventListener('load', () => {
    const bgImg = document.querySelectorAll(".bg-img");
    for (i = 0; i < bgImg.length; i++) {

        let bgImgEl = bgImg[i];
        /// Optional Class Add /// 
        if (bgImgEl.classList.contains('bg-top')) {
            bgImgEl.parentNode.classList.add("b-top");
        } else if (bgImgEl.classList.contains('bg-bottom')) {
            bgImgEl.parentNode.classList.add("b-button");
        } else if (bgImgEl.classList.contains('bg-center')) {
            bgImgEl.parentNode.classList.add("b-center");
        } else if (bgImgEl.classList.contains('bg-left')) {
            bgImgEl.parentNode.classList.add("b-left");
        } else if (bgImgEl.classList.contains('bg-right')) {
            bgImgEl.parentNode.classList.add("b-right");
        }

        /// Lazyload Class Add ///
        if (bgImgEl.classList.contains('blur-up')) {
            bgImgEl.parentNode.classList.add("blur-up", "lazyload");
        }

        /// Size Class Add ///
        if (bgImgEl.classList.contains('bg_size_content')) {
            bgImgEl.parentNode.classList.add("b_size_content");
        }

        /// Ratio Style ///
        bgImgEl.parentNode.classList.add("bg-size");
        const bgSrc = bgImgEl.src;
        bgImgEl.style.display = 'none';
        bgImgEl.parentNode.setAttribute("style", `
            background-image: url(${bgSrc});
            background-size:cover;
            background-position: center;
            background-repeat: no-repeat;
            display: block;
        `);
    }
});

/*====================
   02. Open Search Bar js
=======================*/
const div = document.getElementById('searchOffcanvas');
const div2 = document.getElementById('overlay');
const addBtn = document.getElementById('searchClick');
const removeBtn = document.getElementById('close-btn');

addBtn.addEventListener('click', () => {
    div.classList.add('show');
    div2.classList.add('show');
})

removeBtn.addEventListener('click', () => {
    div.classList.remove('show');
    div2.classList.remove('show');
})