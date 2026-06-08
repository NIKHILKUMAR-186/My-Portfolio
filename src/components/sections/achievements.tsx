import { Section } from "../section";
import achievements from "@/data/achievements.json";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title={<>Milestones, <span className="gradient-text">earned</span></>}
      description="Competitions, scholarships, awards — every one of them taught me something."
    >
      <div className="space-y-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass flex items-start gap-4 rounded-2xl p-5 transition hover:border-primary/40"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/25 text-primary">
              <Trophy className="size-5" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-display text-lg font-semibold">{a.title}</h3>
                <span className="text-xs text-muted-foreground">{a.year}</span>
              </div>
              <div className="mt-0.5 text-xs font-medium text-accent">{a.type}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{a.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
