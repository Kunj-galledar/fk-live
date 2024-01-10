let basePrice = 0;
let currentPrice = basePrice;

function updatePrice(chk, value) {
    if (chk.checked) {
        currentPrice += value;
    } else {
        currentPrice -= value;
    }
    document.querySelector("#price").textContent = currentPrice;
}