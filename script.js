const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Contact form demo
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  contactForm.reset();
});

// Reveal animation
const revealElements = document.querySelectorAll(".section, .hero-content > div, .product-card, .why-card");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
}

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);