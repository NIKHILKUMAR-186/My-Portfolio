import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { ACHIEVEMENTS, type AchievementDefinition, XP_BY_RARITY } from "./achievements";
import { REWARDS, type RewardDefinition } from "./rewards";
import { HIDDEN_CLUES, type HiddenClueDefinition } from "./hidden-clues";

export type AchievementState = AchievementDefinition & {
  unlocked: boolean;
};

export type RewardState = RewardDefinition & {
  unlocked: boolean;
};

export type ClueState = HiddenClueDefinition & {
  discovered: boolean;
};

export type ProgressState = {
  unlockedIds: string[];
  discoveredClues: string[];
  visitedSections: string[];
  panelOpened: boolean;
  panelTabsVisited: string[];
  terminalOpened: boolean;
  terminalCommands: string[];
  themeHoverMs: number;
  finalEventTriggered: boolean;
};

const STORAGE_KEY = "bunny-protocol-state-v2";
const LEVELS = [
  { threshold: 0, title: "Explorer" },
  { threshold: 100, title: "Builder" },
  { threshold: 250, title: "Creator" },
  { threshold: 500, title: "Innovator" },
  { threshold: 900, title: "Architect" },
  { threshold: 1400, title: "Visionary" },
  { threshold: 2100, title: "Legend" },
];

const REQUIRED_XP_FOR_VAULT = 1000;
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

const DEFAULT_STATE: ProgressState = {
  unlockedIds: [],
  discoveredClues: [],
  visitedSections: [],
  panelOpened: false,
  panelTabsVisited: [],
  terminalOpened: false,
  terminalCommands: [],
  themeHoverMs: 0,
  finalEventTriggered: false,
};

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
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore localStorage failures
  }
}

function calculateXp(state: ProgressState) {
  const achievementXp = ACHIEVEMENTS.reduce((total, achievement) => {
    return total + (state.unlockedIds.includes(achievement.id) ? XP_BY_RARITY[achievement.rarity] : 0);
  }, 0);
  const clueXp = state.discoveredClues.length * 10;
  return achievementXp + clueXp;
}

export function getLevelInfo(xp: number) {
  const levelIndex = LEVELS.reduce((currentIndex, level, index) => {
    return xp >= level.threshold ? index : currentIndex;
  }, 0);
  const current = LEVELS[Math.min(levelIndex, LEVELS.length - 1)];
  const next = LEVELS[Math.min(levelIndex + 1, LEVELS.length - 1)];
  const progress = next.threshold > current.threshold ? Math.min(100, Math.round(((xp - current.threshold) / (next.threshold - current.threshold)) * 100)) : 100;
  return {
    xp,
    level: Math.min(levelIndex + 1, LEVELS.length),
    title: current.title,
    progress,
    currentThreshold: current.threshold,
    nextThreshold: next.threshold,
    nextTitle: next.title,
  };
}

function getAchievementState(state: ProgressState): AchievementState[] {
  return ACHIEVEMENTS.map((achievement) => ({
    ...achievement,
    unlocked: state.unlockedIds.includes(achievement.id),
  }));
}

function getRewardState(state: ProgressState): RewardState[] {
  return REWARDS.map((reward) => ({
    ...reward,
    unlocked: state.unlockedIds.includes(reward.unlockAchievementId),
  }));
}

function getClueState(state: ProgressState): ClueState[] {
  return HIDDEN_CLUES.map((clue) => ({
    ...clue,
    discovered: state.discoveredClues.includes(clue.id),
  }));
}

function allAchievementsUnlocked(state: ProgressState) {
  return ACHIEVEMENTS.every((achievement) => state.unlockedIds.includes(achievement.id));
}

function allCluesDiscovered(state: ProgressState) {
  return HIDDEN_CLUES.every((clue) => state.discoveredClues.includes(clue.id));
}

export const HINTS = [
  "Curiosity unlocks more than doors — it unlocks stories.",
  "The Bunny Protocol is listening to the choices you make.",
  "A hidden gate responds to actions, not promises.",
  "Every reward is a signal that you followed the right thread.",
];

export const BUNNY_LORE = [
  "The first Bunny came from a line of quiet experiments.",
  "It only reveals its secrets to visitors who pay attention.",
  "Rare achievements are not earned in a moment, but through a path.",
  "The vault is both a reward and a checkpoint for the curious.",
];

export type ProgressContextType = {
  state: ProgressState;
  achievements: AchievementState[];
  rewards: RewardState[];
  clues: ClueState[];
  xp: number;
  levelInfo: ReturnType<typeof getLevelInfo>;
  vaultUnlocked: boolean;
  finalEventPending: boolean;
  completed: boolean;
  unlockAchievement: (id: string) => void;
  discoverClue: (id: string) => void;
  findHiddenClue: (id: string) => void;
  visitSection: (id: string) => void;
  markPanelOpened: () => void;
  markPanelTabVisited: (tab: string) => void;
  markTerminalOpened: () => void;
  recordTerminalCommand: (command: string) => void;
  markThemeHover: (ms: number) => void;
  markFinalEventTriggered: () => void;
  markAccessDeniedVisited: () => void;
};

const ProgressContext = createContext<ProgressContextType | null>(null);

