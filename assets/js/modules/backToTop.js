// =========================================================
// BACK TO TOP BUTTON
// =========================================================

export function initBackToTop() {
  const btn = document.getElementById("toTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 500);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
