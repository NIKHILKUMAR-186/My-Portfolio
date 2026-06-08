import { Section } from "../section";
import roadmap from "@/data/roadmap.json";
import { motion } from "framer-motion";

export function Roadmap() {
  return (
    <Section
      id="roadmap"
      eyebrow="Roadmap"
      title={<>Where I'm <span className="gradient-text">headed</span></>}
      description="A direction, not a deadline."
    >
      <div className="relative">
        <div className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-primary via-accent to-primary opacity-40" aria-hidden />
        <div className="grid gap-6 md:grid-cols-4">
          {roadmap.map((r, i) => (
            <motion.div
              key={r.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pt-12"
            >
              <div className="absolute left-1/2 top-3 size-6 -translate-x-1/2 rounded-full border-2 border-primary bg-background glow-cyan" />
              <div className="glass rounded-2xl p-5 text-center">
                <div className="font-display text-2xl font-bold gradient-text">{r.year}</div>
                <h3 className="mt-2 font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
