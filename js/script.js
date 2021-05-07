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

// Event pada saat link di klik
$('.page-scroll').on('click', function(e) {
	// Ambil isi href
	const tujuan = $(this).attr('href');
	// Tangkap elemen yang bersangkutan
	const elemenTujuan = $(tujuan);

	// Pindahkan scroll
    if (tujuan == "#contact") {
        $('html, body').animate({
            scrollTop: elemenTujuan.offset().top - 300
        }, 1000, 'easeInOutCirc');
    } else {
        $('html, body').animate({
            scrollTop: elemenTujuan.offset().top - 50
        }, 1000, 'easeInOutCirc');
    }
	e.preventDefault();
})