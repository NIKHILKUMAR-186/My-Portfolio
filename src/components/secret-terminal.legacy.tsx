import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal, ArrowRight, X } from "lucide-react";
import { useProgress } from "../lib/progression";

const COMMANDS = {
  help: "show available commands",
  about: "display a short portfolio headline",
  skills: "preview top skills and strengths",
  projects: "list a few highlight projects",
  bunny: "talk to the Bunny guide",
  unlock: "probe the hidden gate",
  secret: "request a subtle clue",
};

export function SecretTerminal() {
  const { markTerminalOpened, recordTerminalCommand, unlockAchievement, canAccessVault } = useProgress();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(["Bunny Protocol terminal loaded. Type 'help' for commands."]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
        markTerminalOpened();
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [markTerminalOpened]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const runCommand = (command: string) => {
    const normalized = command.trim().toLowerCase();
    if (!normalized) return;
    const nextHistory = [...history, `> ${command}`];
    if (!(normalized in COMMANDS)) {
      setHistory([...nextHistory, `Unknown command: ${normalized}`]);
      setInput("");
      return;
    }

    recordTerminalCommand(normalized);

    if (normalized === "help") {
      setHistory([
        ...nextHistory,
        "Available commands:",
        ...Object.entries(COMMANDS).map(([key, value]) => `${key} — ${value}`),
      ]);
    } else if (normalized === "about") {
      setHistory([...nextHistory, "Professional portfolio with hidden progress and interactive rewards."]);
    } else if (normalized === "skills") {
      setHistory([
        ...nextHistory,
        "Skills: TypeScript, React, AI systems, design systems, IoT products, motion UI.",
      ]);
    } else if (normalized === "projects") {
      setHistory([
        ...nextHistory,
        "Projects: interactive portfolio, smart IoT proof-of-concepts, data-driven dashboards.",
      ]);
    } else if (normalized === "bunny") {
      unlockAchievement("bunny-whisperer");
      setHistory([...nextHistory, "Bunny whispers: 'The protocol responds when you ask with care.'"]);
    } else if (normalized === "unlock") {
      unlockAchievement("code-sleuth");
      setHistory([
        ...nextHistory,
        canAccessVault
          ? "U N L O C K   G R A N T E D — The vault is ready, follow the protocol."
          : "Access is still restricted. Keep exploring the clues and complete every milestone.",
      ]);
    } else if (normalized === "secret") {
      setHistory([...nextHistory, "Not every answer is direct; hidden progress is earned through intent."]);
    }
    setInput("");
  };

  const typedHistory = useMemo(() => history.slice(-12), [history]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#04080f]/80 px-4 pb-8 pt-20 backdrop-blur-sm"
        >
          <div className="w-full max-w-3xl rounded-[2rem] border border-cyan-500/20 bg-[#05111f]/95 p-6 shadow-[0_30px_120px_rgba(5,25,40,0.45)]">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(15,230,255,0.18)]">
                  <Terminal className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Bunny Terminal</p>
                  <p className="text-xs text-muted-foreground">ctrl + shift + k to open, escape to close</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10"
                aria-label="Close terminal"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="mb-4 min-h-[220px] overflow-y-auto rounded-[1.5rem] border border-white/10 bg-[#081825]/90 p-4 text-sm text-white shadow-inner shadow-black/20">
              {typedHistory.map((line, index) => (
                <p key={`${line}-${index}`} className="whitespace-pre-wrap leading-6">
                  {line}
                </p>
              ))}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                runCommand(input);
              }}
              className="flex items-center gap-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Enter command..."
                className="flex-1 rounded-3xl border border-white/10 bg-[#06121e]/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-3xl bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
              >
                <ArrowRight className="size-4" />
                Run
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SecretTerminal;

