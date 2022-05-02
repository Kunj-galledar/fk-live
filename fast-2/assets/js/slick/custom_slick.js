$('.category-slider').slick({
  arrows: false,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1745,
    settings: {
      slidesToShow: 6,
    }
  },
  {
    breakpoint: 1540,
    settings: {
      slidesToShow: 5,
    }
  },
  {
    breakpoint: 910,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 730,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 410,
    settings: {
      slidesToShow: 2,
    }
  },
  ]
});

$('.slider-1').slick({
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});

$('.slider-3').slick({
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  arrows: false,
  responsive: [{
    breakpoint: 1400,
    settings: {
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 3500,
    }
  },
  {
    breakpoint: 1200,
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
    }
  },
  ]
});

$('.slider-4').slick({
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,

  responsive: [{
    breakpoint: 1690,
    settings: {
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
    }
  },
  {
    breakpoint: 1190,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      fade: true,
    }
  },
  ]
});

$('.slider-4-1').slick({
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1510,
    settings: {
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 3500,
    }
  },
  {
    breakpoint: 1092,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 665,
    settings: {
      slidesToShow: 1,
      fade: true,
    }
  },
  ]
});

$('.slider-5').slick({
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 5,
  arrows: false,
  responsive: [{
    breakpoint: 1500,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 1215,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 876,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
    }
  },
  ]
});

$('.slider-5-1').slick({
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 5,
  arrows: false,
  responsive: [{
    breakpoint: 1400,
    settings: {
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 3500,
    }
  },
  {
    breakpoint: 1200,
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
    // {
    //   breakpoint: 576,
    //   settings: {
    //     slidesToShow: 2,
    //   }
    // },
  ]
});

$('.slider-6').slick({
  arrows: false,
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1630,
    settings: {
      slidesToShow: 8,
      autoplay: true,
      autoplaySpeed: 3500,
    }
  },
  {
    breakpoint: 1470,
    settings: {
      slidesToShow: 7,
    }
  },
  {
    breakpoint: 1384,
    settings: {
      slidesToShow: 6,
    }
  },
  {
    breakpoint: 1162,
    settings: {
      slidesToShow: 5,
    }
  },
  {
    breakpoint: 951,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 743,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 546,
    settings: {
      slidesToShow: 2,
    }
  },
  ]
});

$('.slider-9').slick({
  arrows: false,
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1630,
    settings: {
      slidesToShow: 8,
      autoplay: true,
      autoplaySpeed: 3500,
    }
  },
  {
    breakpoint: 1470,
    settings: {
      slidesToShow: 7,
    }
  },
  {
    breakpoint: 1384,
    settings: {
      slidesToShow: 6,
    }
  },
  {
    breakpoint: 1162,
    settings: {
      slidesToShow: 5,
    }
  },
  {
    breakpoint: 951,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 743,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 546,
    settings: {
      slidesToShow: 2,
    }
  },
  ]
});

$('.product-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.left-slider-image'
});
$('.left-slider-image').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product-main',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  vertical: true,
});