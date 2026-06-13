import { Section } from "../section";
import profile from "@/data/profile.json";
import { FileText, Award, Trophy, Link2 } from "lucide-react";

const LINKS = [
  { label: "Resume", icon: FileText, href: "/resume.pdf", note: "Paper That Defines me." },
  {
    label: "Certificate Vault",
    icon: Award,
    href: "#certificates",
    note: "Searchable & filterable.",
  },
  { label: "Achievements", icon: Trophy, href: "#achievements", note: "Awards & recognitions." },
  { label: "All Links", icon: Link2, href: "#contact", note: "GitHub · LinkedIn · Email." },
];

export function ResumeHub() {
  return (
    <Section
      id="resume"
      eyebrow="Resume Hub"
      title={
        <>
          Everything, in <span className="gradient-text">one place</span>
        </>
      }
      description="A single starting point for recruiters. Pick your poison."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {LINKS.map((l) => {
          const Icon = l.icon;
          return (
            <a
              key={l.label}
              href={l.href}
              className="glass group flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-primary/50"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition group-hover:scale-110">
                <Icon className="size-5" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">{l.label}</div>
                <div className="text-sm text-muted-foreground">{l.note}</div>
              </div>
              <span className="text-primary opacity-0 transition group-hover:opacity-100">→</span>
            </a>
          );
        })}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Prefer email?{" "}
        <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
          {profile.email}
        </a>
      </p>
    </Section>
  );
}
