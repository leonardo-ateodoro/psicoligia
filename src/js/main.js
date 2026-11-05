document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initNavbar();
  initFaq();
  initServiceButtons();
  initAuthModals();
  initBookingForm();
});


function initYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}


function initNavbar() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const menuIcon = document.getElementById('menuIcon'); 

    if (!menuToggle || !navMenu || !menuIcon) return;
    
    menuToggle.addEventListener ('click', () => {
        navMenu.classList.toggle ('navbar__menu--open');
        const isOPEN = navMenu.classList.contains('nav__menu--open');
        menuIcon.className = isOpen ? "fa-solid fa-xmark" :  'fa-solid fa-bars';
});

document.querySelectorAll('.navbar__link').forEach (link =>{ 
    link.addEventListener('click', () => {
    navMenu.classList.remove ('navbar__menu--open');
    menuIcon.className = 'fa-solid fa-bars';
});
});
}


function in
