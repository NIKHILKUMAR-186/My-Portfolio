import { Section } from "../section";

const STEPS = [
  { year: "Then", title: "Started with C", note: "Loops, pointers, segfaults. Humbling and addictive." },
  { year: "↓", title: "Picked up Python", note: "Built my first real scripts, scraped the web, automated chores." },
  { year: "↓", title: "Got into IoT", note: "Arduino, then ESP32. The day my code blinked an LED across the room, I was hooked." },
  { year: "Now", title: "Learning AI", note: "PyTorch, statistics, and small on-device models." },
];

export function Learning() {
  return (
    <Section
      id="learning"
      eyebrow="Learning Journey"
      title={<>What I learned, and <span className="gradient-text">when</span></>}
      description="Skills aren't picked — they're picked up, one stumble at a time."
    >
      <div className="grid gap-4 md:grid-cols-4">
        {STEPS.map((s, i) => (
          <div key={i} className="glass relative rounded-2xl p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">{s.year}</div>
            <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.note}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
