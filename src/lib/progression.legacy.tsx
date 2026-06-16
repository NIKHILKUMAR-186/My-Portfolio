// Progression provider and state for the Bunny Protocol (TSX to allow JSX)
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type AchievementRarity = "common" | "rare" | "legendary";

export type AchievementDefinition = {
  id: string;
  title: string;
  description: string;
  hint: string;
  reward: string;
  rarity: AchievementRarity;
};

export type AchievementState = AchievementDefinition & {
  unlocked: boolean;
  unlockedAt?: number;
};

export type ProgressState = {
  unlockedIds: string[];
  visitedSections: string[];
  hiddenClues: string[];
  panelOpened: boolean;
  terminalOpened: boolean;
  bunnyClicks: number;
  panelTabsVisited: string[];
  terminalCommands: string[];
  accessDeniedVisited: boolean;
};

const STORAGE_KEY = "bunny-protocol-progress-v1";
const DEFAULT_STATE: ProgressState = {
  unlockedIds: [],
  visitedSections: [],
  hiddenClues: [],
  panelOpened: false,
  terminalOpened: false,
  bunnyClicks: 0,
  panelTabsVisited: [],
  terminalCommands: [],
  accessDeniedVisited: false,
};

const SECTION_IDS = [
  "about",
  "timeline",
  "now",
  "skills",
  "projects",
  "achievements",
  "certificates",
  "github",
  "learning",
  "beyond",
  "contact",
];

const XP_BY_RARITY = {
  common: 10,
  rare: 25,
  legendary: 100,
} as const;

const LEVELS = [
  { threshold: 0, title: "Explorer" },
  { threshold: 100, title: "Builder" },
  { threshold: 250, title: "Creator" },
  { threshold: 500, title: "Innovator" },
  { threshold: 900, title: "Architect" },
];

