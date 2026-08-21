/**
 * ============================================================
 * PROJECTS DATA — add / edit projects HERE only
 * ============================================================
 * HOW TO ADD A NEW PROJECT:
 * 1. Create a folder: assets/images/projects/your-project-id/
 * 2. Add cover.jpg and screenshot images
 * 3. Copy an existing project object below
 * 4. Update id, title, images, video, links, etc.
 * 5. Home page (Featured — max 4):
 *      featured: true   → eligible for the home grid
 *      rank: 1          → order on home (1 = first, 2 = second, …)
 *    Only the 4 lowest ranks among featured:true appear on home.
 *    Set featured: false (or omit rank) for All Projects only.
 *
 * YouTube: paste a normal URL like
 *   https://www.youtube.com/watch?v=VIDEO_ID
 *   or https://youtu.be/VIDEO_ID
 * Leave video as "" to hide the gameplay section.
 *
 * Demo / GitHub: leave as YOUR_* placeholders to hide those buttons.
 * ============================================================
 */
const FEATURED_HOME_LIMIT = 4;

const projectsData = [
  {
    id: "solver",
    title: "Solver",
    subtitle: "Multiplayer Puzzle & Trivia Game",
    description:
      "Solver is a multiplayer puzzle and trivia game developed in Unity, featuring real-time multiplayer gameplay, player authentication and interactive game systems.",
    cover: "assets/images/projects/solver/cover.jpg",
    screenshots: [
      "assets/images/projects/solver/gameplay-1.jpg",
      "assets/images/projects/solver/gameplay-2.jpg",
      "assets/images/projects/solver/gameplay-3.jpg",
    ],
    technologies: ["Unity", "C#", "Photon PUN", "PlayFab", "ChatGPT API"],
    features: [
      "Real-time multiplayer gameplay",
      "Player authentication",
      "Multiplayer synchronization",
      "Puzzle and trivia systems",
      "Player data",
      "Game UI and progression",
    ],
    contribution:
      "Developed core gameplay systems, multiplayer networking with Photon PUN, PlayFab authentication and player data, puzzle/trivia logic, and game UI.",
    status: "Completed / Portfolio Project",
    inDevelopment: false,
    video: "YOUR_YOUTUBE_URL",
    demoUrl: "YOUR_GAME_DEMO_URL",
    githubUrl: "YOUR_GITHUB_URL",
    featured: true,
    rank: 1,
  },
  {
    id: "student-simulator",
    title: "Student Simulator",
    subtitle: "2.5D Simulation Game",
    description:
      "A 2.5D student-life simulation game developed in Unity, featuring interactive gameplay systems, character movement, UI and progression mechanics.",
    cover: "assets/images/projects/student-simulator/cover.jpg",
    screenshots: [
      "assets/images/projects/student-simulator/gameplay-1.jpg",
      "assets/images/projects/student-simulator/gameplay-2.jpg",
    ],
    technologies: ["Unity", "C#", "2.5D", "UI/UX"],
    features: [
      "2.5D character movement and interaction",
      "Student-life simulation systems",
      "Progression and UI mechanics",
      "Interactive gameplay loops",
    ],
    contribution:
      "Built gameplay systems, character controllers, simulation mechanics, and UI/UX for a 2.5D student-life experience in Unity.",
    status: "Completed / Portfolio Project",
    inDevelopment: false,
    video: "YOUR_YOUTUBE_URL",
    demoUrl: "YOUR_GAME_DEMO_URL",
    githubUrl: "YOUR_GITHUB_URL",
    featured: true,
    rank: 2,
  },
  {
    id: "arcade-tycoon",
    title: "Arcade Casino Tycoon",
    subtitle: "WebGL / Browser Game",
    description:
      "A browser-based arcade management game developed in Unity and designed for WebGL platforms.",
    cover: "assets/images/projects/arcade-tycoon/cover.jpg",
    screenshots: [
      "assets/images/projects/arcade-tycoon/gameplay-1.jpg",
      "assets/images/projects/arcade-tycoon/gameplay-2.jpg",
    ],
    technologies: ["Unity", "C#", "WebGL", "Game UI"],
    features: [
      "Arcade management gameplay",
      "WebGL / browser deployment",
      "Game UI systems",
      "Progression and economy loops",
    ],
    contribution:
      "Developed the Unity WebGL arcade management experience, including gameplay systems and game UI for browser platforms.",
    status: "Completed / Published Project",
    inDevelopment: false,
    video: "YOUR_YOUTUBE_URL",
    demoUrl: "YOUR_GAME_DEMO_URL",
    githubUrl: "YOUR_GITHUB_URL",
    featured: true,
    rank: 3,
  },
  {
    id: "idle-rpg",
    title: "Idle RPG",
    subtitle: "Cultivation / Xianxia Idle RPG",
    description:
      "A vertical mobile idle RPG prototype inspired by cultivation-themed progression systems, featuring auto-combat, character progression, equipment, skills and stage-based progression.",
    cover: "assets/images/projects/idle-rpg/cover.jpg",
    screenshots: [
      "assets/images/projects/idle-rpg/gameplay-1.jpg",
      "assets/images/projects/idle-rpg/gameplay-2.jpg",
    ],
    technologies: ["Unity", "C#", "Mobile", "PlayFab"],
    features: [
      "Auto-combat systems",
      "Character progression",
      "Equipment and skills",
      "Stage-based progression",
      "Cultivation / idle loops",
      "PlayFab integration",
    ],
    contribution:
      "Prototyping core idle RPG systems including auto-combat, progression, equipment, skills, and backend integration with PlayFab for a vertical mobile experience.",
    status: "In Development",
    inDevelopment: true,
    video: "YOUR_YOUTUBE_URL",
    demoUrl: "YOUR_GAME_DEMO_URL",
    githubUrl: "YOUR_GITHUB_URL",
    featured: true,
    rank: 4,
  },
  {
    id: "free-jonny",
    title: "Free Jonny",
    subtitle: "Puzzle Adventure Game",
    description:
      "Free Jonny is an engaging puzzle and adventure game built around helping Jonny escape challenging situations. Players must think strategically, solve interactive puzzles, and make the right choices to progress through each level. With increasing difficulty and creative gameplay scenarios, the game is designed to test problem-solving skills while keeping the experience fun, intuitive, and entertaining. The project focuses on delivering smooth gameplay, responsive interactions, visually engaging environments, and a rewarding level-based progression system.",
    cover: "assets/images/projects/free-jonny/cover.jpg",
    screenshots: [],
    technologies: ["Unity", "C#", "Pixel Art"],
    features: [
      "Strategic puzzle solving",
      "Interactive adventure scenarios",
      "Level-based progression",
      "Increasing difficulty",
      "Smooth, responsive gameplay",
      "Visually engaging pixel-art environments",
    ],
    contribution:
      "Designed and developed the full puzzle-adventure experience in Unity — gameplay systems, level progression, interactive puzzles, and pixel-art presentation as a completed portfolio project.",
    status: "Completed / Portfolio Project",
    inDevelopment: false,
    video: "https://www.youtube.com/watch?v=JDFCDAbG_dM",
    demoUrl: "YOUR_GAME_DEMO_URL",
    githubUrl: "YOUR_GITHUB_URL",
    featured: true,
    rank: 5,
  },
];

