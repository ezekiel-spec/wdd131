// Get the current year and last modified date
const currentYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;

// Update the footer with the current year and last modified date
document.getElementById("last-modified").textContent = lastModifiedDate;

// Add event listener to the hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", () => {
    // Toggle the navigation menu
    const navigationMenu = document.querySelector("nav");
    navigationMenu.classList.toggle("open");
});