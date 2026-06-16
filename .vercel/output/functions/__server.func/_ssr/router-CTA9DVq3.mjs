import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { S as ShieldCheck, a as Sparkles, A as Award, T as Terminal, X, b as ArrowRight, c as TriangleAlert } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function PWARegister() {
  reactExports.useEffect(() => {
    let stop;
    async function init() {
      try {
        const mod = await import("./virtual_pwa-register-BsSE6A1N.mjs");
        if (mod && mod.registerSW) {
          stop = mod.registerSW({});
        }
      } catch (e) {
      }
    }
    init();
    return () => {
      if (typeof stop === "function") stop();
    };
  }, []);
  return null;
}
const XP_BY_RARITY = {
  common: 10,
  rare: 25,
  epic: 50,
  legendary: 100
};
const ACHIEVEMENTS = [
  {
    id: "first-step",
    title: "First Step",
    description: "Open the hidden Bunny Protocol interface.",
    hint: "A quiet edge hides the first gate.",
    rarity: "common",
    rewardId: "developer-dashboard"
  },
  {
    id: "best-bunny-friend",
    title: "Best Bunny Friend",
    description: "Tap the Bunny frequently until it hops.",
    hint: "The one who listens grows in trust.",
    rarity: "common",
    rewardId: "behind-the-scenes"
  },
  {
    id: "secret-scroll",
    title: "Secret Scroll",
    description: "Open the hints tab and linger in the dark.",
    hint: "Not every answer is written plainly.",
    rarity: "common",
    rewardId: "founder-notes"
  },
  {
    id: "achievement-collector",
    title: "Achievement Collector",
    description: "Explore the achievements section of the portfolio.",
    hint: "Trophies appear where records are kept.",
    rarity: "common",
    rewardId: "behind-the-scenes"
  },
  {
    id: "certificate-keeper",
    title: "Certificate Keeper",
    description: "Review the credential vault in the site.",
    hint: "Proof is most visible when you look for it.",
    rarity: "common",
    rewardId: "future-roadmap"
  },
  {
    id: "learning-journeyer",
    title: "Learning Journeyer",
    description: "Scroll through the learning milestones.",
    hint: "Every lesson leaves a mark on the path.",
    rarity: "common",
    rewardId: "future-roadmap"
  },
  {
    id: "beyond-adventurer",
    title: "Beyond Adventurer",
    description: "Visit the human side of the journey.",
    hint: "Hidden chapters are not always loud.",
    rarity: "common",
    rewardId: "founder-notes"
  },
  {
    id: "explorer",
    title: "Explorer",
    description: "Visit every major section of the portfolio.",
    hint: "The story is never found in one place.",
    rarity: "rare",
    rewardId: "developer-dashboard"
  },
  {
    id: "terminal-hacker",
    title: "Terminal Hacker",
    description: "Open the secret command terminal.",
    hint: "Some doors prefer keyboards.",
    rarity: "rare",
    rewardId: "developer-dashboard"
  },
  {
    id: "bunny-whisperer",
    title: "Bunny Whisperer",
    description: "Speak the Bunny's secret command.",
    hint: "A quiet companion answers the curious.",
    rarity: "rare",
    rewardId: "behind-the-scenes"
  },
  {
    id: "reward-collector",
    title: "Reward Collector",
    description: "Open the rewards panel to see premium content.",
    hint: "What you earn is revealed after you look.",
    rarity: "rare",
    rewardId: "future-roadmap"
  },
  {
    id: "lore-keeper",
    title: "Lore Keeper",
    description: "Read the Bunny lore section inside the protocol.",
    hint: "Legends live in quiet records.",
    rarity: "rare",
    rewardId: "founder-notes"
  },
  {
    id: "access-curiosity",
    title: "Access Curiosity",
    description: "Visit the locked access-denied gate.",
    hint: "Some doors only whisper when they stay closed.",
    rarity: "rare",
    rewardId: "developer-dashboard"
  },
  {
    id: "github-explorer",
    title: "GitHub Explorer",
    description: "Open the GitHub journey section.",
    hint: "Tracks appear where code leaves a trail.",
    rarity: "rare",
    rewardId: "developer-dashboard"
  },
  {
    id: "panel-architect",
    title: "Panel Architect",
    description: "Open and inspect every panel section.",
    hint: "A tool is only useful when it is understood.",
    rarity: "rare",
    rewardId: "founder-notes"
  },
  {
    id: "theme-patient",
    title: "Theme Patient",
    description: "Hover the theme toggle and wait for an answer.",
    hint: "The stars answer only patient visitors.",
    rarity: "epic",
    rewardId: "future-roadmap"
  },
  {
    id: "code-sleuth",
    title: "Code Sleuth",
    description: "Use the unlock command inside the terminal.",
    hint: "The right key is not always visible.",
    rarity: "epic",
    rewardId: "develop- dashbored"
  },
  {
    id: "clue-seeker",
    title: "Clue Seeker",
    description: "Discover at least five hidden clues.",
    hint: "Whispers grow louder when you collect them.",
    rarity: "epic",
    rewardId: "behind-the-scenes"
  },
  {
    id: "vault-aspirant",
    title: "Vault Aspirant",
    description: "Get close to unlocking the secret vault.",
    hint: "A locked gate still teaches those who watch.",
    rarity: "epic",
    rewardId: "future-roadmap"
  },
  {
    id: "hidden-trail",
    title: "Hidden Trail",
    description: "Find every hidden clue in the portfolio.",
    hint: "Five whispers hide throughout the journey.",
    rarity: "legendary"
  },
  {
    id: "curious-explorer",
    title: "Curious Explorer",
    description: "Complete every achievement and uncover the vault.",
    hint: "You didn't just visit this portfolio. You completed it.",
    rarity: "legendary"
  }
];
const REWARDS = [
  {
    id: "developer-dashboard",
    title: "Developer Dashboard",
    description: "Premium GitHub analytics, streaks, repos, languages, and contribution insights.",
    unlockAchievementId: "explorer",
    content: [
      "Track public repositories, active commits, and top languages in a premium dashboard.",
      "Animated counters display repository count, contributions, and streak momentum.",
      "This reward unlocks once you prove your curiosity across the portfolio."
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];
const HIDDEN_CLUES = [
  {
    id: "about-curiosity",
    section: "about",
    teaser: "Curiosity started everything.",
    reveal: "A quiet eye can read the first signal.",
    xp: 10
  },
  {
    id: "projects-repeat",
    section: "projects",
    teaser: "Build. Break. Repeat.",
    reveal: "Practice is the hidden skill behind every project.",
    xp: 10
  },
  {
    id: "skills-repetition",
    section: "skills",
    teaser: "Mastery hides behind repetition.",
    reveal: "Growth appears when a tool is used again and again.",
    xp: 10
  },
  {
    id: "journey-constellation",
    section: "timeline",
    teaser: "The stars answer only patient visitors.",
    reveal: "Progress is a path, not a single moment.",
    xp: 10
  },
  {
    id: "github-trail",
    section: "github",
    teaser: "The quietest commits can mean the most.",
    reveal: "Impact is visible in the trail left behind.",
    xp: 10
  },
  {
    id: "vault-whisper",
    section: "access-denied",
    teaser: "The gate still speaks to those who listen.",
    reveal: "Locked doors are still part of the story.",
    xp: 10
  },
  {
    id: "now-momentum",
    section: "now",
    teaser: "The next move lives in your current rhythm.",
    reveal: "Momentum forms when what you build today matters tomorrow.",
    xp: 10
  },
  {
    id: "certificates-archive",
    section: "certificates",
    teaser: "Proof hides in the details, not the headline.",
    reveal: "Certificates are bookmarks on a longer journey.",
    xp: 10
  },
  {
    id: "achievements-catalog",
    section: "achievements",
    teaser: "Not every trophy is shiny at first glance.",
    reveal: "Achievement stories live in the work behind them.",
    xp: 10
  },
  {
    id: "learning-map",
    section: "learning",
    teaser: "Maps are useful when they are actually followed.",
    reveal: "The path of learning is the path you walk.",
    xp: 10
  }
];
const STORAGE_KEY = "bunny-protocol-state-v2";
const LEVELS = [
  { threshold: 0, title: "Explorer" },
  { threshold: 100, title: "Builder" },
  { threshold: 250, title: "Creator" },
  { threshold: 500, title: "Innovator" },
  { threshold: 900, title: "Architect" },
  { threshold: 1400, title: "Visionary" },
  { threshold: 2100, title: "Legend" }
];
const REQUIRED_XP_FOR_VAULT = 1e3;
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
  "contact"
];
const DEFAULT_STATE = {
  unlockedIds: [],
  discoveredClues: [],
  visitedSections: [],
  panelOpened: false,
  panelTabsVisited: [],
  terminalOpened: false,
  terminalCommands: [],
  themeHoverMs: 0,
  finalEventTriggered: false
};
function loadState() {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_STATE;
  }
}
function saveState(state) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
  }
}
function calculateXp(state) {
  const achievementXp = ACHIEVEMENTS.reduce((total, achievement) => {
    return total + (state.unlockedIds.includes(achievement.id) ? XP_BY_RARITY[achievement.rarity] : 0);
  }, 0);
  const clueXp = state.discoveredClues.length * 10;
  return achievementXp + clueXp;
}
function getLevelInfo(xp) {
  const levelIndex = LEVELS.reduce((currentIndex, level, index) => {
    return xp >= level.threshold ? index : currentIndex;
  }, 0);
  const current = LEVELS[Math.min(levelIndex, LEVELS.length - 1)];
  const next = LEVELS[Math.min(levelIndex + 1, LEVELS.length - 1)];
  const progress = next.threshold > current.threshold ? Math.min(100, Math.round((xp - current.threshold) / (next.threshold - current.threshold) * 100)) : 100;
  return {
    xp,
    level: Math.min(levelIndex + 1, LEVELS.length),
    title: current.title,
    progress,
    currentThreshold: current.threshold,
    nextThreshold: next.threshold,
    nextTitle: next.title
  };
}
function getAchievementState(state) {
  return ACHIEVEMENTS.map((achievement) => ({
    ...achievement,
    unlocked: state.unlockedIds.includes(achievement.id)
  }));
}
function getRewardState(state) {
  return REWARDS.map((reward) => ({
    ...reward,
    unlocked: state.unlockedIds.includes(reward.unlockAchievementId)
  }));
}
function getClueState(state) {
  return HIDDEN_CLUES.map((clue) => ({
    ...clue,
    discovered: state.discoveredClues.includes(clue.id)
  }));
}
function allAchievementsUnlocked(state) {
  return ACHIEVEMENTS.every((achievement) => state.unlockedIds.includes(achievement.id));
}
function allCluesDiscovered(state) {
  return HIDDEN_CLUES.every((clue) => state.discoveredClues.includes(clue.id));
}
const HINTS = [
  "Curiosity unlocks more than doors — it unlocks stories.",
  "The Bunny Protocol is listening to the choices you make.",
  "A hidden gate responds to actions, not promises.",
  "Every reward is a signal that you followed the right thread."
];
const ProgressContext = reactExports.createContext(null);
function ProgressProvider({ children }) {
  const [state, setState] = reactExports.useState(DEFAULT_STATE);
  reactExports.useEffect(() => {
    setState(loadState());
  }, []);
  reactExports.useEffect(() => {
    saveState(state);
  }, [state]);
  const unlockAchievement = (id) => {
    setState((current) => {
      if (current.unlockedIds.includes(id)) return current;
      return { ...current, unlockedIds: [...current.unlockedIds, id] };
    });
  };
  const discoverClue = (id) => {
    setState((current) => {
      if (current.discoveredClues.includes(id)) return current;
      return { ...current, discoveredClues: [...current.discoveredClues, id] };
    });
  };
  const findHiddenClue = (id) => {
    setState((current) => {
      if (current.discoveredClues.includes(id)) return current;
      return { ...current, discoveredClues: [...current.discoveredClues, id] };
    });
  };
  const markAccessDeniedVisited = () => setState((current) => current.visitedSections.includes("access-denied") ? current : { ...current, visitedSections: [...current.visitedSections, "access-denied"] });
  const visitSection = (id) => {
    if (!SECTION_IDS.includes(id)) return;
    setState((current) => {
      if (current.visitedSections.includes(id)) return current;
      return { ...current, visitedSections: [...current.visitedSections, id] };
    });
  };
  const markPanelOpened = () => setState((current) => current.panelOpened ? current : { ...current, panelOpened: true });
  const markPanelTabVisited = (tab) => setState((current) => {
    if (current.panelTabsVisited.includes(tab)) return current;
    return { ...current, panelTabsVisited: [...current.panelTabsVisited, tab] };
  });
  const markTerminalOpened = () => setState((current) => current.terminalOpened ? current : { ...current, terminalOpened: true });
  const recordTerminalCommand = (command) => setState((current) => {
    if (current.terminalCommands.includes(command)) return current;
    return { ...current, terminalCommands: [...current.terminalCommands, command] };
  });
  const markThemeHover = (ms) => setState((current) => {
    const nextMs = current.themeHoverMs + ms;
    return { ...current, themeHoverMs: nextMs };
  });
  const markFinalEventTriggered = () => setState((current) => current.finalEventTriggered ? current : { ...current, finalEventTriggered: true });
  const resetProgress = () => {
    setState({ ...DEFAULT_STATE, panelOpened: true, terminalCommands: [], themeHoverMs: 0 });
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  };
  reactExports.useEffect(() => {
    setState((current) => {
      let next = current;
      const unlock = (id) => {
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
      if (current.themeHoverMs >= 5e3) unlock("theme-patient");
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
  const achievements = reactExports.useMemo(() => getAchievementState(state), [state]);
  const rewards = reactExports.useMemo(() => getRewardState(state), [state]);
  const clues = reactExports.useMemo(() => getClueState(state), [state]);
  const xp = reactExports.useMemo(() => calculateXp(state), [state]);
  const levelInfo = reactExports.useMemo(() => getLevelInfo(xp), [xp]);
  const vaultUnlocked = reactExports.useMemo(
    () => allAchievementsUnlocked(state) && allCluesDiscovered(state) && xp >= REQUIRED_XP_FOR_VAULT,
    [state, xp]
  );
  const completed = reactExports.useMemo(() => vaultUnlocked, [vaultUnlocked]);
  const finalEventPending = reactExports.useMemo(
    () => vaultUnlocked && !state.finalEventTriggered,
    [vaultUnlocked, state.finalEventTriggered]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ProgressContext.Provider,
    {
      value: {
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
        resetProgress
      },
      children
    }
  );
}
function useProgress() {
  const context = reactExports.useContext(ProgressContext);
  if (!context) throw new Error("useProgress must be used within ProgressProvider");
  return context;
}
function Bunny({ size = 64, className, waving = false, showTrail = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative inline-flex ${className ?? ""}`, children: [
    showTrail && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "pointer-events-none absolute inset-0 -z-10 flex items-center justify-center",
        initial: { opacity: 0.16 },
        animate: { opacity: [0.16, 0.08, 0.16], y: [0, -3, 0] },
        transition: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-4 top-2 h-6 w-6 rounded-full bg-cyan-400/15 blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-3 bottom-5 h-5 w-5 rounded-full bg-sky-400/10 blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-1/2 top-1/3 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-300/15 blur-2xl" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.svg,
      {
        width: size,
        height: size,
        viewBox: "0 0 100 110",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "block",
        "aria-label": "Bunny mascot",
        role: "img",
        initial: { y: 0 },
        animate: { y: [0, -4, 0] },
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.g,
            {
              animate: { rotate: waving ? [0, -8, 8, -4, 0] : 0 },
              transition: { duration: 1.4, repeat: waving ? Infinity : 0, ease: "easeInOut" },
              style: { transformOrigin: "50px 60px" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M36 48 C32 28, 34 10, 40 8 C46 6, 46 26, 44 46 Z",
                    fill: "var(--surface-2)",
                    stroke: "var(--primary)",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M40 42 C38 28, 40 16, 41 14", stroke: "var(--accent)", strokeWidth: "1.5", strokeLinecap: "round" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M64 48 C68 28, 66 10, 60 8 C54 6, 54 26, 56 46 Z",
                    fill: "var(--surface-2)",
                    stroke: "var(--primary)",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M60 42 C62 28, 60 16, 59 14", stroke: "var(--accent)", strokeWidth: "1.5", strokeLinecap: "round" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "50", cy: "62", rx: "22", ry: "20", fill: "var(--surface-2)", stroke: "var(--primary)", strokeWidth: "1.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.circle,
            {
              cx: "42",
              cy: "60",
              r: "2.2",
              fill: "var(--foreground)",
              animate: { scaleY: [1, 1, 0.1, 1] },
              transition: { duration: 4, repeat: Infinity, times: [0, 0.92, 0.96, 1] },
              style: { transformOrigin: "42px 60px" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.circle,
            {
              cx: "58",
              cy: "60",
              r: "2.2",
              fill: "var(--foreground)",
              animate: { scaleY: [1, 1, 0.1, 1] },
              transition: { duration: 4, repeat: Infinity, times: [0, 0.92, 0.96, 1] },
              style: { transformOrigin: "58px 60px" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M48 67 L52 67 L50 70 Z", fill: "var(--accent)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M48 71 Q50 73 52 71", stroke: "var(--foreground)", strokeWidth: "1.2", fill: "none", strokeLinecap: "round" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "38", cy: "68", r: "2", fill: "var(--primary)", opacity: "0.35" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "62", cy: "68", r: "2", fill: "var(--primary)", opacity: "0.35" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "50", cy: "92", rx: "14", ry: "10", fill: "var(--surface-2)", stroke: "var(--primary)", strokeWidth: "1.5" })
        ]
      }
    )
  ] });
}
const TABS = ["Overview", "Achievements", "Clues", "Rewards", "Lore"];
function TabButton({ label, active, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick,
      className: `rounded-full px-3 py-2 text-xs font-semibold transition ${active ? "bg-cyan-400/15 text-white shadow-sm shadow-cyan-400/10" : "border border-white/10 text-muted-foreground hover:border-cyan-300/30 hover:text-white"}`,
      children: label
    }
  );
}
function SecretPanel() {
  const [open, setOpen] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState("Overview");
  const { achievements, clues, rewards, state, xp, levelInfo, vaultUnlocked, markPanelOpened, markPanelTabVisited } = useProgress();
  reactExports.useEffect(() => {
    if (open) {
      markPanelOpened();
    }
  }, [open, markPanelOpened]);
  reactExports.useEffect(() => {
    if (open) {
      markPanelTabVisited(activeTab);
    }
  }, [activeTab, open, markPanelTabVisited]);
  const unlockedAchievements = reactExports.useMemo(() => achievements.filter((item) => item.unlocked), [achievements]);
  const discoveredClues = reactExports.useMemo(() => clues.filter((clue) => clue.discovered), [clues]);
  const availableRewards = reactExports.useMemo(() => rewards, [rewards]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-label": "Open Bunny Protocol panel",
        onClick: () => setOpen(true),
        className: "group flex h-16 w-16 items-center justify-center rounded-full bg-[#08111f]/95 p-3 text-cyan-100 shadow-[0_0_30px_rgba(6,210,255,0.18)] ring-1 ring-cyan-400/30 transition hover:scale-105 hover:bg-cyan-400/10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: open ? { scale: 1.05 } : { scale: [1, 1.08, 1] }, transition: { duration: 2, repeat: open ? 1 : Infinity, ease: "easeInOut" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bunny, { size: 32, className: "text-cyan-200" }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "fixed inset-0 z-40 flex items-end justify-end p-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "absolute inset-0 bg-black/40 backdrop-blur-sm",
              onClick: () => setOpen(false),
              "aria-label": "Close Bunny Protocol overlay"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20, scale: 0.96 },
              animate: { opacity: 1, y: 0, scale: 1 },
              exit: { opacity: 0, y: 20, scale: 0.96 },
              transition: { duration: 0.25 },
              className: "relative z-50 w-full max-w-[480px] overflow-hidden rounded-[2rem] border border-cyan-500/15 bg-[#06111c]/95 shadow-[0_40px_120px_rgba(3,20,36,0.7)]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-white/10 bg-[#07131f]/95 px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.32em] text-cyan-300/70", children: "Bunny Protocol" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-lg font-semibold text-white", children: "Hidden progress network" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setOpen(false),
                      className: "rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/10 hover:text-white",
                      children: "Close"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 px-5 py-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-white/10 bg-[#081622]/95 p-4 text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.24em] text-cyan-300/80", children: "Explorer rank" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-lg font-semibold text-white", children: levelInfo.title })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs font-semibold text-cyan-100", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4" }),
                        " ",
                        xp,
                        " XP"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-2 overflow-hidden rounded-full bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-400", style: { width: `${levelInfo.progress}%` } }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between text-[11px] text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        levelInfo.currentThreshold,
                        " XP"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        levelInfo.nextThreshold,
                        " XP"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-white/10 bg-[#07131f]/90 p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.24em] text-cyan-300/80", children: "Achievements" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-2xl font-semibold text-white", children: unlockedAchievements.length }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
                        "of ",
                        achievements.length,
                        " unlocked"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-white/10 bg-[#07131f]/90 p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.24em] text-cyan-300/80", children: "Hidden clues" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-2xl font-semibold text-white", children: discoveredClues.length }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
                        "of ",
                        clues.length,
                        " discovered"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-white/10 bg-[#07131f]/90 p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.24em] text-cyan-300/80", children: "Vault" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-2 text-2xl font-semibold ${vaultUnlocked ? "text-emerald-300" : "text-cyan-100"}`, children: vaultUnlocked ? "Unlocked" : "Locked" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Complete every milestone to gain access" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-white/10 bg-[#07131f]/90 p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.24em] text-cyan-300/80", children: "Current tab" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-semibold text-white", children: activeTab }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Step through hidden chapters" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 px-5 pb-5 pt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(TabButton, { label: tab, active: tab === activeTab, onClick: () => setActiveTab(tab) }, tab)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 max-h-[52vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#09131f]/95 p-4 text-sm text-muted-foreground scrollbar-thin scrollbar-track-transparent scrollbar-thumb-cyan-400/30 scrollbar-thumb-rounded-full", children: [
                    activeTab === "Overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl border border-cyan-500/15 bg-[#0d1d2b]/95 p-4 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5 text-cyan-300" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "The protocol is listening" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Your actions shape the hidden game. Explore, collect, and earn the vault." })
                        ] })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-white/10 bg-[#0b1722]/95 p-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.24em] text-cyan-300/80", children: "Level mission" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-lg font-semibold text-white", children: "Complete every hidden clue and milestone" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Unlock the final vault by combining exploration, terminal mastery, and earned achievements." })
                      ] })
                    ] }),
                    activeTab === "Achievements" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: achievements.map((achievement) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl border px-4 py-4 transition ${achievement.unlocked ? "border-cyan-400/20 bg-cyan-500/10 text-white" : "border-white/10 bg-white/5"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white", children: achievement.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: achievement.description })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2 py-1 text-[11px] uppercase tracking-[0.18em] ${achievement.unlocked ? "bg-emerald-500/15 text-emerald-200" : "bg-white/5 text-muted-foreground"}`, children: achievement.rarity })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-cyan-100", children: achievement.unlocked ? "Unlocked" : achievement.hint })
                    ] }, achievement.id)) }),
                    activeTab === "Clues" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: clues.map((clue) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl border px-4 py-4 ${clue.discovered ? "border-cyan-400/20 bg-cyan-500/10 text-white" : "border-white/10 bg-white/5"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white", children: clue.teaser }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: clue.discovered ? clue.reveal : "Discover this clue in the matching portfolio section." })
                    ] }, clue.id)) }),
                    activeTab === "Rewards" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: availableRewards.map((reward) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl border px-4 py-4 ${reward.unlocked ? "border-emerald-400/20 bg-emerald-500/10 text-white" : "border-white/10 bg-white/5"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white", children: reward.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-4 text-cyan-300" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: reward.description }),
                      reward.unlocked ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[11px] text-emerald-100", children: "Unlocked" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[11px] text-cyan-100", children: [
                        "Unlock by earning ",
                        reward.unlockAchievementId
                      ] })
                    ] }, reward.id)) }),
                    activeTab === "Lore" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-cyan-500/15 bg-[#0b1722]/95 p-4 text-white", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold", children: "Protocol lore" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "The Bunny Protocol is the secret layer behind the portfolio experience. It rewards exploration with deeper knowledge and premium content." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-white", children: "Tip" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "Use the terminal, visit every section, and keep an eye on hidden clues to fully reveal the vault." })
                      ] })
                    ] })
                  ] })
                ] })
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
const COMMANDS = {
  help: "show available commands",
  about: "describe the portfolio experience",
  skills: "reveal top skills",
  projects: "preview featured work",
  bunny: "talk to the Bunny guide",
  unlock: "probe the hidden vault",
  secret: "request a subtle clue"
};
function SecretTerminal() {
  const { markTerminalOpened, recordTerminalCommand, unlockAchievement, vaultUnlocked } = useProgress();
  const [open, setOpen] = reactExports.useState(false);
  const [input, setInput] = reactExports.useState("");
  const [history, setHistory] = reactExports.useState(["Bunny Protocol terminal loaded. Type 'help' for commands."]);
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const listener = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
        markTerminalOpened();
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [markTerminalOpened]);
  reactExports.useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);
  const availableCommands = reactExports.useMemo(() => Object.entries(COMMANDS), []);
  const runCommand = (value) => {
    const normalized = value.trim().toLowerCase();
    if (!normalized) return;
    const nextHistory = [...history, `> ${value}`];
    if (!(normalized in COMMANDS)) {
      setHistory([...nextHistory, `Unknown command: ${normalized}`]);
      setInput("");
      return;
    }
    recordTerminalCommand(normalized);
    if (normalized === "help") {
      setHistory([
        ...nextHistory,
        "Available commands:",
        ...availableCommands.map(([key, description]) => `${key} — ${description}`)
      ]);
    } else if (normalized === "about") {
      setHistory([...nextHistory, "Hidden progress, secret rewards, and a portfolio built for curious explorers."]);
    } else if (normalized === "skills") {
      setHistory([...nextHistory, "Skills: TypeScript, React, UI systems, motion-driven UX, product thinking."]);
    } else if (normalized === "projects") {
      setHistory([...nextHistory, "Projects: interactive portfolio, dashboard system, creative product experiments."]);
    } else if (normalized === "bunny") {
      unlockAchievement("bunny-whisperer");
      setHistory([...nextHistory, "Bunny whispers: 'The protocol answers those who ask with purpose.'"]);
    } else if (normalized === "unlock") {
      unlockAchievement("code-sleuth");
      setHistory([
        ...nextHistory,
        vaultUnlocked ? "U N L O C K   G R A N T E D — The vault is ready. Return to the access gate." : "The gate remains sealed. Keep exploring the protocol and discover hidden clues."
      ]);
    } else if (normalized === "secret") {
      setHistory([...nextHistory, "Not every secret is obvious. Hidden progress is earned through action."]);
    }
    setInput("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.96 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.96 },
      transition: { duration: 0.2 },
      className: "fixed inset-0 z-50 flex items-center justify-center bg-[#040814]/85 px-4 py-10 backdrop-blur-sm",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-3xl rounded-[2rem] border border-cyan-500/20 bg-[#05111f]/95 p-6 shadow-[0_30px_140px_rgba(5,25,40,0.45)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(15,230,255,0.18)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "size-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white", children: "Bunny Terminal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "ctrl + shift + k to open, escape to close" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setOpen(false),
              className: "rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/10 hover:text-white",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 min-h-[220px] overflow-y-auto rounded-[1.5rem] border border-white/10 bg-[#081825]/95 p-4 text-sm text-white shadow-inner shadow-black/20", children: history.map((line, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap leading-6", children: line }, `${line}-${index}`)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: (event) => {
              event.preventDefault();
              runCommand(input);
            },
            className: "flex flex-col gap-3 sm:flex-row",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ref: inputRef,
                  value: input,
                  onChange: (event) => setInput(event.target.value),
                  placeholder: "Enter command...",
                  className: "flex-1 rounded-3xl border border-white/10 bg-[#06111e]/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "submit",
                  className: "inline-flex items-center justify-center gap-2 rounded-3xl bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" }),
                    "Run"
                  ]
                }
              )
            ]
          }
        )
      ] })
    }
  ) });
}
function BunnyAIGuide() {
  const [visible, setVisible] = reactExports.useState(false);
  const [hintIndex, setHintIndex] = reactExports.useState(0);
  const { state } = useProgress();
  reactExports.useEffect(() => {
    const interval = window.setInterval(() => {
      setHintIndex((current) => (current + 1) % HINTS.length);
      setVisible(true);
      window.setTimeout(() => setVisible(false), 4200 + Math.random() * 1400);
    }, 16e3 + Math.random() * 8e3);
    return () => window.clearInterval(interval);
  }, [state.unlockedIds.length]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: visible && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 18 },
      transition: { duration: 0.25 },
      className: "fixed bottom-28 right-6 z-40 max-w-xs rounded-3xl border border-cyan-500/20 bg-[#07131d]/95 p-4 shadow-[0_40px_120px_rgba(8,40,62,0.45)] backdrop-blur-xl",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-200 shadow-[0_0_20px_rgba(25,255,255,0.18)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "🐇" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.24em] text-cyan-300/80", children: "Bunny guide" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-6 text-white", children: HINTS[hintIndex] })
        ] })
      ] })
    }
  ) });
}
const MESSAGES = [
  "You skipped a section.",
  "I sense an undiscovered clue.",
  "The stars hide answers.",
  "Stay patient and the path will reveal itself."
];
function FloatingBunny() {
  const [visible, setVisible] = reactExports.useState(false);
  const [message, setMessage] = reactExports.useState(MESSAGES[0]);
  const { completed } = useProgress();
  reactExports.useEffect(() => {
    const interval = window.setInterval(() => {
      setMessage(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
      setVisible(true);
      window.setTimeout(() => setVisible(false), 4200);
    }, 18e3);
    return () => window.clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: visible && !completed && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 18 },
      transition: { duration: 0.25 },
      className: "fixed bottom-28 right-6 z-40 w-[min(320px,80vw)] rounded-3xl border border-cyan-400/15 bg-[#06111e]/95 p-4 shadow-[0_40px_120px_rgba(2,12,30,0.55)] backdrop-blur-xl",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-200 shadow-[0_0_20px_rgba(25,255,255,0.18)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bunny, { size: 28 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.28em] text-cyan-300/70", children: "Bunny AI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-6 text-white", children: message })
        ] })
      ] })
    }
  ) });
}
function Completion() {
  const { completed } = useProgress();
  const [show, setShow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (completed) setShow(true);
  }, [completed]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { scale: 0.96 }, animate: { scale: 1 }, className: "relative mx-auto w-full max-w-4xl p-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "confetti", children: Array.from({ length: 40 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              className: "confetti-piece",
              initial: { y: -200, opacity: 0 },
              animate: { y: 800, rotate: Math.random() * 360, opacity: 1 },
              transition: { duration: 2 + Math.random() * 1.5, delay: Math.random() * 0.6 }
            },
            i
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-cyan-400/20 bg-[#07131d]/95 p-10 shadow-[0_60px_140px_rgba(4,20,30,0.6)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-28 w-28 items-center justify-center rounded-full bg-cyan-500/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bunny, { size: 64 }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-semibold text-cyan-100", children: "CURIOUS EXPLORER" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "You didn't just visit the portfolio. You completed it." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
            .confetti-piece{display:block;position:absolute;left:50%;width:10px;height:18px;background:linear-gradient(45deg,#00f,#0ff);opacity:0.9}
            .confetti{position:relative;width:100%;height:100%}
          ` })
      ]
    }
  ) });
}
function ResetProtocolButton() {
  const [confirming, setConfirming] = reactExports.useState(false);
  const { resetProgress } = useProgress();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 left-6 z-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setConfirming(true),
        className: "inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-[#220a12]/95 px-4 py-3 text-sm font-semibold text-rose-200 shadow-[0_20px_60px_rgba(139,0,0,0.25)] transition hover:bg-rose-500/10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-4" }),
          " Reset progress"
        ]
      }
    ),
    confirming && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-[1.75rem] border border-rose-500/20 bg-[#091017]/95 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white", children: "Are you sure you want to reset all Bunny Protocol progress?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              resetProgress();
              setConfirming(false);
            },
            className: "rounded-full bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-200 hover:bg-rose-500/20",
            children: "Yes, reset"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setConfirming(false),
            className: "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10",
            children: "Cancel"
          }
        )
      ] })
    ] })
  ] });
}
const appCss = "/assets/styles-G8NteQCX.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-dvh items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-7xl font-bold gradient-text", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:scale-105",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-dvh items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. Try again or head home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:scale-105",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/50",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0b1024" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "apple-mobile-web-app-title", content: "Nikhil Kumar — Portfolio" },
      { title: "Nikhil Kumar — Portfolio" },
      { name: "description", content: "Welcome To Profesional portfolio of Nikhil Kumar." },
      { name: "author", content: "Nikhil Kumar" },
      { property: "og:title", content: "Nikhil Kumar — Portfolio" },
      { name: "twitter:title", content: "Nikhil Kumar — Portfolio" },
      { property: "og:description", content: "Welcome To Profesional portfolio of Nikhil Kumar." },
      { name: "twitter:description", content: "Welcome To Profesional portfolio of Nikhil Kumar." },
      {
        property: "og:image",
        content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/1d95ab60-8f0f-4fd7-a43a-87eed72d5cde"
      },
      {
        name: "twitter:image",
        content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/1d95ab60-8f0f-4fd7-a43a-87eed72d5cde"
      },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/avatar2.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JF5EW6H39Z');
      `
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ProgressProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PWARegister, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SecretPanel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SecretTerminal, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingBunny, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ResetProtocolButton, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BunnyAIGuide, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Completion, {})
  ] }) });
}
const $$splitComponentImporter$2 = () => import("./vault-_a1fAAW_.mjs");
const Route$3 = createFileRoute("/vault")({
  head: () => ({
    meta: [{
      title: "Vault — Bunny Protocol"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const BASE_URL = "";
const Route$2 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${BASE_URL}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$1 = () => import("./access-denied-CHYCpJp7.mjs");
const Route$1 = createFileRoute("/access-denied")({
  head: () => ({
    meta: [{
      title: "Access Denied — Bunny Protocol"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-sOuAOju1.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Nikhil Kumar — Engineer · Learner · Builder"
    }, {
      name: "description",
      content: "Personal portfolio of Nikhil Kumar — engineering student at MIT Muzaffarpur and IIT Madras BS Data Science, building IoT, AI, and full-stack products."
    }, {
      property: "og:title",
      content: "Nikhil Kumar — Engineer · Learner · Builder"
    }, {
      property: "og:description",
      content: "A living digital timeline of an engineering journey — projects, milestones, and what's next."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const VaultRoute = Route$3.update({
  id: "/vault",
  path: "/vault",
  getParentRoute: () => Route$4
});
const SitemapDotxmlRoute = Route$2.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$4
});
const AccessDeniedRoute = Route$1.update({
  id: "/access-denied",
  path: "/access-denied",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  AccessDeniedRoute,
  SitemapDotxmlRoute,
  VaultRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Bunny as B,
  router as r,
  useProgress as u
};
