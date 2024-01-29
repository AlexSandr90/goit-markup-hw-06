const hamburgerBtn = document.getElementById('mobile-menu-open');
const mobileMenu = document.getElementById('mobile-menu');
const closedMobileMenuBtn = document.getElementById('close-mobile-menu');
const orderBtn = document.getElementById('order-btn');
const modalForm = document.getElementById('modal-form');
const closeModalBtn = document.getElementById('close-modal-btn');


hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-modal-open');
});


closedMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-modal-open');
});

orderBtn.addEventListener('click', () => {
    modalForm.classList.add('is-modal-open');
});

closeModalBtn.addEventListener('click', () => {
    modalForm.classList.remove('is-modal-open');
})