/**
 * Project detail page — project.html?id=solver
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

  function getQueryId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }

  /**
   * Convert YouTube watch / youtu.be / embed URLs to embeddable src.
   * Returns null if placeholder or invalid.
   */
  function youtubeEmbedUrl(url) {
    if (isPlaceholder(url)) return null;
    try {
      const u = new URL(url);
      let id = null;

      if (u.hostname.includes("youtu.be")) {
        id = u.pathname.replace("/", "").split("/")[0];
      } else if (u.hostname.includes("youtube.com")) {
        if (u.pathname.startsWith("/embed/")) {
          id = u.pathname.split("/embed/")[1];
        } else {
          id = u.searchParams.get("v");
        }
      }

      if (!id) return null;
      // Strip any leftover path/query fragments from the ID
      id = String(id).split(/[/?#]/)[0];
      if (!id) return null;
      return `https://www.youtube.com/embed/${encodeURIComponent(id)}`;
    } catch {
      return null;
    }
  }

  function mediaPlaceholder(title) {
    return `<div class="project-placeholder" role="img" aria-label="${escapeHtml(
      title
    )} placeholder">${escapeHtml(title)}</div>`;
  }

  function bindImageFallbacks(root) {
    root.querySelectorAll("img[data-fallback-title]").forEach((img) => {
      img.addEventListener("error", function onErr() {
        img.removeEventListener("error", onErr);
        const title = img.getAttribute("data-fallback-title") || "Project";
        const wrap = img.parentElement;
        if (!wrap) return;
        img.remove();
        wrap.insertAdjacentHTML("beforeend", mediaPlaceholder(title));
      });
    });
  }

  function renderNotFound(root) {
    root.innerHTML = `
      <div class="project-not-found">
        <h1>Project not found</h1>
        <p>This project id is missing or invalid. Check the URL or return to the portfolio.</p>
        <a class="btn btn-primary" href="index.html#projects">Back to Projects</a>
      </div>
    `;
    document.title = "Project Not Found | Uzair Ahmad";
  }

  function renderProject(project, root) {
    document.title = `${project.title} | Uzair Ahmad — Unity Game Developer`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", project.description);
    }

    const embed = youtubeEmbedUrl(project.video);

    const badge = project.inDevelopment
      ? `<span class="badge-dev">In Development</span>`
      : "";

    const features = (project.features || [])
      .map((f) => `<li>${escapeHtml(f)}</li>`)
      .join("");

    const techs = (project.technologies || [])
      .map((t) => `<li class="tag tag-accent">${escapeHtml(t)}</li>`)
      .join("");

    const screenshotList = (project.screenshots || []).filter(
      (src) => src && typeof src === "string" && src.trim() && !isPlaceholder(src)
    );
    const screenshotsHtml = screenshotList
      .map(
        (src, i) => `
        <figure>
          <img
            src="${escapeHtml(src)}"
            alt="${escapeHtml(project.title)} screenshot ${i + 1}"
            loading="lazy"
            width="800"
            height="500"
            data-fallback-title="${escapeHtml(project.title)}"
          />
        </figure>
      `
      )
      .join("");
    const screenshotsSection = screenshotList.length
      ? `<section class="project-detail-block">
        <h2>Screenshots</h2>
        <div class="screenshot-gallery">
          ${screenshotsHtml}
        </div>
      </section>`
      : "";

    const videoBlock = embed
      ? `<div class="video-embed">
           <iframe
             src="${escapeHtml(embed)}"
             title="${escapeHtml(project.title)} gameplay video"
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerpolicy="strict-origin-when-cross-origin"
             allowfullscreen
           ></iframe>
         </div>`
      : `<div class="video-embed">
           <div class="video-placeholder">
             Gameplay video coming soon.<br />
             Add a YouTube URL in <code>js/projects.js</code> (<code>video</code> field).
           </div>
         </div>`;

    const linkDefs = [
      { key: "demoUrl", label: "Play Demo", primary: true },
      { key: "apkUrl", label: "Download APK", primary: true, download: true },
      { key: "playStoreUrl", label: "Google Play", primary: false },
      { key: "appStoreUrl", label: "App Store", primary: false },
      { key: "githubUrl", label: "View Source", primary: false },
    ];

    const linkButtons = linkDefs
      .filter(({ key }) => !isPlaceholder(project[key]))
      .map(({ key, label, primary, download }) => {
        const href = escapeHtml(project[key]);
        const cls = primary ? "btn btn-primary" : "btn btn-secondary";
        const downloadAttr = download ? " download" : "";
        return `<a class="${cls}" href="${href}" target="_blank" rel="noopener noreferrer"${downloadAttr}>${label}</a>`;
      });

    const linksSection = linkButtons.length
      ? `<section class="project-detail-block">
        <h2>Links</h2>
        <div class="project-detail-links">${linkButtons.join("")}</div>
      </section>`
      : "";

    root.innerHTML = `
      <a class="project-back" href="index.html#projects">← Back to Projects</a>

      <header class="project-detail-header">
        ${badge}
        <h1 class="project-detail-title">${escapeHtml(project.title)}</h1>
        <p class="project-detail-subtitle">${escapeHtml(project.subtitle)}</p>
        <p class="project-detail-status">${escapeHtml(project.status)}</p>
      </header>

      <div class="project-hero-media">
        <img
          src="${escapeHtml(project.cover)}"
          alt="${escapeHtml(project.title)} — ${escapeHtml(project.subtitle)}"
          width="1200"
          height="675"
          data-fallback-title="${escapeHtml(project.title)}"
        />
      </div>

      <section class="project-detail-block">
        <h2>Overview</h2>
        <p>${escapeHtml(project.description)}</p>
      </section>

      <section class="project-detail-block">
        <h2>Technologies</h2>
        <ul class="tech-list">${techs}</ul>
      </section>

      <section class="project-detail-block">
        <h2>Key Features</h2>
        <ul class="feature-list">${features}</ul>
      </section>

      <section class="project-detail-block">
        <h2>My Contribution</h2>
        <p>${escapeHtml(project.contribution)}</p>
      </section>

      <section class="project-detail-block">
        <h2>Gameplay</h2>
        ${videoBlock}
      </section>

      ${screenshotsSection}

      ${linksSection}
    `;

    bindImageFallbacks(root);
  }

  function applyFooterSocial() {
    const cfg = window.portfolioConfig;
    const el = document.getElementById("footer-social");
    if (!cfg || !el) return;

    const items = [
      { label: "GitHub", url: cfg.github },
      { label: "LinkedIn", url: cfg.linkedin },
      { label: "Fiverr", url: cfg.fiverr },
    ];

    el.innerHTML = items
      .map(({ label, url }) => {
        if (isPlaceholder(url)) {
          return `<a href="index.html#contact" title="Update in js/config.js">${label}</a>`;
        }
        return `<a href="${escapeHtml(
          url
        )}" target="_blank" rel="noopener noreferrer">${label}</a>`;
      })
      .join("");
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

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("project-root");
    if (!root) return;

    const id = getQueryId();
    const project =
      id && typeof getProjectById === "function" ? getProjectById(id) : null;

    if (!project) {
      renderNotFound(root);
    } else {
      renderProject(project, root);
    }

    applyFooterSocial();
    initNav();
  });
})();
