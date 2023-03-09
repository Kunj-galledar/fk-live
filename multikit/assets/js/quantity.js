// $('.add-to-cart-box').on('click', function () {
//     var $qty = $(this).siblings(".qty-input");
//     var currentVal = parseInt($qty.val());
//     if (!isNaN(currentVal)) {
//         $qty.val(currentVal + 1);
//     }
// });

// $('.mins-button').on('click', function () {
//     var $qty = $(this).siblings(".qty-input");
//     var _val = $($qty).val();
//     if (_val == '1') {
//         var _removeCls = $(this).parents('.cart_qty');
//         $(_removeCls).removeClass("open");
//     }
//     var currentVal = parseInt($qty.val());
//     if (!isNaN(currentVal) && currentVal > 0) {
//         $qty.val(currentVal - 1);
//     }
// });

// $('.plus-button').click(function () {
//     if ($(this).prev().val() < 9) {
//         $(this).prev().val(+$(this).prev().val() + 1);
//     }
// });










var resultEl = document.querySelector(".resultSet"),
    plusMinusWidgets = document.querySelectorAll(".qty-box");

for (var i = 0; i < plusMinusWidgets.length; i++) {
    plusMinusWidgets[i].querySelector(".minusBtn").addEventListener("click", clickHandler);
    plusMinusWidgets[i].querySelector(".plusBtn").addEventListener("click", clickHandler);
    plusMinusWidgets[i].querySelector(".count").addEventListener("change", changeHandler);
}

function clickHandler(event) {
    var countEl = event.target.parentNode.querySelector(".count");
    if (event.target.className.match(/\bminusBtn\b/)) {
        countEl.value = Number(countEl.value) - 1;
    } else if (event.target.className.match(/\bplusBtn\b/)) {
        countEl.value = Number(countEl.value) + 1;

    }
};

function changeHandler(event) {
    resultEl.value = 0;
    for (var i = 0; i < plusMinusWidgets.length; i++) {
        resultEl.value = Number(resultEl.value) + Number(plusMinusWidgets[i].querySelector('.count').value);
    }
};

// function triggerEvent(el, type) {
//     if ('createEvent' in document) {
//         var e = document.createEvent('HTMLEvents');
//         e.initEvent(type, false, true);
//         el.dispatchEvent(e);
//     } else {
//         var e = document.createEventObject();
//         e.eventType = type;
//         el.fireEvent('on' + e.eventType, e);
//     }
// }