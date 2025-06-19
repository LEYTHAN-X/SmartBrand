// Remove loading screen after 3 seconds
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 3000);
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("dark-mode-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
document.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

