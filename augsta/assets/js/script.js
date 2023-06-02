/*=====================
    Remove box Js
  ==========================*/
function hideProductBox(button) {
    var productBox = button.parentNode; // Get the parent element of the button (product box)
    productBox.style.display = "none";
}

/*=====================
   Image To Background Js
   ==========================*/
// document.querySelector('.bg-top').parentNode.classList.add('b-top');
// document.querySelector('.bg-bottom').parentNode.classList.add('b-bottom');
// document.querySelector('.bg-center').parentNode.classList.add('b-center');
// document.querySelector('.bg-left').parentNode.classList.add('b-left');
// document.querySelector('.bg-right').parentNode.classList.add('b-right');
// document.querySelector('.bg_size_content').parentNode.classList.add('b_size_content');
// document.querySelector('.bg-img').parentNode.classList.add('bg-size');
// document.querySelector('.bg-img.blur-up').parentNode.classList.add('blur-up lazyload');
// document.querySelector('.bg-img').forEach(function () {
//   var el = document.querySelector(this),
//     src = el.getAttribute('src'),
//     parent = el.parentNode;

//   parent.css({
//     'background-image': 'url(' + src + ')',
//     'background-size': 'cover',
//     'background-position': 'center',
//     'background-repeat': 'no-repeat',
//     display: 'block',
//   });

//   el.style.display = 'none';
// });


// class CountdownTimer {
//   constructor(duration, displayClassName) {
//     this.duration = duration;
//     this.displayElements = Array.from(document.getElementsByClassName(displayClassName));
//     this.intervalId = null;
//   }

//   start() {
//     this.updateDisplay();

//     this.intervalId = setInterval(() => {
//       this.duration -= 1;
//       this.updateDisplay();

//       if (this.duration <= 0) {
//         this.stop();
//       }
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//   }

//   updateDisplay() {
//     const days = Math.floor(this.duration / (60 * 60 * 24));
//     const hours = Math.floor((this.duration % (60 * 60 * 24)) / (60 * 60));
//     const minutes = Math.floor((this.duration % (60 * 60)) / 60);
//     const seconds = this.duration % 60;

//     const displayText = `${days} days : ${hours} hours : ${minutes.toString().padStart(2, '0')} minutes : ${seconds.toString().padStart(2, '0')} seconds`;

//     this.displayElements.forEach((element) => {
//       element.textContent = displayText;
//     });
//   }
// }

// // Usage example:
// const countdownClassName = 'countdown';
// const twoDaysInSeconds = 2 * 24 * 60 * 60;
// const countdown = new CountdownTimer(twoDaysInSeconds, countdownClassName);
// countdown.start();

// class CountdownTimer {
//   constructor(duration, displayClassName) {
//     this.duration = duration;
//     this.displayElements = Array.from(document.getElementsByClassName(displayClassName));
//     this.intervalId = null;
//   }

//   start() {
//     this.updateDisplay();

//     this.intervalId = setInterval(() => {
//       this.duration -= 1;
//       this.updateDisplay();

//       if (this.duration <= 0) {
//         this.stop();
//       }
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//   }

//   updateDisplay() {
//     const days = Math.floor(this.duration / (60 * 60 * 24));
//     const hours = Math.floor((this.duration % (60 * 60 * 24)) / (60 * 60));
//     const minutes = Math.floor((this.duration % (60 * 60)) / 60);
//     const seconds = this.duration % 60;

//     const displayText = `${days} days ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

//     this.displayElements.forEach((element) => {
//       element.textContent = displayText;
//     });
//   }
// }

// // Usage example:
// const countdownClassName = 'countdown';
// const twoDaysInSeconds = 2 * 24 * 60 * 60;
// const countdown = new CountdownTimer(twoDaysInSeconds, countdownClassName);
// countdown.start();

//Timer js
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        var clockdiv = document.getElementsByClassName("timer");
        var countDownDate = new Array();
        for (var i = 0; i < clockdiv.length; i++) {
            countDownDate[i] = new Array();
            countDownDate[i]["el"] = clockdiv[i];
            countDownDate[i]["time"] = new Date(
                clockdiv[i].getAttribute("data-date")
            ).getTime();
            countDownDate[i]["days"] = 0;
            countDownDate[i]["hours"] = 0;
            countDownDate[i]["seconds"] = 0;
            countDownDate[i]["minutes"] = 0;
        }

        var countdownfunction = setInterval(function () {
            for (var i = 0; i < countDownDate.length; i++) {
                var now = new Date().getTime();
                var distance = countDownDate[i]["time"] - now;
                countDownDate[i]["days"] = Math.floor(distance / (1000 * 60 * 60 * 24));
                countDownDate[i]["hours"] = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                countDownDate[i]["minutes"] = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                countDownDate[i]["seconds"] = Math.floor(
                    (distance % (1000 * 60)) / 1000
                );

                if (distance < 0) {
                    countDownDate[i]["el"].querySelector(".days") &&
                        (countDownDate[i]["el"].querySelector(".days").innerHTML = 0);
                    countDownDate[i]["el"].querySelector(".hours").innerHTML = 0;
                    countDownDate[i]["el"].querySelector(".minutes").innerHTML = 0;
                    countDownDate[i]["el"].querySelector(".seconds").innerHTML = 0;
                } else {
                    countDownDate[i]["el"].querySelector(".days") &&
                        (countDownDate[i]["el"].querySelector(".days").innerHTML =
                            countDownDate[i]["days"]);
                    countDownDate[i]["el"].querySelector(".hours").innerHTML =
                        countDownDate[i]["hours"];
                    countDownDate[i]["el"].querySelector(".minutes").innerHTML =
                        countDownDate[i]["minutes"];
                    countDownDate[i]["el"].querySelector(".seconds").innerHTML =
                        countDownDate[i]["seconds"];
                }
            }
        }, 1000);
    }
});

/*====================
   02. Ratio js
=======================*/
window.addEventListener('load', () => {
    const bgImg = document.querySelectorAll(".bg-img");
    for (i = 0; i < bgImg.length; i++) {

        let bgImgEl = bgImg[i];
        /// Optional Class Add /// 
        if (bgImgEl.classList.contains('bg-top')) {
            bgImgEl.parentNode.classList.add("b-top");
        } else if (bgImgEl.classList.contains('bg-bottom')) {
            bgImgEl.parentNode.classList.add("b-button");
        } else if (bgImgEl.classList.contains('bg-center')) {
            bgImgEl.parentNode.classList.add("b-center");
        } else if (bgImgEl.classList.contains('bg-left')) {
            bgImgEl.parentNode.classList.add("b-left");
        } else if (bgImgEl.classList.contains('bg-right')) {
            bgImgEl.parentNode.classList.add("b-right");
        }

        /// Lazyload Class Add ///
        if (bgImgEl.classList.contains('blur-up')) {
            bgImgEl.parentNode.classList.add("blur-up", "lazyload");
        }

        /// Size Class Add ///
        if (bgImgEl.classList.contains('bg_size_content')) {
            bgImgEl.parentNode.classList.add("b_size_content");
        }

        /// Ratio Style ///
        bgImgEl.parentNode.classList.add("bg-size");
        const bgSrc = bgImgEl.src;
        bgImgEl.style.display = 'none';
        bgImgEl.parentNode.setAttribute("style", `
        background-image: url(${bgSrc});
        background-size:cover;
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        `);
    }
});