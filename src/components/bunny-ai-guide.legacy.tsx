// BunnyAIGuide: shows occasional cryptic hints as speech bubbles
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HINTS } from "../lib/progression";
import { useProgress } from "../lib/progression";

export function BunnyAIGuide() {
  const [visible, setVisible] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const { state } = useProgress();

  useEffect(() => {
    const base = 14000 + Math.random() * 8000;
    const timer = window.setInterval(() => {
      setHintIndex((current) => (current + 1) % HINTS.length);
      setVisible(true);
      window.setTimeout(() => setVisible(false), 4200 + Math.random() * 1800);
    }, base);
    return () => window.clearInterval(timer);
  }, [state.unlockedIds.length]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-28 right-6 z-40 max-w-xs rounded-3xl border border-cyan-500/20 bg-[#07131d]/95 p-4 shadow-[0_40px_120px_rgba(8,40,62,0.45)] backdrop-blur-xl"
        >
          <div className="flex items-start gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-200 shadow-[0_0_20px_rgba(25,255,255,0.18)]">
              <span className="text-lg">🐇</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Bunny guide</p>
              <p className="mt-2 text-sm leading-6 text-white">{HINTS[hintIndex]}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BunnyAIGuide;
