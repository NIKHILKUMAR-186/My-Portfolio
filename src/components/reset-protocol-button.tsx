import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { useProgress } from "../lib/progression";

export function ResetProtocolButton() {
  const [confirming, setConfirming] = useState(false);
  const { resetProgress } = useProgress();

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-[#220a12]/95 px-4 py-3 text-sm font-semibold text-rose-200 shadow-[0_20px_60px_rgba(139,0,0,0.25)] transition hover:bg-rose-500/10"
      >
        <AlertTriangle className="size-4" /> Reset progress
      </button>

      {confirming && (
        <div className="mt-3 rounded-[1.75rem] border border-rose-500/20 bg-[#091017]/95 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur"> 
          <p className="text-sm text-white">Are you sure you want to reset all Bunny Protocol progress?</p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => {
                resetProgress();
                setConfirming(false);
              }}
              className="rounded-full bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-200 hover:bg-rose-500/20"
            >
              Yes, reset
            </button>
            <button
              type="button"
              onClick={() => setConfirming(false)}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
