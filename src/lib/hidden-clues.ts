export type HiddenClueDefinition = {
  id: string;
  section: string;
  teaser: string;
  reveal: string;
  xp: number;
};

export const HIDDEN_CLUES: HiddenClueDefinition[] = [
  {
    id: "about-curiosity",
    section: "about",
    teaser: "Curiosity started everything.",
    reveal: "A quiet eye can read the first signal.",
    xp: 10,
  },
  {
    id: "projects-repeat",
    section: "projects",
    teaser: "Build. Break. Repeat.",
    reveal: "Practice is the hidden skill behind every project.",
    xp: 10,
  },
  {
    id: "skills-repetition",
    section: "skills",
    teaser: "Mastery hides behind repetition.",
    reveal: "Growth appears when a tool is used again and again.",
    xp: 10,
  },
  {
    id: "journey-constellation",
    section: "timeline",
    teaser: "The stars answer only patient visitors.",
    reveal: "Progress is a path, not a single moment.",
    xp: 10,
  },
  {
    id: "github-trail",
    section: "github",
    teaser: "The quietest commits can mean the most.",
    reveal: "Impact is visible in the trail left behind.",
    xp: 10,
  },
  {
    id: "vault-whisper",
    section: "access-denied",
    teaser: "The gate still speaks to those who listen.",
    reveal: "Locked doors are still part of the story.",
    xp: 10,
  },
  {
    id: "now-momentum",
    section: "now",
    teaser: "The next move lives in your current rhythm.",
    reveal: "Momentum forms when what you build today matters tomorrow.",
    xp: 10,
  },
  {
    id: "certificates-archive",
    section: "certificates",
    teaser: "Proof hides in the details, not the headline.",
    reveal: "Certificates are bookmarks on a longer journey.",
    xp: 10,
  },
  {
    id: "achievements-catalog",
    section: "achievements",
    teaser: "Not every trophy is shiny at first glance.",
    reveal: "Achievement stories live in the work behind them.",
    xp: 10,
  },
  {
    id: "learning-map",
    section: "learning",
    teaser: "Maps are useful when they are actually followed.",
    reveal: "The path of learning is the path you walk.",
    xp: 10,
  },
];
