# Uzair Ahmad — Unity Game Developer Portfolio

A modern, dark-themed personal portfolio for **Uzair Ahmad**, a Unity Game Developer. Built as a static website for **GitHub Pages** — no backend, no build step, no paid services.

## What’s included

- Single-page portfolio (`index.html`) with Home, Projects, Skills, About, Resume, Contact
- Project detail pages (`project.html?id=...`) driven by shared data
- Easy updates via two files: `js/config.js` and `js/projects.js`
- Responsive layout, sticky nav, scroll animations, accessibility basics
- SEO: meta tags, `robots.txt`, `sitemap.xml`, favicon

## How to run locally

1. Open the project folder in Cursor / VS Code / File Explorer.
2. Open `index.html` in a browser (double-click, or right-click → Open with).

That’s enough for most browsing. If your browser blocks local scripts or images oddly, use a simple local server:

- **VS Code / Cursor:** install “Live Server” and click “Go Live”
- **Python:** `python -m http.server 5500` then visit `http://localhost:5500`

## Replace personal information

Edit **only** [`js/config.js`](js/config.js):

```js
const portfolioConfig = {
  name: "Uzair Ahmad",
  title: "Unity Game Developer",
  email: "you@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourprofile",
  fiverr: "https://www.fiverr.com/yourusername",
  cv: "assets/Uzair-Ahmad-CV.pdf"
};
```

Hero social links, contact buttons, footer links, and CV buttons update automatically.

## Experience timeline

The **Experience** tab uses a cinematic scroll-driven timeline (`js/experience-timeline.js`) with GSAP ScrollTrigger (CDN).

Edit milestones in [`js/experience.js`](js/experience.js) (`role`, `org`, `period`, `duties`, `technologies`, `levelLabel`).

Open the Experience tab and scroll to see the path draw and nodes activate.

```js
{
  role: "Unity Game Developer",
  org: "YOUR_COMPANY",
  period: "Jan 2024 — Present",
  location: "Remote",
  duties: [
    "What you built...",
    "Another responsibility..."
  ]
}
```

Replace the portfolio-based entries with your real jobs when ready. Do not invent employers.

Edit **only** [`js/projects.js`](js/projects.js).

### To add a new project

1. Create a folder, e.g. `assets/images/projects/my-new-game/`
2. Add images (`cover.jpg`, `gameplay-1.jpg`, …)
3. Copy an existing project object in `projects.js`
4. Change `id`, titles, description, paths, technologies, features, etc.
5. Home page shows up to **4 featured** projects:
   - `featured: true` — eligible for home
   - `rank: 1` — order (1 = first). Lower rank wins; only the top 4 ranks appear on home
   - `featured: false` — All Projects page only
6. Open `project.html?id=my-new-game` to preview the detail page

### YouTube video

Set the `video` field to a normal YouTube URL:

```js
video: "https://www.youtube.com/watch?v=VIDEO_ID"
```

Leave it as `"YOUR_YOUTUBE_URL"` (or `""`) to show a “coming soon” placeholder.

### Screenshots

Add paths to the `screenshots` array:

```js
screenshots: [
  "assets/images/projects/solver/gameplay-1.jpg",
  "assets/images/projects/solver/gameplay-2.jpg"
]
```

### Demo / GitHub links

```js
demoUrl: "https://your-game-demo-url.com",
githubUrl: "https://github.com/yourusername/repo"
```

If values still start with `YOUR_`, those buttons stay hidden / show a helper note.

## Replace images

Put your own files under:

```
assets/images/projects/solver/
assets/images/projects/student-simulator/
assets/images/projects/arcade-tycoon/
assets/images/projects/idle-rpg/
assets/images/profile/   (optional)
```

Filenames are already set in `js/projects.js`. If a file is missing, a professional placeholder appears — the layout will not break.

**Do not** use copyrighted stock screenshots you don’t own.

## Contact form (sends to Gmail)

The contact section includes a message form that emails you using [FormSubmit](https://formsubmit.co) — free, no backend, works on GitHub Pages.

1. Set your Gmail in [`js/config.js`](js/config.js):
   ```js
   email: "you@gmail.com"
   ```
2. Open the live site, submit a test message once.
3. Check your Gmail for a **FormSubmit confirmation** email and click Activate.
4. After that, new messages arrive in your inbox.

Spam protection: a hidden honeypot field is included. Social buttons still work beside the form.

1. Export your resume as a PDF
2. Save it as `assets/Uzair-Ahmad-CV.pdf`
3. Or change the `cv` path in `js/config.js`

Then use **Download CV** / **View / Open CV** on the site.

## Deploy to GitHub Pages

1. Create a GitHub repository (e.g. `yourusername.github.io` for a user site, or any repo for a project site).
2. Upload all files in this folder to the repository root (or push via Git).
3. On GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: `main` (or `master`), folder: `/ (root)`
4. Wait a minute, then open your Pages URL.

### After deploy

- Update `YOUR_USERNAME` in [`robots.txt`](robots.txt) and [`sitemap.xml`](sitemap.xml)
- If this is a **project** site (`https://username.github.io/repo-name/`), either:
  - Host as a user/organization site at the root, **or**
  - Ensure all links stay relative (they already are) and set the Pages URL correctly in sitemap/robots

## File structure

```
├── index.html              # Main portfolio
├── project.html            # Project detail (?id=slug)
├── css/style.css
├── js/
│   ├── config.js           # Personal details
│   ├── projects.js         # All project data
│   ├── script.js           # Home page behavior
│   └── project-detail.js   # Detail page behavior
├── assets/
│   ├── Uzair-Ahmad-CV.pdf  # Add your CV here
│   └── images/projects/...
├── favicon/
├── robots.txt
├── sitemap.xml
└── README.md
```

## Tips

- Prefer editing `config.js` and `projects.js` — you usually don’t need to touch HTML/CSS for content updates.
- Keep images reasonably sized (e.g. under ~500KB each) for faster loading.
- Test the mobile menu after changing nav links.

© 2026 Uzair Ahmad
