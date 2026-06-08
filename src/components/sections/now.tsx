import { Section } from "../section";
import now from "@/data/now.json";
import { Hammer, BookOpen, Compass, Sparkles } from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Building: Hammer,
  Learning: BookOpen,
  Exploring: Compass,
  Reading: Sparkles,
};

export function Now() {
  return (
    <Section
      id="now"
      eyebrow={`Updated ${now.updated}`}
      title={<>Currently <span className="gradient-text">building</span></>}
      description="A live snapshot — what I'm working on, learning, and reading right now."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {now.items.map((item, i) => {
          const Icon = ICONS[item.label] ?? Sparkles;
          return (
            <div
              key={i}
              className="glass group relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="size-5" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">{item.label}</div>
              <p className="mt-2 text-sm text-foreground/90">{item.text}</p>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          );
        })}
      </div>
    </Section>
  );
}
