const primaryHeader = document.querySelector(".primary-header");

const navToggle = document.querySelector(".mobile-nav-toggle");
const priimaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  priimaryNav.toggleAttribute("data-visible");
  // Accessible Rich Internet Application
  navToggle.setAttribute(
    "aria-expanded",
    !priimaryNav.hasAttribute("data-visible")
  );

  primaryHeader.toggleAttribute("data-overlay");
});
