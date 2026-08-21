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
 *   demoUrl       → Play Demo (auto-labels CrazyGames / itch.io / etc.)
 *   demoLabel     → optional custom button text (overrides auto label)
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
    description: `Solver is a fast-paced multiplayer trivia and puzzle game that combines knowledge, speed, strategy, and AI-powered interactions. Players compete through five rounds of trivia and puzzles, challenge friends or other players around the world, and interact through real-time multiplayer features.

A key feature of the game is the integration of ChatGPT directly into the gameplay experience, providing dynamic hints, feedback, and AI-driven interactions that make each match more engaging and unpredictable.`,
    cover: "assets/images/projects/solver/cover.jpg",
    screenshots: [],
    technologies: [
      "Unity",
      "C#",
      "PlayFab",
      "ChatGPT API",
      "Mirror",
      "Multiplayer Networking",
      "Real-Time Chat",
    ],
    features: [
      "AI-powered trivia and puzzle experience",
      "Integrated ChatGPT API for dynamic hints and feedback",
      "Fast-paced real-time multiplayer gameplay",
      "Five-round trivia and puzzle progression",
      "Global player and friend connection system",
      "Real-time multiplayer chat",
      "PlayFab-powered player and multiplayer services",
      "Interactive AI feedback during gameplay",
      "Competitive gameplay designed for repeated matches",
    ],
    contribution: `As a Game Developer, I was responsible for developing and integrating the core multiplayer, gameplay, and AI systems that power the Solver experience.

My responsibilities included:
- Developed the core multiplayer trivia and puzzle gameplay in Unity
- Implemented the five-round gameplay structure and round progression
- Integrated the ChatGPT API to provide AI-powered hints, feedback, and gameplay interactions
- Developed real-time multiplayer systems for competitive matches
- Implemented real-time in-game chat functionality
- Developed the friend connection and player interaction systems
- Integrated PlayFab for player data and online game services
- Connected multiplayer gameplay with player progression and online features
- Implemented gameplay states, match flow, and multiplayer synchronization
- Debugged and optimized networked gameplay for a smooth multiplayer experience
- Worked on overall system integration and gameplay polish`,
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
    id: "arcade-tycoon",
    title: "Arcade Tycoon",
    subtitle: "Business & Management Simulation",
    description: `Arcade Tycoon is a casual business management and tycoon simulation game developed in Unity 6. Players build and expand their own entertainment business by managing arcade and casino-style facilities, serving customers, collecting resources, upgrading operations, and unlocking new areas.

The game focuses on a progressive Operate → Earn → Upgrade → Expand gameplay loop, where players continuously invest their earnings to grow their entertainment empire. The experience combines player interaction, facility management, customer activity, business progression, resource management, and expansion mechanics.`,
    cover: "assets/images/projects/arcade-tycoon/cover.png",
    screenshots: [],
    technologies: ["Unity", "C#", "WebGL", "CrazyGamesSdk", "Desktop", "Mobile"],
    features: [
      "Arcade and tycoon gameplay systems",
      "Business progression and expansion",
      "Resource collection and upgrades",
      "Arcade and casino-style mechanics",
      "Customer interactions",
      "Desktop and mobile controls",
      "UI and progression interfaces",
      "Browser deployment on CrazyGames",
    ],
    contribution: `As a Game Developer, I was responsible for implementing and integrating the core gameplay systems and interactive mechanics of the project.

My responsibilities included:
- Developed core arcade and tycoon gameplay systems in Unity
- Implemented player movement and interaction mechanics for desktop and mobile controls
- Developed business progression, resource collection, upgrades, and expansion systems
- Implemented facility management and customer interaction systems
- Developed interactive arcade and casino-style gameplay mechanics
- Implemented unlockable areas and progression-based business expansion
- Integrated gameplay systems with the game's economy and progression loop
- Worked on gameplay architecture and system integration
- Collaborated with the artist and level designer to integrate environments, assets, and gameplay content
- Performed debugging, balancing, optimization, and final gameplay polish
- Optimized the game for desktop and mobile browsers
- Prepared and delivered the final build for WebGL/CrazyGames deployment`,
    inDevelopment: false,
    video: "https://www.youtube.com/watch?v=OeHMI7Ab5uM&t=185s",
    demoUrl: "https://www.crazygames.com/game/arcade-casino-tycoon",
    githubUrl: "",
    apkUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
    featured: true,
    rank: 3,
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
  {
    id: "shop-rush-3d",
    title: "Shop Rush 3D",
    subtitle: "Supermarket Tycoon",
    description:
      "Shop Rush 3D is a 3D idle supermarket management game where players start with a small shop and progressively build it into a thriving retail empire. Players manage day-to-day store operations by stocking shelves, serving customers, hiring workers, upgrading facilities, increasing income, and unlocking new areas. The game combines hands-on movement and management with idle progression, creating a satisfying gameplay loop where every upgrade contributes to faster operations, higher profits, and continued business growth. Built in Unity 6, the project supports both desktop and mobile gameplay with simple, intuitive controls.",
    cover: "assets/images/projects/shop-rush-3d/cover.jpg",
    screenshots: [],
    technologies: ["Unity", "C#", "WebGL", "CrazyGamesSdk", "Desktop", "Mobile"],
    features: [
      "Idle supermarket management loop",
      "Stock shelves and serve customers",
      "Hire workers and automate operations",
      "Upgrade facilities and progression systems",
      "Economy and income mechanics",
      "Store expansion and unlockable areas",
      "Hands-on movement and interactions",
      "Desktop and mobile support",
    ],
    contribution:
      "As the Lead Developer, I was responsible for leading the development of the project and overseeing the implementation of its core gameplay systems. My responsibilities included designing and implementing the supermarket management loop, player movement and interactions, product stocking, customer systems, employee automation, upgrade and progression systems, economy and income mechanics, store expansion, UI systems, and overall game optimization. I also worked on integrating and balancing the different gameplay systems to create a smooth, engaging, and scalable tycoon experience across desktop and mobile platforms.",
    inDevelopment: false,
    video: "https://www.youtube.com/watch?v=D1H3-BH71UM&t=39s",
    demoUrl: "https://www.crazygames.com/game/shop-rush-3d",
    githubUrl: "",
    apkUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
    featured: true,
    rank: 8,
  },
  {
    id: "mega-hole-attack",
    title: "Mega Hole Attack",
    subtitle: "Arcade Action Game",
    description: `Mega Hole Attack is a fast-paced arcade action game built in Unity 6, where players control a powerful black hole and absorb bullets, rockets, grenades, and other ammunition to build up their attack power. Once enough firepower has been collected, players unleash devastating attacks against giant dragons and powerful boss enemies before the timer runs out.

The game focuses on quick, satisfying gameplay loops built around collection, progression, combat, and boss battles, with increasingly challenging encounters designed to keep players engaged. The game was released on CrazyGames in July 2026 and supports desktop, mobile, and tablet browsers as well as the CrazyGames app.

Level Design

I worked on designing and implementing multiple gameplay levels and arenas, with each level structured to provide a clear progression in difficulty. Level layouts were designed around:
- Strategic placement of ammunition and collectible weapons
- Enemy and combat encounter positioning
- Increasing difficulty and challenge progression
- Arena layouts that encourage movement and exploration
- Timed gameplay objectives leading into boss encounters
- Balanced weapon collection and attack-power progression

Dragon & Boss Battles

A major part of the game is its giant dragon boss encounters. Players must collect enough ammunition and build their attack power before facing increasingly powerful bosses.

I worked on:
- Implementing dragon boss encounters and combat flow
- Creating different boss encounter setups across levels
- Balancing boss difficulty and player attack progression
- Designing the gameplay flow from weapon collection → power buildup → boss battle
- Integrating explosive attacks and destruction effects to make boss encounters impactful`,
    cover: "assets/images/projects/mega-hole-attack/cover.jpg",
    screenshots: [],
    technologies: ["Unity", "C#", "WebGL", "CrazyGamesSdk", "Desktop", "Mobile"],
    features: [
      "Black-hole movement and weapon absorption",
      "Collect bullets, rockets, grenades, and ammo",
      "Attack-power progression from collected weapons",
      "Multiple levels and arena layouts",
      "Giant dragon boss battles",
      "Timed objectives and combat flow",
      "Explosions, destruction, and combat VFX",
      "Desktop and mobile browser support",
      "CrazyGames deployment",
    ],
    contribution: `As a Game Developer, I was responsible for implementing core gameplay systems, level content, combat mechanics, and boss encounters.

My responsibilities included:
- Developed the core black-hole movement and weapon absorption mechanics
- Implemented collection systems for bullets, rockets, grenades, and other ammunition
- Developed the attack-power progression system based on collected weapons
- Designed and implemented gameplay levels and arena layouts
- Created and integrated dragon boss battles and enemy encounters
- Implemented level progression and increasing difficulty
- Worked on timed gameplay and battle objectives
- Integrated explosions, destruction effects, hit feedback, and combat effects
- Balanced weapon placement, player progression, and boss difficulty
- Optimized gameplay and controls for desktop and mobile browser platforms
- Tested, debugged, and polished gameplay for CrazyGames deployment`,
    inDevelopment: false,
    video: "https://www.youtube.com/watch?v=Txj4dSAb6XE&t=19s",
    demoUrl: "https://www.crazygames.com/game/mega-hole-attack",
    githubUrl: "",
    apkUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
    featured: true,
    rank: 9,
  },
  {
    id: "base-obby",
    title: "Base Obby: Zombie Defense",
    subtitle: "Survival Base-Defense Game",
    description: `Base Obby: Zombie Defense is a fast-paced survival and base-defense game where players defend their base against increasingly powerful zombie waves and the mysterious Meme Enemy 67.

The game combines wave-based combat, base building, weapon progression, resource management, farming, soldier recruitment, loot rewards, and character customization. Players strengthen their defenses, collect resources, unlock powerful weapons, and expand their capabilities to survive increasingly difficult attacks.`,
    cover: "assets/images/projects/base-obby/cover.jpg",
    screenshots: [],
    technologies: ["Unity", "C#", "WebGL", "CrazyGamesSdk", "Desktop", "Mobile"],
    features: [
      "Zombie wave survival and base defense",
      "Base building and upgrade systems",
      "Weapon unlocks and combat progression",
      "Loot chests and reward mechanics",
      "Soldier recruitment and defensive support",
      "Farming and resource generation",
      "Character skins and customization",
      "Increasing difficulty and enemy encounters",
      "Desktop and mobile browser support",
      "CrazyGames deployment",
    ],
    contribution: `As the Lead Developer, I was responsible for the technical development and delivery of the game, working closely with the artist and level designer to bring the gameplay, environments, and visual content together into a polished and optimized final product.

My responsibilities included:
- Developed the core zombie wave and survival systems
- Implemented base defense and upgrade mechanics
- Developed weapon systems, combat mechanics, and weapon progression
- Implemented loot chest and reward systems
- Developed soldier recruitment and combat-support mechanics
- Built the farming and resource-generation system
- Implemented base, weapon, and resource progression systems
- Developed enemy encounters and progressive difficulty scaling
- Implemented character skin and customization systems
- Worked with the level designer to integrate and refine levels, enemy encounters, and gameplay progression
- Collaborated with the artist to integrate characters, environments, weapons, animations, and VFX
- Provided technical direction and handled asset and gameplay integration across the project
- Performed debugging, balancing, optimization, and final gameplay polish
- Optimized the final product for desktop and mobile browsers
- Managed the final integration, testing, and CrazyGames/WebGL deployment`,
    inDevelopment: false,
    video: "https://www.youtube.com/watch?v=4w8fYgIig2U",
    demoUrl: "https://www.crazygames.com/game/base-obby-zombie-defense",
    githubUrl: "",
    apkUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
    featured: true,
    rank: 10,
  },
  {
    id: "harvest-land-tycoon",
    title: "Harvest Land Tycoon",
    subtitle: "Farming & Business Simulation",
    description: `Harvest Land Tycoon is a 3D farming, business, and tycoon simulation game developed in Unity 6. Players build and expand their own agricultural business by growing crops, managing animals, producing resources, operating factories, selling products, hiring workers, and unlocking new areas.

The game combines farming, resource management, production, automation, idle progression, and business expansion into a continuous progression loop. Players reinvest their earnings into upgrades and new facilities to increase production and transform a small farm into a growing agricultural business.`,
    cover: "assets/images/projects/harvest-land-tycoon/cover.jpg",
    screenshots: [],
    technologies: ["Unity", "C#", "WebGL", "CrazyGamesSdk", "Desktop", "Mobile"],
    features: [
      "Crop planting, harvesting, and upgrades",
      "Animal and livestock management",
      "Factories, production, and selling systems",
      "Idle income and tycoon progression",
      "Worker hiring and farm automation",
      "Land expansion and new-area unlocks",
      "Lucky Spin and bonus reward systems",
      "Full 3D farm environment development",
      "Desktop and mobile browser support",
      "CrazyGames deployment",
    ],
    contribution: `As the Lead Developer, I was responsible for the end-to-end development and delivery of the game, including gameplay systems, environment creation, integration, optimization, and final polish.

Unlike a project where I focused only on programming, I handled both the technical development and the complete 3D environment, taking ownership of the game from its core systems through to its final presentation.

My responsibilities included:
- Developed the core farming and tycoon gameplay systems in Unity
- Implemented crop planting, growing, and harvesting mechanics
- Developed animal and livestock systems
- Built resource collection, production, and processing systems
- Implemented factories and product-processing gameplay
- Developed the game's economy, income, and progression systems
- Implemented idle/passive income and automation mechanics
- Developed worker hiring and farm automation systems
- Implemented upgrades, land expansion, and area unlocking
- Developed reward and progression mechanics, including bonus systems
- Designed and created the complete 3D farming environment and gameplay areas
- Worked on environment layout, scene composition, lighting, and world presentation
- Integrated gameplay systems, environment, assets, and interactive elements into a cohesive experience
- Handled debugging, balancing, optimization, and final gameplay polish
- Optimized the game and environment for desktop and mobile browsers
- Prepared and delivered the final WebGL/CrazyGames build`,
    inDevelopment: false,
    video: "https://www.youtube.com/watch?v=7RLYtzjzNo8&t=488s",
    demoUrl: "https://www.crazygames.com/game/harvest-land-tycoon",
    githubUrl: "",
    apkUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
    featured: true,
    rank: 11,
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
