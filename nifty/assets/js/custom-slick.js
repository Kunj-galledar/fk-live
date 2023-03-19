$(".collection-slider").slick({
  infinite: true,
  slidesToShow: 5,
  arrows: false,
  responsive: [{
      breakpoint: 1701,
      settings: {
        slidesToShow: 4,
        infinite: true
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '100px',
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '60px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '0px',
      }
    }
  ]
});

$(".collection-slider-2").slick({
  infinite: false,
  slidesToShow: 5,
  arrows: false,
  responsive: [{
      breakpoint: 1701,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

$(document).ready(function () {
  $('.right-thumbnail').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.left-thumbnail'
  });
  $('.left-thumbnail').slick({
    slidesToShow: 3,
    vertical: true,
    slidesToScroll: 1,
    asNavFor: '.right-thumbnail',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
});

$(".categorySlider").slick({
  infinite: true,
  slidesToScroll: 2,
  slidesToShow: 6,
  arrows: true,
  dots: true,
  responsive: [{
      breakpoint: 1701,
      settings: {
        slidesToShow: 4,
        infinite: true
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

$('.right-thumbnail').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.left-thumbnail',
  vertical: true,
});
$('.left-thumbnail').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.right-thumbnail',
  focusOnSelect: true,
  vertical: true,
});