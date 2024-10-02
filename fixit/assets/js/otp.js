
/**=====================
OTP Js
==========================**/
// otp js
// var otp_inputs = document.querySelectorAll(".otp__digit")
// var mykey = "0123456789".split("")
// otp_inputs.forEach((_) => {
//   _.addEventListener("keyup", handle_next_input)
// })
// function handle_next_input(event) {
//   let current = event.target
//   let index = parseInt(current.classList[1].split("__")[2])
//   current.value = event.key

//   if (event.keyCode == 8 && index > 1) {
//     current.previousElementSibling.focus()
//   }
//   if (index < 5 && mykey.indexOf("" + event.key + "") != -1) {
//     var next = current.nextElementSibling;
//     next.focus()
//   }
//   var _finalKey = ""
//   for (let { value } of otp_inputs) {
//     _finalKey += value
//   }
// }



var otp_inputs = document.querySelectorAll(".otp__digit");
var mykey = "0123456789".split("");

otp_inputs.forEach((input) => {
  input.addEventListener("input", handle_next_input);
});

function handle_next_input(event) {
  let current = event.target;
  let index = parseInt(current.classList[1].split("__")[2]);
  let value = current.value;

  // Move to previous input on backspace
  if (event.inputType === 'deleteContentBackward' && index > 1) {
    current.previousElementSibling.focus();
    return;
  }

  // Check if the input is a valid number
  if (mykey.indexOf(value) !== -1 && index < otp_inputs.length) {
    // Move to next input
    let next = current.nextElementSibling;
    next?.focus();
  }

  // Collect final OTP key
  var _finalKey = "";
  otp_inputs.forEach(input => {
    _finalKey += input.value;
  });
  console.log("Final OTP:", _finalKey);  // Use final OTP as needed
}
