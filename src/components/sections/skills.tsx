import { useState } from "react";
import { Section } from "../section";
import skills from "@/data/skills.json";
import { ChevronRight } from "lucide-react";

export function Skills() {
  const [open, setOpen] = useState<Record<string, boolean>>(
    () => Object.fromEntries(skills.map((s) => [s.category, true]))
  );

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>The <span className="gradient-text">toolkit</span></>}
      description="Grouped, not graded. No arbitrary percentages — just what I actually reach for."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group) => {
          const isOpen = open[group.category];
          return (
            <div key={group.category} className="glass overflow-hidden rounded-2xl">
              <button
                onClick={() => setOpen((s) => ({ ...s, [group.category]: !s[group.category] }))}
                className="flex w-full items-center justify-between p-4 text-left transition hover:bg-secondary/40"
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg font-semibold">{group.category}</span>
                <ChevronRight
                  className={`size-5 text-primary transition-transform ${isOpen ? "rotate-90" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="flex flex-wrap gap-2 border-t border-border p-4">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface-2/60 px-3 py-1 text-sm transition hover:border-primary/50 hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
