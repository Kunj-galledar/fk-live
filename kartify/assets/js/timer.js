 /**=====================
     Timer js
==========================**/
 /***** CALCULATE THE TIME REMAINING *****/
 function getTimeRemaining(endtime) {
     var t = Date.parse(endtime) - Date.parse(new Date());

     /***** CONVERT THE TIME TO A USEABLE FORMAT *****/
     var seconds = Math.floor((t / 1000) % 60);
     var minutes = Math.floor((t / 1000 / 60) % 60);
     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
     // var days = Math.floor(t / (1000 * 60 * 60 * 24));

     /***** OUTPUT THE CLOCK DATA AS A REUSABLE OBJECT *****/
     return {
         'total': t,
         // 'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
     };
 }

 /***** DISPLAY THE CLOCK AND STOP IT WHEN IT REACHES ZERO *****/
 function initializeClock(id, endtime) {
     var clock = document.getElementById(id);
     // var daysSpan = clock.querySelector('.days');
     var hoursSpan = clock.querySelector('.hours');
     var minutesSpan = clock.querySelector('.minutes');
     var secondsSpan = clock.querySelector('.seconds');

     function updateClock() {
         var t = getTimeRemaining(endtime);

         // daysSpan.innerHTML = t.days;
         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

         if (t.total <= 0) {
             clearInterval(timeinterval);
         }
     }

     updateClock(); // run function once at first to avoid delay
     var timeinterval = setInterval(updateClock, 1000);
 }

 /***** SET A VALID END DATE *****/
 var deadline = new Date(Date.parse(new Date()) + 5 * 60 * 60 * 1000);
 initializeClock('clockdiv', deadline);

 // class CountdownTimer {
 //     constructor(duration, displayClassName) {
 //         this.duration = duration;
 //         this.displayElements = Array.from(document.getElementsByClassName(displayClassName));
 //         this.intervalId = null;
 //     }

 //     start() {
 //         this.updateDisplay();

 //         this.intervalId = setInterval(() => {
 //             this.duration -= 1;
 //             this.updateDisplay();

 //             if (this.duration <= 0) {
 //                 this.stop();
 //             }
 //         }, 1000);
 //     }

 //     stop() {
 //         clearInterval(this.intervalId);
 //     }

 //     updateDisplay() {
 //         const days = Math.floor(this.duration / (60 * 60 * 24));
 //         const hours = Math.floor((this.duration % (60 * 60 * 24)) / (60 * 60));
 //         const minutes = Math.floor((this.duration % (60 * 60)) / 60);
 //         const seconds = this.duration % 60;

 //         const displayText = `${days} days ${hours} hours ${minutes} minutes`;

 //         this.displayElements.forEach((element) => {
 //             element.textContent = displayText;
 //         });
 //     }
 // }

 // // Usage example:
 // const countdownClassName = 'countdown';
 // const twoDaysInSeconds = 2 * 24 * 60 * 60;
 // const countdown = new CountdownTimer(twoDaysInSeconds, countdownClassName);
 // countdown.start();