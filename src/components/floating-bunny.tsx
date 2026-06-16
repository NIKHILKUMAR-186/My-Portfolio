import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Bunny } from "./bunny";
import { useProgress } from "../lib/progression";

const MESSAGES = [
  "You skipped a section.",
  "I sense an undiscovered clue.",
  "The stars hide answers.",
  "Stay patient and the path will reveal itself.",
];

export function FloatingBunny() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(MESSAGES[0]);
  const { completed } = useProgress();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessage(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
      setVisible(true);
      window.setTimeout(() => setVisible(false), 4200);
    }, 18000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && !completed && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-28 right-6 z-40 w-[min(320px,80vw)] rounded-3xl border border-cyan-400/15 bg-[#06111e]/95 p-4 shadow-[0_40px_120px_rgba(2,12,30,0.55)] backdrop-blur-xl"
        >
          <div className="flex items-start gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-200 shadow-[0_0_20px_rgba(25,255,255,0.18)]">
              <Bunny size={28} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/70">Bunny AI</p>
              <p className="mt-2 text-sm leading-6 text-white">{message}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
