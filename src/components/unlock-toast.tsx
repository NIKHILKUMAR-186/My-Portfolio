import { AnimatePresence, motion } from "framer-motion";
import { Trophy } from "lucide-react";

export function UnlockToast({ message, open }: { message: string; open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-8 left-1/2 z-50 w-[min(92vw,420px)] -translate-x-1/2 rounded-3xl border border-cyan-400/15 bg-[#06131e]/95 px-5 py-4 text-white shadow-[0_20px_60px_rgba(3,16,33,0.45)]"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
              <Trophy className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">🏆 Achievement Unlocked</p>
              <p className="mt-1 text-sm text-cyan-100">{message}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
