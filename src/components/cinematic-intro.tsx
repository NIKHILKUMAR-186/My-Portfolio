import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { AvatarFrame } from "./avatar-frame";

const MESSAGES = [
  "INITIALIZING...",
  "Loading Journey...",
  "Loading Projects...",
  "READY",
  "Engineer",
  "Learner",
  "Builder",
];

const messageVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, filter: "blur(10px)", transition: { duration: 0.7, ease: "easeIn" } },
};

const avatarVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 16 },
  visible: {
    opacity: 1,
    scale: [0.96, 1],
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

interface CinematicIntroProps {
  onExitStart?: () => void;
}

export function CinematicIntro({ onExitStart }: CinematicIntroProps) {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;

    const lastIndex = MESSAGES.length - 1;
    const delay = step === lastIndex ? 1700 : 1700;

    const timer = setTimeout(() => {
      if (step === lastIndex) {
        finish();
        return;
      }
      setStep((current) => current + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [show, step]);

  function finish() {
    onExitStart?.();
    setShow(false);
  }

  const showAvatar = step > 3;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          role="dialog"
          aria-label="Intro animation"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-1/4 top-1/3 size-[400px] rounded-full bg-accent/20 blur-3xl" />
          </div>

          <button
            onClick={finish}
            className="absolute right-6 top-6 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur transition hover:text-foreground"
          >
            Skip intro →
          </button>

          <div className="relative flex w-full max-w-5xl flex-col items-center gap-10 px-6 text-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={step}
                className="max-w-3xl text-4xl font-semibold uppercase tracking-[0.18em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {MESSAGES[step]}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence>
              {showAvatar && (
                <motion.div
                  className="relative flex items-center justify-center w-56 h-56 md:w-72 md:h-72"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={avatarVariants}
                >
                  <AvatarFrame
                    layoutId="avatar"
                    className="w-full h-full"
                    imageSrc="/avatar.png"
                    alt="Nikhil Kumar"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-4 flex gap-2">
              {MESSAGES.map((_, i) => (
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
