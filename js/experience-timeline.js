/**
 * Cinematic Experience timeline — GSAP ScrollTrigger
 * Depends on: experience.js, gsap, ScrollTrigger
 */
(function (global) {
  "use strict";

  const ExperienceTimeline = {
    ctx: null,
    pathLength: 0,
    built: false,

    reduceMotion() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },

    escape(str) {
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    },

    padLevel(n) {
      return String(n).padStart(2, "0");
    },

    buildMarkup(root) {
      const source = global.experienceData;
      if (!Array.isArray(source) || !source.length) {
        root.innerHTML =
          "<p class='section-lead'>Add experience entries in js/experience.js.</p>";
        return;
      }

      // Newest / present first (reverse of chronological data order)
      const items = source.slice().reverse();
      const jobItems = source.filter((i) => i.type !== "education");

      const milestones = items
        .map((item, index) => {
          const side = index % 2 === 0 ? "right" : "left";
          const isEducation = item.type === "education";
          const jobLevel = jobItems.indexOf(item) + 1;
          const levelText = isEducation
            ? "Education"
            : `Level ${this.padLevel(jobLevel)}`;
          const duties = (item.duties || [])
            .map((d) => `<li>${this.escape(d)}</li>`)
            .join("");
          const techs = (item.technologies || [])
            .map((t) => `<li class="tag">${this.escape(t)}</li>`)
            .join("");
          const location = item.location
            ? `<span class="xp-location">${this.escape(item.location)}</span>`
            : "";

          return `
            <article
              class="xp-milestone xp-milestone--${side}${
                isEducation ? " xp-milestone--education" : ""
              }"
              data-xp-milestone
            >
              <div class="xp-card">
                <div class="xp-card-head">
                  <div>
                    <p class="xp-level">${levelText}</p>
                    <span class="xp-level-line" aria-hidden="true"></span>
                    <p class="xp-level-name">${this.escape(
                      item.levelLabel ||
                        (isEducation ? "EDUCATION" : "EXPERIENCE")
                    )}</p>
                  </div>
                  ${location}
                </div>
                <h3 class="xp-role">${this.escape(item.role)}</h3>
                <p class="xp-org">
                  ${this.escape(item.org)}
                  <span class="xp-org-sep">—</span>
                  <span class="xp-year">${this.escape(item.period)}</span>
                </p>
                ${
                  duties
                    ? `<p class="xp-duties-label">${
                        isEducation ? "Highlights" : "Core Duties"
                      }</p>
                <ul class="xp-duties">${duties}</ul>`
                    : ""
                }
                ${
                  techs
                    ? `<ul class="xp-tech" aria-label="${
                        isEducation ? "Field of study" : "Technologies"
                      }">${techs}</ul>`
                    : ""
                }
              </div>
              <span class="xp-milestone-node" aria-hidden="true"></span>
            </article>
          `;
        })
        .join("");

      root.innerHTML = `
        <div class="xp-journey" id="xp-journey">
          <div class="xp-journey-bg" aria-hidden="true">
            <div class="xp-journey-grid"></div>
            <div class="xp-journey-glow xp-journey-glow-cyan"></div>
            <div class="xp-journey-glow xp-journey-glow-blue"></div>
          </div>

          <header class="xp-intro" data-xp-intro>
            <p class="xp-intro-eyebrow">Experience</p>
            <h3 class="xp-intro-title">Building. Learning. Evolving.</h3>
            <p class="xp-intro-lead">
              From learning the fundamentals to building complete game systems,
              every project has shaped the way I think, create, and solve
              problems. This journey is driven by curiosity, continuous
              learning, and the desire to build something better with every
              project.
            </p>
          </header>

          <div class="xp-timeline" id="xp-timeline">
            <svg
              class="xp-path-svg"
              id="xp-path-svg"
              viewBox="0 0 120 1000"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="xpPathGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#22D3D5" />
                  <stop offset="100%" stop-color="#3B82F6" />
                </linearGradient>
              </defs>
              <path
                class="xp-path-track"
                id="xp-path-track"
                d="M60,20 C20,120 100,220 60,320 C20,420 100,520 60,620 C20,720 100,820 60,920 C40,960 50,980 60,990"
              />
              <path
                class="xp-path-draw"
                id="xp-path-draw"
                d="M60,20 C20,120 100,220 60,320 C20,420 100,520 60,620 C20,720 100,820 60,920 C40,960 50,980 60,990"
              />
            </svg>

            <div class="xp-milestones">
              ${milestones}
            </div>
          </div>
        </div>
      `;

      this.built = true;
      this.fitSvgHeight();
    },

    fitSvgHeight() {
      const timeline = document.getElementById("xp-timeline");
      const svg = document.getElementById("xp-path-svg");
      if (!timeline || !svg) return;

      const height = Math.max(timeline.scrollHeight, 600);
      svg.setAttribute("viewBox", `0 0 120 ${height}`);
      svg.style.height = `${height}px`;

      const pathD = this.buildCurvePath(height);
      const track = document.getElementById("xp-path-track");
      const draw = document.getElementById("xp-path-draw");
      if (track) track.setAttribute("d", pathD);
      if (draw) draw.setAttribute("d", pathD);
    },

    buildCurvePath(height) {
      const top = 24;
      const bottom = height - 24;
      const mid = (top + bottom) / 2;
      const q1 = top + (bottom - top) * 0.25;
      const q3 = top + (bottom - top) * 0.75;
      return `M60,${top} C18,${q1} 102,${q1} 60,${mid} C18,${q3} 102,${q3} 60,${bottom}`;
    },

    kill() {
      if (this.ctx) {
        this.ctx.revert();
        this.ctx = null;
      }
      if (global.ScrollTrigger) {
        ScrollTrigger.getAll().forEach((t) => {
          if (t.vars && t.vars.id && String(t.vars.id).startsWith("xp-")) {
            t.kill();
          }
        });
      }
    },

    initAnimations() {
      if (!global.gsap || !global.ScrollTrigger) return;

      const journey = document.getElementById("xp-journey");
      const timeline = document.getElementById("xp-timeline");
      const draw = document.getElementById("xp-path-draw");
      const intro = journey && journey.querySelector("[data-xp-intro]");
      const milestones = journey
        ? journey.querySelectorAll("[data-xp-milestone]")
        : [];

      if (!journey || !timeline || !draw) return;

      this.kill();
      this.fitSvgHeight();

      if (!global.gsap || !global.ScrollTrigger || this.reduceMotion()) {
        if (draw) {
          const length = draw.getTotalLength();
          draw.style.strokeDasharray = `${length}`;
          draw.style.strokeDashoffset = "0";
        }
        milestones.forEach((m) => {
          m.classList.add("is-active", "is-passed", "is-visible");
        });
        if (intro) {
          intro.style.opacity = "1";
          intro.style.transform = "none";
        }
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const length = draw.getTotalLength();
      this.pathLength = length;
      draw.style.strokeDasharray = `${length}`;
      draw.style.strokeDashoffset = `${length}`;

      this.ctx = gsap.context(() => {
        if (intro) {
          gsap.fromTo(
            intro.children,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: "power2.out",
              scrollTrigger: {
                id: "xp-intro",
                trigger: intro,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        gsap.to(draw, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            id: "xp-path",
            trigger: timeline,
            start: "top 70%",
            end: "bottom 25%",
            scrub: 0.6,
          },
        });

        milestones.forEach((milestone, index) => {
          const card = milestone.querySelector(".xp-card");
          const fromLeft = milestone.classList.contains("xp-milestone--left");
          const xFrom = fromLeft ? -72 : 72;

          if (card) {
            gsap.fromTo(
              card,
              { autoAlpha: 0, x: xFrom, y: 18 },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                  id: `xp-card-${index}`,
                  trigger: milestone,
                  start: "top 78%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          ScrollTrigger.create({
            id: `xp-node-${index}`,
            trigger: milestone,
            start: "top 72%",
            end: "bottom 35%",
            onEnter: () => {
              milestones.forEach((m) => m.classList.remove("is-active"));
              milestone.classList.add("is-visible", "is-active", "is-passed");
            },
            onEnterBack: () => {
              milestones.forEach((m) => m.classList.remove("is-active"));
              milestone.classList.add("is-visible", "is-active");
            },
            onLeave: () => {
              milestone.classList.remove("is-active");
              milestone.classList.add("is-passed", "is-visible");
            },
            onLeaveBack: () => {
              milestone.classList.remove("is-active", "is-passed");
            },
          });
        });
      }, journey);
    },

    render() {
      const root = document.getElementById("experience-list");
      if (!root) return;
      this.buildMarkup(root);
    },

    refresh() {
      this.render();
      requestAnimationFrame(() => {
        this.fitSvgHeight();
        this.initAnimations();
        if (global.ScrollTrigger) ScrollTrigger.refresh();
      });
    },
  };

  global.ExperienceTimeline = ExperienceTimeline;
})(window);
