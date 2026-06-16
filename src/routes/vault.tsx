// Vault route: guarded secret vault, redirects if access requirements not met
import { motion } from "framer-motion";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useProgress } from "../lib/progression";
import { Bunny } from "../components/bunny";

export const Route = createFileRoute("/vault")({
  head: () => ({ meta: [{ title: "Vault — Bunny Protocol" }] }),
  component: VaultPage,
});

function VaultPage() {
  const { state, canAccessVault, markAccessDeniedVisited } = useProgress();

  useEffect(() => {
    if (!canAccessVault) {
      markAccessDeniedVisited();
    }
  }, [canAccessVault]);

  if (!canAccessVault) {
    return <RedirectToAccessDenied />;
  }

  return (
    <main className="min-h-screen bg-[#040812] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] border border-cyan-500/15 bg-[#07101f]/90 p-8 shadow-[0_40px_120px_rgba(2,12,30,0.55)]"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-200 shadow-[0_0_30px_rgba(12,210,255,0.2)]">
              <Bunny size={32} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/70">Access Granted</p>
              <h1 className="mt-2 text-4xl font-semibold text-white">The Secret Vault</h1>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-white/10 bg-[#081623]/80 p-6"
            >
              <h2 className="text-xl font-semibold text-white">Founder Notes</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                A confidential view into lessons learned while building to scale. These notes
                capture tradeoffs, hiring lessons, and product pivots that shaped the journey.
              </p>
              <ul className="mt-4 list-inside list-disc text-sm text-muted-foreground">
                <li>Keep product velocity focused on user value.</li>
                <li>Automate the boring and instrument everything.</li>
                <li>Invest in small design experiments early.</li>
              </ul>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="rounded-3xl border border-white/10 bg-[#081623]/80 p-6"
            >
              <h2 className="text-xl font-semibold text-white">Startup Ideas</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                High-concept product directions for AI and immersive workflows, intended as seeds
                rather than polished plans.
              </p>
              <ol className="mt-4 list-inside list-decimal text-sm text-muted-foreground">
                <li>AI-assisted onboarding for engineering teams.</li>
                <li>Motion-native portfolio generator for creators.</li>
                <li>Edge-connected IoT analytics for small fleets.</li>
              </ol>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-[#081623]/80 p-6"
            >
              <h2 className="text-xl font-semibold text-white">Future AI Projects</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Experimentation notes and prototypes for AI-driven products and research directions.
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                (Includes sketches for multimodal assistants, privacy-preserving fine-tuning
                workflows, and semantic pipelines.)
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="rounded-3xl border border-white/10 bg-[#081623]/80 p-6"
            >
              <h2 className="text-xl font-semibold text-white">IoT Vision</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Integrated hardware + intelligence concepts prioritizing real-world value,
                reliability, and graceful degradation.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-[#081623]/80 p-6"
            >
              <h2 className="text-xl font-semibold text-white">Secret Resume</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                An enhanced recruiter-facing narrative that emphasizes outcomes, metrics, and
                leadership moments.
              </p>
              <ul className="mt-4 list-inside list-disc text-sm text-muted-foreground">
                <li>Leadership: shipped multiple cross-functional products.</li>
                <li>Impact: grew key metric X by 3.2x over 12 months.</li>
                <li>Scale: production systems serving thousands of daily users.</li>
              </ul>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.25 }}
              className="rounded-3xl border border-white/10 bg-[#081623]/80 p-6"
            >
              <h2 className="text-xl font-semibold text-white">Hidden Timeline</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                A condensed list of pivotal decisions and product milestones.
              </p>
              <ol className="mt-4 list-inside list-decimal text-sm text-muted-foreground">
                <li>Alpha launch — 2019: small user study validated core hypothesis.</li>
                <li>Pivots — 2020: focused on developer tooling and automation.</li>
                <li>Scale — 2022: platform reliability and observability investments.</li>
              </ol>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function RedirectToAccessDenied() {
  return (
    <main className="min-h-screen bg-[#040812] text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-8 px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-[2rem] border border-fuchsia-500/10 bg-[#07111f]/95 p-10 shadow-[0_40px_120px_rgba(12,10,55,0.35)]"
        >
          <div className="mb-6 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-fuchsia-500/10 text-fuchsia-100 shadow-[0_0_30px_rgba(255,80,255,0.16)]">
              <Bunny size={40} />
            </div>
          </div>
          <h1 className="text-4xl font-semibold">Curiosity alone is not enough.</h1>
          <p className="mt-4 text-base text-muted-foreground">
            The vault remains locked until every required achievement is earned. Keep exploring the
            Bunny Protocol.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/15"
          >
            Return to the main portfolio
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
