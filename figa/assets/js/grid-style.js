const gridStyleParent = document.querySelector(".grid-navbar");
const visibleEl = document.querySelector(".grid-option");

if (gridStyleParent) {
  if (window.innerWidth <= 1199) {
    document.querySelector(`.grid-link[data-grid="3"]`).classList.add("active");
  }
  if (window.innerWidth <= 574) {
    document.querySelector(`.grid-link[data-grid="2"]`).classList.add("active");
    visibleEl.className = [
      `row-cols-2 grid-product-section grid-option row g-3 g-xl-4 ratio_asos`,
    ];
  }

  gridStyleParent?.addEventListener("click", function (e) {
    e.preventDefault();
    const clicked = e.target.closest(".grid-link");
    if (!clicked) return;

    gridStyleParent
      .querySelectorAll(".grid-link")
      .forEach((el) => el.classList.remove("active"));
    clicked.classList.add("active");
    if (clicked.dataset.grid === "2") {
      visibleEl.className = [
        `row-cols-${clicked.dataset.grid} grid-product-section grid-option row g-3 g-xl-4 ratio_asos`,
      ];
    } else if (clicked.dataset.grid === "3") {
      visibleEl.className = [
        `row-cols-2 row-cols-sm-${clicked.dataset.grid} grid-product-section grid-option row g-3 g-xl-4 ratio_asos`,
      ];
    } else if (clicked.dataset.grid === "4") {
      visibleEl.className = [
        `row-cols-2 row-cols-sm-3 row-cols-xl-${clicked.dataset.grid} grid-product-section grid-option row g-3 g-xl-4 ratio_asos`,
      ];
    } else if (clicked.dataset.grid === "list") {
      visibleEl.className = [
        `list-section grid-option row g-3 g-xl-4 ratio_asos`,
      ];
    }
  });
}
