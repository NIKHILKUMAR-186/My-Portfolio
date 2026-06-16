import { AnimatePresence, motion } from "framer-motion";
import { Section } from "../section";
import profile from "@/data/profile.json";
import { Bunny } from "../bunny";
import bunny from "@/data/bunny.json";

type AboutProps = {
  journeyStarted: boolean;
};

export function About({ journeyStarted }: AboutProps) {
  return (
    <Section
      id="about"
      eyebrow="Who Am I?"
      title={<>The short version</>}
      description={profile.bio}
    >
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-12">
        {/* Avatar card */}
        <div className="glass relative overflow-hidden rounded-3xl p-6">
          <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-primary/30 via-surface-2 to-accent/30 p-1">
            <div className="flex size-full items-center justify-center rounded-2xl bg-surface">
              <img src="/avatar2.png" alt="Nikhil Kumar" className="w-full h-full object-cover  brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-500 select-none scale-105 hover:scale-100" />
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="text-sm text-muted-foreground">{profile.education}</div>
          </div>

          {/* Bunny peek */}
          <AnimatePresence mode="wait">
            {!journeyStarted && (
              <motion.div
                layoutId="journey-bunny"
                className="absolute -bottom-3 -right-3 opacity-90"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18, transition: { duration: 0.25 } }}
              >
                <Bunny size={72} showTrail />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Currently</div>
            <p className="text-lg text-foreground">{profile.focus}</p>
          </div>

          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Interests</div>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((i) => (
                <span
                  key={i}
                  className="glass rounded-full px-3 py-1 text-sm text-foreground transition hover:border-primary/50 hover:text-primary"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-4 text-sm text-muted-foreground">
            <span className="mr-2 font-mono text-primary">🐰</span>
            {bunny.about}
          </div>
        </div>
      </div>
    </Section>
  );
}
