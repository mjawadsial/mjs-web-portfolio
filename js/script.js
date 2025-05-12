// Mobile menu toggle - put this in your existing JS
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
      this.classList.toggle("open");
    });
  }
});

// Theme switcher functionality
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");

  // Check for saved preference
  const currentScheme = localStorage.getItem("color-scheme") || "default";
  if (currentScheme === "alt") {
    document.documentElement.setAttribute("data-theme", "alt");
  }

  themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "alt" ? "default" : "alt";

    if (newTheme === "alt") {
      document.documentElement.setAttribute("data-theme", "alt");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    localStorage.setItem("color-scheme", newTheme);
  });
});

