import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useProgress, B as Bunny } from "./router-CTA9DVq3.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function VaultPage() {
  const {
    state,
    canAccessVault,
    markAccessDeniedVisited
  } = useProgress();
  reactExports.useEffect(() => {
    if (!canAccessVault) {
      markAccessDeniedVisited();
    }
  }, [canAccessVault]);
  if (!canAccessVault) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RedirectToAccessDenied, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-[#040812] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, animate: {
    opacity: 1,
    y: 0
  }, transition: {
    duration: 0.5
  }, className: "rounded-[2rem] border border-cyan-500/15 bg-[#07101f]/90 p-8 shadow-[0_40px_120px_rgba(2,12,30,0.55)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-200 shadow-[0_0_30px_rgba(12,210,255,0.2)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bunny, { size: 32 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.32em] text-cyan-300/70", children: "Access Granted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-4xl font-semibold text-white", children: "The Secret Vault" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.35
      }, className: "rounded-3xl border border-white/10 bg-[#081623]/80 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white", children: "Founder Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-6 text-muted-foreground", children: "A confidential view into lessons learned while building to scale. These notes capture tradeoffs, hiring lessons, and product pivots that shaped the journey." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 list-inside list-disc text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Keep product velocity focused on user value." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Automate the boring and instrument everything." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Invest in small design experiments early." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.35,
        delay: 0.05
      }, className: "rounded-3xl border border-white/10 bg-[#081623]/80 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white", children: "Startup Ideas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-6 text-muted-foreground", children: "High-concept product directions for AI and immersive workflows, intended as seeds rather than polished plans." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "mt-4 list-inside list-decimal text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "AI-assisted onboarding for engineering teams." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Motion-native portfolio generator for creators." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Edge-connected IoT analytics for small fleets." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.35,
        delay: 0.1
      }, className: "rounded-3xl border border-white/10 bg-[#081623]/80 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white", children: "Future AI Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-6 text-muted-foreground", children: "Experimentation notes and prototypes for AI-driven products and research directions." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm text-muted-foreground", children: "(Includes sketches for multimodal assistants, privacy-preserving fine-tuning workflows, and semantic pipelines.)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.35,
        delay: 0.15
      }, className: "rounded-3xl border border-white/10 bg-[#081623]/80 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white", children: "IoT Vision" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-6 text-muted-foreground", children: "Integrated hardware + intelligence concepts prioritizing real-world value, reliability, and graceful degradation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.35,
        delay: 0.2
      }, className: "rounded-3xl border border-white/10 bg-[#081623]/80 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white", children: "Secret Resume" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-6 text-muted-foreground", children: "An enhanced recruiter-facing narrative that emphasizes outcomes, metrics, and leadership moments." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 list-inside list-disc text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Leadership: shipped multiple cross-functional products." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Impact: grew key metric X by 3.2x over 12 months." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Scale: production systems serving thousands of daily users." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.35,
        delay: 0.25
      }, className: "rounded-3xl border border-white/10 bg-[#081623]/80 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white", children: "Hidden Timeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-6 text-muted-foreground", children: "A condensed list of pivotal decisions and product milestones." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "mt-4 list-inside list-decimal text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Alpha launch — 2019: small user study validated core hypothesis." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Pivots — 2020: focused on developer tooling and automation." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Scale — 2022: platform reliability and observability investments." })
        ] })
      ] })
    ] })
  ] }) }) });
}
function RedirectToAccessDenied() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-[#040812] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-8 px-4 py-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    scale: 0.94
  }, animate: {
    opacity: 1,
    scale: 1
  }, className: "rounded-[2rem] border border-fuchsia-500/10 bg-[#07111f]/95 p-10 shadow-[0_40px_120px_rgba(12,10,55,0.35)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-20 w-20 items-center justify-center rounded-3xl bg-fuchsia-500/10 text-fuchsia-100 shadow-[0_0_30px_rgba(255,80,255,0.16)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bunny, { size: 40 }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold", children: "Curiosity alone is not enough." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground", children: "The vault remains locked until every required achievement is earned. Keep exploring the Bunny Protocol." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-8 inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/15", children: "Return to the main portfolio" })
  ] }) }) });
}
export {
  VaultPage as component
};
