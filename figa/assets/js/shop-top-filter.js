var button = document.querySelector(".top-filter");
var items = document.querySelector(".horizontal-filter");
// var link = document.getElementsByTagName('a');

button.addEventListener(
  "click",
  function () {
    items.classList.toggle("opened");
  },
  false
);

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      items.classList.remove("opened");
    },
    false
  );
}