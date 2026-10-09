// =========================================================
// PROJECTS: render kartu project dari data.js + filter kategori
// =========================================================

import { projects } from "../data.js";
import { observeReveal } from "./reveal.js";

function createCard(project) {
  const card = document.createElement("a");
  card.href = project.link;
  card.target = "_blank";
  card.className = "project-card reveal";
  card.dataset.cat = project.category;

  card.innerHTML = `
    <div class="project-thumb">
      <span class="project-cat">${project.category}</span>
      <img src="${project.img}" alt="${project.title}" loading="lazy" />
    </div>
    <div class="project-body">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <span class="project-link">${project.linkLabel} <span class="arrow">→</span></span>
    </div>
  `;

  return card;
}

export function initProjects() {
  const grid = document.getElementById("projectGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (!grid) return;

  projects.forEach((project) => grid.appendChild(createCard(project)));
  observeReveal(grid.querySelectorAll(".reveal"));

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      grid.querySelectorAll(".project-card").forEach((card) => {
        const match = filter === "all" || card.dataset.cat === filter;
        card.style.display = match ? "" : "none";
      });
    });
  });
}
