// const rangeInput = document.querySelectorAll(".range-input input"),
//     priceInput = document.querySelectorAll(".price-input input"),
//     range = document.querySelector(".slider .progress");
// let priceGap = 1000;

// priceInput.forEach((input) => {
//     input.addEventListener("input", (e) => {
//         let minPrice = parseInt(priceInput[0].value),
//             maxPrice = parseInt(priceInput[1].value);

//         if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
//             if (e.target.className === "input-min") {
//                 rangeInput[0].value = minPrice;
//                 range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
//             } else {
//                 rangeInput[1].value = maxPrice;
//                 range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
//             }
//         }
//     });
// });

// rangeInput.forEach((input) => {
//     input.addEventListener("input", (e) => {
//         let minVal = parseInt(rangeInput[0].value),
//             maxVal = parseInt(rangeInput[1].value);

//         if (maxVal - minVal < priceGap) {
//             if (e.target.className === "range-min") {
//                 rangeInput[0].value = maxVal - priceGap;
//             } else {
//                 rangeInput[1].value = minVal + priceGap;
//             }
//         } else {
//             priceInput[0].value = minVal;
//             priceInput[1].value = maxVal;
//             range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
//             range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//         }
//     });
// });


const range = document.querySelectorAll(".range-slider span input");
progress = document.querySelector(".range-slider .progress");
let gap = 0.1;
const inputValue = document.querySelectorAll(".numberVal input");

range.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minRange = parseInt(range[0].value);
        let maxRange = parseInt(range[1].value);

        if (maxRange - minRange < gap) {
            if (e.target.className === "range-min") {
                range[0].value = maxRange - gap;
            } else {
                range[1].value = minRange + gap;
            }
        } else {
            progress.style.left = (minRange / range[0].max) * 100 + "%";
            progress.style.right = 100 - (maxRange / range[1].max) * 100 + "%";
            inputValue[0].value = minRange;
            inputValue[1].value = maxRange;
        }
    });
});