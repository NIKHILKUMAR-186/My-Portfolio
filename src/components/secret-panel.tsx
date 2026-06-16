import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ShieldCheck, Sparkles, Lock, MapPin, Award } from "lucide-react";
import { useProgress } from "../lib/progression";
import { Bunny } from "./bunny";

const TABS = ["Overview", "Achievements", "Clues", "Rewards", "Lore"] as const;

type TabKey = (typeof TABS)[number];

function TabButton({ label, active, onClick }: { label: TabKey; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
        active ? "bg-cyan-400/15 text-white shadow-sm shadow-cyan-400/10" : "border border-white/10 text-muted-foreground hover:border-cyan-300/30 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

export function SecretPanel() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("Overview");
  const { achievements, clues, rewards, state, xp, levelInfo, vaultUnlocked, markPanelOpened, markPanelTabVisited } = useProgress();

  useEffect(() => {
    if (open) {
      markPanelOpened();
    }
  }, [open, markPanelOpened]);

  useEffect(() => {
    if (open) {
      markPanelTabVisited(activeTab);
    }
  }, [activeTab, open, markPanelTabVisited]);

  const unlockedAchievements = useMemo(() => achievements.filter((item) => item.unlocked), [achievements]);
  const discoveredClues = useMemo(() => clues.filter((clue) => clue.discovered), [clues]);
  const availableRewards = useMemo(() => rewards, [rewards]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <button
        type="button"
        aria-label="Open Bunny Protocol panel"
        onClick={() => setOpen(true)}
        className="group flex h-16 w-16 items-center justify-center rounded-full bg-[#08111f]/95 p-3 text-cyan-100 shadow-[0_0_30px_rgba(6,210,255,0.18)] ring-1 ring-cyan-400/30 transition hover:scale-105 hover:bg-cyan-400/10"
      >
        <motion.div animate={open ? { scale: 1.05 } : { scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: open ? 1 : Infinity, ease: "easeInOut" }}>
          <Bunny size={32} className="text-cyan-200" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex items-end justify-end p-4"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-label="Close Bunny Protocol overlay"
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative z-50 w-full max-w-[480px] overflow-hidden rounded-[2rem] border border-cyan-500/15 bg-[#06111c]/95 shadow-[0_40px_120px_rgba(3,20,36,0.7)]"
            >
              <div className="border-b border-white/10 bg-[#07131f]/95 px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/70">Bunny Protocol</p>
                    <h2 className="mt-2 text-lg font-semibold text-white">Hidden progress network</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/10 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="space-y-4 px-5 py-5">
                <div className="rounded-3xl border border-white/10 bg-[#081622]/95 p-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Explorer rank</p>
                      <p className="mt-2 text-lg font-semibold text-white">{levelInfo.title}</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs font-semibold text-cyan-100">
                      <ShieldCheck className="size-4" /> {xp} XP
                    </div>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-400" style={{ width: `${levelInfo.progress}%` }} />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>{levelInfo.currentThreshold} XP</span>
                    <span>{levelInfo.nextThreshold} XP</span>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-[#07131f]/90 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Achievements</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{unlockedAchievements.length}</p>
                    <p className="mt-1 text-xs text-muted-foreground">of {achievements.length} unlocked</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-[#07131f]/90 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Hidden clues</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{discoveredClues.length}</p>
                    <p className="mt-1 text-xs text-muted-foreground">of {clues.length} discovered</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-[#07131f]/90 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Vault</p>
                    <p className={`mt-2 text-2xl font-semibold ${vaultUnlocked ? "text-emerald-300" : "text-cyan-100"}`}>{vaultUnlocked ? "Unlocked" : "Locked"}</p>
                    <p className="mt-1 text-xs text-muted-foreground">Complete every milestone to gain access</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-[#07131f]/90 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Current tab</p>
                    <p className="mt-2 text-sm font-semibold text-white">{activeTab}</p>
                    <p className="mt-1 text-xs text-muted-foreground">Step through hidden chapters</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 px-5 pb-5 pt-3">
                <div className="flex flex-wrap gap-2">
                  {TABS.map((tab) => (
                    <TabButton key={tab} label={tab} active={tab === activeTab} onClick={() => setActiveTab(tab)} />
                  ))}
                </div>

                <div className="mt-4 max-h-[52vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#09131f]/95 p-4 text-sm text-muted-foreground scrollbar-thin scrollbar-track-transparent scrollbar-thumb-cyan-400/30 scrollbar-thumb-rounded-full">
                  {activeTab === "Overview" && (
                    <div className="space-y-4">
                      <div className="rounded-3xl border border-cyan-500/15 bg-[#0d1d2b]/95 p-4 text-white">
                        <div className="flex items-center gap-3">
                          <Sparkles className="size-5 text-cyan-300" />
                          <div>
                            <p className="text-sm font-semibold">The protocol is listening</p>
                            <p className="mt-1 text-xs text-muted-foreground">Your actions shape the hidden game. Explore, collect, and earn the vault.</p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-[#0b1722]/95 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Level mission</p>
                        <h3 className="mt-3 text-lg font-semibold text-white">Complete every hidden clue and milestone</h3>
                        <p className="mt-2 text-sm text-muted-foreground">Unlock the final vault by combining exploration, terminal mastery, and earned achievements.</p>
                      </div>
                    </div>
                  )}

                  {activeTab === "Achievements" && (
                    <div className="space-y-3">
                      {achievements.map((achievement) => (
                        <div key={achievement.id} className={`rounded-3xl border px-4 py-4 transition ${achievement.unlocked ? "border-cyan-400/20 bg-cyan-500/10 text-white" : "border-white/10 bg-white/5"}`}>
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="text-sm font-semibold text-white">{achievement.title}</p>
                              <p className="mt-1 text-xs text-muted-foreground">{achievement.description}</p>
                            </div>
                            <span className={`rounded-full px-2 py-1 text-[11px] uppercase tracking-[0.18em] ${achievement.unlocked ? "bg-emerald-500/15 text-emerald-200" : "bg-white/5 text-muted-foreground"}`}>
                              {achievement.rarity}
                            </span>
                          </div>
                          <p className="mt-3 text-xs text-cyan-100">{achievement.unlocked ? "Unlocked" : achievement.hint}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "Clues" && (
                    <div className="space-y-3">
                      {clues.map((clue) => (
                        <div key={clue.id} className={`rounded-3xl border px-4 py-4 ${clue.discovered ? "border-cyan-400/20 bg-cyan-500/10 text-white" : "border-white/10 bg-white/5"}`}>
                          <p className="text-sm font-semibold text-white">{clue.teaser}</p>
                          <p className="mt-2 text-xs text-muted-foreground">{clue.discovered ? clue.reveal : "Discover this clue in the matching portfolio section."}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "Rewards" && (
                    <div className="space-y-3">
                      {availableRewards.map((reward) => (
                        <div key={reward.id} className={`rounded-3xl border px-4 py-4 ${reward.unlocked ? "border-emerald-400/20 bg-emerald-500/10 text-white" : "border-white/10 bg-white/5"}`}>
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-sm font-semibold text-white">{reward.title}</p>
                            <Award className="size-4 text-cyan-300" />
                          </div>
                          <p className="mt-2 text-xs text-muted-foreground">{reward.description}</p>
                          {reward.unlocked ? <p className="mt-3 text-[11px] text-emerald-100">Unlocked</p> : <p className="mt-3 text-[11px] text-cyan-100">Unlock by earning {reward.unlockAchievementId}</p>}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "Lore" && (
                    <div className="space-y-3">
                      <div className="rounded-3xl border border-cyan-500/15 bg-[#0b1722]/95 p-4 text-white">
                        <p className="text-base font-semibold">Protocol lore</p>
                        <p className="mt-3 text-sm text-muted-foreground">The Bunny Protocol is the secret layer behind the portfolio experience. It rewards exploration with deeper knowledge and premium content.</p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground">
                        <p className="font-semibold text-white">Tip</p>
                        <p className="mt-2">Use the terminal, visit every section, and keep an eye on hidden clues to fully reveal the vault.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SecretPanel;
