import { motion } from "framer-motion";
import type { RewardState } from "../lib/progression";

export function RewardCard({ reward }: { reward: RewardState }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`rounded-[1.75rem] border p-5 shadow-sm ${reward.unlocked ? "border-emerald-400/20 bg-emerald-500/10 text-white" : "border-white/10 bg-white/5 text-muted-foreground"}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">{reward.title}</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{reward.description}</p>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-cyan-200">
          {reward.unlocked ? "Unlocked" : "Locked"}
        </span>
      </div>
      {reward.unlocked && (
        <div className="mt-4 space-y-2 text-xs text-cyan-100">
          {reward.content.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </motion.article>
  );
}
