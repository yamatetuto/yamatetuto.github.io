// script.js - dropdown toggle and hide-on-scroll (vanilla JS)
document.addEventListener("DOMContentLoaded", function () {
  // dropdown toggle
  const researchLink = document.getElementById("research-link");
  const dropdown = document.getElementById("research-dropdown");

  if (researchLink && dropdown) {
    researchLink.addEventListener("click", function (e) {
      e.preventDefault();
      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
    });

    // close when clicking outside
    document.addEventListener("click", function (e) {
      if (!researchLink.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
      }
    });
  }

  // hide header/nav/footer on scroll down, show on scroll up
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const footer = document.querySelector("footer");

  let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
  const threshold = 10; // ignore tiny scrolls

  window.addEventListener(
    "scroll",
    function () {
      const current = window.pageYOffset || document.documentElement.scrollTop;

      // only act when scrolled more than threshold
      if (Math.abs(current - lastScroll) <= threshold) return;

      if (current > lastScroll && current > 60) {
        // scrolling down -> hide
        header && header.classList.add("is-hidden-top");
        nav && nav.classList.add("is-hidden-top");
        footer && footer.classList.add("is-hidden-bottom");
      } else {
        // scrolling up -> show
        header && header.classList.remove("is-hidden-top");
        nav && nav.classList.remove("is-hidden-top");
        footer && footer.classList.remove("is-hidden-bottom");
      }

      lastScroll = current <= 0 ? 0 : current;
    },
    { passive: true }
  );
});
