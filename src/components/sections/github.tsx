import { Section } from "../section";
import profile from "@/data/profile.json";
import { GitBranch, Star, GitCommit, Github } from "lucide-react";

const STAGES = [
  { label: "First Repo", note: "A blinking LED, committed with pride.", icon: GitCommit },
  { label: "First Major Project", note: "Campus Eats — my first deployed app with real users.", icon: GitBranch },
  { label: "Now", note: "Shipping HydroSentinal and contributing to OSS.", icon: Star },
  { label: "Next", note: "Open-source IoT toolkit for classrooms.", icon: GitBranch },
];

const STATS = [
  { label: "Public Repos", value: "24+" },
  { label: "Contributions / yr", value: "800+" },
  { label: "Top Languages", value: "TS · Py · C++" },
];

export function Github_() {
  return (
    <Section
      id="github"
      eyebrow="GitHub Journey"
      title={<>Not just stats — a <span className="gradient-text">growth story</span></>}
      description="The repos, the rewrites, the late-night commits. Here's the arc."
    >
      <div className="grid gap-6 md:grid-cols-[1fr_1.4fr]">
        <div className="glass space-y-4 rounded-2xl p-6">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-baseline justify-between border-b border-border/60 pb-3 last:border-0 last:pb-0">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <span className="font-display text-xl font-bold gradient-text">{s.value}</span>
            </div>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]"
          >
            <Github className="size-4" /> View profile
          </a>
        </div>

        <div className="relative space-y-3">
          {STAGES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="glass flex items-start gap-4 rounded-2xl p-5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Icon className="size-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">{s.label}</div>
                  <p className="mt-1 text-foreground/90">{s.note}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
