import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "../section";
import projects from "@/data/projects.json";
import { Github, ExternalLink, X } from "lucide-react";

type Project = (typeof projects)[number];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Work"
      title={<>Things I've <span className="gradient-text">actually built</span></>}
      description="Each one is its own little story — click to read the case study."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <motion.button
            key={p.id}
            onClick={() => setActive(p)}
            whileHover={{ y: -4 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 text-left transition hover:border-primary/50"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{p.year}</span>
                  <span>·</span>
                  <span className={p.status === "Active" ? "text-primary" : ""}>{p.status}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold">{p.name}</h3>
              </div>
            </div>
            <p className="mt-3 text-foreground/85">{p.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.slice(0, 5).map((s) => (
                <span key={s} className="rounded-full bg-surface-2 px-2 py-0.5 text-xs text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100">
              Read case study →
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </Section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-background/80 p-0 backdrop-blur-md md:items-center md:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="glass relative max-h-[90dvh] w-full max-w-3xl overflow-y-auto rounded-t-3xl p-6 md:rounded-3xl md:p-8"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-surface-2 transition hover:text-primary"
        >
          <X className="size-4" />
        </button>

        <div className="text-xs text-muted-foreground">{project.year} · {project.status}</div>
        <h3 className="mt-1 font-display text-3xl font-bold">{project.name}</h3>
        <p className="mt-2 text-lg text-muted-foreground">{project.tagline}</p>

        <div className="mt-6 space-y-5 text-sm md:text-base">
          <Block label="Overview">{project.overview}</Block>
          <Block label="Problem">{project.problem}</Block>
          <Block label="Solution">{project.solution}</Block>

          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Stack</div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span key={s} className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Challenges</div>
            <ul className="space-y-1.5 text-foreground/90">
              {project.challenges.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:scale-[1.03]"
            >
              <Github className="size-4" /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition hover:border-primary/50"
            >
              <ExternalLink className="size-4" /> Live
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">{label}</div>
      <p className="text-foreground/90">{children}</p>
    </div>
  );
}
