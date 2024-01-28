const hamburgerBtn = document.getElementById('mobile-menu-open');
const mobileMenu = document.getElementById('mobile-menu');
const closedMobileMenuBtn = document.getElementById('close-mobile-menu');


hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-modal-open')
});


closedMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-modal-open')
});