/** Look up a project by id (used on project.html?id=...) */
function getProjectById(id) {
  return projectsData.find((p) => p.id === id) || null;
}

/**
 * Featured projects for the home page grid.
 * Only featured:true, sorted by rank (1 first), capped at FEATURED_HOME_LIMIT.
 */
function getFeaturedProjects() {
  return projectsData
    .filter((p) => p.featured)
    .slice()
    .sort((a, b) => {
      const rankA = Number.isFinite(a.rank) ? a.rank : Number.MAX_SAFE_INTEGER;
      const rankB = Number.isFinite(b.rank) ? b.rank : Number.MAX_SAFE_INTEGER;
      if (rankA !== rankB) return rankA - rankB;
      return a.title.localeCompare(b.title);
    })
    .slice(0, FEATURED_HOME_LIMIT);
}

/** All projects for projects.html (featured first by rank, then the rest) */
function getAllProjects() {
  return projectsData.slice().sort((a, b) => {
    const rankA = a.featured
      ? Number.isFinite(a.rank)
        ? a.rank
        : Number.MAX_SAFE_INTEGER / 2
      : Number.MAX_SAFE_INTEGER;
    const rankB = b.featured
      ? Number.isFinite(b.rank)
        ? b.rank
        : Number.MAX_SAFE_INTEGER / 2
      : Number.MAX_SAFE_INTEGER;
    if (rankA !== rankB) return rankA - rankB;
    return a.title.localeCompare(b.title);
  });
}
