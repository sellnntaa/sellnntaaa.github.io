// =========================================================
// MAIN — entry point, jalankan semua module di sini
// =========================================================

import { initNavbar } from "./modules/navbar.js";
import { initTypewriter } from "./modules/typewriter.js";
import { initReveal } from "./modules/reveal.js";
import { initProjects } from "./modules/projects.js";
import { initBackToTop } from "./modules/backToTop.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initTypewriter();
  initReveal();
  initProjects();
  initBackToTop();
});
