import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bunny } from "./bunny";
import { Globe } from "lucide-react";

const SCENES = [
  "Hi, I'm Nikhil Kumar.",
  "Engineer.",
  "Learner.",
  "Builder.",
  "Coding · Learning · Building · Innovating.",
  "Before we begin — meet my companion, Bunny.",
];

const STORAGE_KEY = "nk-intro-seen-v1";

export function CinematicIntro() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (!seen) setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    if (step >= SCENES.length) {
      const t = setTimeout(() => finish(), 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), 900);
    return () => clearTimeout(t);
  }, [show, step]);

  function finish() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          role="dialog"
          aria-label="Intro animation"
        >
          {/* Backdrop glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-1/4 top-1/3 size-[400px] rounded-full bg-accent/20 blur-3xl" />
          </div>

          {/* Skip */}
          <button
            onClick={finish}
            className="absolute right-6 top-6 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur transition hover:text-foreground"
          >
            Skip intro →
          </button>

          <div className="relative flex flex-col items-center gap-8 px-6 text-center">
            <AnimatePresence mode="wait">
              {step < SCENES.length && (
                <motion.h1
                  key={step}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.5 }}
                  className="max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl"
                >
                  {step === SCENES.length - 1 ? (
                    <>
                      Before we begin — meet my companion, <span className="gradient-text">Bunny</span>.
                    </>
                  ) : step === 0 ? (
                    <>Hi, I'm <span className="gradient-text">Nikhil Kumar</span>.</>
                  ) : (
                    SCENES[step]
                  )}
                </motion.h1>
              )}
            </AnimatePresence>

            {step === SCENES.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                {/* Outer Rotating cyber circle */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin"
                  style={{ animationDuration: "40s" }}
                />
                {/* Inner ring gradient */}
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-cyan-500/10 via-slate-950 to-blue-500/10 p-1.5 backdrop-blur-sm border border-slate-800/80 shadow-inner" />

                {/* Actual Avatar Frame */}
                <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-slate-700/80 bg-slate-950/90 group flex items-center justify-center shadow-[0_10px_30px_rgba(2,6,23,0.8)]">
                  <img
                    src="https://picsum.photos/seed/nikhilavatar/400/400"
                    alt="Nikhil Kumar"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-500 select-none scale-105 hover:scale-100"
                  />
                </div>

                </motion.div>

                {/* Glowing node coordinates around avatar */}
                <div className="absolute top-[10%] left-[10%] w-3 h-3 bg-cyan-400 rounded-full animate-ping pointer-events-none" />
                <div className="absolute bottom-[20%] right-[8%] w-2 h-2 bg-indigo-500 rounded-full pointer-events-none" />

                {/* Hardware status badge on avatar */}
                <div className="absolute -bottom-2 px-3 py-1 bg-slate-950/90 border border-slate-800 rounded-lg text-[9px] font-mono tracking-widest text-emerald-400 flex items-center gap-1.5 shadow-lg select-none">
                  <Globe className="w-3 h-3 text-cyan-400 animate-spin" style={{ animationDuration: "20s" }} />
                  SYSTEMS_ACTIVE
                </div>
              </motion.div>
            )}

            {/* Progress dots */}
            <div className="mt-4 flex gap-2">
              {SCENES.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all ${
                    i <= step ? "w-8 bg-primary" : "w-4 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
