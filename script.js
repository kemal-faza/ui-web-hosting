// Memunculkan sidebar
const menuToggle = document.querySelector('.menu-toggle input');
const navbarList = document.querySelector('.navbar-list');

menuToggle.addEventListener('click', function() {
    navbarList.classList.toggle('slide');
})

// Menghilangkan background-color pada navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if(this.scrollY > 0) {
        navbar.style.backgroundColor = '#10103A';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});