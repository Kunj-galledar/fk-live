$(function () {
    $(".product-load-more .col-grid-box").slice(0, 4).show();
    $(".loadMore").on("click", function (e) {
        e.preventDefault();
        $(".product-load-more .col-grid-box:hidden").slice(0, 4).slideDown();
        if ($(".product-load-more .col-grid-box:hidden").length === 0) {
            $(".loadMore").text("No More Products");
        }
    });
});