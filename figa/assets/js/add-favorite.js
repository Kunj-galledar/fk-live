// heart
const heartButtons = document.querySelectorAll(".add-to-favorite");

heartButtons.forEach((button) => {
button.addEventListener("click", () => {
button.classList.toggle("clicked");
});
});