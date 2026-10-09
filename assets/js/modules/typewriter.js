// =========================================================
// TYPEWRITER: efek ganti-ganti role di hero section
// =========================================================

const roles = ["UI/UX Designer", "Front-End Enthusiast", "Visual Designer"];

export function initTypewriter() {
  const el = document.getElementById("typedRole");
  if (!el) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  el.textContent = "";

  function loop() {
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(loop, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(loop, deleting ? 40 : 70);
  }

  setTimeout(loop, 600);
}
