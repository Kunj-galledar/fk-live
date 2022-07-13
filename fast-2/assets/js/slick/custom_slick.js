 /**=====================
     Custom Slick js
==========================**/
 $('.category-slider').slick({
     arrows: true,
     infinite: true,
     slidesToShow: 8,
     slidesToScroll: 1,
     responsive: [{
             breakpoint: 1745,
             settings: {
                 slidesToShow: 7,
             }
         },
         {
             breakpoint: 1399,
             settings: {
                 slidesToShow: 6,
             }
         },
         {
             breakpoint: 1124,
             settings: {
                 slidesToShow: 5,
             }
         },
         {
             breakpoint: 900,
             settings: {
                 slidesToShow: 4,
             }
         },
         {
             breakpoint: 692,
             settings: {
                 slidesToShow: 3,
             }
         }, {
             breakpoint: 482,
             settings: {
                 slidesToShow: 2,
             }
         },
     ]
 });

 $('.category-slider-2').slick({
     arrows: true,
     infinite: true,
     slidesToShow: 7,
     slidesToScroll: 1,
     responsive: [{
             breakpoint: 1745,
             settings: {
                 slidesToShow: 6,
                 dots: true,
                 autoplay: true,
                 autoplaySpeed: 2500,
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

 $('.product-category-1').slick({
     arrows: true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
 });

 $('.menu-slider').slick({
     arrows: false,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
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
                 slidesToShow: 3,
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

 $('.slider-3-product').slick({
     infinite: true,
     slidesToScroll: 1,
     slidesToShow: 3,
     arrows: false,
     centerMode: true,
     centerPadding: '160px',
     dots: true,
     arrows: false,
     autoplay: true,
     autoplaySpeed: 2500,
     responsive: [{
             breakpoint: 1560,
             settings: {
                 slidesToShow: 2,
                 autoplay: true,
                 autoplaySpeed: 3500,
             }
         },
         {
             breakpoint: 992,
             settings: {
                 slidesToShow: 1,
             }
         },
         {
             breakpoint: 775,
             settings: {
                 slidesToShow: 1,
                 centerPadding: '100px',
             }
         },
         {
             breakpoint: 550,
             settings: {
                 slidesToShow: 1,
                 centerPadding: '70px',
             }
         }, {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 centerPadding: '30px',
             }
         },
     ]
 });

 $('.slider-3_1').slick({
     infinite: true,
     slidesToScroll: 1,
     slidesToShow: 3,
     arrows: false,
     responsive: [{
             breakpoint: 1262,
             settings: {
                 slidesToShow: 2,
                 autoplay: true,
                 autoplaySpeed: 3500,
                 dots: true,
                 autoplay: true,
                 autoplaySpeed: 2800,
             }
         },
         {
             breakpoint: 650,
             settings: {
                 slidesToShow: 1,
                 dots: true,
                 autoplay: true,
                 autoplaySpeed: 2800,
             }
         },
     ]
 });

 $('.slider-3_2').slick({
     infinite: true,
     slidesToScroll: 1,
     slidesToShow: 3,
     arrows: false,
     responsive: [{
             breakpoint: 1535,
             settings: {
                 slidesToShow: 2,
                 autoplay: true,
                 autoplaySpeed: 3500,
                 dots: true,
                 autoplay: true,
                 autoplaySpeed: 2800,
             }
         },
         {
             breakpoint: 1200,
             settings: {
                 slidesToShow: 3,
                 dots: false,
             }
         },
         {
             breakpoint: 992,
             settings: {
                 slidesToShow: 2,
                 dots: true,
                 autoplay: true,
                 autoplaySpeed: 2800,
             }
         },
         {
             breakpoint: 690,
             settings: {
                 slidesToShow: 1,
                 dots: true,
                 autoplay: true,
                 autoplaySpeed: 2800,
             }
         },
     ]
 });

 $('.slider-4-blog').slick({
     arrows: true,
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     responsive: [{
             breakpoint: 1690,
             settings: {
                 slidesToShow: 3,
                 dots: true,
             }
         },
         {
             breakpoint: 1092,
             settings: {
                 dots: true,
                 slidesToShow: 2,
             }
         },
         {
             breakpoint: 685,
             settings: {
                 dots: true,
                 slidesToShow: 1,
                 fade: true,
             }
         },
     ]
 });

 $('.slider-4').slick({
     arrows: true,
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     responsive: [{
             breakpoint: 1690,
             settings: {
                 slidesToShow: 3,
                 dots: true,
             }
         },
         {
             breakpoint: 960,
             settings: {
                 slidesToShow: 2,
             }
         },
         {
             breakpoint: 555,
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

 $('.slider-4-2').slick({
     arrows: false,
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 1,
     responsive: [{
             breakpoint: 992,
             settings: {
                 slidesToShow: 3,
                 autoplay: true,
                 autoplaySpeed: 2000,
                 dots: true,
             }
         },
         {
             breakpoint: 768,
             settings: {
                 slidesToShow: 2,
                 autoplay: true,
                 autoplaySpeed: 2000,
                 dots: true,
             }
         },
         {
             breakpoint: 474,
             settings: {
                 slidesToShow: 1,
                 autoplay: true,
                 autoplaySpeed: 2000,
                 dots: true,
             }
         },
     ]
 });

 $('.slider-4-half').slick({
     arrows: false,
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     centerMode: true,
     centerPadding: '200px',
     dots: true,
     responsive: [{
             breakpoint: 1524,
             settings: {
                 centerPadding: '150px',
             }
         },
         {
             breakpoint: 1291,
             settings: {
                 slidesToShow: 2,
                 centerPadding: '100px',
             }
         },
         {
             breakpoint: 921,
             settings: {
                 slidesToShow: 2,
                 centerPadding: '20px',
             }
         },
         {
             breakpoint: 798,
             settings: {
                 slidesToShow: 1,
                 centerPadding: '50px',
             }
         },
         {
             breakpoint: 798,
             settings: {
                 slidesToShow: 1,
                 centerPadding: '20px',
             }
         },
         {
             breakpoint: 434,
             settings: {
                 slidesToShow: 1,
                 centerPadding: '0',
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

 $('.slider-5_1').slick({
     infinite: true,
     slidesToScroll: 1,
     slidesToShow: 5,
     centerMode: true,
     dots: true,
     arrows: false,
     autoplay: true,
     autoplaySpeed: 2500,
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
                 centerMode: false,
             }
         },
         {
             breakpoint: 575,
             settings: {
                 slidesToShow: 2,
                 centerMode: false,
             }
         },
     ]
 });

 $('.slider-5_2').slick({
     infinite: true,
     slidesToScroll: 1,
     slidesToShow: 5,
     arrows: false,
     responsive: [{
             breakpoint: 1700,
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
             breakpoint: 600,
             settings: {
                 slidesToShow: 2,
             }
         },
     ]
 });

 $('.slider-6').slick({
     arrows: false,
     infinite: true,
     slidesToShow: 6,
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

 $('.slider-6_1').slick({
     arrows: false,
     infinite: true,
     slidesToShow: 6,
     slidesToScroll: 1,
     dots: true,
     responsive: [{
             breakpoint: 1430,
             settings: {
                 slidesToShow: 5,
                 autoplay: true,
                 autoplaySpeed: 3500,
             }
         },
         {
             breakpoint: 1199,
             settings: {
                 slidesToShow: 4,
             }
         },
         {
             breakpoint: 768,
             settings: {
                 slidesToShow: 3,
             }
         },
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2,
             }
         },
     ]
 });

 $('.slider-6_2').slick({
     arrows: false,
     infinite: true,
     slidesToShow: 6,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 3500,
     responsive: [{
             breakpoint: 1648,
             settings: {
                 slidesToShow: 5,
             }
         },
         {
             breakpoint: 1300,
             settings: {
                 slidesToShow: 4,
             }
         },
         {
             breakpoint: 991,
             settings: {
                 slidesToShow: 3,
             }
         },
         {
             breakpoint: 770,
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
     slidesToShow: 4,
     slidesToScroll: 1,
     asNavFor: '.product-main',
     dots: false,
     focusOnSelect: true,
     vertical: true,
     responsive: [{
             breakpoint: 1400,
             settings: {
                 vertical: false,
             }
         },
         {
             breakpoint: 992,
             settings: {
                 vertical: true,
             }
         },
         {
             breakpoint: 768,
             settings: {
                 vertical: false,
             }
         }, {
             breakpoint: 430,
             settings: {
                 slidesToShow: 3,
                 vertical: false,
             }
         },
     ]
 });

 $('.slider-user').slick({
     arrows: false,
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 1,
     dots: true,
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

 $('.search-product').slick({
     arrows: false,
     infinite: false,
     slidesToShow: 6,
     slidesToScroll: 1,
     dots: true,
     responsive: [{
             breakpoint: 1408,
             settings: {
                 slidesToShow: 5,
                 autoplay: true,
                 autoplaySpeed: 3500,
             }
         },
         {
             breakpoint: 1080,
             settings: {
                 slidesToShow: 4,
             }
         },
         {
             breakpoint: 875,
             settings: {
                 slidesToShow: 3,
             }
         },
         {
             breakpoint: 634,
             settings: {
                 slidesToShow: 2,
             }
         },
         {
             breakpoint: 54,
             settings: {
                 slidesToShow: 4,
             }
         },
         {
             breakpoint: 12,
             settings: {
                 slidesToShow: 3,
             }
         },
         {
             breakpoint: 56,
             settings: {
                 slidesToShow: 2,
             }
         },
     ]
 });

 $('.three-slider-1').slick({
     arrows: true,
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     responsive: [{
             breakpoint: 1450,
             settings: {
                 slidesToShow: 2,
             }
         },
         {
             breakpoint: 992,
             settings: {
                 slidesToShow: 1,
                 fade: true,
             }
         },
     ]
 })

 $('.three-slider').slick({
     arrows: true,
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     responsive: [{
             breakpoint: 1300,
             settings: {
                 slidesToShow: 2,
             }
         },
         {
             breakpoint: 757,
             settings: {
                 slidesToShow: 1,
                 fade: true,
             }
         },
     ]
 })

 $('.category-slider-1').slick({
     arrows: true,
     infinite: true,
     slidesToShow: 8,
     slidesToScroll: 1,
     responsive: [{
             breakpoint: 1661,
             settings: {
                 slidesToShow: 7,
             }
         },
         {
             breakpoint: 1461,
             settings: {
                 slidesToShow: 6,
             }
         },
         {
             breakpoint: 1200,
             settings: {
                 slidesToShow: 5,
             }
         },
         {
             breakpoint: 992,
             settings: {
                 slidesToShow: 4,
             }
         },
         {
             breakpoint: 768,
             settings: {
                 slidesToShow: 3,
             }
         },
         {
             breakpoint: 576,
             settings: {
                 slidesToShow: 2,
             }
         },
     ]
 });

 $('.slider-7_1').slick({
     arrows: true,
     infinite: true,
     slidesToShow: 7,
     slidesToScroll: 1,
     responsive: [{
             breakpoint: 1660,
             settings: {
                 slidesToShow: 6,
             }
         },
         {
             breakpoint: 1501,
             settings: {
                 slidesToShow: 5,
             }
         },
         {
             breakpoint: 1251,
             settings: {
                 slidesToShow: 4,
             }
         },
         {
             breakpoint: 992,
             settings: {
                 slidesToShow: 3,
             }
         },
         {
             breakpoint: 575,
             settings: {
                 slidesToShow: 2,
                 autoplay: true,
                 autoplaySpeed: 2000,
             }
         },
     ]
 });

 $('.top-selling-slider').slick({
     arrows: true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
 });

 $('.product-box-slider').slick({
     infinite: true,
     arrows: true,
     slidesToShow: 5,
     slidesToScroll: 1,
     pauseOnHover: true,
     responsive: [{
             breakpoint: 1630,
             settings: {
                 slidesToShow: 4,
             }
         },
         {
             breakpoint: 1300,
             settings: {
                 slidesToShow: 3,
             }
         },
         {
             breakpoint: 617,
             settings: {
                 slidesToShow: 2,
             }
         },
     ]
 });

 $('.best-selling-slider').slick({
     arrows: false,
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     responsive: [{
             breakpoint: 1495,
             settings: {
                 slidesToShow: 2,
                 dots: true,
                 autoplay: true,
                 autoplaySpeed: 2500,
             }
         },
         {
             breakpoint: 1200,
             settings: {
                 slidesToShow: 3,
             }
         },
         {
             breakpoint: 991,
             settings: {
                 slidesToShow: 2,
             }
         },
         {
             breakpoint: 666,
             settings: {
                 slidesToShow: 1,
                 dots: true,
                 autoplay: true,
                 autoplaySpeed: 2500,
             }
         },
     ]
 });