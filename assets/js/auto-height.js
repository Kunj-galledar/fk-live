$(window).on('load resize', function () {
    checkPosition();

    function checkPosition() {
        function fixButtonHeights() {
            if (window.matchMedia('(min-width: 320px)').matches) {
                var heights = new Array();
                $('.category-section .category-slider .category-box .category-name h6').each(
                    function () {
                        $(this).css('min-height', '0');
                        $(this).css('max-height', 'none');
                        $(this).css('height', 'auto');
                        heights.push($(this).height());
                    });
                var max = Math.max.apply(Math, heights);
                $('.category-section .category-slider .category-box .category-name h6').each(
                    function () {
                        $(this).css('height', max + 'px');
                    });
            }
        }

        $(document).ready(function () {
            fixButtonHeights();
            $(window).resize(function () {
                setTimeout(function () {
                    fixButtonHeights();
                }, 120);
            });
        });
    }
});