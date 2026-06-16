import { motion } from "framer-motion";

export function XPBar({ progress }: { progress: number }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-white/5">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500"
      />
    </div>
  );
}
