// This file defines the achievements used by the Bunny Protocol progression system
export type Rarity = "common" | "rare" | "legendary";

export type Achievement = {
  id: string;
  title: string;
  description: string;
  hint: string;
  reward: string;
  unlocked?: boolean;
  rarity: Rarity;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "best-bunny-friend",
    title: "Best Bunny Friend",
    description: "Click the Bunny 10 times.",
    hint: "Some friends stay quiet until noticed.",
    reward: "Behind the Scenes Gallery",
    rarity: "common",
  },
  {
    id: "explorer",
    title: "Explorer",
    description: "Visit all main sections of the site.",
    hint: "The whole story is never found in one place.",
    reward: "Developer Dashboard",
    rarity: "common",
  },
  {
    id: "night-watcher",
    title: "Night Watcher",
    description: "Hover the theme toggle for 5 seconds.",
    hint: "The stars hide secrets.",
    reward: "Special Theme",
    rarity: "rare",
  },
  {
    id: "terminal-hacker",
    title: "Terminal Hacker",
    description: "Open the secret terminal.",
    hint: "Some conversations happen in the dark.",
    reward: "Developer Notes",
    rarity: "rare",
  },
  {
    id: "bunny-whisperer",
    title: "Bunny Whisperer",
    description: "Type 'bunny' in the secret terminal.",
    hint: "The guide answers when called.",
    reward: "Bunny Lore",
    rarity: "common",
  },
  {
    id: "curious-explorer",
    title: "Curious Explorer",
    description: "Find every hidden clue on the site.",
    hint: "Only the curious unlock the vault.",
    reward: "Vault Access",
    rarity: "legendary",
  },
  {
    id: "first-visit",
    title: "First Visitor",
    description: "Load the site for the first time.",
    hint: "Every journey starts with a step.",
    reward: "Welcome Pack",
    rarity: "common",
  },
  {
    id: "social-butterfly",
    title: "Social Butterfly",
    description: "Visit the GitHub and Contact sections.",
    hint: "Some paths lead to others.",
    reward: "Profile Insights",
    rarity: "common",
  },
  {
    id: "time-traveler",
    title: "Time Traveler",
    description: "Open the timeline section.",
    hint: "History leaves footprints.",
    reward: "Hidden Timeline",
    rarity: "rare",
  },
  {
    id: "secret-reader",
    title: "Secret Reader",
    description: "Open a hidden/secret panel item.",
    hint: "Not everything shows itself at first.",
    reward: "Founder Notes",
    rarity: "rare",
  },
  {
    id: "design-collector",
    title: "Design Collector",
    description: "View the Behind The Scenes gallery.",
    hint: "Designs have memory.",
    reward: "Behind The Scenes",
    rarity: "common",
  },
  {
    id: "streak-keeper",
    title: "Streak Keeper",
    description: "Visit the site across multiple days.",
    hint: "Small habits matter.",
    reward: "Daily Insights",
    rarity: "rare",
  },
  {
    id: "code-sleuth",
    title: "Code Sleuth",
    description: "Inspect an embedded code sample.",
    hint: "Read between the lines.",
    reward: "Developer Dashboard Extra",
    rarity: "common",
  },
  {
    id: "roadmap-reader",
    title: "Roadmap Reader",
    description: "Open the roadmap section.",
    hint: "Tomorrow is built today.",
    reward: "Future Roadmap",
    rarity: "common",
  },
  {
    id: "secret-resume",
    title: "Secret Resume",
    description: "Find the enhanced resume.",
    hint: "Some credentials hide in plain sight.",
    reward: "Secret Resume",
    rarity: "rare",
  },
];

export const ACHIEVEMENT_IDS = ACHIEVEMENTS.map((a) => a.id);
