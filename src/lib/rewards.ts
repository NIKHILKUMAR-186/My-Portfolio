export type RewardDefinition = {
  id: string;
  title: string;
  description: string;
  unlockAchievementId: string;
  content: string[];
};

export const REWARDS: RewardDefinition[] = [
  {
    id: "developer-dashboard",
    title: "Developer Dashboard",
    description: "Premium GitHub analytics, streaks, repos, languages, and contribution insights.",
    unlockAchievementId: "explorer",
    content: [
      "Track public repositories, active commits, and top languages in a premium dashboard.",
      "Animated counters display repository count, contributions, and streak momentum.",
      "This reward unlocks once you prove your curiosity across the portfolio." 
    ],
  },
  {
    id: "founder-notes",
    title: "Founder Notes",
    description: "Private lessons and product insights from the portfolio creator.",
    unlockAchievementId: "lore-keeper",
    content: [
      "Build with clarity: automate the obvious and instrument the essential.",
      "Run small experiments early, then use real feedback to guide bigger decisions.",
      "These notes are reserved for explorers who read the hidden protocol lore." 
    ],
  },
  {
    id: "future-roadmap",
    title: "Future Roadmap",
    description: "A premium roadmap for upcoming goals, AI concepts, and system ambitions.",
    unlockAchievementId: "reward-collector",
    content: [
      "A phase-based plan for AI, portfolio systems, and next creative experiments.",
      "Focus on quality, sustainability, and a lightweight path to real product outcomes.",
      "This roadmap is unlocked by collecting premium rewards through exploration." 
    ],
  },
  {
    id: "secret-resume",
    title: "Secret Resume",
    description: "A premium career narrative with impact, outcomes, and hidden highlights.",
    unlockAchievementId: "curious-explorer",
    content: [
      "A recruiter-facing narrative that emphasizes measurable impact and leadership.",
      "Story-driven outcomes, real product wins, and cross-functional collaboration highlights.",
      "This secret resume is reserved for those who complete the full Bunny Protocol journey." 
    ],
  },
  {
    id: "behind-the-scenes",
    title: "Behind The Scenes",
    description: "Early drafts, experiments, and the hidden design story behind the portfolio.",
    unlockAchievementId: "bunny-whisperer",
    content: [
      "Design iterations, abandoned ideas, and the evolution of the visual system.",
      "A gallery of hidden notes that reveal how the portfolio was built.",
      "This reward celebrates curiosity, persistence, and the creative process." 
    ],
  },
];
