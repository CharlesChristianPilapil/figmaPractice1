const burger = document.querySelector('#hamburger');
const nav = document.querySelector('.nav-toggle');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
})