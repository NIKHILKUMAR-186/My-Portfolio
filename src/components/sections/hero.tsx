import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Globe } from "lucide-react";
import profile from "@/data/profile.json";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute -left-32 top-32 size-[500px] rounded-full bg-primary/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 bottom-0 size-[500px] rounded-full bg-accent/20 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Open to internships · Available 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
            >
              {profile.name.split(" ")[0]} <span className="gradient-text">{profile.name.split(" ")[1]}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 max-w-2xl text-xl text-muted-foreground md:text-2xl"
            >
              {profile.title}. {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.03] glow-cyan"
              >
                <span className="relative z-10">See my work</span>
              </a>
              <a
                href="#contact"
                className="glass rounded-full px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/60"
              >
                Get in touch
              </a>
              <div className="ml-2 flex items-center gap-1">
                <a href={profile.github} className="glass flex size-10 items-center justify-center rounded-full transition hover:text-primary" aria-label="GitHub">
                  <Github className="size-4" />
                </a>
                <a href={profile.linkedin} className="glass flex size-10 items-center justify-center rounded-full transition hover:text-primary" aria-label="LinkedIn">
                  <Linkedin className="size-4" />
                </a>
                <a href={`mailto:${profile.email}`} className="glass flex size-10 items-center justify-center rounded-full transition hover:text-primary" aria-label="Email">
                  <Mail className="size-4" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:flex items-center justify-end">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative flex items-center justify-center w-[420px] h-[420px]"
            >
              {/* outer faint glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-slate-900/40 to-transparent blur-[40px] opacity-60" />

              {/* outer rotating dashed ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-600/30 animate-spin"
                style={{ animationDuration: "36s" }}
              />

              {/* dotted inner ring */}
              <div className="absolute inset-6 rounded-full border-4 border-dotted border-cyan-700/20" />

              {/* inner gradient ring */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-cyan-500/10 via-slate-950 to-blue-500/10 p-1.5 backdrop-blur-sm border border-slate-800/80 shadow-inner" />

              {/* avatar image (circular) */}
              <div className="absolute inset-14 rounded-full overflow-hidden border-2 border-slate-700/80 bg-slate-950/90 group flex items-center justify-center shadow-[0_30px_60px_rgba(2,6,23,0.8)]">
                <img
                  src="https://picsum.photos/seed/nikhilavatar/600/600"
                  alt="Nikhil Kumar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-500 select-none scale-105 hover:scale-100"
                />
              </div>

              {/* small orbiting node */}
              <div className="absolute -right-6 top-1/3 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -right-3 -top-3 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-violet-500 rounded-full" />
                </div>
              </div>

              {/* status badge */}
              <div className="absolute -bottom-5 px-3 py-1 bg-slate-950/90 border border-slate-800 rounded-full text-[10px] font-mono tracking-widest text-emerald-400 flex items-center gap-2 shadow-lg select-none">
                <Globe className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: "20s" }} />
                SYSTEMS_ACTIVE
              </div>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-1 text-xs"
          >
            scroll
            <ArrowDown className="size-4" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
