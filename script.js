const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
    const scrollOffset = window.innerHeight + window.scrollY;
    const documentHeight = document.body.offsetHeight;
    if (scrollOffset >= documentHeight) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});
