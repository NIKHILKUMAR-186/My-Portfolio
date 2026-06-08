import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "../section";
import certificates from "@/data/certificates.json";
import { Search, FileText, Download } from "lucide-react";

const CATEGORIES = ["All", "Programming", "Data Science", "IoT", "Hackathons", "Courses"];

export function Certificates() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    return certificates.filter((c) => {
      const matchCat = cat === "All" || c.category === cat;
      const matchQ =
        !q ||
        c.title.toLowerCase().includes(q.toLowerCase()) ||
        c.issuer.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [q, cat]);

  return (
    <Section
      id="certificates"
      eyebrow="Certificate Vault"
      title={<>Proof of <span className="gradient-text">curiosity</span></>}
      description="Search, filter, preview. No PDFs hidden in a drawer."
    >
      <div className="mb-6 flex flex-col gap-3 md:flex-row">
        <div className="glass relative flex-1 rounded-full">
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search certificates…"
            aria-label="Search certificates"
            className="w-full bg-transparent py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${
                cat === c
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border bg-surface/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <motion.div
            key={c.id}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass flex flex-col gap-3 rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-primary/40"
          >
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <FileText className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold leading-tight">{c.title}</div>
                <div className="truncate text-xs text-muted-foreground">{c.issuer}</div>
              </div>
            </div>
            <div className="mt-auto flex items-center justify-between text-xs">
              <span className="rounded-full bg-accent/15 px-2 py-0.5 text-accent">{c.category}</span>
              <span className="text-muted-foreground">{c.year}</span>
            </div>
            {(c.url || c.file) && (
              <a
                href={c.url || c.file}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                <Download className="size-3" /> View
              </a>
            )}
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            No certificates match your filter.
          </div>
        )}
      </div>
    </Section>
  );
}
