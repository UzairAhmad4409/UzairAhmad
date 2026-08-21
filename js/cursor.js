/**
 * Custom cursor — smooth ring + dot (desktop only).
 * Inspired by modern portfolio cursor rings; uses site cyan accent on hover.
 */
(function () {
  "use strict";

  const canUse =
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!canUse) return;

  document.documentElement.classList.add("has-custom-cursor");

  const ring = document.createElement("div");
  ring.className = "custom-cursor-ring";
  ring.setAttribute("aria-hidden", "true");

  const dot = document.createElement("div");
  dot.className = "custom-cursor-dot";
  dot.setAttribute("aria-hidden", "true");

  document.body.appendChild(ring);
  document.body.appendChild(dot);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let dotX = mouseX;
  let dotY = mouseY;
  let visible = false;
  let rafId = 0;

  const INTERACTIVE =
    "a, button, [role='button'], input, textarea, select, label, summary, .project-card, .nav-toggle, .tag";

  function setVisible(on) {
    visible = on;
    ring.classList.toggle("is-visible", on);
    dot.classList.toggle("is-visible", on);
  }

  function onMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!visible) setVisible(true);
  }

  function onOver(e) {
    const target = e.target;
    if (!(target instanceof Element)) return;
    const interactive = Boolean(target.closest(INTERACTIVE));
    ring.classList.toggle("is-hover", interactive);
    dot.classList.toggle("is-hover", interactive);
  }

  function animate() {
    // Dot tracks faster; ring lags slightly for the soft follow effect
    dotX += (mouseX - dotX) * 0.35;
    dotY += (mouseY - dotY) * 0.35;
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

    rafId = requestAnimationFrame(animate);
  }

  document.addEventListener("mousemove", onMove, { passive: true });
  document.addEventListener("mouseover", onOver, { passive: true });
  document.addEventListener("mouseleave", () => setVisible(false));
  document.addEventListener("mouseenter", () => setVisible(true));

  animate();

  window.addEventListener("beforeunload", () => {
    cancelAnimationFrame(rafId);
  });
})();
