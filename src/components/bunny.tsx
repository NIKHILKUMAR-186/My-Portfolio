import { motion, type MotionValue } from "framer-motion";

type Props = {
  size?: number | string | MotionValue<number | string>;
  className?: string;
  waving?: boolean;
  showTrail?: boolean;
};

/**
 * Minimal SVG bunny mascot — Nikhil's storytelling companion.
 * Pure SVG, no images, scales crisply. Optional gentle "wave" animation.
 */
export function Bunny({ size = 64, className, waving = false, showTrail = false }: Props) {
  return (
    <div className={`relative inline-flex ${className ?? ""}`}>
      {showTrail && (
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
          initial={{ opacity: 0.16 }}
          animate={{ opacity: [0.16, 0.08, 0.16], y: [0, -3, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="absolute -left-4 top-2 h-6 w-6 rounded-full bg-cyan-400/15 blur-2xl" />
          <span className="absolute -right-3 bottom-5 h-5 w-5 rounded-full bg-sky-400/10 blur-2xl" />
          <span className="absolute left-1/2 top-1/3 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-300/15 blur-2xl" />
        </motion.div>
      )}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
        aria-label="Bunny mascot"
        role="img"
        initial={{ y: 0 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
      {/* Ears */}
      <motion.g
        animate={{ rotate: waving ? [0, -8, 8, -4, 0] : 0 }}
        transition={{ duration: 1.4, repeat: waving ? Infinity : 0, ease: "easeInOut" }}
        style={{ transformOrigin: "50px 60px" }}
      >
        <path
          d="M36 48 C32 28, 34 10, 40 8 C46 6, 46 26, 44 46 Z"
          fill="var(--surface-2)"
          stroke="var(--primary)"
          strokeWidth="1.5"
        />
        <path d="M40 42 C38 28, 40 16, 41 14" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M64 48 C68 28, 66 10, 60 8 C54 6, 54 26, 56 46 Z"
          fill="var(--surface-2)"
          stroke="var(--primary)"
          strokeWidth="1.5"
        />
        <path d="M60 42 C62 28, 60 16, 59 14" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
      </motion.g>

      {/* Head */}
      <ellipse cx="50" cy="62" rx="22" ry="20" fill="var(--surface-2)" stroke="var(--primary)" strokeWidth="1.5" />

      {/* Eyes */}
      <motion.circle
        cx="42" cy="60" r="2.2" fill="var(--foreground)"
        animate={{ scaleY: [1, 1, 0.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.92, 0.96, 1] }}
        style={{ transformOrigin: "42px 60px" }}
      />
      <motion.circle
        cx="58" cy="60" r="2.2" fill="var(--foreground)"
        animate={{ scaleY: [1, 1, 0.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.92, 0.96, 1] }}
        style={{ transformOrigin: "58px 60px" }}
      />

      {/* Nose */}
      <path d="M48 67 L52 67 L50 70 Z" fill="var(--accent)" />

      {/* Mouth */}
      <path d="M48 71 Q50 73 52 71" stroke="var(--foreground)" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Cheeks */}
      <circle cx="38" cy="68" r="2" fill="var(--primary)" opacity="0.35" />
      <circle cx="62" cy="68" r="2" fill="var(--primary)" opacity="0.35" />

      {/* Body hint */}
      <ellipse cx="50" cy="92" rx="14" ry="10" fill="var(--surface-2)" stroke="var(--primary)" strokeWidth="1.5" />
    </motion.svg>
    </div>
  );
}
