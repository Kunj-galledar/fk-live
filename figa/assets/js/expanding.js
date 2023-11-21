function toggleActive(element) {
    // Remove the active class from all items
    const items = document.querySelectorAll('.blog-card');
    items.forEach(item => {
        item.classList.remove('active');
    });

    // Add the active class to the clicked element
    element.classList.add('active');
}