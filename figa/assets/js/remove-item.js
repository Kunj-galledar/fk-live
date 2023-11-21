//remove item from cart
const cartBox = document.querySelectorAll(".table-row");
cartBox?.forEach((el) => {
  const deleteButton = el.querySelector(".delete-button");
  deleteButton.addEventListener("click", function () {
    this.closest(".table-row").style.display = "none";
    this.closest(".table-row").style.transition = "0.4s";
  });
});
