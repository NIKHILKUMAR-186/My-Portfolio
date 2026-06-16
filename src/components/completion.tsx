// Completion: full-screen celebration when user completes all achievements
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "../lib/progression";
import { Bunny } from "./bunny";

export function Completion() {
  const { completed } = useProgress();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (completed) setShow(true);
  }, [completed]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <motion.div initial={{ scale: 0.96 }} animate={{ scale: 1 }} className="relative mx-auto w-full max-w-4xl p-8 text-center">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="confetti">
                {Array.from({ length: 40 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="confetti-piece"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 800, rotate: Math.random() * 360, opacity: 1 }}
                    transition={{ duration: 2 + Math.random() * 1.5, delay: Math.random() * 0.6 }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-[#07131d]/95 p-10 shadow-[0_60px_140px_rgba(4,20,30,0.6)]">
              <div className="mb-6 flex items-center justify-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-cyan-500/10">
                  <Bunny size={64} />
                </div>
              </div>
              <h1 className="text-5xl font-semibold text-cyan-100">CURIOUS EXPLORER</h1>
              <p className="mt-4 text-lg text-muted-foreground">You didn't just visit the portfolio. You completed it.</p>
            </div>
          </motion.div>
          <style>{`
            .confetti-piece{display:block;position:absolute;left:50%;width:10px;height:18px;background:linear-gradient(45deg,#00f,#0ff);opacity:0.9}
            .confetti{position:relative;width:100%;height:100%}
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Completion;
