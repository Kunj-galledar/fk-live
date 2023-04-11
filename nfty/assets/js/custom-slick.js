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

$(".explore-slider").slick({
  infinite: false,
  slidesToScroll: 2,
  slidesToShow: 5,
  arrows: true,
  dots: true,
  nextArrow: '<div class="explore-slider next"><svg><use xlink:href="../assets/images/icons/right-arrow.svg#rightArrow"></use></svg></div>',
  prevArrow: '<div class="explore-slider prev"><svg><use xlink:href="../assets/images/icons/left-arrow.svg#leftArrow"></use></svg></div>',
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
  asNavFor: '.left-thumbnail-2',
  vertical: true,
});
$('.left-thumbnail-2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.right-thumbnail',
  focusOnSelect: true,
  vertical: true,
  responsive: [{
    breakpoint: 576,
    settings: {
      vertical: false,
    }
  }, ]
});


$(".top-seller-slider").slick({
  infinite: false,
  slidesToShow: 6,
  dots: true,
  nextArrow: '<div class="explore-slider next"><svg><use xlink:href="../assets/images/icons/right-arrow.svg#rightArrow"></use></svg></div>',
  prevArrow: '<div class="explore-slider prev"><svg><use xlink:href="../assets/images/icons/left-arrow.svg#leftArrow"></use></svg></div>',
  arrows: true,
  responsive: [{
      breakpoint: 156,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 1336,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 856,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 531,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});