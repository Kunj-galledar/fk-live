/**=====================
     Count Box Select js
==========================**/
$(document).ready(function () {
  $("#myCheckbox").click(function () {
    $("#myButton").prop("disabled", !$("#myCheckbox").prop("checked"));
  });
});