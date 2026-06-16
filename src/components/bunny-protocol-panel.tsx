import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Award, Sparkles, ShieldCheck, Lock, Eye, Info } from "lucide-react";
import { useProgress } from "../lib/progression";
import { AchievementCard } from "./achievement-card";
import { ClueCard } from "./clue-card";
import { RewardCard } from "./reward-card";
import { XPBar } from "./xp-bar";
import { LevelBadge } from "./level-badge";

const TABS = ["Overview", "Achievements", "Clues", "Rewards", "Lore"] as const;

type TabKey = (typeof TABS)[number];

export function BunnyProtocolPanel() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("Overview");
  const { achievements, clues, rewards, xp, levelInfo, vaultReady, vaultUnlocked, HINTS, markPanelOpened, markPanelTabVisited } = useProgress();

  const unlockedAchievements = useMemo(() => achievements.filter((item) => item.unlocked), [achievements]);
  const discoveredClues = useMemo(() => clues.filter((item) => item.discovered), [clues]);
  const unlockedRewards = useMemo(() => rewards.filter((item) => item.unlocked), [rewards]);

  const currentHint = useMemo(() => HINTS[Math.floor(Math.random() * HINTS.length)], [HINTS, open]);

  const openPanel = () => {
    setOpen(true);
    markPanelOpened();
  };

  const selectTab = (tab: TabKey) => {
    setActiveTab(tab);
    if (open) {
      markPanelTabVisited(tab);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={openPanel}
        className="group flex h-16 w-16 items-center justify-center rounded-full bg-[#06111d]/95 p-3 text-cyan-100 shadow-[0_0_30px_rgba(6,210,255,0.18)] ring-1 ring-cyan-400/30 transition hover:scale-105 hover:bg-cyan-400/10"
        aria-label="Open Bunny Protocol"
      >
        <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
          <span className="text-2xl">🐇</span>
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-end justify-end p-4"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-label="Close Bunny Protocol panel"
            />
            <div className="relative z-50 w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-cyan-500/15 bg-[#07131f]/95 shadow-[0_40px_120px_rgba(3,20,36,0.7)]">
              <div className="border-b border-white/10 bg-[#06121b]/95 px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/70">Bunny Protocol</p>
                    <h2 className="mt-2 text-xl font-semibold text-white">Secret progression system</h2>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-cyan-100">
                    <ShieldCheck className="size-4" /> Protocol active
                  </div>
                </div>
              </div>

              <div className="space-y-5 px-6 py-6">
                <div className="rounded-[1.75rem] border border-white/10 bg-[#081622]/95 p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-3">
                      <LevelBadge title={levelInfo.title} level={levelInfo.level} />
                      <p className="text-sm text-muted-foreground">{xp} XP · {unlockedAchievements.length}/{achievements.length} achievements · {discoveredClues.length}/{clues.length} clues</p>
                    </div>
                    <div className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-cyan-100">
                      Vault status: <span className={vaultUnlocked ? "text-emerald-300" : "text-cyan-200"}>{vaultUnlocked ? "Unlocked" : vaultReady ? "Ready" : "Locked"}</span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="mb-3 flex items-center justify-between gap-3 text-sm text-muted-foreground">
                      <span>Level progress</span>
                      <span>{levelInfo.progress}%</span>
                    </div>
                    <XPBar progress={levelInfo.progress} />
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-5">
                  {TABS.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => selectTab(tab)}
                      className={`rounded-full px-3 py-2 text-xs font-semibold transition ${activeTab === tab ? "bg-cyan-400/15 text-white shadow-sm shadow-cyan-400/10" : "border border-white/10 text-muted-foreground hover:border-cyan-300/30 hover:text-white"}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="max-h-[60vh] overflow-y-auto rounded-[1.75rem] border border-white/10 bg-[#08131f]/95 p-4 text-sm text-muted-foreground scrollbar-thin scrollbar-track-transparent scrollbar-thumb-cyan-400/30 scrollbar-thumb-rounded-full">
                  {activeTab === "Overview" && (
                    <div className="space-y-4">
                      <div className="rounded-[1.5rem] border border-cyan-500/10 bg-[#0b1c2b]/95 p-4 text-white">
                        <div className="flex items-center gap-3">
                          <Sparkles className="size-5 text-cyan-300" />
                          <div>
                            <p className="font-semibold">Your path is unfolding.</p>
                            <p className="mt-2 text-sm text-cyan-100">Collect clues, unlock achievements, and a hidden vault waits behind the final curtain.</p>
                          </div>
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-[1.5rem] border border-white/10 bg-[#081a27]/95 p-4">
                          <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-300/70">Next milestone</p>
                          <p className="mt-3 text-sm text-white">{vaultReady ? "Final cinematic unlocks the vault." : "Gather every achievement and all hidden clues."}</p>
                        </div>
                        <div className="rounded-[1.5rem] border border-white/10 bg-[#081a27]/95 p-4">
                          <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-300/70">Current hint</p>
                          <p className="mt-3 text-sm text-cyan-100">{currentHint}</p>
                        </div>
                      </div>
                      <div className="rounded-[1.5rem] border border-white/10 bg-[#081a27]/95 p-4 text-cyan-100">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Eye className="size-4 text-cyan-300" />
                          <span>Explore every hidden section to reveal the protocol's secret stories.</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "Achievements" && (
                    <div className="space-y-3">
                      {achievements.map((achievement) => (
                        <AchievementCard key={achievement.id} achievement={achievement} />
                      ))}
                    </div>
                  )}

                  {activeTab === "Clues" && (
                    <div className="space-y-3">
                      {clues.map((clue) => (
                        <ClueCard key={clue.id} clue={clue} />
                      ))}
                    </div>
                  )}

                  {activeTab === "Rewards" && (
                    <div className="space-y-3">
                      {rewards.map((reward) => (
                        <RewardCard key={reward.id} reward={reward} />
                      ))}
                    </div>
                  )}

                  {activeTab === "Lore" && (
                    <div className="space-y-4">
                      <div className="rounded-[1.5rem] border border-cyan-500/10 bg-[#0b1c2b]/95 p-4 text-white">
                        <p className="text-sm font-semibold">Protocol lore</p>
                        <p className="mt-3 text-sm text-muted-foreground">The Bunny Protocol is built to reward explorers who decode the story behind the portfolio. Stay curious and follow the hidden threads.</p>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-[1.5rem] border border-white/10 bg-[#081a27]/95 p-4">
                          <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/70">Where clues live</p>
                          <p className="mt-3 text-sm text-cyan-100">About, Projects, Skills, Journey, GitHub, and the locked gate all hide whispers.</p>
                        </div>
                        <div className="rounded-[1.5rem] border border-white/10 bg-[#081a27]/95 p-4">
                          <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/70">Achievement rarity</p>
                          <p className="mt-3 text-sm text-cyan-100">Common, Rare, Epic, Legendary milestones guide your journey toward the vault.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
