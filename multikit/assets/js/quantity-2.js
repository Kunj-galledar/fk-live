var counterValue = document.querySelector(".stepper");
var counterIncrement = document.querySelector(".plus-button");
var counterDecrement = document.querySelector(".mins-button");
var count = 0;

this.counterIncrement.addEventListener("click", () => {
    this.count++;
    this.counterValue.setAttribute("value", count);
});

this.counterDecrement.addEventListener("click", () => {
    this.count--;
    this.counterValue.setAttribute("value", count);
});