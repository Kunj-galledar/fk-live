/*====================
   nav-link active js
=======================*/

const sections = document.querySelectorAll('section[id]');

function setActiveSection() {
  const scrollPosition = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelector(".navigation-menu li a[href*=" + sectionId + "]").classList.add("active");
      // section.classList.add('active');
    } else {
      document.querySelector(".navigation-menu li a[href*=" + sectionId + "]").classList.remove("active");
      // section.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', setActiveSection);

/*====================
  tooltip js
=======================*/
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

/*====================
   sidebar js
=======================*/
const button = document.querySelector(".toggle");
const sidebar = document.querySelector(".sidebar-nav");
const overlay = document.querySelector(".overlay");
const backbtn = document.querySelector(".back-button");

// Add class to the element
button.addEventListener("click", function () {
  sidebar.classList.add("open");
  overlay.classList.add("show");
});

backbtn.addEventListener("click", function () {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", function () {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
});

/*====================
   sticky header js
=======================*/
window.onscroll = function () { myFunction() };
var header = document.getElementById("header");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > 300) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}
/*====================
   AOS animation js
=======================*/
// AOS.init({
//     once: true
// });
// window.addEventListener('load', AOS.refresh);

/*====================
   tap to top js
=======================*/
const scrollBtn = document.querySelector(".top");
const btnVisibility = () => {
  if (window.scrollY > 400) {
    scrollBtn.style.visibility = "visible";
  } else {
    scrollBtn.style.visibility = "hidden";
  }
};
document.addEventListener("scroll", () => {
  btnVisibility();
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
