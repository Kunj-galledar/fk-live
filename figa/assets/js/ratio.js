/*====================
   . Ratio js
=======================*/
window.addEventListener("load", () => {
  const bgImg = document.querySelectorAll(".bg-img");
  for (i = 0; i < bgImg.length; i++) {
    let bgImgEl = bgImg[i];
    /// Optional Class Add ///
    if (bgImgEl.classList.contains("bg-top")) {
      bgImgEl.parentNode.classList.add("b-top");
    } else if (bgImgEl.classList.contains("bg-bottom")) {
      bgImgEl.parentNode.classList.add("b-buttom");
    } else if (bgImgEl.classList.contains("bg-center")) {
      bgImgEl.parentNode.classList.add("b-center");
    } else if (bgImgEl.classList.contains("bg-left")) {
      bgImgEl.parentNode.classList.add("b-left");
    } else if (bgImgEl.classList.contains("bg-right")) {
      bgImgEl.parentNode.classList.add("b-right");
    }

    /// Lazyloader Class Add ///
    if (bgImgEl.classList.contains("blur-up")) {
      bgImgEl.parentNode.classList.add("blur-up", "lazyload");
    }

    /// Size Class Add ///
    if (bgImgEl.classList.contains("bg_size_content")) {
      bgImgEl.parentNode.classList.add("b_size_content");
    }

    /// Ratio Style ///
    bgImgEl.parentNode.classList.add("bg-size");
    const bgSrc = bgImgEl.src;
    bgImgEl.style.display = "none";
    bgImgEl.parentNode.setAttribute(
      "style",
      `
        background-image: url(${bgSrc});
        background-size:cover;
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        `
    );
  }
});
// const items = document.querySelectorAll('.item')
// const image = document.querySelector('img')

// items.forEach((el) => {
//   el.addEventListener('mouseover', (e) => {
//     imageData = e.target.getAttribute('data-image')
//     console.log(imageData)
//     e.target.style.zIndex = 99
//     image.setAttribute('src', imageData)
//   })
//   el.addEventListener('mousemove', (e) => {
//     image.style.top = e.clientY + 'px'
//     image.style.left = e.clientX + 'px'
//   })
//   el.addEventListener('mouseleave', (e) => {
//     e.target.style.zIndex = 1
//     image.setAttribute('src', '')
//   })
// })
