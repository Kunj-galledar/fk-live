/**=====================
     Cart Modal Resize js
==========================**/
var myModal = document.getElementById("addtocart");

myModal.addEventListener("shown.bs.modal", function () {
  $(window).trigger("resize");
});