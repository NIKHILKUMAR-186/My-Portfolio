// SecretPanel: floating Bunny icon and glassmorphism panel with hidden progress tabs
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Sparkles, ClipboardList, BookOpen } from "lucide-react";
import { useProgress, REWARDS, BUNNY_LORE } from "../lib/progression";
import { Bunny } from "./bunny";

const TAB_KEYS = ["Achievements", "Hints", "Rewards", "Bunny Lore", "Progress"] as const;

function TabButton({ label, active, onClick }: { label: string; active?: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl px-3 py-2 text-xs font-semibold transition ${
        active ? "border-cyan-300/70 bg-cyan-400/10 text-cyan-100" : "border-white/10 text-muted-foreground hover:border-cyan-300/30 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

export function SecretPanel() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<typeof TAB_KEYS[number]>("Achievements");
  const [hintIndex, setHintIndex] = useState(0);
  const { achievements, state, recordBunnyClick, markPanelOpened, markPanelTabVisited } = useProgress();

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

  const unlockedCount = achievements.filter((achievement) => achievement.unlocked).length;
  const completion = Math.round((unlockedCount / achievements.length) * 100);

  const hints = useMemo(
    () => [
      "Explore rather than click. A secret interface hears curiosity.",
      "Cyan light often hides the next discovery.",
      "Reward systems are unlocked by intent, not by accident.",
      "Track the hidden signals behind the surface.",
    ],
    [],
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <button
        onClick={() => {
          recordBunnyClick();
          setOpen(true);
        }}
        className="group flex h-16 w-16 items-center justify-center rounded-full bg-[#07101f]/90 p-2 text-white shadow-[0_0_30px_rgba(10,225,255,0.22)] ring-1 ring-cyan-400/30 transition duration-300 hover:scale-105 hover:bg-cyan-500/10"
        aria-label="Open Bunny Protocol panel"
      >
        <motion.div
          animate={open ? { scale: 1.05 } : { scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: open ? 1 : Infinity, ease: "easeInOut" }}
        >
          <Bunny size={32} className="text-cyan-200" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex items-end justify-end p-6"
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative z-50 w-[min(420px,calc(100vw-2rem))] rounded-3xl border border-cyan-500/20 bg-[#08111c]/95 p-4 shadow-[0_40px_120px_rgba(6,47,68,0.5)] backdrop-blur-xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted-foreground">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Bunny Protocol</p>
                  <p className="text-sm text-foreground">Hidden progress panel</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-muted-foreground transition hover:bg-white/10 hover:text-white"
                  aria-label="Close Bunny Protocol panel"
                >
                  <span className="text-base font-semibold">×</span>
                </button>
              </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {TAB_KEYS.map((tab) => (
                <TabButton key={tab} label={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)} />
              ))}
            </div>

            <div className="max-h-[70vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#09131f]/80 px-4 py-4 text-sm text-muted-foreground scrollbar-thin scrollbar-track-transparent scrollbar-thumb-cyan-400/30 scrollbar-thumb-rounded-full">
              {activeTab === "Achievements" && (
                <div className="space-y-3">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className={`rounded-3xl border px-4 py-3 transition ${achievement.unlocked ? "border-cyan-400/20 bg-cyan-500/10 text-white" : "border-white/5 bg-white/5"}`}>
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h3 className="text-sm font-semibold text-white">{achievement.title}</h3>
                          <p className="mt-1 text-xs text-muted-foreground">{achievement.reward}</p>
                        </div>
                        <span className={`rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.22em] ${achievement.rarity === "legendary" ? "bg-fuchsia-500/10 text-fuchsia-200" : achievement.rarity === "rare" ? "bg-cyan-500/10 text-cyan-200" : "bg-slate-500/10 text-slate-300"}`}>
                          {achievement.rarity}
                        </span>
                      </div>
                      <p className="mt-3 text-xs leading-5 text-muted-foreground">{achievement.description}</p>
                      <p className="mt-2 text-[11px] text-cyan-200/75">{achievement.unlocked ? "Unlocked" : achievement.hint}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "Hints" && (
                <div className="space-y-4">
                  <div className="rounded-3xl border border-white/10 bg-[#0f2231]/80 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Hint</p>
                    <p className="mt-3 text-sm text-white">{hints[hintIndex]}</p>
                  </div>
                  <button
                    onClick={() => setHintIndex((current) => (current + 1) % hints.length)}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-400/10"
                  >
                    Next hint
                  </button>
                  <p className="text-[11px] text-muted-foreground">Hints are cryptic by design. Discover through action.</p>
                </div>
              )}

              {activeTab === "Rewards" && (
                <div className="space-y-3">
                  {REWARDS.map((reward) => (
                    <div key={reward.title} className="rounded-3xl border border-white/10 bg-[#0b1822]/80 p-4">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-semibold text-white">{reward.title}</p>
                        <ClipboardList className="size-4 text-cyan-300" />
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{reward.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "Bunny Lore" && (
                <div className="space-y-4">
                  {BUNNY_LORE.map((line) => (
                    <div key={line} className="rounded-3xl border border-white/10 bg-[#0b1720]/80 p-4 text-sm text-muted-foreground">
                      <p>{line}</p>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 rounded-3xl border border-white/10 bg-cyan-400/10 p-3 text-xs text-cyan-100">
                    <BookOpen className="size-4" />
                    <span>Legendary lore unlocks by exploring every edge of the protocol.</span>
                  </div>
                </div>
              )}

              {activeTab === "Progress" && (
                <div className="space-y-4">
                  <div className="rounded-3xl border border-white/10 bg-[#0f1c2d]/80 p-4">
                    <div className="mb-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-cyan-300/80">
                      <span>Achievements</span>
                      <span>{unlockedCount}/{achievements.length}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-400" style={{ width: `${completion}%` }} />
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-[#08111f]/80 p-4 text-sm text-muted-foreground">
                    <p>Sections visited:</p>
                    <p className="mt-2 text-xs text-white">{state.visitedSections.join(" • ") || "None yet"}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-[#08111f]/80 p-4 text-sm text-muted-foreground">
                    <p>Hidden clues found:</p>
                    <p className="mt-2 text-xs text-white">{state.hiddenClues.length} / 5</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SecretPanel;
