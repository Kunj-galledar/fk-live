// $(".slider").each(function (e) {
//     var slider = $(this),
//         width = slider.width(),
//         handle,
//         handleObj;

//     let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     svg.setAttribute("viewBox", "0 0 " + width + " 83");

//     slider.html(svg);
//     slider.append($("<div>").addClass("active").html(svg.cloneNode(true)));

//     slider.slider({
//         range: true,
//         values: [1800, 7800],
//         min: 500,
//         step: 5,
//         minRange: 1000,
//         max: 12000,
//         create(event, ui) {
//             slider.find(".ui-slider-handle").append($("<div />"));

//             $(slider.data("value-0")).html(
//                 slider
//                 .slider("values", 0)
//                 .toString()
//                 .replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;")
//             );
//             $(slider.data("value-1")).html(
//                 slider
//                 .slider("values", 1)
//                 .toString()
//                 .replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;")
//             );
//             $(slider.data("range")).html(
//                 (slider.slider("values", 1) - slider.slider("values", 0))
//                 .toString()
//                 .replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;")
//             );

//             setCSSVars(slider);
//         },
//         start(event, ui) {
//             $("body").addClass("ui-slider-active");

//             handle = $(ui.handle).data("index", ui.handleIndex);
//             handleObj = slider.find(".ui-slider-handle");
//         },
//         change(event, ui) {
//             setCSSVars(slider);
//         },
//         slide(event, ui) {
//             let min = slider.slider("option", "min"),
//                 minRange = slider.slider("option", "minRange"),
//                 max = slider.slider("option", "max");

//             if (ui.handleIndex == 0) {
//                 if (ui.values[0] + minRange >= ui.values[1]) {
//                     slider.slider("values", 1, ui.values[0] + minRange);
//                 }
//                 if (ui.values[0] > max - minRange) {
//                     return false;
//                 }
//             } else if (ui.handleIndex == 1) {
//                 if (ui.values[1] - minRange <= ui.values[0]) {
//                     slider.slider("values", 0, ui.values[1] - minRange);
//                 }
//                 if (ui.values[1] < min + minRange) {
//                     return false;
//                 }
//             }

//             $(slider.data("value-0")).html(
//                 ui.values[0]
//                 .toString()
//                 .replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;")
//             );
//             $(slider.data("value-1")).html(
//                 ui.values[1]
//                 .toString()
//                 .replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;")
//             );
//             $(slider.data("range")).html(
//                 (slider.slider("values", 1) - slider.slider("values", 0))
//                 .toString()
//                 .replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;")
//             );

//             setCSSVars(slider);
//         },
//         stop(event, ui) {
//             $("body").removeClass("ui-slider-active");

//             let duration = 0.6,
//                 ease = Elastic.easeOut.config(1.08, 0.44);

//             TweenMax.to(handle, duration, {
//                 "--y": 0,
//                 ease: ease
//             });

//             TweenMax.to(svgPath, duration, {
//                 y: 42,
//                 ease: ease
//             });

//             handle = null;
//         }
//     });

//     var svgPath = new Proxy({
//         x: null,
//         y: null,
//         b: null,
//         a: null
//     }, {
//         set(target, key, value) {
//             target[key] = value;
//             if (
//                 target.x !== null &&
//                 target.y !== null &&
//                 target.b !== null &&
//                 target.a !== null
//             ) {
//                 slider
//                     .find("svg")
//                     .html(
//                         getPath(
//                             [target.x, target.y],
//                             target.b,
//                             target.a,
//                             width
//                         )
//                     );
//             }
//             return true;
//         },
//         get(target, key) {
//             return target[key];
//         }
//     });

//     svgPath.x = width / 2;
//     svgPath.y = 42;
//     svgPath.b = 0;
//     svgPath.a = width;

//     $(document).on("mousemove touchmove", (e) => {
//         if (handle) {
//             let laziness = 4,
//                 max = 24,
//                 edge = 52,
//                 other = handleObj.eq(handle.data("index") == 0 ? 1 : 0),
//                 currentLeft = handle.position().left,
//                 otherLeft = other.position().left,
//                 handleWidth = handle.outerWidth(),
//                 handleHalf = handleWidth / 2,
//                 y = e.pageY - handle.offset().top - handle.outerHeight() / 2,
//                 moveY =
//                 y - laziness >= 0 ?
//                 y - laziness :
//                 y + laziness <= 0 ?
//                 y + laziness :
//                 0,
//                 modify = 1;

