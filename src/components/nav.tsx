import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "timeline", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Vault" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("nk-theme")) as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("nk-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <Link
          to="/"
          className={`glass rounded-full px-4 py-2 font-display text-sm font-semibold tracking-tight transition ${
            scrolled ? "glow-cyan" : ""
          }`}
        >
          <span className="gradient-text">NK</span>
        </Link>

        <nav className="glass hidden rounded-full px-2 py-1.5 md:flex" aria-label="Primary">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-secondary/60 hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="glass flex size-10 items-center justify-center rounded-full text-foreground transition hover:text-primary"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
      </div>
    </header>
  );
}
