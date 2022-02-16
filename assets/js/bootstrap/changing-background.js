var $target = $('body');
inView('section').on('enter', function (el) {
    var color = $(el).attr('data-background-color');
    console.log(color);
    $target.css('background-color', color);
});