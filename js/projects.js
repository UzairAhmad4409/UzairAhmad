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
 * Screenshots: add image paths to show the Screenshots section.
 *   screenshots: ["assets/images/projects/id/gameplay-1.jpg"]
 * Use screenshots: [] (or omit) to hide that section entirely.
 *
 * Links (detail page) — leave as "" or YOUR_* to hide each button.
 * The whole Links section hides if none are set:
 *   demoUrl       → Play Demo
 *   githubUrl     → View Source
 *   apkUrl        → Download APK (file path or URL, e.g. "assets/apks/game.apk")
 *   playStoreUrl  → Google Play
 *   appStoreUrl   → App Store
 *
 * Status (choose one via inDevelopment):
 *   inDevelopment: false  → shows "Completed"
 *   inDevelopment: true   → shows "Development Phase"
 * ============================================================
 */
const FEATURED_HOME_LIMIT = 4;

const projectsData = [
  {
    id: "solver",
    title: "Solver",
    subtitle: "AI-Powered Multiplayer Trivia Game",
    description:
      "Solver is a fast-paced multiplayer trivia game where knowledge, speed, strategy, and AI come together. Challenge friends, compete with players worldwide, and see who can become the ultimate Solver. With ChatGPT integrated into gameplay, every match brings something new—from clever hints and real-time feedback to unexpected AI interactions. Battle through five rounds of trivia and puzzles, connect with players globally, and chat in real time while you compete.",
    cover: "assets/images/projects/solver/cover.jpg",
    screenshots: [],
    technologies: ["Unity", "C#", "PlayFab", "ChatGPT API"],
    features: [
      "AI-powered trivia experience",
      "ChatGPT integration",
      "Fast-paced multiplayer gameplay",
      "Five rounds of trivia and puzzles",
      "Global friend-making system",
      "Real-time multiplayer chat",
      "Interactive AI feedback and hints",
    ],
    contribution:
      "Developed the Unity multiplayer trivia experience including ChatGPT-powered AI feedback and hints, five-round puzzle/trivia gameplay, real-time multiplayer systems, in-game chat, friend connections, and PlayFab-backed player features.",
    inDevelopment: false,
    video: "https://www.youtube.com/watch?v=I5ld6bNjgTk",
    demoUrl: "",
    githubUrl: "",
    apkUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
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
    inDevelopment: false,
    video: "YOUR_YOUTUBE_URL",
    demoUrl: "YOUR_GAME_DEMO_URL",
    githubUrl: "YOUR_GITHUB_URL",
    apkUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
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
    inDevelopment: false,
    video: "YOUR_YOUTUBE_URL",
    demoUrl: "YOUR_GAME_DEMO_URL",
    githubUrl: "YOUR_GITHUB_URL",
    apkUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
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
    inDevelopment: true,
    video: "YOUR_YOUTUBE_URL",
    demoUrl: "YOUR_GAME_DEMO_URL",
    githubUrl: "YOUR_GITHUB_URL",
    apkUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
    featured: true,
    rank: 4,
  },
  {
    id: "free-jonny",
    title: "Free Jonny",
    subtitle: "2D Endless Game",
    description:
      "Free Jonny is a fast-paced 2D endless adventure game where players guide Jonny through dynamic environments filled with enemies, obstacles, and increasing challenges. The game features multiple unique environments, progressively increasing difficulty, responsive gameplay, and competitive leaderboard support. With engaging pixel-art visuals and endless score-chasing gameplay, Free Jonny delivers a fun and replayable arcade experience that encourages players to survive longer and achieve higher scores.",
    cover: "assets/images/projects/free-jonny/cover.jpg",
    screenshots: [],
    technologies: ["Unity", "C#", "Pixel Art"],
    features: [
      "Fast-paced endless gameplay",
      "Multiple unique environments to explore",
      "Strategic puzzle-solving challenges",
      "Interactive adventure scenarios",
      "Different enemy types with unique behaviors",
      "Increasing difficulty as the game progresses",
      "Dynamic obstacles and challenges",
      "Level-based progression and unlockable content",
      "Global leaderboard system",
      "High-score tracking and competitive gameplay",
      "Smooth and responsive controls",
      "Visually engaging pixel-art environments",
    ],
    contribution:
      "Designed and developed the complete 2D endless game experience in Unity, including core gameplay mechanics, multiple environments, enemy systems, increasing difficulty, leaderboard integration, and pixel-art visuals as a completed portfolio project.",
    inDevelopment: false,
    video: "https://www.youtube.com/watch?v=JDFCDAbG_dM",
    demoUrl: "",
    githubUrl: "",
    apkUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
    featured: true,
    rank: 5,
  },
  {
    id: "card-duel",
    title: "Card Duel",
    subtitle: "Multiplayer Card Game",
    description:
      "Card Duel is a Multiplayer strategic card-based game developed in Unity using Mirror Networking, featuring dynamic combat mechanics. Players use unique cards with different abilities and attributes to battle enemies strategically—choosing the right cards, managing options, and making tactical decisions to defeat powerful monsters. After each attack, a reward wheel rotates to add chance and strategy, which can grant a reward, trigger an enemy attack, or create another gameplay outcome. The project includes a flexible Inspector-configurable card system, raycast-based interaction, strategic board movement, PlayFab authentication, and a multiplayer-ready architecture.",
    cover: "assets/images/projects/card-duel/cover.jpg",
    screenshots: [],
    technologies: ["Unity", "C#", "Mirror", "PlayFab"],
    features: [
      "Strategic card-based combat",
      "PlayFab authentication and auto-login",
      "Multiplayer-ready architecture",
      "Mirror Networking",
      "Dynamic reward and attack wheel system",
      "Card attributes: attack, health, and shield",
      "Configurable special card abilities",
      "Raycast-based player interaction",
      "Strategic movement between board locations",
      "Three unique monsters to defeat",
      "Health restoration mechanics",
    ],
    contribution:
      "Led the end-to-end development of Card Duel, a complete Unity-based strategic card combat game. Oversaw the design and implementation of core gameplay systems, including dynamic card mechanics with Inspector-configurable abilities, monster encounters, reward-wheel outcomes, raycast-based interactions, and player movement across the game board. Also led the integration of PlayFab for player registration, login, and auto-login, while establishing a scalable architecture to support future multiplayer expansion and additional game features.",
    inDevelopment: false,
    video: "https://www.youtube.com/watch?v=8K6zPUA8xF0",
    demoUrl: "",
    githubUrl: "",
    apkUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
    featured: true,
    rank: 6,
  },
  {
    id: "blow",
    title: "Blow",
    subtitle: "3D Endless Runner Game",
    description:
      "Blow is a 3D endless runner where you control a plane with your voice. Built in Unity, the game uses real-time microphone input—every whisper, shout, or blow is analyzed by loudness (RMS amplitude) and turned into flight energy. Whisper and the plane gently glides; get louder and it flies faster, so volume becomes a dynamic controller that affects gameplay in real time. The experience combines audio-driven flight with mobile runner systems including dynamic levels, power-ups, character customization, and competitive scoring.",
    cover: "assets/images/projects/blow/cover.jpg",
    screenshots: [],
    technologies: ["Unity", "C#", "PlayFab", "AdMob", "IAP"],
    features: [
      "Voice-controlled flight via microphone input",
      "Real-time loudness (RMS) to movement mapping",
      "PlayFab integration and leaderboards",
      "In-App Purchasing",
      "AdMob plugin",
      "Dynamic level design",
      "Power-ups and boosters",
      "Character customization",
      "High-score tracking",
      "Procedural obstacle generation",
      "Smooth controls and intuitive UI",
      "Mobile optimization",
    ],
    contribution:
      "I was responsible for designing and developing the complete game experience in Unity. My role included implementing the voice-controlled gameplay system using real-time microphone input, core gameplay mechanics, procedural obstacle generation, dynamic levels, power-ups, character customization, UI systems, high-score tracking, and mobile optimization. I also integrated PlayFab for leaderboards, In-App Purchasing, and AdMob to create a complete and engaging mobile game experience.",
    inDevelopment: false,
    video: "https://www.youtube.com/watch?v=TkY4SXVkir4",
    demoUrl: "",
    githubUrl: "",
    apkUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
    featured: true,
    rank: 7,
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
