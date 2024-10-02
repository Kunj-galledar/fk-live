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

/*=====================
    Remove box Js
  ==========================*/
function hideProductBox(button) {
    var productBox = button.parentNode; // Get the parent element of the button (product box)
    productBox.style.display = "none";
}

/*=====================
    Change Website Title Js
  ==========================*/
var title = document.title;

window.addEventListener('focus', function () {
    document.title = title;
});

window.addEventListener('blur', function () {
    document.title = "Come Back :(";
});


// var contentWidth = window.innerWidth;
// if (contentWidth < 576) {
//     var footerTitle = document.querySelectorAll(".footer-title");
//     footerTitle.forEach(function (title) {
//         var span = document.createElement("span");
//         span.className = "according-menu float-end";
//         span.innerHTML = '<i class="ri-arrow-down-s-line"></i>';
//         title.querySelector("h4").appendChild(span);

//         title.addEventListener("click", function () {
//             footerTitle.forEach(function (item) {
//                 item.classList.remove("active");
//                 var span = item.querySelector("span");
//                 span.innerHTML = '<i class="ri-arrow-down-s-line"></i>';
//             });

//             var footerContact = document.querySelector(".footer-list");
//             var footerContain = document.querySelector(".footer-list");
//             var nextElement = this.nextElementSibling;

//             if (nextElement.style.display === "none" || nextElement.style.display === "") {
//                 this.classList.add("active");
//                 var span = this.querySelector("span");
//                 span.innerHTML = '<i class="ri-arrow-up-s-line"></i>';
//                 footerContact.style.display = "block";
//                 footerContain.style.display = "block";
//                 nextElement.style.display = "block";
//             } else {
//                 var span = this.querySelector("span");
//                 span.innerHTML = '<i class="ri-arrow-down-s-line"></i>';
//                 footerContact.style.display = "none";
//                 footerContain.style.display = "none";
//                 nextElement.style.display = "none";
//             }
//         });
//     });

//     var footerContact = document.querySelector(".footer-list");
//     var footerContain = document.querySelector(".footer-list");
//     footerContact.style.display = "none";
//     footerContain.style.display = "none";
// } else {
//     var footerContact = document.querySelector(".footer-list");
//     var footerContain = document.querySelector(".footer-list");
//     footerContact.style.display = "block";
//     footerContain.style.display = "block";
// }

// var notifiWishlist = document.querySelector(".notifi-wishlist");
// notifiWishlist.addEventListener("click", function () {
//     var options = {
//         icon: "fa fa-check",
//         title: "Success!",
//         message: "Item Successfully added in wishlist",
//     };
//     var settings = {
//         element: "body",
//         position: null,
//         type: "info",
//         allow_dismiss: true,
//         newest_on_top: false,
//         showProgressbar: true,
//         placement: {
//             from: "top",
//             align: "right",
//         },
//         offset: 20,
//         spacing: 10,
//         z_index: 1031,
//         delay: 5000,
//         animate: {
//             enter: "animated fadeInDown",
//             exit: "animated fadeOutUp",
//         },
//         icon_type: "class",
//         template: '<div data-notify="container" class="col-xxl-3 col-lg-5 col-md-6 col-sm-7 col-12 alert alert-{0}" role="alert">' +
//             '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
//             '<span data-notify="icon"></span> ' +
//             '<span data-notify="title">{1}</span> ' +
//             '<span data-notify="message">{2}</span>' +
//             '<div class="progress" data-notify="progressbar">' +
//             '<div class="progress-bar progress-bar-info progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
//             "</div>" +
//             '<a href="{3}" target="{4}" data-notify="url"></a>' +
//             "</div>",
//     };

//     $.notify(options, settings);
// });

/*=====================
    header Dropdown Js
==========================*/
// document.querySelectorAll(".dropdown-menu li a").forEach(function (link) {
//     link.addEventListener("click", function () {
//         var a = this.closest("a");
//         var getSampling = a.textContent.trim();
//         // var getImage = a.querySelector('img').getAttribute('src');

//         var dropdownToggle = this.closest(".dropdown-menu").previousElementSibling;
//         dropdownToggle.querySelector('span').textContent = getSampling;
//         // dropdownToggle.querySelector('img').setAttribute("src", getImage);
//     });
// });

/*=====================
    Switch Authentication Js
==========================*/
let myPopup = document.querySelector(".login-box");
let btnClose = document.querySelector(".next-button");
let myPopup2 = document.querySelector(".signup-box");
let btnClose2 = document.querySelector(".next-button2");

setTimeout(poPup, 2000);
setTimeout(poPup2, 2000);

function poPup() {
    myPopup.style.display = "block";
    myPopup2.style.display = "none";
}

btnClose.onclick = function () {
    myPopup.style.display = "none";
    myPopup2.style.display = "block";
};

function poPup2() {
    myPopup.style.display = "block";
    myPopup2.style.display = "none";
}

btnClose2.onclick = function () {
    myPopup.style.display = "block";
    myPopup2.style.display = "none";
};