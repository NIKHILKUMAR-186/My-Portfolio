import { motion } from "framer-motion";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Bunny } from "@/components/bunny";

export const Route = createFileRoute("/access-denied")({
  head: () => ({
    meta: [{ title: "Access Denied — Bunny Protocol" }],
  }),
  component: AccessDeniedPage,
});

function AccessDeniedPage() {
  return (
    <main className="min-h-screen bg-[#040812] text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-8 px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="rounded-[2rem] border border-white/10 bg-[#08111f]/95 p-10 shadow-[0_40px_120px_rgba(8,24,42,0.45)]"
        >
          <div className="mb-6 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-200 shadow-[0_0_30px_rgba(15,230,255,0.2)]">
              <Bunny size={40} />
            </div>
          </div>
          <h1 className="text-4xl font-semibold">Curiosity alone is not enough.</h1>
          <p className="mt-4 text-base text-muted-foreground">
            The secret vault is protected. Unlock deeper protocol achievements before returning here.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/15"
          >
            Continue exploring
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