export const ACHIEVEMENT_DEFINITIONS: AchievementDefinition[] = [
  {
    id: "first-step",
    title: "First Step",
    description: "Open the hidden Bunny Protocol panel and reveal the interface.",
    hint: "A quiet icon at the edge of your view opens the first gate.",
    reward: "Discovery Archive",
    rarity: "common",
  },
  {
    id: "explorer",
    title: "Explorer",
    description: "Visit every major section of the portfolio.",
    hint: "The story is never found in one place.",
    reward: "Developer Dashboard",
    rarity: "rare",
  },
  {
    id: "night-watcher",
    title: "Night Watcher",
    description: "Hover the theme toggle for five seconds.",
    hint: "The stars respond only to patience.",
    reward: "Special Theme",
    rarity: "rare",
  },
  {
    id: "terminal-hacker",
    title: "Terminal Hacker",
    description: "Open the secret terminal with the keyboard shortcut.",
    hint: "Some doors prefer keyboards.",
    reward: "Developer Notes",
    rarity: "rare",
  },
  {
    id: "bunny-whisperer",
    title: "Bunny Whisperer",
    description: "Type the secret command 'bunny' in the terminal.",
    hint: "The guide answers when called.",
    reward: "Bunny Lore",
    rarity: "rare",
  },
  {
    id: "best-bunny-friend",
    title: "Best Bunny Friend",
    description: "Click the Bunny icon ten times.",
    hint: "Some friends stay quiet until noticed.",
    reward: "Behind the Scenes Gallery",
    rarity: "common",
  },
  {
    id: "secret-scroll",
    title: "Secret Scroll",
    description: "Open the Hints tab inside the secret panel.",
    hint: "The right tab does not always shout its name.",
    reward: "Cryptic Guidance",
    rarity: "common",
  },
  {
    id: "reward-collector",
    title: "Reward Collector",
    description: "Visit the Rewards tab in the Bunny Protocol panel.",
    hint: "Meaning is not only in the mission, but in the prize.",
    reward: "Future Roadmap",
    rarity: "rare",
  },
  {
    id: "lore-keeper",
    title: "Lore Keeper",
    description: "Open the Bunny Lore section of the panel.",
    hint: "Every legend has a library.",
    reward: "Founder Notes",
    rarity: "rare",
  },
  {
    id: "secret-scout",
    title: "Secret Scout",
    description: "Open every panel tab at least once.",
    hint: "The interface itself is part of the journey.",
    reward: "Enhanced Resume",
    rarity: "rare",
  },
  {
    id: "code-sleuth",
    title: "Code Sleuth",
    description: "Use the 'unlock' command in the terminal.",
    hint: "Not every gate accepts the same key.",
    reward: "Developer Notes",
    rarity: "rare",
  },
  {
    id: "access-curiosity",
    title: "Access Curiosity",
    description: "Visit the access denied page and prove you are still searching.",
    hint: "Curiosity alone is not enough.",
    reward: "Hidden Timeline",
    rarity: "rare",
  },
  {
    id: "achievement-collector",
    title: "Achievement Collector",
    description: "Explore the achievements section of the portfolio.",
    hint: "Not every trophy is earned in silence.",
    reward: "Achievement Token",
    rarity: "common",
  },
  {
    id: "certificate-keeper",
    title: "Certificate Keeper",
    description: "Browse the certificate vault.",
    hint: "Proof appears when you're searching for it.",
    reward: "Certificate Vault",
    rarity: "common",
  },
  {
    id: "github-explorer",
    title: "GitHub Explorer",
    description: "Open the GitHub journey section.",
    hint: "Tracks appear where code meets intent.",
    reward: "Live GitHub Insight",
    rarity: "rare",
  },
  {
    id: "learning-journeyer",
    title: "Learning Journeyer",
    description: "Scroll through the learning milestones.",
    hint: "Every lesson leaves a trace.",
    reward: "Learning Badge",
    rarity: "common",
  },
  {
    id: "beyond-adventurer",
    title: "Beyond Adventurer",
    description: "Visit the human side of the portfolio.",
    hint: "Hidden chapters are not always loud.",
    reward: "Hidden Habit",
    rarity: "common",
  },
  {
    id: "hidden-trail",
    title: "Hidden Trail",
    description: "Find ten hidden clues scattered through the portfolio.",
    hint: "Five whispers hide throughout the journey.",
    reward: "Vault Access",
    rarity: "legendary",
  },
  {
    id: "panel-architect",
    title: "Panel Architect",
    description: "Build your progress by opening every panel section.",
    hint: "A tool is only useful when it has been explored.",
    reward: "Founder Notes",
    rarity: "rare",
  },
  {
    id: "curious-explorer",
    title: "Curious Explorer",
    description: "Unlock every achievement in the Bunny Protocol.",
    hint: "You didn't just visit the portfolio. You completed it.",
    reward: "Secret Vault Access",
    rarity: "legendary",
  },
];

export const HINTS = [
  "The stars respond only to patience.",
  "The story is never found in one place.",
  "Five whispers hide throughout the journey.",
  "Some doors prefer keyboards.",
  "Secrets sound quieter than instructions.",
  "Not every answer is visible at first glance.",
];

export const REWARDS = [
  {
    title: "Behind The Scenes",
    description: "Early designs, failed drafts, and the creative process that shaped this portfolio.",
    unlockId: "best-bunny-friend",
  },
  {
    title: "Developer Dashboard",
    description: "Live metrics about commits, repos, languages and streaks in one premium panel.",
    unlockId: "explorer",
  },
  {
    title: "Founder Notes",
    description: "Private lessons learned while building products and refining systems.",",
    unlockId: "lore-keeper",
  },
  {
    title: "Future Roadmap",
    description: "Upcoming ideas, AI concepts, and product ambitions for the next chapter.",
    unlockId: "reward-collector",
  },
  {
    title: "Secret Resume",
    description: "An enhanced recruiter-ready career summary with premium context.",
    unlockId: "secret-scout",
  },
];

