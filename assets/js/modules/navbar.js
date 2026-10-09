// =========================================================
// NAVBAR: scroll state, link aktif, menu mobile
// =========================================================

export function initNavbar() {
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinksList = document.getElementById("navLinks");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");

  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 40);
    setActiveLink();
  }

  function setActiveLink() {
    let current = sections[0]?.id;
    const offset = 140;
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - offset) current = sec.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }

  navToggle.addEventListener("click", () => {
    navLinksList.classList.toggle("open");
  });

  navLinksList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinksList.classList.remove("open"));
  });

  window.addEventListener("scroll", onScroll);
  onScroll();
}
