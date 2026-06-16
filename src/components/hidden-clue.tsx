import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { useProgress } from "../lib/progression";

function playDiscoveryTone() {
  if (typeof window === "undefined") return;
  try {
    const audioContext = new window.AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "triangle";
    oscillator.frequency.value = 440;
    gain.gain.value = 0.06;
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.18);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.17);
  } catch (error) {
    // ignore sound failures in unsupported environments
  }
}

export function HiddenClue({ id, teaser }: { id: string; teaser: string }) {
  const { state, findHiddenClue } = useProgress();
  const found = state.hiddenClues.includes(id);
  const [revealed, setRevealed] = useState(found);
  const [justFound, setJustFound] = useState(false);

  useEffect(() => {
    if (found) {
      setRevealed(true);
    }
  }, [found]);

  const discoverClue = () => {
    if (found) return;
    findHiddenClue(id);
    playDiscoveryTone();
    setJustFound(true);
    window.setTimeout(() => setJustFound(false), 1800);
  };

  return (
    <div className="relative mt-6">
      <button
        type="button"
        onClick={discoverClue}
        className={`group inline-flex items-center gap-3 rounded-full border px-4 py-2 text-left transition ${
          found
            ? "border-cyan-400/20 bg-cyan-500/10 text-cyan-100"
            : "border-white/10 bg-white/5 text-muted-foreground hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
        }`}
      >
        <span
          className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition ${
            found ? "bg-cyan-400/10 text-cyan-200" : "bg-white/10 text-muted-foreground"
          }`}
        >
          <Sparkles className="size-4" />
        </span>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
            {found ? "Clue revealed" : "Hidden clue"}
          </div>
          <p
            className={`mt-1 text-sm transition ${found ? "text-white" : "text-muted-foreground"}`}
          >
            {teaser}
          </p>
        </div>
      </button>

      <AnimatePresence>
        {justFound && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: -6, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.95 }}
            transition={{ duration: 0.24 }}
            className="absolute right-0 top-0 rounded-full border border-cyan-400/20 bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-100 shadow-[0_10px_30px_rgba(34,211,238,0.2)]"
          >
            +10 XP
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
