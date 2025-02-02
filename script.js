// For the light and dark theme colors
const toggleBtns = document.querySelectorAll(".theme-toggle");
const body = document.body;

let theme = localStorage.getItem("theme") || "dark";
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
    selector: '.glightbox',
    touchNavigation: true,
    autoplayVideos: true,
    width: '900px',
  });
});

// Project settings
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      projectItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});


// for year
document.getElementById("currentYear").textContent = new Date().getFullYear();