$('#date').one('focus', function () {
    $(this).
    datepicker({
        minDate: 0,
        showButtonPanel: true
    }).

    datepicker('show');
    $('#ui-datepicker-div').draggable();
});