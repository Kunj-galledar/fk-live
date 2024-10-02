/*=====================
    Quantity Js
  ==========================*/
// const plus = document.querySelector(".incrementButton"),
//     minus = document.querySelector(".decrementButton"),
//     num = document.querySelector(".quantity");

// window.addEventListener("load", () => {
//     if (localStorage["num"]) {
//         num.innerText = localStorage.getItem("num");
//     } else {
//         let a = "01";
//         num.innerText = a;
//     }
// });

// plus.addEventListener("click", () => {
//     a = num.innerText;
//     a++;
//     a = (a < 10) ? "0" + a : a;
//     localStorage.setItem("num", a);
//     num.innerText = localStorage.getItem("num");
// });

// minus.addEventListener("click", () => {
//     a = num.innerText;
//     if (a > 1) {
//         a--;
//         a = (a < 10) ? "0" + a : a;
//         localStorage.setItem("num", a);
//         num.innerText = localStorage.getItem("num");
//     }
// });


document.querySelectorAll(".qty-btn-plus").forEach(function (buttonPlus) {
    buttonPlus.addEventListener("click", function () {
        var inputQty = this.closest(".qty-container").querySelector(".input-qty");
        inputQty.value = Number(inputQty.value) + 1;
    });
});

document.querySelectorAll(".qty-btn-minus").forEach(function (buttonMinus) {
    buttonMinus.addEventListener("click", function () {
        var inputQty = this.closest(".qty-container").querySelector(".input-qty");
        var amount = Number(inputQty.value);
        if (amount > 1) {
            inputQty.value = amount - 1;
        }
    });
});