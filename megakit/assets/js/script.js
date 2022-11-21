var selector = '.filter-box-list .filter-list li';

$(selector).on('click', function () {
    $(selector).removeClass('active');
    $(this).addClass('active');
});