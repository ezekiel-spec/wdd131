// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date
const lastModifiedDate = new Date(document.lastModified);

// Format the last modified date
const formattedLastModifiedDate = lastModifiedDate.toLocaleString();

// Display the copyright year and the last modified date
document.getElementById("copyright-year").textContent = currentYear;
document.getElementById("last-modified-date").textContent = formattedLastModifiedDate;

// Add event listener to the hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigationMenu = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", () => {
navigationMenu.classList.toggle("show");
});