//             moveY = moveY > max ? max : moveY < -max ? -max : moveY;
//             modify =
//                 handle.data("index") == 0 ?
//                 (currentLeft + handleHalf <= edge ?
//                     (currentLeft + handleHalf) / edge :
//                     1) *
//                 (otherLeft - currentLeft - handleWidth <= edge ?
//                     (otherLeft - currentLeft - handleWidth) / edge :
//                     1) :
//                 (currentLeft - (otherLeft + handleHalf * 2) <= edge ?
//                     (currentLeft - (otherLeft + handleWidth)) / edge :
//                     1) *
//                 (slider.outerWidth() - (currentLeft + handleHalf) <= edge ?
//                     (slider.outerWidth() - (currentLeft + handleHalf)) /
//                     edge :
//                     1);
//             modify = modify > 1 ? 1 : modify < 0 ? 0 : modify;

//             if (handle.data("index") == 0) {
//                 svgPath.b = (currentLeft / 2) * modify;
//                 svgPath.a = otherLeft;
//             } else {
//                 svgPath.b = otherLeft + handleHalf;
//                 svgPath.a =
//                     (slider.outerWidth() - currentLeft) / 2 +
//                     currentLeft +
//                     handleHalf +
//                     ((slider.outerWidth() - currentLeft) / 2) * (1 - modify);
//             }

//             svgPath.x = currentLeft + handleHalf;
//             svgPath.y = moveY * modify + 42;

//             handle.css("--y", moveY * modify);
//         }
//     });
// });

// function getPoint(point, i, a, smoothing) {
//     let cp = (current, previous, next, reverse) => {
//             let p = previous || current,
//                 n = next || current,
//                 o = {
//                     length: Math.sqrt(
//                         Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)
//                     ),
//                     angle: Math.atan2(n[1] - p[1], n[0] - p[0])
//                 },
//                 angle = o.angle + (reverse ? Math.PI : 0),
//                 length = o.length * smoothing;
//             return [
//                 current[0] + Math.cos(angle) * length,
//                 current[1] + Math.sin(angle) * length
//             ];
//         },
//         cps = cp(a[i - 1], a[i - 2], point, false),
//         cpe = cp(point, a[i - 1], a[i + 1], true);
//     return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
// }

// function getPath(update, before, after, width) {
//     let smoothing = 0.16,
//         points = [
//             [0, 42],
//             [before <= 0 ? 0 : before, 42],
//             update,
//             [after >= width ? width : after, 42],
//             [width, 42]
//         ],
//         d = points.reduce(
//             (acc, point, i, a) =>
//             i === 0 ?
//             `M ${point[0]},${point[1]}` :
//             `${acc} ${getPoint(point, i, a, smoothing)}`,
//             ""
//         );
//     return `<path d="${d}" />`;
// }

// function setCSSVars(slider) {
//     let handle = slider.find(".ui-slider-handle");
//     slider.css({
//         "--l": handle.eq(0).position().left + handle.eq(0).outerWidth() / 2,
//         "--r": slider.outerWidth() -
//             (handle.eq(1).position().left + handle.eq(1).outerWidth() / 2)
//     });
// }









/*
  Inspired by: "Price Range Control"
  By: cubertodesign
  Link: https://www.instagram.com/p/Bs-0fByhwy8/
*/

// let minDollars = 150;
// let maxDollars = 12500;

// let minSlider = document.querySelector('#min');
// let maxSlider = document.querySelector('#max');

// function numberWithSpaces(number) {
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
// }

// function updateDollars() {
//     let fromValue = (maxDollars - minDollars) * minSlider.value / 100 + minDollars;
//     let toValue = (maxDollars - minDollars) * maxSlider.value / 100 + minDollars;

//     document.querySelector('#from').textContent = `$${numberWithSpaces(Math.floor(fromValue))}`;
//     document.querySelector('#to').textContent = `$${numberWithSpaces(Math.floor(toValue))}`;
// }

// maxSlider.addEventListener('input', () => {
//     let minValue = parseInt(minSlider.value);
//     let maxValue = parseInt(maxSlider.value);

//     if (maxValue < minValue + 10) {
//         minSlider.value = maxValue - 10;

//         if (minValue === parseInt(minSlider.min)) {
//             maxSlider.value = 10;
//         }
//     }

//     updateDollars();
// });

// minSlider.addEventListener('input', () => {
//     let minValue = parseInt(minSlider.value);
//     let maxValue = parseInt(maxSlider.value);

//     if (minValue > maxValue - 10) {
//         maxSlider.value = minValue + 10;

//         if (maxValue === parseInt(maxSlider.max)) {
//             minSlider.value = parseInt(maxSlider.max) - 10;
//         }
//     }

//     updateDollars();
// });



const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});