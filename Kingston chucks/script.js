// Hamburger Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

// When the hamburger menu is clicked
mobileMenuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenuButton.classList.toggle("open");
});

// "Start" Button functionality
const startButton = document.getElementById("start-button");

let startTimeout = setTimeout(() => {
    alert("You didn't click 'Start' in time! Redirecting...");
    window.location.href = "gallery.html"; // Auto-opening gallery page
}, 5000); // Auto-redirect after 5 seconds

startButton.addEventListener("click", () => {
    clearTimeout(startTimeout); // Clear the timeout if clicked
    alert("You clicked 'Start'!");
});
