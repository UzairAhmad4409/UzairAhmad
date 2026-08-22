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

  /** Render multi-paragraph descriptions with optional bullet lists. */
  function formatDescriptionHtml(text) {
    if (!text || typeof text !== "string") return "";
    return text
      .trim()
      .split(/\n\n+/)
      .map((block) => {
        const lines = block
          .split(/\n/)
          .map((l) => l.trim())
          .filter(Boolean);
        if (!lines.length) return "";

        const isListItem = (l) => /^[-•*]/.test(l);
        const listStart = lines.findIndex(isListItem);

        if (listStart !== -1) {
          const intro = lines.slice(0, listStart);
          const items = lines.slice(listStart).map((l) =>
            escapeHtml(l.replace(/^[-•*]\s*/, ""))
          );
          const introHtml = intro
            .map((l) => `<p>${escapeHtml(l)}</p>`)
            .join("");
          return `${introHtml}<ul class="feature-list">${items
            .map((i) => `<li>${i}</li>`)
            .join("")}</ul>`;
        }

        if (lines.length === 1) {
          const line = lines[0];
          const looksLikeHeading =
            line.length < 70 &&
            !/[.!?]$/.test(line) &&
            !line.includes("→");
          if (looksLikeHeading) {
            return `<h3 class="project-overview-heading">${escapeHtml(
              line
            )}</h3>`;
          }
          return `<p>${escapeHtml(line)}</p>`;
        }

        return `<p>${lines.map((l) => escapeHtml(l)).join("<br />")}</p>`;
      })
      .join("");
  }

  function getQueryId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }

  /** Label Play Demo with platform when the URL is a known store/portal. */
  function demoPlatformLabel(url) {
    if (isPlaceholder(url)) return null;
    try {
      const host = new URL(url).hostname.replace(/^www\./, "").toLowerCase();
      if (host.includes("crazygames.com")) return "Play Demo on CrazyGames";
      if (host.includes("itch.io")) return "Play Demo on itch.io";
      if (host.includes("play.google.com")) return "Play Demo on Google Play";
      if (host.includes("apps.apple.com")) return "Play Demo on App Store";
      if (host.includes("steam")) return "Play Demo on Steam";
    } catch {
      /* ignore */
    }
    return null;
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
        <a class="btn btn-primary" href="projects.html">Back to Projects</a>
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

    const statusLabel = project.inDevelopment ? "Development Phase" : "Completed";
    const statusClass = project.inDevelopment
      ? "badge-dev project-detail-status"
      : "badge-completed project-detail-status";
    const statusBadge = `<span class="${statusClass}">${statusLabel}</span>`;

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

    const videoSection = embed
      ? `<section class="project-detail-block">
        <h2>Gameplay</h2>
        <div class="video-embed">
           <iframe
             src="${escapeHtml(embed)}"
             title="${escapeHtml(project.title)} gameplay video"
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerpolicy="strict-origin-when-cross-origin"
             allowfullscreen
           ></iframe>
         </div>
      </section>`
      : "";

    const linkDefs = [
      {
        key: "demoUrl",
        label: project.demoLabel || demoPlatformLabel(project.demoUrl) || "Play Demo",
        primary: true,
      },
      { key: "apkUrl", label: "Download Android APK", primary: true, download: true },
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
      <a class="project-back" href="projects.html">← Back to Projects</a>

      <header class="project-detail-header">
        ${statusBadge}
        <h1 class="project-detail-title">${escapeHtml(project.title)}</h1>
        <p class="project-detail-subtitle">${escapeHtml(project.subtitle)}</p>
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
        <div class="project-overview">${formatDescriptionHtml(
          project.description
        )}</div>
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
        <div class="project-overview">${formatDescriptionHtml(
          project.contribution
        )}</div>
      </section>

      ${videoSection}

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
