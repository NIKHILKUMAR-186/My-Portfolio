import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Bunny } from "./router-BZI4lPyP.mjs";
import { G as GitHubCalendar } from "../_libs/react-github-calendar.mjs";
import { R as Root, I as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as useInView, A as AnimatePresence, m as motion, a as useScroll, b as useTransform } from "../_libs/framer-motion.mjs";
import { d as Sun, M as Moon, G as Github, L as Linkedin, e as Mail, f as ArrowDown, a as Sparkles, C as Compass, B as BookOpen, H as Hammer, g as ChevronRight, h as Search, F as FileText, D as Download, i as Trophy, j as GitBranch, k as TrendingUp, l as Activity, U as Users, m as CalendarDays, R as Rocket, n as Music, o as Lightbulb, W as Wrench, p as Globe, X, E as ExternalLink, q as Star, r as CodeXml } from "../_libs/lucide-react.mjs";
import { c as format } from "../_libs/date-fns.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/react-activity-calendar.mjs";
import "../_libs/floating-ui__react.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/tabbable.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
function AvatarFrame({
  layoutId,
  className = "",
  imageSrc = "/avatar2.png",
  alt = "Nikhil Kumar",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      layoutId,
      className: `relative flex items-center justify-center ${className}`,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin",
            style: { animationDuration: "40s" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-3 rounded-full bg-gradient-to-br from-cyan-500/10 via-slate-950 to-blue-500/10 p-1.5 backdrop-blur-sm border border-slate-800/80 shadow-inner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-6 rounded-full overflow-hidden border-2 border-slate-700/80 bg-slate-950/90 group flex items-center justify-center shadow-[0_10px_30px_rgba(2,6,23,0.8)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: imageSrc,
            alt,
            referrerPolicy: "no-referrer",
            className: "w-full h-full object-cover brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-500 select-none scale-105 hover:scale-100"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[10%] left-[10%] w-3 h-3 bg-cyan-400 rounded-full animate-ping pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[20%] right-[8%] w-2 h-2 bg-indigo-500 rounded-full pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-2 px-3 py-1 bg-slate-950/90 border border-slate-800 rounded-lg text-[9px] font-mono tracking-widest text-emerald-400 flex items-center gap-1.5 shadow-lg select-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Globe,
            {
              className: "w-3 h-3 text-cyan-400 animate-spin",
              style: { animationDuration: "20s" }
            }
          ),
          "BTech in IT • MIT Muzaffarpur ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ BS Data Science • IIT Madras"
        ] })
      ]
    }
  );
}
const MESSAGES = [
  "INITIALIZING...",
  "Loading Journey...",
  "Loading Projects...",
  "READY",
  "Engineer",
  "Learner",
  "Builder"
];
const messageVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, filter: "blur(10px)", transition: { duration: 0.7, ease: "easeIn" } }
};
const avatarVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 16 },
  visible: {
    opacity: 1,
    scale: [0.96, 1],
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" }
  }
};
function CinematicIntro({ onExitStart }) {
  const [show, setShow] = reactExports.useState(true);
  const [step, setStep] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!show) return;
    const lastIndex = MESSAGES.length - 1;
    const delay = step === lastIndex ? 1700 : 1700;
    const timer = setTimeout(() => {
      if (step === lastIndex) {
        finish();
        return;
      }
      setStep((current) => current + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [show, step]);
  function finish() {
    onExitStart?.();
    setShow(false);
  }
  const showAvatar = step > 3;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-background",
      role: "dialog",
      "aria-label": "Intro animation",
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1, ease: "easeInOut" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-1/4 top-1/3 size-[400px] rounded-full bg-accent/20 blur-3xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: finish,
            className: "absolute right-6 top-6 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur transition hover:text-foreground",
            children: "Skip intro →"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex w-full max-w-5xl flex-col items-center gap-10 px-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              className: "max-w-3xl text-4xl font-semibold uppercase tracking-[0.18em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl",
              variants: messageVariants,
              initial: "hidden",
              animate: "visible",
              exit: "exit",
              children: MESSAGES[step]
            },
            step
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showAvatar && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "relative flex items-center justify-center w-56 h-56 md:w-72 md:h-72",
              initial: "hidden",
              animate: "visible",
              exit: "hidden",
              variants: avatarVariants,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                AvatarFrame,
                {
                  layoutId: "avatar",
                  className: "w-full h-full",
                  imageSrc: "/avatar.png",
                  alt: "Nikhil Kumar"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex gap-2", children: MESSAGES.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `h-1 rounded-full transition-all ${i <= step ? "w-8 bg-primary" : "w-4 bg-border"}`
            },
            i
          )) })
        ] })
      ]
    }
  ) });
}
function SmoothScroll() {
  reactExports.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return null;
}
const SECTIONS = [
  { id: "about", label: "About" },
  { id: "timeline", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Vault" },
  { id: "contact", label: "Contact" }
];
function Nav() {
  const [theme, setTheme] = reactExports.useState("dark");
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [deferredPrompt, setDeferredPrompt] = reactExports.useState(null);
  const [online, setOnline] = reactExports.useState(typeof navigator !== "undefined" ? navigator.onLine : true);
  reactExports.useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("nk-theme");
    if (saved) setTheme(saved);
  }, []);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("nk-theme", theme);
  }, [theme]);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    const onBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    const onOnline = () => setOnline(true);
    const onOffline = () => setOnline(false);
    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/",
            className: `glass rounded-full px-4 py-2 font-display text-sm font-semibold tracking-tight transition ${scrolled ? "glow-cyan" : ""}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "NK" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "glass hidden rounded-full px-2 py-1.5 md:flex", "aria-label": "Primary", children: SECTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `#${s.id}`,
            className: "rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-secondary/60 hover:text-foreground",
            children: s.label
          },
          s.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
            className: "glass flex size-10 items-center justify-center rounded-full text-foreground transition hover:text-primary",
            "aria-label": "Toggle theme",
            children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "size-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-3 flex items-center gap-2", children: [
          !online && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-full px-3 py-1 text-xs font-semibold text-foreground", children: "Offline Mode" }),
          deferredPrompt && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: async () => {
                try {
                  deferredPrompt.prompt();
                  const choiceResult = await deferredPrompt.userChoice;
                  setDeferredPrompt(null);
                } catch {
                  setDeferredPrompt(null);
                }
              },
              className: "glass hidden md:inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-foreground",
              children: "Install Portfolio"
            }
          )
        ] })
      ] })
    }
  );
}
const name = "Nikhil Kumar";
const title = "Building products where software, data and hardware meet.";
const tagline = "Building things that matter — from circuits to code.";
const education = "B.Tech, MIT Muzaffarpur  ·  BS Data Science, IIT Madras";
const bio = "I'm Nikhil Kumar, an engineering student exploring the intersection of software, data, and embedded systems. Currently pursuing B.Tech at MIT Muzaffarpur and BS in Data Science at IIT Madras, I enjoy turning ideas into real products — from IoT hardware prototypes to full-stack applications. My goal is simple: Learn deeply, build publicly, and solve meaningful problems.";
const interests = ["IoT & Embedded", "AI / ML", "Full-stack Web", "Hardware Prototyping", "Open Source"];
const focus = "Shipping HydroSentinal, sharpening Data Science fundamentals at IIT Madras and Learning new things.";
const email = "raj.savera111@gmail.com";
const github = "https://github.com/NIKHILKUMAR-186";
const linkedin = "https://www.linkedin.com/in/nikhil-kumar-b288a7303";
const resume = "/resume.pdf";
const profile = {
  name,
  title,
  tagline,
  education,
  bio,
  interests,
  focus,
  email,
  github,
  linkedin,
  resume
};
const heroSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.14,
      delayChildren: 0.2
    }
  }
};
const splashVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut" } }
};
const buttonGroupVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut", delayChildren: 0.12, staggerChildren: 0.08 } }
};
const buttonVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } }
};
const avatarWrapperVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.95, ease: "easeOut" } }
};
const scrollVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut", delay: 0.4 } }
};
function Hero({ introReady }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-[100dvh] items-center overflow-hidden pt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", "aria-hidden": true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute -left-32 top-32 size-[500px] rounded-full bg-primary/20 blur-3xl",
          animate: { x: [0, 40, 0], y: [0, 30, 0] },
          transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute -right-32 bottom-0 size-[500px] rounded-full bg-accent/20 blur-3xl",
          animate: { x: [0, -30, 0], y: [0, -40, 0] },
          transition: { duration: 14, repeat: Infinity, ease: "easeInOut" }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-center",
          variants: heroSectionVariants,
          initial: "hidden",
          animate: introReady ? "visible" : "hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur",
                  variants: splashVariants,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex size-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex size-2 rounded-full bg-primary" })
                    ] }),
                    "Open to internships · Available 2026"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.h1,
                {
                  className: "mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl",
                  variants: splashVariants,
                  children: [
                    profile.name.split(" ")[0],
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: profile.name.split(" ")[1] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.p,
                {
                  className: "mt-6 max-w-2xl text-xl text-muted-foreground md:text-2xl",
                  variants: splashVariants,
                  children: [
                    profile.title,
                    ". ",
                    profile.tagline
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "mt-10 flex flex-wrap items-center gap-3", variants: buttonGroupVariants, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.a,
                  {
                    href: "#projects",
                    className: "group relative overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.03] glow-cyan",
                    variants: buttonVariants,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "See my work" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.a,
                  {
                    href: "#contact",
                    className: "glass rounded-full px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/60",
                    variants: buttonVariants,
                    children: "Get in touch"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "ml-2 flex items-center gap-1", variants: buttonVariants, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.a,
                    {
                      href: profile.github,
                      className: "glass flex size-10 items-center justify-center rounded-full transition hover:text-primary",
                      "aria-label": "GitHub",
                      variants: buttonVariants,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "size-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.a,
                    {
                      href: profile.linkedin,
                      className: "glass flex size-10 items-center justify-center rounded-full transition hover:text-primary",
                      "aria-label": "LinkedIn",
                      variants: buttonVariants,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "size-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.a,
                    {
                      href: `mailto:${profile.email}`,
                      className: "glass flex size-10 items-center justify-center rounded-full transition hover:text-primary",
                      "aria-label": "Email",
                      variants: buttonVariants,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4" })
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "hidden lg:flex items-center justify-end", variants: avatarWrapperVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFrame, { layoutId: "avatar", className: "relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.a,
        {
          href: "#about",
          className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground",
          "aria-label": "Scroll down",
          variants: scrollVariants,
          initial: "hidden",
          animate: introReady ? "visible" : "hidden",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              animate: { y: [0, 8, 0] },
              transition: { duration: 2, repeat: Infinity },
              className: "flex flex-col items-center gap-1 text-xs",
              children: [
                "scroll",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "size-4" })
              ]
            }
          )
        }
      )
    ] })
  ] });
}
function Section({ id, eyebrow, title: title2, description, children, className = "" }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: `section-pad relative ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: inView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.6 },
        className: "mb-12 max-w-2xl",
        children: [
          eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs font-medium text-primary backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-primary" }),
            eyebrow
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold tracking-tight md:text-5xl", children: title2 }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground md:text-lg", children: description })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        animate: inView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.7, delay: 0.15 },
        children
      }
    )
  ] }) });
}
const about = "I'll guide you through Nikhil's journey — from classroom experiments to real-world products.";
const contact = "That's a wrap! Reach out — Nikhil writes back. 👋";
const bunny = {
  about,
  contact
};
function About({ journeyStarted }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "about",
      eyebrow: "Who Am I?",
      title: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "The short version" }),
      description: profile.bio,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass relative overflow-hidden rounded-3xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square w-full rounded-2xl bg-gradient-to-br from-primary/30 via-surface-2 to-accent/30 p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-full items-center justify-center rounded-2xl bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/avatar2.png", alt: "Nikhil Kumar", className: "w-full h-full object-cover  brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-500 select-none scale-105 hover:scale-100" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: profile.education }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: !journeyStarted && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              layoutId: "journey-bunny",
              className: "absolute -bottom-3 -right-3 opacity-90",
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -18, transition: { duration: 0.25 } },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bunny, { size: 72, showTrail: true })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-primary", children: "Currently" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-foreground", children: profile.focus })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-primary", children: "Interests" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: profile.interests.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "glass rounded-full px-3 py-1 text-sm text-foreground transition hover:border-primary/50 hover:text-primary",
                children: i
              },
              i
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 font-mono text-primary", children: "🐰" }),
            bunny.about
          ] })
        ] })
      ] })
    }
  );
}
const timeline = [
  {
    id: "class-10",
    year: "2022",
    title: "Class 10 - Cambrian Public School",
    place: "CBSE Board",
    description: "First taste of programming. Built tiny HTML pages and fell in love with making things appear on a screen.",
    highlight: "",
    bunnySize: 40,
    website: "https://cambrianpublicschool.com/"
  },
  {
    id: "class-12",
    year: "2024",
    title: "Class 12 — PCM - Star International School",
    place: "CBSE Board",
    description: "Dived deeper into physics , C and math. Started competitive programming and robotics, which sparked my passion for problem-solving and building.",
    highlight: "Cleared JEE · State-level science exhibition winner",
    bunnySize: 55,
    website: "https://www.mitmuzaffarpur.org/"
  },
  {
    id: "iitm",
    year: "2025",
    title: "IIT Madras — BS Data Science",
    place: "Online Degree (Dual Degree)",
    description: "Took on a parallel BS in Data Science to ground my intuition in math, statistics, and machine learning the rigorous way.",
    highlight: "Topped in Maths1 and python programing with grade A and S respectively  ",
    bunnySize: 95,
    website: "https://study.iitm.ac.in/ds/"
  },
  {
    id: "mit",
    year: "2025",
    title: "MIT Muzaffarpur",
    place: "B.Tech, Information Technology",
    description: "Formal engineering begins. Data Structures, Operating Systems, Networks — and a lab where ideas finally meet hardware.",
    highlight: "",
    bunnySize: 95,
    website: "https://www.mitmuzaffarpur.org/"
  },
  {
    id: "future",
    year: "Next",
    title: "What's Next",
    place: "Internships → Industry",
    description: "Looking for engineering internships where I can ship real products, then full-time roles building AI-powered, hardware-aware systems.",
    highlight: "Open to opportunities · Building in public",
    bunnySize: 100
  }
];
function TimelineSection({ timelineRef, showJourneyBunny }) {
  const selfRef = reactExports.useRef(null);
  const sectionRef = timelineRef ?? selfRef;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 30%"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const bunnyTop = useTransform(scrollYProgress, [0, 0.18, 0.36, 0.54, 0.72, 1], ["6%", "22%", "38%", "54%", "72%", "92%"]);
  const bunnySize = useTransform(scrollYProgress, [0, 0.22, 0.44, 0.66, 0.88, 1], [32, 40, 52, 64, 80, 80]);
  const hopOffset = useTransform(
    scrollYProgress,
    [0, 0.12, 0.16, 0.28, 0.32, 0.44, 0.48, 0.6, 0.64, 0.76, 0.8, 0.92, 0.96, 1],
    [0, -10, 0, -10, 0, -10, 0, -10, 0, -8, 0, -6, 0, 0]
  );
  const rocketGlow = useTransform(
    scrollYProgress,
    [0.92, 0.98, 1],
    ["0px 0px 0px rgba(14,165,233,0)", "0px 0px 25px rgba(14,165,233,0.15)", "0px 0px 40px rgba(14,165,233,0.32)"]
  );
  const glowScale = useTransform(scrollYProgress, [0.92, 0.98, 1], [1, 1.03, 1.08]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Section,
    {
      id: "timeline",
      eyebrow: "Journey",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "From ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "classroom" }),
        " to",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "campus" })
      ] }),
      description: "Every milestone on the way. Bunny will hop along — scroll to follow.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Journey Progress" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary", children: "85%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: sectionRef, className: "relative pl-8 md:pl-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px",
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute left-4 top-0 w-px bg-gradient-to-b from-primary via-primary to-accent md:left-1/2 md:-translate-x-px",
              style: { height: lineHeight },
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: showJourneyBunny && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              layoutId: "journey-bunny",
              className: "absolute left-4 z-10 -translate-x-1/2 md:left-1/2",
              style: {
                top: bunnyTop,
                y: hopOffset,
                width: bunnySize,
                height: bunnySize,
                boxShadow: rocketGlow,
                scale: glowScale
              },
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1 },
              exit: { opacity: 0, y: -18, transition: { duration: 0.25 } },
              transition: { duration: 0.7, ease: "easeOut" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative -translate-y-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bunny, { size: "100%", showTrail: true }) })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "\n    absolute\n    left-4\n    md:left-1/2\n    top-[80%]\n    -translate-x-1/2\n    z-20\n    rounded-full\n    bg-primary\n    px-4\n    py-2\n    text-xs\n    font-semibold\n    text-background\n    shadow-lg\n    shadow-primary/50\n  ",
              children: "🚀 YOU ARE HERE"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "\n    absolute\n    left-10\n    md:left-[55%]\n    top-[10%]\n    z-20\n    rounded-xl\n    border\n    border-primary/30\n    bg-surface/80\n    px-3\n    py-2\n    text-xs\n    backdrop-blur\n  ",
              children: "🐰 Keep scrolling..."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-16 md:space-y-24", children: timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 40 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "-20%" },
                transition: { duration: 0.6 },
                className: `relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 ${isLeft ? "" : "md:[direction:rtl]"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:[direction:ltr]"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "\nglass\nrounded-2xl\np-6\ntransition-all\nduration-500\nhover:border-primary/40\nhover:shadow-[0_0_30px_rgba(0,255,255,0.15)]\nhover:-translate-y-1\n",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold tracking-wider text-primary", children: item.year }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl font-bold", children: item.title }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: item.place }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-foreground/90", children: item.description }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 inline-flex rounded-full bg-accent/15 px-3 py-1 text-xm font-medium text-accent", children: item.website && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "a",
                              {
                                href: item.website,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:underline",
                                children: "Visit Website"
                              }
                            ) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 " }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent", children: item.highlight }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 " }),
                            item.id === "future" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.div,
                              {
                                animate: {
                                  scale: [1, 1.07, 1]
                                },
                                transition: {
                                  repeat: Infinity,
                                  duration: 1.5
                                },
                                className: "mt-3 text-xl",
                                children: "🎉🐰🎉"
                              }
                            )
                          ]
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-6 -translate-x-1/2 md:left-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-4 rounded-full border-2 border-primary bg-background glow-cyan" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block" })
                ]
              },
              item.id
            );
          }) })
        ] })
      ]
    }
  );
}
const updated = "Nov 2026";
const items = [{ "label": "Building", "text": "HydroSentinal v2 — adding additional features." }, { "label": "Learning", "text": "NumPy and Pandas and applied statistics at IIT Madras." }, { "label": "Exploring", "text": "Multiple ways to increase problem solving skills." }, { "label": "Reading", "text": "'The Immortals of Meluha' — Amish Tripathi." }];
const now = {
  updated,
  items
};
const ICONS = {
  Building: Hammer,
  Learning: BookOpen,
  Exploring: Compass,
  Reading: Sparkles
};
function Now() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "now",
      eyebrow: `Updated ${now.updated}`,
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Currently ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "building" })
      ] }),
      description: "A live snapshot — what I'm working on, learning, and reading right now.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: now.items.map((item, i) => {
        const Icon = ICONS[item.label] ?? Sparkles;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "glass group relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1 hover:border-primary/40",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-foreground/90", children: item.text }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition group-hover:opacity-100" })
            ]
          },
          i
        );
      }) })
    }
  );
}
const skills = [
  {
    category: "Programming",
    items: [
      "C",
      "C++",
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS"
    ]
  },
  {
    category: "Web Development",
    items: [
      "React",
      "Next.js",
      "TanStack Start",
      "Node.js",
      "Firebase",
      "Supabase"
    ]
  },
  {
    category: "Data Science & AI",
    items: [
      "NumPy",
      "Pandas",
      "Statistics & Probability"
    ]
  },
  {
    category: "IoT & Hardware",
    items: [
      "ESP32",
      "Arduino",
      "Raspberry Pi",
      "MQTT",
      "Sensor calibration",
      "PCB basics"
    ]
  },
  {
    category: "Tools",
    items: [
      "Git & GitHub",
      "Linux",
      "VS Code"
    ]
  }
];
function Skills() {
  const [open, setOpen] = reactExports.useState(
    () => Object.fromEntries(skills.map((s) => [s.category, true]))
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "skills",
      eyebrow: "Skills",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "The ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "toolkit" })
      ] }),
      description: "Grouped, not graded. No arbitrary percentages — just what I actually reach for.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: skills.map((group) => {
        const isOpen = open[group.category];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass overflow-hidden rounded-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setOpen((s) => ({ ...s, [group.category]: !s[group.category] })),
              className: "flex w-full items-center justify-between p-4 text-left transition hover:bg-secondary/40",
              "aria-expanded": isOpen,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-semibold", children: group.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChevronRight,
                  {
                    className: `size-5 text-primary transition-transform ${isOpen ? "rotate-90" : ""}`
                  }
                )
              ]
            }
          ),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 border-t border-border p-4", children: group.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "rounded-full border border-border bg-surface-2/60 px-3 py-1 text-sm transition hover:border-primary/50 hover:text-primary",
              children: item
            },
            item
          )) })
        ] }, group.category);
      }) })
    }
  );
}
const projects = [
  {
    id: "hydrosentinal",
    name: "HydroSentinal",
    year: "2025",
    status: "Active",
    tagline: "Real-time water quality monitoring for communities that need it most.",
    overview: "A solar-powered IoT buoy that streams pH, turbidity, TDS, and temperature data to a public dashboard, alerting local authorities when thresholds breach.",
    problem: "Rural and semi-urban water bodies often go unmonitored for weeks. By the time contamination is reported, it's already a health crisis.",
    solution: "Low-cost ESP32 nodes + cloud aggregation + an open dashboard. Designed to be repaired locally with off-the-shelf parts.",
    stack: [
      "ESP32",
      "MQTT",
      "Node.js",
      "Firebase",
      "Supabase",
      "Next.js",
      "Firestore"
    ],
    challenges: [
      "Power budgeting for solar duty cycle",
      "Calibrating cheap pH probes against lab-grade reference",
      "Designing a watertight, repairable enclosure"
    ],
    gallery: [
      "/hydrosentinal/1.png"
    ],
    github: "https://github.com/NIKHILKUMAR-186/HYDROSENTINAL",
    demo: "https://hydrosentinal-rose.vercel.com"
  }
];
function Projects() {
  const [active, setActive] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Section,
    {
      id: "projects",
      eyebrow: "Work",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Things I've ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "actually built" })
      ] }),
      description: "Each one is its own little story — click to read the case study.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            onClick: () => setActive(p),
            whileHover: { y: -4 },
            className: "glass group relative overflow-hidden rounded-2xl p-6 text-left transition hover:border-primary/50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.year }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: p.status === "Active" ? "text-primary" : "", children: p.status })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl font-bold", children: p.name })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-foreground/85", children: p.tagline }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: p.stack.slice(0, 5).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "rounded-full bg-surface-2 px-2 py-0.5 text-xs text-muted-foreground",
                  children: s
                },
                s
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100", children: "Read case study →" })
            ]
          },
          p.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: active && /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectModal, { project: active, onClose: () => setActive(null) }) })
      ]
    }
  );
}
function ProjectModal({ project, onClose }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[60] flex items-end justify-center bg-background/80 p-0 backdrop-blur-md md:items-center md:p-6",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { y: 40, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: 40, opacity: 0 },
          transition: { type: "spring", damping: 25 },
          onClick: (e) => e.stopPropagation(),
          className: "glass relative max-h-[90dvh] w-full max-w-3xl overflow-y-auto rounded-t-3xl p-6 md:rounded-3xl md:p-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onClose,
                "aria-label": "Close",
                className: "absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-surface-2 transition hover:text-primary",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              project.year,
              " · ",
              project.status
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-3xl font-bold", children: project.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-lg text-muted-foreground", children: project.tagline }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-5 text-sm md:text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { label: "Overview", children: project.overview }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { label: "Problem", children: project.problem }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { label: "Solution", children: project.solution }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-primary", children: "Stack" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: project.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs",
                    children: s
                  },
                  s
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-primary", children: "Challenges" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-foreground/90", children: project.challenges.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "▸" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c })
                ] }, c)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-primary", children: "Screenshots" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "\nflex\ngap-4\noverflow-x-auto\nscroll-smooth\nsnap-x\nsnap-mandatory\npb-4\nscrollbar-thin\n",
                    children: project.gallery.map((img, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "\n          flex-shrink-0\n          w-72\n          h-44\n          rounded-xl\n          overflow-hidden\n          border\n          border-white/10\n          snap-start\n          cursor-pointer\n          group\n        ",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: img,
                            alt: `Screenshot ${index + 1}`,
                            className: "\n            w-full\n            h-full\n            object-cover\n            transition-transform\n            duration-300\n            group-hover:scale-105\n          "
                          }
                        )
                      },
                      index
                    ))
                  }
                )
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-2", children: [
              project.github && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: project.github,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:scale-[1.03]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "size-4" }),
                    " Code"
                  ]
                }
              ),
              project.demo && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: project.demo,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition hover:border-primary/50",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-4" }),
                    " Live"
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function Block({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 text-xs font-semibold uppercase tracking-wider text-primary", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/90", children })
  ] });
}
const certificates = [
  {
    id: "c1",
    title: "Python Essential 1",
    issuer: "Cisco Networking Academy",
    category: "Programming",
    year: "2025",
    url: "/cretificate/python-essential-1.pdf",
    file: "/cretificate/python-essential-1.pdf"
  },
  {
    id: "c1",
    title: "Python Essential 2",
    issuer: "Cisco Networking Academy",
    category: "Programming",
    year: "2026",
    url: "/cretificate/python-essential-2.pdf",
    file: "/cretificate/python-essential-2.pdf"
  },
  {
    id: "c2",
    title: "Gen AI Academy 2.0",
    issuer: "Google Cloud",
    category: "Data Science",
    year: "2024",
    url: "cretificate/Hack2skill-CertificateAI-ML.png",
    file: "cretificate/Hack2skill-CertificateAI-ML.png"
  },
  {
    id: "c2",
    title: "Gen AI Academy 2.0",
    issuer: "Google Cloud",
    category: "AI",
    year: "2025",
    url: "Hack2skill-CertificateDATA.png",
    file: "Hack2skill-CertificateDATA.png"
  }
];
const CATEGORIES = ["All", "Programming", "Data Science", "IoT", "Hackathons", "Courses"];
function Certificates() {
  const [q, setQ] = reactExports.useState("");
  const [cat, setCat] = reactExports.useState("All");
  const filtered = reactExports.useMemo(() => {
    return certificates.filter((c) => {
      const matchCat = cat === "All" || c.category === cat;
      const matchQ = !q || c.title.toLowerCase().includes(q.toLowerCase()) || c.issuer.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [q, cat]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Section,
    {
      id: "certificates",
      eyebrow: "Certificate Vault",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Proof of ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "curiosity" })
      ] }),
      description: "Search, filter, preview. No PDFs hidden in a drawer.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-col gap-3 md:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass relative flex-1 rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: q,
                onChange: (e) => setQ(e.target.value),
                placeholder: "Search certificates…",
                "aria-label": "Search certificates",
                className: "w-full bg-transparent py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setCat(c),
              className: `rounded-full border px-3 py-1.5 text-sm transition ${cat === c ? "border-primary bg-primary/15 text-primary" : "border-border bg-surface/40 text-muted-foreground hover:text-foreground"}`,
              children: c
            },
            c
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2 lg:grid-cols-3", children: [
          filtered.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              layout: true,
              initial: { opacity: 0, scale: 0.96 },
              animate: { opacity: 1, scale: 1 },
              className: "glass flex flex-col gap-3 rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-primary/40",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold leading-tight", children: c.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-muted-foreground", children: c.issuer })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-accent/15 px-2 py-0.5 text-accent", children: c.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: c.year })
                ] }),
                (c.url || c.file) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: c.url || c.file,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-3" }),
                      " View"
                    ]
                  }
                )
              ]
            },
            c.id
          )),
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full py-12 text-center text-muted-foreground", children: "No certificates match your filter." })
        ] })
      ]
    }
  );
}
const achievements = [
  {
    id: "a1",
    year: "2026",
    title: "IIT Madras Foundation Term 3",
    type: "Academic",
    description: "Got 10 SGPA in Term 3 in Python Programming ."
  },
  {
    id: "a2",
    year: "2026",
    title: "Hackstack 2026 - Finalist",
    type: "Hackathon",
    description: "Got selected as a finalist in Hackstack 2026."
  }
];
function Achievements() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "achievements",
      eyebrow: "Achievements",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Milestones, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "earned" })
      ] }),
      description: "Competitions, scholarships, awards — every one of them taught me something.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: achievements.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.06 },
          className: "glass flex items-start gap-4 rounded-2xl p-5 transition hover:border-primary/40",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/25 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "size-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: a.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: a.year })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-xs font-medium text-accent", children: a.type }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: a.description })
            ] })
          ]
        },
        a.id
      )) })
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Progress = reactExports.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = Root.displayName;
const GITHUB_USERNAME = "NIKHILKUMAR-186";
async function fetchGithub(url, cacheKey) {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json"
      }
    });
    if (!response.ok) {
      const body = await response.text();
      const message = response.status === 403 ? "GitHub rate limit exceeded" : response.statusText || body;
      throw new Error(message);
    }
    const data = await response.json();
    if (cacheKey && typeof window !== "undefined" && window.localStorage) {
      try {
        window.localStorage.setItem(cacheKey, JSON.stringify({ ts: Date.now(), data }));
      } catch {
      }
    }
    return data;
  } catch (err) {
    if (typeof window !== "undefined" && window.localStorage && cacheKey) {
      try {
        const raw = window.localStorage.getItem(cacheKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          return parsed.data;
        }
      } catch {
      }
    }
    throw err;
  }
}
async function getGithubProfile() {
  return fetchGithub(`https://api.github.com/users/${GITHUB_USERNAME}`, "github_profile_v1");
}
async function getGithubRepos() {
  return fetchGithub(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    "github_repos_v1"
  );
}
function computeStreaks(contributions) {
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;
  for (const contribution of contributions) {
    if (contribution.count > 0) {
      tempStreak += 1;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 0;
    }
  }
  for (let i = contributions.length - 1; i >= 0; i -= 1) {
    if (contributions[i].count > 0) {
      currentStreak += 1;
    } else {
      break;
    }
  }
  return { currentStreak, longestStreak };
}
async function getGithubContributions() {
  const url = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const body = await response.text();
      const message = response.status === 403 ? "GitHub rate limit exceeded" : response.statusText || body;
      throw new Error(message);
    }
    const payload = await response.json();
    const contributions = Array.isArray(payload.contributions) ? payload.contributions : [];
    const totalContributions = typeof payload.totalContributions === "number" ? payload.totalContributions : contributions.reduce((sum, day) => sum + (day.count || 0), 0);
    const { currentStreak, longestStreak } = computeStreaks(contributions);
    const result = {
      totalContributions,
      currentStreak,
      longestStreak
    };
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        window.localStorage.setItem("github_contributions_v1", JSON.stringify({ ts: Date.now(), data: result }));
      } catch {
      }
    }
    return result;
  } catch (err) {
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        const raw = window.localStorage.getItem("github_contributions_v1");
        if (raw) {
          const parsed = JSON.parse(raw);
          return parsed.data;
        }
      } catch {
      }
    }
    throw err;
  }
}
const PROFILE_URL = profile.github;
const FEATURED_REPO_NAMES = ["hydrosentinal"];
const languageIconMap = {
  TypeScript: CodeXml,
  JavaScript: CodeXml,
  Python: CodeXml,
  "C++": CodeXml,
  Java: CodeXml,
  Rust: CodeXml,
  Go: CodeXml
};
function formatDate(value) {
  return format(new Date(value), "LLL d, yyyy");
}
function RepoCard({ repo, featured }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.a,
    {
      href: repo.html_url,
      target: "_blank",
      rel: "noreferrer",
      className: `glass block rounded-3xl border border-border/70 p-4 transition hover:-translate-y-0.5 hover:border-primary/50 ${featured ? "border-primary/40 bg-surface/90 shadow-[0_0_0_1px_rgba(59,130,246,0.25)]" : "bg-surface/70"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
              featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-primary/40 bg-primary/10 px-2 py-1 text-xs uppercase tracking-[0.25em] text-primary", children: "Featured" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: repo.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-6 text-muted-foreground", children: repo.description ?? "No description available." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: repo.stargazers_count })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/80 px-3 py-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "size-4 text-primary" }),
            formatDate(repo.updated_at)
          ] }),
          repo.language ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/80 px-3 py-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "size-4 text-primary" }),
            repo.language
          ] }) : null
        ] })
      ]
    }
  );
}
function InsightCard({
  label,
  value,
  icon: Icon,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "glass rounded-3xl border border-border/70 p-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex h-8 w-8 items-center justify-center rounded-full ${accent}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-3xl font-display font-semibold text-foreground", children: value })
      ]
    }
  );
}
function LanguageBar({ language, percent }) {
  const Icon = languageIconMap[language] ?? CodeXml;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "space-y-3",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
            percent,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: percent })
      ]
    }
  );
}
function SkeletonCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 animate-pulse", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 h-4 w-40 rounded-full bg-border/60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded-full bg-border/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded-full bg-border/60 w-5/6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 rounded-full bg-border/60" })
    ] })
  ] });
}
function Github_() {
  const [profileData, setProfileData] = reactExports.useState(null);
  const [repos, setRepos] = reactExports.useState([]);
  const [contributionData, setContributionData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let cancelled = false;
    async function loadGithubData() {
      setLoading(true);
      setError(null);
      try {
        const [profileResponse, reposResponse, contributionsResponse] = await Promise.all([
          getGithubProfile(),
          getGithubRepos(),
          getGithubContributions()
        ]);
        if (!cancelled) {
          setProfileData(profileResponse);
          setRepos(reposResponse);
          setContributionData(contributionsResponse);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unable to fetch GitHub data right now.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }
    loadGithubData();
    return () => {
      cancelled = true;
    };
  }, []);
  const languageStats = reactExports.useMemo(() => {
    const counts = repos.reduce((acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] ?? 0) + 1;
      }
      return acc;
    }, {});
    const languages = Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([language, count]) => ({ language, count }));
    const total = languages.reduce((sum, item) => sum + item.count, 0);
    return languages.map((item) => ({
      ...item,
      percent: total ? Math.round(item.count / total * 100) : 0
    }));
  }, [repos]);
  const featuredRepo = reactExports.useMemo(
    () => repos.find((repo) => FEATURED_REPO_NAMES.includes(repo.name.toLowerCase())),
    [repos]
  );
  const latestRepos = reactExports.useMemo(() => {
    if (!repos.length) {
      return [];
    }
    const remaining = repos.filter((repo) => repo.id !== featuredRepo?.id);
    return [
      ...featuredRepo ? [featuredRepo] : [],
      ...remaining.slice(0, 3 - Number(Boolean(featuredRepo)))
    ];
  }, [repos, featuredRepo]);
  const activeRepos = reactExports.useMemo(() => repos.length, [repos]);
  [
    {
      label: "Public Repos",
      value: profileData ? profileData.public_repos.toLocaleString() : "—",
      icon: GitBranch
    },
    // {
    //   label: "Followers",
    //   value: profileData ? profileData.followers.toLocaleString() : "—",
    //   icon: Users,
    // },
    // {
    //   label: "Following",
    //   value: profileData ? profileData.following.toLocaleString() : "—",
    //   icon: Activity,
    // },
    {
      label: "Joined",
      value: profileData ? new Date(profileData.created_at).getFullYear().toString() : "—",
      icon: Sparkles
    },
    {
      label: "Total Commits",
      value: contributionData ? contributionData.totalContributions.toLocaleString() : "—",
      icon: TrendingUp
    }
  ];
  [
    {
      label: "Total Contributions",
      value: contributionData ? contributionData.totalContributions.toLocaleString() : "—",
      icon: Activity,
      accent: "bg-primary/15 text-primary"
    }
    // {
    //   label: "Current Streak",
    //   value: contributionData ? `${contributionData.currentStreak}d` : "—",
    //   icon: Users,
    //   accent: "bg-emerald-500/15 text-emerald-400",
    // },
    // {
    //   label: "Longest Streak",
    //   value: contributionData ? `${contributionData.longestStreak}d` : "—",
    //   icon: Sparkles,
    //   accent: "bg-violet-500/15 text-violet-400",
    // },
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "github",
      eyebrow: "GitHub Journey",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Not just stats — a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "growth story" })
      ] }),
      description: "The repos, the rewrites, the late-night commits. Here's the arc.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-wrap items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-primary", children: "Contribution Activity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-semibold text-foreground", children: "GitHub heatmap" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/80 px-3 py-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-4 text-primary" }),
              " Live"
            ] })
          ] }),
          loading && /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonCard, {}),
          !loading && error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl border border-border/70 bg-surface/80 p-6 text-center text-sm text-muted-foreground", children: "Unable to fetch GitHub data right now." }),
          !loading && !error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl border border-border/70 bg-surface/70 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "overflow-x-auto pr-2",
              initial: { opacity: 0, y: 6 },
              animate: { opacity: 1, y: 0 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex items-center justify-between gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: contributionData?.totalContributions ?? "—" }),
                  " ",
                  "contributions in the last year"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
                      /* Tighter calendar look, cyan/blue palette, and selective weekday labels */
                      .react-activity-calendar { filter: none; }
                      .react-activity-calendar .react-activity-calendar-weekday { fill: rgba(148,163,184,0.9); font-size:10px; }
                      .react-activity-calendar .react-activity-calendar-month { fill: rgba(148,163,184,0.9); font-size:12px; }
                      .react-activity-calendar .react-activity-calendar-weekday:nth-child(1),
                      .react-activity-calendar .react-activity-calendar-weekday:nth-child(3),
                      .react-activity-calendar .react-activity-calendar-weekday:nth-child(5) { display: block; }
                      .react-activity-calendar .react-activity-calendar-weekday:nth-child(2),
                      .react-activity-calendar .react-activity-calendar-weekday:nth-child(4),
                      .react-activity-calendar .react-activity-calendar-weekday:nth-child(6),
                      .react-activity-calendar .react-activity-calendar-weekday:nth-child(7) { display: none; }
                      /* Make blocks slightly smaller and denser */
                      .react-activity-calendar .react-activity-calendar-day { shape-rendering: crispEdges; }
                    ` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "-ml-2 hidden min-w-[36px] flex-col items-start gap-6 pr-2 text-xs text-muted-foreground sm:flex", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Mon" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Wed" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Fri" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    GitHubCalendar,
                    {
                      username: "NIKHILKUMAR-186",
                      transformData: (data) => data,
                      blockMargin: 3,
                      blockSize: 10,
                      fontSize: 11,
                      showWeekdayLabels: true,
                      showMonthLabels: true,
                      theme: {
                        light: ["#11161d", "#335540", "#133e22", "#31723d", "#56d364"],
                        dark: ["#11161d", "#335540", "#133e22", "#31723d", "#56d364"]
                      }
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "Less" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-sm bg-[#11161d]" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-sm bg-[#133e22]" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-sm bg-[#31723d]" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-sm bg-[#56d364]" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "More" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `${PROFILE_URL}?tab=overview&from=${contributionData?.oldestDate}&to=${contributionData?.newestDate}`,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/80 px-3 py-2 text-xs text-muted-foreground transition hover:border-primary/50",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "size-4 text-primary" }),
                        " View on GitHub"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InsightCard,
                    {
                      label: "Total Contributions",
                      value: contributionData ? contributionData.totalContributions.toLocaleString() : "—",
                      icon: TrendingUp,
                      accent: "bg-primary/15 text-primary"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InsightCard,
                    {
                      label: "Joined",
                      value: profileData ? new Date(profileData.created_at).getFullYear().toString() : "—",
                      icon: Sparkles,
                      accent: "bg-primary/15 text-primary"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InsightCard,
                    {
                      label: "Longest Streak",
                      value: contributionData ? `${contributionData.longestStreak}d` : "—",
                      icon: Rocket,
                      accent: "bg-primary/15 text-primary"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InsightCard,
                    {
                      label: "Active Repositories",
                      value: activeRepos.toString(),
                      icon: GitBranch,
                      accent: "bg-primary/15 text-primary"
                    }
                  )
                ] })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1fr_0.8fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-primary", children: "Latest Repositories" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-semibold text-foreground", children: "Most recent work" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "3 repos" })
            ] }),
            loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: Array.from({ length: 3 }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonCard, {}, index)) }),
            !loading && error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl border border-border/70 bg-surface/80 p-6 text-center text-sm text-muted-foreground", children: "Unable to fetch GitHub data right now." }),
            !loading && !error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              latestRepos.map((repo) => /* @__PURE__ */ jsxRuntimeExports.jsx(RepoCard, { repo, featured: repo.id === featuredRepo?.id }, repo.id)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `${PROFILE_URL}?tab=repositories`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "size-4" }),
                    " View All Repositories"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex items-center justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-primary", children: "Most used Languages" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-sm font-semibold text-foreground", children: "Language Stats" })
            ] }) }),
            loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: Array.from({ length: 4 }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonCard, {}, index)) }),
            !loading && !error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: languageStats.map((language) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              LanguageBar,
              {
                language: language.language,
                percent: language.percent
              },
              language.language
            )) }),
            !loading && error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl border border-border/70 bg-surface/80 p-6 text-center text-sm text-muted-foreground", children: "Unable to fetch GitHub data right now." })
          ] })
        ] })
      ] })
    }
  );
}
const MILESTONES = [
  {
    id: "html",
    label: "First Spark - 2022",
    title: "Started with HTML",
    subtitle: "HTML",
    description: "Built basic webpages and discovered how software appears on a screen.",
    detail: "Build a basic web page consist of Form , Table , lists etc."
  },
  {
    id: "electronics",
    label: "Hardware Phase - 2022",
    title: "Started with Electronics",
    subtitle: "Electronics",
    description: "Explored circuits , sensors, and how Physics in Circuit Works.",
    detail: "Built simple circuits using breadboard, learned about voltage, current, and basic components like resistors, capacitors, and LEDs."
  },
  {
    id: "Operating System",
    label: "OS - 2023",
    title: "Looked into Linux and worked in ",
    subtitle: "Operating Systems",
    description: "Explored the fundamentals of operating systems and gained hands-on experience with Linux.",
    detail: "Installed Kali Linux, learned basic command-line operations, and understood file systems, processes, and permissions."
  },
  {
    id: "python-2024",
    label: "Programming Era-2024",
    title: "Picked up Python",
    subtitle: "Python",
    description: "Basic programming, Syntax Learning, and scripting.",
    detail: "Learned Python syntax, data structures, and built simple scripts to automate tasks and solve problems."
  },
  {
    id: "c-programming-2025",
    label: "Computer Science",
    title: "C Programming",
    subtitle: "C",
    description: "Memory, syntax, and problem solving.",
    detail: "Learned C programming fundamentals, including memory management, pointers, and low-level system interactions."
  },
  {
    id: "web-development -2026",
    label: "Building Products",
    title: "Web Development",
    subtitle: "Web",
    description: "Built websites and hackathon projects.",
    detail: "Built responsive websites using HTML, CSS, and JavaScript, and participated in hackathons to create innovative web applications."
  },
  {
    id: "iot",
    label: "Connected Systems - 2026",
    title: "IoT",
    subtitle: "IoT",
    description: "Sensors, communication, and real-time systems.",
    detail: "Learned about IoT architecture, sensor integration, and real-time data processing, and built IoT projects using microcontrollers and wireless communication."
  },
  {
    id: "ai",
    label: "Current Mission",
    title: "NEXT LEVEL",
    subtitle: "AI",
    description: "AI + Data Science + IoT — Building intelligent products that combine software, hardware, and machine learning.",
    destination: true,
    detail: "Currently working on integrating AI and data science techniques into IoT projects to create intelligent systems that can analyze data, make decisions, and interact with the environment."
  }
];
function LearningMilestone({
  milestone,
  index,
  isActive,
  onEnter
}) {
  const isLeft = index % 2 === 0;
  const destination = milestone.destination === true;
  const connectorOffset = isLeft ? "right-[-2.25rem]" : "left-[-2.25rem]";
  const connectorOrigin = isLeft ? "0% 50%" : "100% 50%";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24, x: isLeft ? -24 : 24 },
      whileInView: { opacity: 1, y: 0, x: 0 },
      viewport: { once: true, amount: 0.25 },
      transition: { duration: 0.55, ease: "easeOut" },
      onViewportEnter: () => onEnter(index),
      className: `relative grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start ${isLeft ? "" : "md:[direction:rtl]"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `relative glass rounded-[2rem] border p-6 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] ${destination ? "bg-gradient-to-br from-slate-950/95 via-slate-900/95 to-slate-950/95 border-cyan-400/50 shadow-cyan-500/20" : "bg-slate-950/95 border-border/70"} ${isActive ? "shadow-[0_0_40px_rgba(14,165,233,0.18)] border-cyan-300/70" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.35em] text-cyan-300/80", children: milestone.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.32em] text-cyan-200 ring-1 ring-cyan-400/20", children: milestone.subtitle }),
                  destination && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200", children: "Destination" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `mt-5 text-2xl font-semibold tracking-tight ${destination ? "text-white" : "text-foreground"}`, children: milestone.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-7 text-muted-foreground", children: milestone.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-7 text-muted-foreground rounded-lg bg-cyan-500/10  text-xs  text-cyan-100 ring-4 ring-cyan-500/10", children: milestone.detail }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: `hidden md:block absolute top-1/2 ${connectorOffset} h-[2px] w-24 rounded-full bg-cyan-500/20`,
                  initial: { scaleX: 0 },
                  whileInView: { scaleX: 1 },
                  viewport: { once: true, amount: 0.35 },
                  transition: { duration: 0.55, ease: "easeOut" },
                  style: { transformOrigin: connectorOrigin }
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block" })
      ]
    }
  );
}
function Learning() {
  const containerRef = reactExports.useRef(null);
  const [activeIndex, setActiveIndex] = reactExports.useState(0);
  const [progressPercent, setProgressPercent] = reactExports.useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const lineFill = useTransform(scrollYProgress, [0, 1], ["4%", "100%"]);
  const bunnyTop = useTransform(scrollYProgress, [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1], ["4%", "16%", "28%", "40%", "52%", "64%", "76%", "92%"]);
  const hopOffset = useTransform(scrollYProgress, [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1], [0, -10, 0, -8, 0, -8, 0, 0]);
  const bunnyScale = useTransform(scrollYProgress, [0, 1], [0.96, 1.04]);
  reactExports.useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setProgressPercent(Math.min(100, Math.round(latest * 100)));
    });
  }, [scrollYProgress]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "learning",
      eyebrow: "Learning Journey",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "From Curiosity To ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Capability" })
      ] }),
      description: "Every skill started as an experiment. Each step taught me something valuable. This is the path that shaped how I build today.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative overflow-hidden rounded-[2rem] border border-border/70 bg-slate-1500/80 p-6 shadow-2xl shadow-black/25 ring-1 ring-white/5 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-1/2 top-8 h-[calc(100%-4rem)] -translate-x-1/2 w-px bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 w-px bg-gradient-to-b from-cyan-500 via-cyan-400 to-cyan-500",
            style: { height: lineFill },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            style: { top: bunnyTop, y: hopOffset, scale: bunnyScale },
            className: "pointer-events- absolute left-1/2 z-200 -translate-x-1/2",
            initial: { opacity: 0, y: 1 },
            animate: { opacity: 1 },
            transition: { duration: 0.6, ease: "easeOut" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "absolute -bottom-1 h-3 w-14 rounded-full bg-cyan-400/20 blur-2xl",
                  animate: { scale: [1, 1.08, 1], opacity: [0.8, 0.95, 0.8] },
                  transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 rounded-full bg-slate-950/90 px-3 py-1 text-xs text-muted-foreground shadow-[0_15px_30px_rgba(0,0,0,0.22)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bunny, { size: 56, className: "flex items-center rounded-full shadow-[0_20px_30px_rgba(14,165,233,0.14)]" }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-20 py-8", children: MILESTONES.map((milestone, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          LearningMilestone,
          {
            milestone,
            index,
            isActive: activeIndex === index,
            onEnter: setActiveIndex
          },
          milestone.id
        )) })
      ] })
    }
  );
}
const ITEMS = [
  { label: "Listening Music", icon: Music, note: "An old hobby that keeps me energetic and prevent me from getting bored." },
  {
    label: "Tech tinkering",
    icon: Lightbulb,
    note: "Taking apart anything with a battery and some components. Mostly reassembling it."
  },
  {
    label: "Reading",
    icon: BookOpen,
    note: "Slow non-fiction, sci-fi, and the occasional founder memoir."
  },
  {
    label: "Building",
    icon: Wrench,
    note: "Side projects that don't need to ship — but often do."
  }
];
function Beyond() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "beyond",
      eyebrow: "Beyond coding",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "The ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "human" }),
        " side"
      ] }),
      description: "Engineers are people too. Here's what fills the rest of my hours.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2 lg:grid-cols-4", children: ITEMS.map((i) => {
        const Icon = i.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-lg font-semibold", children: i.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: i.note })
        ] }, i.label);
      }) })
    }
  );
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Section,
    {
      id: "contact",
      eyebrow: "Get in touch",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Let's ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "build something" })
      ] }),
      description: "Internships, collaborations, or just a chat about a project — my inbox is open.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-[1.3fr_1fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-3xl p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ContactLink, { href: `mailto:${profile.email}`, icon: Mail, label: "Email", value: profile.email }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ContactLink, { href: profile.github, icon: Github, label: "GitHub", value: "@NIKHILKUMAR-186" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ContactLink, { href: profile.linkedin, icon: Linkedin, label: "LinkedIn", value: "/in/nikhil-kumar-b288a7303" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ContactLink, { href: profile.resume, icon: FileText, label: "Resume", value: "Download PDF" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "glass flex flex-col items-center justify-center rounded-3xl p-8 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bunny, { size: 120, waving: true }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 max-w-xs text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary", children: "🐰" }),
                  " ",
                  bunny.contact
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-16 border-t border-border pt-8 text-center text-xs text-muted-foreground", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ",
          profile.name,
          " · Built with care."
        ] })
      ]
    }
  );
}
function ContactLink({
  href,
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href,
      target: href.startsWith("http") ? "_blank" : void 0,
      rel: "noreferrer",
      className: "group flex items-center justify-between rounded-2xl border border-border bg-surface-2/40 p-4 transition hover:border-primary/50 hover:bg-surface-2/80",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: value })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100", children: "→" })
      ]
    }
  );
}
function Home() {
  const [introExiting, setIntroExiting] = reactExports.useState(false);
  const timelineRef = reactExports.useRef(null);
  const timelineInView = useInView(timelineRef, {
    margin: "0px 0px -40% 0px"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CinematicIntro, { onExitStart: () => setIntroExiting(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, { introReady: introExiting }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, { journeyStarted: timelineInView }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineSection, { timelineRef, showJourneyBunny: timelineInView }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Now, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Certificates, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Achievements, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Github_, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Learning, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Beyond, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
  ] });
}
export {
  Home as component
};
