// Get the current year for the copyright information.
const copyrightYear = document.getElementById('copyright-year');
const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;

// Get the last modified date for the footer.
const lastModifiedDate = document.getElementById('last-modified-date');
const date = new Date(document.lastModified);
lastModifiedDate.textContent = date.toLocaleString();

// Toggle the navigation menu on small screens.
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});