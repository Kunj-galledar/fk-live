// $('.qty-box .quantity-right-plus').on('click', function () {
//     var $qty = $(this).parents(".qty-box").find(".input-number");
//     var currentVal = parseInt($qty.val(), 10);
//     if (!isNaN(currentVal)) {
//         $qty.val(currentVal + 1);
//     }
// });
// $('.qty-box .quantity-left-minus').on('click', function () {
//     var $qty = $(this).parents(".qty-box").find(".input-number");
//     var currentVal = parseInt($qty.val(), 10);
//     if (!isNaN(currentVal) && currentVal > 1) {
//         $qty.val(currentVal - 1);
//     }
// });


$("button.add__button").click(function () {
    $(".qty__box").addClass("open");
});
$("button.add-button").click(function () {
    $(this).next().addClass("open");
    $(".order-menu-section .qty-input").val('1');
});
$('.qty-right-plus').on('click', function () {
    var $qty = $(this).siblings(".qty-input");
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal)) {
        $qty.val(currentVal + 1);
    }
});
$('.qty-left-minus').on('click', function () {
    var $qty = $(this).siblings(".qty-input");
    var _val = $($qty).val();
    if (_val == '1') {
        var _removeCls = $(this).parents('.cart_qty');
        $(_removeCls).removeClass("open");
    }
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal > 0) {
        $qty.val(currentVal - 1);
    }
});