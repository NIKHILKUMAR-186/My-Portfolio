import { Award } from "lucide-react";
import { motion } from "framer-motion";
import type { AchievementState } from "../lib/progression";

export function AchievementCard({ achievement }: { achievement: AchievementState }) {
  const palette = achievement.unlocked
    ? "border-cyan-400/20 bg-cyan-500/10 text-white"
    : "border-white/10 bg-white/5 text-muted-foreground";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`rounded-[1.75rem] border px-5 py-4 shadow-sm ${palette}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">{achievement.title}</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{achievement.description}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-cyan-200">
          <Award className="size-4" /> {achievement.rarity}
        </div>
      </div>
      <p className="mt-4 text-xs text-cyan-100">{achievement.unlocked ? "Unlocked" : achievement.hint}</p>
    </motion.article>
  );
}
