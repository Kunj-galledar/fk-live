// var selector = '.filter-box-list .filter-list li';

// $(selector).on('click', function () {
//     $(selector).removeClass('active');
//     $(this).addClass('active');
// });


// function showhide() {
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("toggle");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }


var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};