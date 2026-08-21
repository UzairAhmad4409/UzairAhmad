/**
 * All Projects page — projects.html
 * Depends on: config.js, projects.js
 */

(function () {
  "use strict";

  const PLACEHOLDER_PREFIXES = ["YOUR_", "PLACEHOLDER"];

  function isPlaceholder(value) {
    if (!value || typeof value !== "string") return true;
    const trimmed = value.trim();
    if (!trimmed) return true;
    return PLACEHOLDER_PREFIXES.some((p) => trimmed.startsWith(p));
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function safeHref(url) {
    if (isPlaceholder(url)) return null;
    return url;
  }

  function mediaPlaceholder(title) {
    return `<div class="project-placeholder" role="img" aria-label="${escapeHtml(
      title
    )} cover placeholder"><span>${escapeHtml(
      title
    )}</span><small>Add cover.jpg here</small></div>`;
  }

  function projectCoverHtml(project) {
    const alt = `${project.title} — ${project.subtitle}`;
    return `
      <img
        src="${escapeHtml(project.cover)}"
        alt="${escapeHtml(alt)}"
        loading="lazy"
        width="800"
        height="500"
        data-fallback-title="${escapeHtml(project.title)}"
      />
    `;
  }

  function bindImageFallbacks(root) {
    root.querySelectorAll("img[data-fallback-title]").forEach((img) => {
      img.addEventListener("error", function onErr() {
        img.removeEventListener("error", onErr);
        const title = img.getAttribute("data-fallback-title") || "Project";
        const wrap = img.parentElement;
        if (wrap) {
          img.remove();
          wrap.insertAdjacentHTML("afterbegin", mediaPlaceholder(title));
        }
      });
    });
  }

  function renderAllProjects() {
    const grid = document.getElementById("all-projects-grid");
    if (!grid || typeof getAllProjects !== "function") return;

    const projects = getAllProjects();

    if (!projects.length) {
      grid.innerHTML =
        "<p class='section-lead'>No projects yet. Add entries in js/projects.js.</p>";
      return;
    }

    grid.innerHTML = projects
      .map((p) => {
        const badge = p.inDevelopment
          ? `<span class="badge-dev project-card-badge">Development Phase</span>`
          : "";

        return `
          <a class="project-card" href="project.html?id=${encodeURIComponent(
            p.id
          )}" aria-label="View ${escapeHtml(p.title)} project">
            <div class="project-card-media">
              ${badge}
              ${projectCoverHtml(p)}
              <div class="project-card-overlay">
                <h2 class="project-card-title">${escapeHtml(p.title)}</h2>
                <p class="project-card-subtitle">${escapeHtml(p.subtitle)}</p>
                <p class="project-card-desc">${escapeHtml(p.description)}</p>
                <ul class="project-card-tags" aria-label="Technologies">
                  ${p.technologies
                    .map((t) => `<li class="tag">${escapeHtml(t)}</li>`)
                    .join("")}
                </ul>
              </div>
            </div>
          </a>
        `;
      })
      .join("");

    bindImageFallbacks(grid);
  }

  function initNav() {
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  function renderSocial(containerId) {
    const cfg = window.portfolioConfig;
    const el = document.getElementById(containerId);
    if (!cfg || !el) return;

    const items = [
      { label: "GitHub", url: cfg.github },
      { label: "LinkedIn", url: cfg.linkedin },
      { label: "Fiverr", url: cfg.fiverr },
    ];

    el.innerHTML = items
      .map(({ label, url }) => {
        const href = safeHref(url);
        if (href) {
          return `<a href="${escapeHtml(
            href
          )}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
        }
        return `<a href="index.html#contact" title="Update ${escapeHtml(
          label
        )} URL in js/config.js">${escapeHtml(label)}</a>`;
      })
      .join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    renderAllProjects();
    renderSocial("footer-social");
  });
})();
