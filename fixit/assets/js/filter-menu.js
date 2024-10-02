const element = document.querySelector('.filter');
const addButton = document.querySelector('.filter-btn');
const removeButton = document.querySelector('.close-box');

addButton.addEventListener('click', () => {
    element.classList.add('open');
});

removeButton.addEventListener('click', () => {
    element.classList.remove('open');
});