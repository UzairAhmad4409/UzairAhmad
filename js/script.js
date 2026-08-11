/**
 * Main portfolio interactions — index.html
 * Depends on: config.js, projects.js, experience.js
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

  function safeHref(url, type) {
    if (isPlaceholder(url)) return null;
    if (type === "email") return `mailto:${url}`;
    return url;
  }

  const SOCIAL_ICONS = {
    GitHub:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.093.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.952 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.944.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.025 10.025 0 0 0 22 12.021C22 6.486 17.523 2 12 2z"/></svg>',
    LinkedIn:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    Fiverr:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a5 5 0 0 1 5 5v1h2.5A1.5 1.5 0 0 1 21 9.5v11A1.5 1.5 0 0 1 19.5 22h-15A1.5 1.5 0 0 1 3 20.5v-11A1.5 1.5 0 0 1 4.5 8H7V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v1h6V7a3 3 0 0 0-3-3zm-1.25 7.75v6.5h2.5v-6.5h-2.5z"/></svg>',
  };

  function whatsappHref(phoneOrUrl) {
    if (isPlaceholder(phoneOrUrl)) return null;
    const value = phoneOrUrl.trim();
    if (value.startsWith("http://") || value.startsWith("https://")) {
      return value;
    }
    const digits = value.replace(/\D/g, "");
    if (!digits) return null;
    return `https://wa.me/${digits}`;
  }

  /* ---------- Config wiring ---------- */
  function applyConfig() {
    const cfg = window.portfolioConfig;
    if (!cfg) return;

    const cvPath = cfg.cv || "assets/Uzair-Ahmad-CV.pdf";

    ["hero-cv", "resume-download", "resume-view"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.setAttribute("href", cvPath);
    });

    const heroSocial = document.getElementById("hero-social");
    if (heroSocial) {
      // Keep static buttons; only refresh hrefs from config
      const linkedin = document.getElementById("hero-linkedin");
      const github = document.getElementById("hero-github");
      const liHref = safeHref(cfg.linkedin);
      const ghHref = safeHref(cfg.github);
      if (linkedin && liHref) {
        linkedin.href = liHref;
        linkedin.setAttribute("target", "_blank");
        linkedin.setAttribute("rel", "noopener noreferrer");
      }
      if (github) {
        if (ghHref) {
          github.href = ghHref;
          github.setAttribute("target", "_blank");
          github.setAttribute("rel", "noopener noreferrer");
          github.removeAttribute("title");
        } else {
          github.href = "#contact";
          github.setAttribute(
            "title",
            "Add your GitHub URL in js/config.js"
          );
        }
      }
    }

    const footerSocial = document.getElementById("footer-social");
    if (footerSocial) {
      footerSocial.innerHTML = buildSocialLinks(cfg, false);
    }

    const waHref = whatsappHref(cfg.whatsapp);

    const formWa = document.getElementById("contact-whatsapp-form");
    if (formWa) {
      if (waHref) {
        formWa.href = waHref;
        formWa.hidden = false;
      } else {
        formWa.href = "#contact";
        formWa.setAttribute(
          "title",
          "Add your WhatsApp number in js/config.js"
        );
        formWa.setAttribute(
          "aria-label",
          "Replace YOUR_WHATSAPP_NUMBER in js/config.js"
        );
      }
    }
  }

  function buildSocialLinks(cfg, withIcons = true) {
    const items = [
      { label: "GitHub", url: cfg.github },
      { label: "LinkedIn", url: cfg.linkedin },
      { label: "Fiverr", url: cfg.fiverr },
    ];

    return items
      .map(({ label, url }) => {
        const icon = withIcons && SOCIAL_ICONS[label] ? SOCIAL_ICONS[label] : "";
        const href = safeHref(url);
        if (href) {
          return `<a href="${href}" target="_blank" rel="noopener noreferrer">${icon}${label}</a>`;
        }
        return `<a href="#contact" title="Update ${label} URL in js/config.js">${icon}${label}</a>`;
      })
      .join("");
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function mediaPlaceholder(title) {
    return `<div class="project-placeholder" role="img" aria-label="${escapeHtml(
      title
    )} cover placeholder"><span>${escapeHtml(
      title
    )}</span><small>Add cover.jpg here</small></div>`;
  }

  function renderExperience() {
    if (window.ExperienceTimeline) {
      ExperienceTimeline.render();
      return;
    }

    const list = document.getElementById("experience-list");
    if (!list || !Array.isArray(window.experienceData)) return;
    list.innerHTML = "<p class='section-lead'>Experience data unavailable.</p>";
  }

  function initResumeTabs() {
    const tabs = document.querySelectorAll(".resume-tab");
    const panels = {
      skills: document.getElementById("panel-skills"),
      experience: document.getElementById("panel-experience"),
      resume: document.getElementById("panel-resume"),
    };

    if (!tabs.length) return;

    function activateTab(key) {
      tabs.forEach((t) => {
        const active = t.getAttribute("data-tab") === key;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });

      Object.entries(panels).forEach(([id, panel]) => {
        if (!panel) return;
        const active = id === key;
        panel.classList.toggle("is-active", active);
        if (active) {
          panel.removeAttribute("hidden");
          panel.querySelectorAll(".reveal").forEach((el) => {
            el.classList.add("visible");
          });
          if (id === "experience" && window.ExperienceTimeline) {
            ExperienceTimeline.refresh();
          }
        } else {
          panel.setAttribute("hidden", "");
        }
      });
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        activateTab(tab.getAttribute("data-tab"));
      });
    });

    // Deep-link support: #resume or ?tab=resume opens the Resume tab
    const params = new URLSearchParams(window.location.search);
    const hash = (window.location.hash || "").replace("#", "");
    if (params.get("tab") === "resume" || hash === "resume") {
      activateTab("resume");
    }
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

  /* ---------- Featured projects (cinematic cards) ---------- */
  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid || typeof getFeaturedProjects !== "function") return;

    const projects = getFeaturedProjects();

    grid.innerHTML = projects
      .map((p) => {
        const demoHref = safeHref(p.demoUrl);
        const demoBtn = demoHref
          ? `<a class="btn btn-secondary" href="${escapeHtml(
              demoHref
            )}" target="_blank" rel="noopener noreferrer">Play Demo</a>`
          : "";

        const badge = p.inDevelopment
          ? `<span class="badge-dev project-card-badge">In Development</span>`
          : "";

        return `
          <article class="project-card reveal">
            <div class="project-card-media">
              ${badge}
              ${projectCoverHtml(p)}
              <div class="project-card-overlay">
                <p class="project-card-status">${escapeHtml(p.status)}</p>
                <h3 class="project-card-title">${escapeHtml(p.title)}</h3>
                <p class="project-card-subtitle">${escapeHtml(p.subtitle)}</p>
                <p class="project-card-desc">${escapeHtml(p.description)}</p>
                <ul class="project-card-tags" aria-label="Technologies">
                  ${p.technologies
                    .map((t) => `<li class="tag">${escapeHtml(t)}</li>`)
                    .join("")}
                </ul>
                <div class="project-card-actions">
                  <a class="btn btn-primary" href="project.html?id=${encodeURIComponent(
                    p.id
                  )}">View Project</a>
                  ${demoBtn}
                </div>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    bindImageFallbacks(grid);
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

  /* ---------- Navigation ---------- */
  function initNav() {
    const header = document.getElementById("site-header");
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");
    const navAnchors = document.querySelectorAll("[data-nav]");

    function setScrolled() {
      if (!header) return;
      header.classList.toggle("scrolled", window.scrollY > 24);
    }

    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });

    if (toggle && links) {
      toggle.addEventListener("click", () => {
        const open = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      });

      links.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
          links.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.setAttribute("aria-label", "Open menu");
        });
      });
    }

    const sections = [
      "home",
      "projects",
      "services",
      "skills",
      "about",
      "contact",
    ]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
            navAnchors.forEach((a) => {
              const active = a.getAttribute("href") === `#${id}`;
              a.classList.toggle("active", active);
            });
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      sections.forEach((s) => observer.observe(s));
    }
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll(".reveal");

    if (reduce) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));
  }

  /* ---------- Hero particles ---------- */
  function initParticles() {
    const canvas = document.getElementById("hero-particles");
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      canvas.style.display = "none";
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles = [];
    let raf = 0;
    let w = 0;
    let h = 0;

    function resize() {
      const hero = canvas.parentElement;
      w = hero ? hero.clientWidth : window.innerWidth;
      h = hero ? hero.clientHeight : window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      const count = Math.min(48, Math.floor((w * h) / 28000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        a: Math.random() * 0.45 + 0.15,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 213, ${p.a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        draw();
      }
    });
  }

  function initProfilePhoto() {
    const img = document.querySelector("[data-profile-fallback]");
    if (!img) return;

    const frame = img.closest(".about-focus-photo");
    const placeholder = frame
      ? frame.querySelector(".about-focus-photo-placeholder")
      : null;

    function showPlaceholder() {
      img.style.display = "none";
      if (placeholder) {
        placeholder.hidden = false;
        placeholder.classList.add("is-visible");
      }
    }

    img.addEventListener("error", showPlaceholder);

    if (img.complete && img.naturalWidth === 0) {
      showPlaceholder();
    }
  }

  function initContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("contact-status");
    const submitBtn = document.getElementById("contact-submit");
    if (!form) return;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const cfg = window.portfolioConfig || {};
      const toEmail = (cfg.email || "").trim();

      if (!toEmail || isPlaceholder(toEmail)) {
        setContactStatus(
          status,
          "Add your Gmail in js/config.js (email field) to enable the form.",
          "error"
        );
        return;
      }

      const honeypot = form.querySelector('[name="_gotcha"]');
      if (honeypot && honeypot.value) {
        setContactStatus(status, "Message sent. Thank you!", "success");
        form.reset();
        return;
      }

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !subject || !message) {
        setContactStatus(status, "Please fill in all fields.", "error");
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }
      setContactStatus(status, "Sending your message…", "");

      try {
        // FormSubmit — free email delivery for static sites (no backend).
        // First submission sends a confirmation link to your Gmail — click it once.
        const response = await fetch(
          `https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              subject,
              message,
              _subject: `Portfolio contact: ${subject}`,
              _template: "table",
              _captcha: "false",
            }),
          }
        );

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(data.message || "Could not send message.");
        }

        setContactStatus(
          status,
          "Message sent — check your Gmail. If this is the first time, confirm the FormSubmit email first.",
          "success"
        );
        form.reset();
      } catch (err) {
        setContactStatus(
          status,
          "Could not send right now. Try again, or use Email Me below.",
          "error"
        );
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Message";
        }
      }
    });
  }

  function setContactStatus(el, text, type) {
    if (!el) return;
    el.textContent = text;
    el.classList.remove("is-success", "is-error");
    if (type === "success") el.classList.add("is-success");
    if (type === "error") el.classList.add("is-error");
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    applyConfig();
    renderProjects();
    renderExperience();
    initResumeTabs();
    initProfilePhoto();
    initContactForm();
    initNav();
    initReveal();
    initParticles();
  });
})();
