import { motion } from "framer-motion";
import type { ClueState } from "../lib/progression";

export function ClueCard({ clue }: { clue: ClueState }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`rounded-[1.75rem] border p-5 shadow-sm ${clue.discovered ? "border-cyan-400/20 bg-cyan-500/10 text-white" : "border-white/10 bg-white/5 text-muted-foreground"}`}
    >
      <p className="text-sm font-semibold text-white">{clue.teaser}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{clue.discovered ? clue.reveal : "This clue is hidden somewhere in the related section."}</p>
      <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-cyan-200">
        <span>{clue.section}</span>
        <span>{clue.discovered ? `+${clue.xp} XP` : "Hidden"}</span>
      </div>
    </motion.article>
  );
}
