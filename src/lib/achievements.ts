export type AchievementRarity = "common" | "rare" | "epic" | "legendary";

export const XP_BY_RARITY: Record<AchievementRarity, number> = {
  common: 10,
  rare: 25,
  epic: 50,
  legendary: 100,
};

export type AchievementDefinition = {
  id: string;
  title: string;
  description: string;
  hint: string;
  rarity: AchievementRarity;
  rewardId?: string;
};

export const ACHIEVEMENTS: AchievementDefinition[] = [
  {
    id: "first-step",
    title: "First Step",
    description: "Open the hidden Bunny Protocol interface.",
    hint: "A quiet edge hides the first gate.",
    rarity: "common",
    rewardId: "developer-dashboard",
  },
  {
    id: "best-bunny-friend",
    title: "Best Bunny Friend",
    description: "Tap the Bunny frequently until it hops.",
    hint: "The one who listens grows in trust.",
    rarity: "common",
    rewardId: "behind-the-scenes",
  },
  {
    id: "secret-scroll",
    title: "Secret Scroll",
    description: "Open the hints tab and linger in the dark.",
    hint: "Not every answer is written plainly.",
    rarity: "common",
    rewardId: "founder-notes",
  },
  {
    id: "achievement-collector",
    title: "Achievement Collector",
    description: "Explore the achievements section of the portfolio.",
    hint: "Trophies appear where records are kept.",
    rarity: "common",
    rewardId: "behind-the-scenes",
  },
  {
    id: "certificate-keeper",
    title: "Certificate Keeper",
    description: "Review the credential vault in the site.",
    hint: "Proof is most visible when you look for it.",
    rarity: "common",
    rewardId: "future-roadmap",
  },
  {
    id: "learning-journeyer",
    title: "Learning Journeyer",
    description: "Scroll through the learning milestones.",
    hint: "Every lesson leaves a mark on the path.",
    rarity: "common",
    rewardId: "future-roadmap",
  },
  {
    id: "beyond-adventurer",
    title: "Beyond Adventurer",
    description: "Visit the human side of the journey.",
    hint: "Hidden chapters are not always loud.",
    rarity: "common",
    rewardId: "founder-notes",
  },
  {
    id: "explorer",
    title: "Explorer",
    description: "Visit every major section of the portfolio.",
    hint: "The story is never found in one place.",
    rarity: "rare",
    rewardId: "developer-dashboard",
  },
  {
    id: "terminal-hacker",
    title: "Terminal Hacker",
    description: "Open the secret command terminal.",
    hint: "Some doors prefer keyboards.",
    rarity: "rare",
    rewardId: "developer-dashboard",
  },
  {
    id: "bunny-whisperer",
    title: "Bunny Whisperer",
    description: "Speak the Bunny's secret command.",
    hint: "A quiet companion answers the curious.",
    rarity: "rare",
    rewardId: "behind-the-scenes",
  },
  {
    id: "reward-collector",
    title: "Reward Collector",
    description: "Open the rewards panel to see premium content.",
    hint: "What you earn is revealed after you look.",
    rarity: "rare",
    rewardId: "future-roadmap",
  },
  {
    id: "lore-keeper",
    title: "Lore Keeper",
    description: "Read the Bunny lore section inside the protocol.",
    hint: "Legends live in quiet records.",
    rarity: "rare",
    rewardId: "founder-notes",
  },
  {
    id: "access-curiosity",
    title: "Access Curiosity",
    description: "Visit the locked access-denied gate.",
    hint: "Some doors only whisper when they stay closed.",
    rarity: "rare",
    rewardId: "developer-dashboard",
  },
  {
    id: "github-explorer",
    title: "GitHub Explorer",
    description: "Open the GitHub journey section.",
    hint: "Tracks appear where code leaves a trail.",
    rarity: "rare",
    rewardId: "developer-dashboard",
  },
  {
    id: "panel-architect",
    title: "Panel Architect",
    description: "Open and inspect every panel section.",
    hint: "A tool is only useful when it is understood.",
    rarity: "rare",
    rewardId: "founder-notes",
  },
  {
    id: "theme-patient",
    title: "Theme Patient",
    description: "Hover the theme toggle and wait for an answer.",
    hint: "The stars answer only patient visitors.",
    rarity: "epic",
    rewardId: "future-roadmap",
  },
  {
    id: "code-sleuth",
    title: "Code Sleuth",
    description: "Use the unlock command inside the terminal.",
    hint: "The right key is not always visible.",
    rarity: "epic",
    rewardId: "develop- dashbored",
  },
  {
    id: "clue-seeker",
    title: "Clue Seeker",
    description: "Discover at least five hidden clues.",
    hint: "Whispers grow louder when you collect them.",
    rarity: "epic",
    rewardId: "behind-the-scenes",
  },
  {
    id: "vault-aspirant",
    title: "Vault Aspirant",
    description: "Get close to unlocking the secret vault.",
    hint: "A locked gate still teaches those who watch.",
    rarity: "epic",
    rewardId: "future-roadmap",
  },
  {
    id: "hidden-trail",
    title: "Hidden Trail",
    description: "Find every hidden clue in the portfolio.",
    hint: "Five whispers hide throughout the journey.",
    rarity: "legendary",
  },
  {
    id: "curious-explorer",
    title: "Curious Explorer",
    description: "Complete every achievement and uncover the vault.",
    hint: "You didn't just visit this portfolio. You completed it.",
    rarity: "legendary",
  },
];
