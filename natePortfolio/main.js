// Theme picker logic
const themeButtons = document.querySelectorAll(".theme-picker button");
themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.classList.remove("theme-ocean", "theme-rose");
    if (btn.dataset.theme !== "default") {
      document.body.classList.add("theme-" + btn.dataset.theme);
    }
    // Optionally, save preference
    localStorage.setItem("theme", btn.dataset.theme);
  });
});
// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme && savedTheme !== "default") {
  document.body.classList.add("theme-" + savedTheme);
}
// Hamburger menu logic
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    navToggle.setAttribute(
      "aria-expanded",
      nav.classList.contains("nav-open") ? "true" : "false"
    );
  });

  // Optional: Close menu when a link is clicked (for better UX)
  document.querySelectorAll("nav ul a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
// Hero image carousel logic
document.addEventListener("DOMContentLoaded", () => {
  const carouselImages = document.querySelectorAll(
    ".hero-image-carousel .carousel-img"
  );
  if (carouselImages.length > 0) {
    let carouselIndex = 0;
    setInterval(() => {
      carouselImages[carouselIndex].classList.remove("active");
      carouselIndex = (carouselIndex + 1) % carouselImages.length;
      carouselImages[carouselIndex].classList.add("active");
    }, 3000); // Change image every 3 seconds
  }
});
