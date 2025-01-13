// For the light and dark theme colors
const toggleBtns = document.querySelectorAll(".theme-toggle");
const body = document.body;

let theme = localStorage.getItem("theme") || "light";
body.setAttribute("data-theme", theme);

toggleBtns.forEach((btn) => {
  btn.textContent = theme === "dark" ? "🌙" : "🌞";
});

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";
    body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    toggleBtns.forEach((toggleBtn) => {
      toggleBtn.textContent = theme === "dark" ? "🌙" : "🌞";
    });
  });
});

//For the hamburger
const hamBurger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");

hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle("active");
  navBar.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamBurger.classList.remove("active");
    navBar.classList.remove("active");
  })
);

// glight
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = GLightbox({
      selector: '.glightbox', // Ensure this matches your HTML class or ID for the clickable element.
      touchNavigation: true,
      href: 'https://www.youtube.com/watch?v=nDLb8_wgX50',
      type: 'video',
      source: 'youtube', // Options are 'vimeo', 'youtube', or 'local'
      width: 900,
      autoplayVideos: true,
  });
});
