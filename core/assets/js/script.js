// Top Button Start
var mybutton = document.getElementById("topButton");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Top Button End

// Brand slick slider start
$(document).ready(function () {
  $(".brand-img").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
  });
});
// Brand slick slider End

$(function () {
  $(".testimonial-content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    loop: false,
    asNavFor: ".testimonial-img",
  });
  $(".testimonial-img").slick({
    slidesToShow: 1,
    loop: false,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="lni-arrow-right"></i></span>',
    asNavFor: ".testimonial-content",
    dots: false,
    focusOnSelect: true,
    fade: true,
    cssEase: "linear",
  });
});

var form = document.querySelector("form");
var aramaAlani = document.getElementById("short-cut");

$(document).on("keydown", function (e) {
  if (e.keyCode === 27) {
    //ESC key code
    aramaAlani.value = "";
    aramaAlani.focus();
  }
});
