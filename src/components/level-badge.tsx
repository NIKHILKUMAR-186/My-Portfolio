export function LevelBadge({ title, level }: { title: string; level: number }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-[#08131f]/90 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-cyan-500/10">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200">{level}</span>
      <span>{title}</span>
    </div>
  );
}