function mergeIds(prev: string[], next: string[]) {
  return Array.from(new Set([...prev, ...next]));
}

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

  const discoverClue = (id: string) => {
    setState((current) => {
      if (current.discoveredClues.includes(id)) return current;
      return { ...current, discoveredClues: [...current.discoveredClues, id] };
    });
  };

  const findHiddenClue = (id: string) => {
    setState((current) => {
      if (current.discoveredClues.includes(id)) return current;
      return { ...current, discoveredClues: [...current.discoveredClues, id] };
    });
  };

  const markAccessDeniedVisited = () => setState((current) => (current.visitedSections.includes("access-denied") ? current : { ...current, visitedSections: [...current.visitedSections, "access-denied"] }));

  const visitSection = (id: string) => {
    if (!SECTION_IDS.includes(id)) return;
    setState((current) => {
      if (current.visitedSections.includes(id)) return current;
      return { ...current, visitedSections: [...current.visitedSections, id] };
    });
  };

  const markPanelOpened = () => setState((current) => (current.panelOpened ? current : { ...current, panelOpened: true }));

  const markPanelTabVisited = (tab: string) => setState((current) => {
    if (current.panelTabsVisited.includes(tab)) return current;
    return { ...current, panelTabsVisited: [...current.panelTabsVisited, tab] };
  });

  const markTerminalOpened = () => setState((current) => (current.terminalOpened ? current : { ...current, terminalOpened: true }));

  const recordTerminalCommand = (command: string) => setState((current) => {
    if (current.terminalCommands.includes(command)) return current;
    return { ...current, terminalCommands: [...current.terminalCommands, command] };
  });

  const markThemeHover = (ms: number) => setState((current) => {
    const nextMs = current.themeHoverMs + ms;
    return { ...current, themeHoverMs: nextMs };
  });

  const markFinalEventTriggered = () => setState((current) => (current.finalEventTriggered ? current : { ...current, finalEventTriggered: true }));

  const resetProgress = () => {
    setState({ ...DEFAULT_STATE, panelOpened: true, terminalCommands: [], themeHoverMs: 0 });
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  };

  useEffect(() => {
    setState((current) => {
      let next = current;
      const unlock = (id: string) => {
        if (!next.unlockedIds.includes(id)) {
          next = { ...next, unlockedIds: [...next.unlockedIds, id] };
        }
      };

      if (current.panelOpened) unlock("first-step");
      if (SECTION_IDS.every((id) => current.visitedSections.includes(id))) unlock("explorer");
      if (current.terminalOpened) unlock("terminal-hacker");
      if (current.terminalCommands.includes("bunny")) unlock("bunny-whisperer");
      if (current.terminalCommands.includes("unlock")) unlock("code-sleuth");
      if (current.panelTabsVisited.includes("Hints")) unlock("secret-scroll");
      if (current.panelTabsVisited.includes("Rewards")) unlock("reward-collector");
      if (current.panelTabsVisited.includes("Bunny Lore")) unlock("lore-keeper");
      if (current.panelTabsVisited.length >= 5) unlock("panel-architect");
      if (current.visitedSections.includes("achievements")) unlock("achievement-collector");
      if (current.visitedSections.includes("certificates")) unlock("certificate-keeper");
      if (current.visitedSections.includes("github")) unlock("github-explorer");
      if (current.visitedSections.includes("learning")) unlock("learning-journeyer");
      if (current.visitedSections.includes("beyond")) unlock("beyond-adventurer");
      if (current.themeHoverMs >= 5000) unlock("theme-patient");
      if (current.discoveredClues.length >= 5) unlock("clue-seeker");
      if (current.discoveredClues.length >= 10) unlock("hidden-trail");
      if (current.unlockedIds.length >= 18 && calculateXp(current) >= 900) unlock("vault-aspirant");

      const requiredIds = ACHIEVEMENTS.filter((achievement) => achievement.id !== "curious-explorer").map((achievement) => achievement.id);
      if (requiredIds.every((id) => next.unlockedIds.includes(id))) {
        unlock("curious-explorer");
      }

      if (next.unlockedIds.length === current.unlockedIds.length) {
        return current;
      }

      return next;
    });
  }, [state.panelOpened, state.visitedSections, state.terminalOpened, state.terminalCommands, state.panelTabsVisited, state.themeHoverMs, state.discoveredClues]);

  const achievements = useMemo(() => getAchievementState(state), [state]);
  const rewards = useMemo(() => getRewardState(state), [state]);
  const clues = useMemo(() => getClueState(state), [state]);
  const xp = useMemo(() => calculateXp(state), [state]);
  const levelInfo = useMemo(() => getLevelInfo(xp), [xp]);
  const vaultUnlocked = useMemo(
    () => allAchievementsUnlocked(state) && allCluesDiscovered(state) && xp >= REQUIRED_XP_FOR_VAULT,
    [state, xp],
  );
  const completed = useMemo(() => vaultUnlocked, [vaultUnlocked]);
  const finalEventPending = useMemo(
    () => vaultUnlocked && !state.finalEventTriggered,
    [vaultUnlocked, state.finalEventTriggered],
  );

  return (
    <ProgressContext.Provider
      value={{
        state,
        achievements,
        rewards,
        clues,
        xp,
        levelInfo,
        vaultUnlocked,
        finalEventPending,
        completed,
        unlockAchievement,
        discoverClue,
        findHiddenClue,
        visitSection,
        markPanelOpened,
        markPanelTabVisited,
        markTerminalOpened,
        recordTerminalCommand,
        markThemeHover,
        markFinalEventTriggered,
        markAccessDeniedVisited,
        resetProgress,
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
