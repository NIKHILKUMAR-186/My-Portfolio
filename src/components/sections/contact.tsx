import { Section } from "../section";
import profile from "@/data/profile.json";
import bunny from "@/data/bunny.json";
import { Bunny } from "../bunny";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={<>Let's <span className="gradient-text">build something</span></>}
      description="Internships, collaborations, or just a chat about a project — my inbox is open."
    >
      <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
        <div className="glass rounded-3xl p-8">
          <div className="grid gap-3">
            <ContactLink href={`mailto:${profile.email}`} icon={Mail} label="Email" value={profile.email} />
            <ContactLink href={profile.github} icon={Github} label="GitHub" value="@nikhilkumar" />
            <ContactLink href={profile.linkedin} icon={Linkedin} label="LinkedIn" value="/in/nikhilkumar" />
            <ContactLink href={profile.resume} icon={FileText} label="Resume" value="Download PDF" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass flex flex-col items-center justify-center rounded-3xl p-8 text-center"
        >
          <Bunny size={120} waving />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            <span className="font-mono text-primary">🐰</span> {bunny.contact}
          </p>
        </motion.div>
      </div>

      <footer className="mt-16 border-t border-border pt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} · Built with care.
      </footer>
    </Section>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-border bg-surface-2/40 p-4 transition hover:border-primary/50 hover:bg-surface-2/80"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <Icon className="size-4" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="font-medium">{value}</div>
        </div>
      </div>
      <span className="text-primary opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">→</span>
    </a>
  );
}
