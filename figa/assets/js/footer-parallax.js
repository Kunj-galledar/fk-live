/*====================
   Footer parallax js
=======================*/
const mQuery = window.matchMedia('(min-width: 1200px)')

function handleMobilePhoneResize(e) {

   document.querySelector('body').classList.add('footer-parallax');
   let footerSelect = document.querySelector('footer');
   let height = footerSelect.offsetHeight;
   document.querySelector('body').style.marginBottom = `${height}px`;
   footerSelect.style.height = `${height}px`;
}

mQuery.addListener(handleMobilePhoneResize)