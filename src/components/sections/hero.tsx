import { motion, type Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profile from "@/data/profile.json";
import { AvatarFrame } from "@/components/avatar-frame";

interface HeroProps {
  introReady: boolean;
}

const heroSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const splashVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut" } },
};

const buttonGroupVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut", delayChildren: 0.12, staggerChildren: 0.08 } },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const avatarWrapperVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.95, ease: "easeOut" } },
};

const scrollVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut", delay: 0.4 } },
};

export function Hero({ introReady }: HeroProps) {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24">
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
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
          variants={heroSectionVariants}
          initial="hidden"
          animate={introReady ? "visible" : "hidden"}
        >
          <div>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
              variants={splashVariants}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Open to internships · Available 2026
            </motion.div>

            <motion.h1
              className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
              variants={splashVariants}
            >
              {profile.name.split(" ")[0]} <span className="gradient-text">{profile.name.split(" ")[1]}</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-xl text-muted-foreground md:text-2xl"
              variants={splashVariants}
            >
              {profile.title}. {profile.tagline}
            </motion.p>

            <motion.div className="mt-10 flex flex-wrap items-center gap-3" variants={buttonGroupVariants}>
              <motion.a
                href="#projects"
                className="group relative overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.03] glow-cyan"
                variants={buttonVariants}
              >
                <span className="relative z-10">See my work</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="glass rounded-full px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/60"
                variants={buttonVariants}
              >
                Get in touch
              </motion.a>
              <motion.div className="ml-2 flex items-center gap-1" variants={buttonVariants}>
                <motion.a
                  href={profile.github}
                  className="glass flex size-10 items-center justify-center rounded-full transition hover:text-primary"
                  aria-label="GitHub"
                  variants={buttonVariants}
                >
                  <Github className="size-4" />
                </motion.a>
                <motion.a
                  href={profile.linkedin}
                  className="glass flex size-10 items-center justify-center rounded-full transition hover:text-primary"
                  aria-label="LinkedIn"
                  variants={buttonVariants}
                >
                  <Linkedin className="size-4" />
                </motion.a>
                <motion.a
                  href={`mailto:${profile.email}`}
                  className="glass flex size-10 items-center justify-center rounded-full transition hover:text-primary"
                  aria-label="Email"
                  variants={buttonVariants}
                >
                  <Mail className="size-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div className="hidden lg:flex items-center justify-end" variants={avatarWrapperVariants}>
            <AvatarFrame layoutId="avatar" className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80" />
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
          aria-label="Scroll down"
          variants={scrollVariants}
          initial="hidden"
          animate={introReady ? "visible" : "hidden"}
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
