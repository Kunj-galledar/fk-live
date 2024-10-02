/**=====================
  Range-slider js Start
==========================**/
(function ($) {
  "use strict";

  var range_slider_custom = {
    init: function () {
        $("#price-range").ionRangeSlider({
          type: "double",
          skin: "round",
          min: 1,
          max: 200,
          from: 30,
          to: 150,
          hide_min_max: true, // show/hide MIN and MAX labels
          postfix: "$",
          decorate_both: true,
        });
    },
  };

  $("#distance-slider").ionRangeSlider({
    grid: true,
    skin: "modern",
    from: 3,
    hide_min_max: true, // show/hide MIN and MAX labels
    values: [
      "10 km",
      "20 km",
      "30 km",
      "40 km",
      "50 km",
      "60 km",
    ],
  });

  range_slider_custom.init();
})(jQuery);

/**=====================
  Range-slider Ends
==========================**/