export const BUNNY_LORE = [
  "The Bunny Protocol began as a secret interface for curious visitors.",
  "Each unlocked milestone represents a deeper layer of the portfolio narrative.",
  "The guide is here for those who choose to explore rather than only consume.",
];

function loadState(): ProgressState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_STATE;
  }
}

function saveState(state: ProgressState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getAchievementState(state: ProgressState): AchievementState[] {
  return ACHIEVEMENT_DEFINITIONS.map((achievement) => ({
    ...achievement,
    unlocked: state.unlockedIds.includes(achievement.id),
  }));
}

function hasUnlocked(state: ProgressState, id: string) {
  return state.unlockedIds.includes(id);
}

function getXpFromState(state: ProgressState) {
  const achievementXp = ACHIEVEMENT_DEFINITIONS.reduce((sum, achievement) => {
    return sum + (state.unlockedIds.includes(achievement.id) ? XP_BY_RARITY[achievement.rarity] : 0);
  }, 0);
  const clueXp = state.hiddenClues.length * 10;
  return achievementXp + clueXp;
}

export function getLevelInfo(xp: number) {
  const currentIndex = LEVELS.reduce((lastIndex, level, index) => {
    return xp >= level.threshold ? index : lastIndex;
  }, 0);
  const current = LEVELS[Math.min(currentIndex, LEVELS.length - 1)];
  const next = LEVELS[Math.min(currentIndex + 1, LEVELS.length - 1)];
  const nextThreshold = next.threshold;
  const progress = nextThreshold > current.threshold ? Math.min(100, Math.round(((xp - current.threshold) / (nextThreshold - current.threshold)) * 100)) : 100;
  const level = Math.min(currentIndex + 1, LEVELS.length);
  return {
    xp,
    level,
    title: current.title,
    progress,
    nextThreshold,
    currentThreshold: current.threshold,
  };
}

const ALL_ACHIEVEMENT_IDS = ACHIEVEMENT_DEFINITIONS.map((achievement) => achievement.id);

export const ProgressContext = createContext<{
  state: ProgressState;
  achievements: AchievementState[];
  unlockAchievement: (id: string) => void;
  recordBunnyClick: () => void;
  reportSectionVisit: (id: string) => void;
  findHiddenClue: (id: string) => void;
  markPanelOpened: () => void;
  markTerminalOpened: () => void;
  markPanelTabVisited: (tab: string) => void;
  recordTerminalCommand: (command: string) => void;
  markAccessDeniedVisited: () => void;
  canAccessVault: boolean;
  completed: boolean;
} | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(DEFAULT_STATE);

  useEffect(() => {
    setState(loadState());
  }, []);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const unlockAchievement = (id: string) => {
    setState((current) => {
      if (current.unlockedIds.includes(id)) return current;
      return { ...current, unlockedIds: [...current.unlockedIds, id] };
    });
  };

  const recordBunnyClick = () => {
    setState((current) => {
      const nextCount = current.bunnyClicks + 1;
      const updated = { ...current, bunnyClicks: nextCount };
      if (nextCount >= 10 && !current.unlockedIds.includes("best-bunny-friend")) {
        updated.unlockedIds = [...updated.unlockedIds, "best-bunny-friend"];
      }
      return updated;
    });
  };

  const reportSectionVisit = (id: string) => {
    if (!SECTION_IDS.includes(id)) return;
    setState((current) => {
      if (current.visitedSections.includes(id)) return current;
      const visitedSections = [...current.visitedSections, id];
      return { ...current, visitedSections };
    });
  };

  const findHiddenClue = (id: string) => {
    setState((current) => {
      if (current.hiddenClues.includes(id)) return current;
      return { ...current, hiddenClues: [...current.hiddenClues, id] };
    });
  };

  const markPanelOpened = () => {
    setState((current) => {
      if (current.panelOpened) return current;
      return { ...current, panelOpened: true };
    });
  };

  const markTerminalOpened = () => {
    setState((current) => {
      if (current.terminalOpened) return current;
      return { ...current, terminalOpened: true };
    });
  };

  const markPanelTabVisited = (tab: string) => {
    setState((current) => {
      if (current.panelTabsVisited.includes(tab)) return current;
      return { ...current, panelTabsVisited: [...current.panelTabsVisited, tab] };
    });
  };

  const recordTerminalCommand = (command: string) => {
    setState((current) => {
      if (current.terminalCommands.includes(command)) {
        return current;
      }
      return { ...current, terminalCommands: [...current.terminalCommands, command] };
    });
  };

  const markAccessDeniedVisited = () => {
    setState((current) => {
      if (current.accessDeniedVisited) return current;
      return { ...current, accessDeniedVisited: true };
    });
  };

  useEffect(() => {
    setState((current) => {
      let next = current;
      const unlock = (id: string) => {
        if (next.unlockedIds.includes(id)) return;
        next = { ...next, unlockedIds: [...next.unlockedIds, id] };
      };

      if (current.panelOpened) unlock("first-step");
      if (SECTION_IDS.every((id) => current.visitedSections.includes(id))) unlock("explorer");
      if (current.bunnyClicks >= 10) unlock("best-bunny-friend");
      if (current.terminalOpened) unlock("terminal-hacker");
      if (current.terminalCommands.includes("bunny")) unlock("bunny-whisperer");
      if (current.terminalCommands.includes("unlock")) unlock("code-sleuth");
      if (current.panelTabsVisited.includes("Hints")) unlock("secret-scroll");
      if (current.panelTabsVisited.includes("Rewards")) unlock("reward-collector");
      if (current.panelTabsVisited.includes("Bunny Lore")) unlock("lore-keeper");
      if (current.panelTabsVisited.length >= 5) unlock("secret-scout");
      if (current.accessDeniedVisited) unlock("access-curiosity");
      if (current.visitedSections.includes("achievements")) unlock("achievement-collector");
      if (current.visitedSections.includes("certificates")) unlock("certificate-keeper");
      if (current.visitedSections.includes("github")) unlock("github-explorer");
      if (current.visitedSections.includes("learning")) unlock("learning-journeyer");
      if (current.visitedSections.includes("beyond")) unlock("beyond-adventurer");
      if (current.hiddenClues.length >= 10) unlock("hidden-trail");
      const requiredIds = ACHIEVEMENT_DEFINITIONS.filter((achievement) => achievement.id !== "curious-explorer").map((achievement) => achievement.id);
      if (requiredIds.every((id) => next.unlockedIds.includes(id))) {
        unlock("curious-explorer");
      }
      return next;
    });
  }, [state.bunnyClicks, state.panelOpened, state.terminalOpened, state.panelTabsVisited, state.terminalCommands, state.visitedSections, state.accessDeniedVisited, state.hiddenClues]);

  const achievements = useMemo(() => getAchievementState(state), [state]);
  const xp = useMemo(() => getXpFromState(state), [state]);
  const level = useMemo(() => getLevelInfo(xp), [xp]);
  const canAccessVault = useMemo(
    () => ALL_ACHIEVEMENT_IDS.every((id) => state.unlockedIds.includes(id)),
    [state.unlockedIds],
  );
  const completed = useMemo(() => canAccessVault, [canAccessVault]);

  return (
    <ProgressContext.Provider
      value={{
        state,
        achievements,
        unlockAchievement,
        recordBunnyClick,
        reportSectionVisit,
        findHiddenClue,
        markPanelOpened,
        markTerminalOpened,
        markPanelTabVisited,
        recordTerminalCommand,
        markAccessDeniedVisited,
        canAccessVault,
        completed,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error("useProgress must be used within ProgressProvider");
  return context;
}
