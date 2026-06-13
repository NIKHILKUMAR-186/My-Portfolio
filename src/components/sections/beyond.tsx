import { Section } from "../section";
import { Music, Lightbulb, BookOpen, Wrench } from "lucide-react";

const ITEMS = [
  { label: "Listening Music", icon: Music, note: "An old hobby that keeps me energetic and prevent me from getting bored." },
  {
    label: "Tech tinkering",
    icon: Lightbulb,
    note: "Taking apart anything with a battery and some components. Mostly reassembling it.",
  },
  {
    label: "Reading",
    icon: BookOpen,
    note: "Slow non-fiction, sci-fi, and the occasional founder memoir.",
  },
  {
    label: "Building",
    icon: Wrench,
    note: "Side projects that don't need to ship — but often do.",
  },
];

export function Beyond() {
  return (
    <Section
      id="beyond"
      eyebrow="Beyond coding"
      title={
        <>
          The <span className="gradient-text">human</span> side
        </>
      }
      description="Engineers are people too. Here's what fills the rest of my hours."
    >
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((i) => {
          const Icon = i.icon;
          return (
            <div key={i.label} className="glass rounded-2xl p-5">
              <Icon className="size-5 text-accent" />
              <div className="mt-3 font-display text-lg font-semibold">{i.label}</div>
              <p className="mt-1 text-sm text-muted-foreground">{i.note}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
