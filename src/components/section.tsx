import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id={id} className={`section-pad relative ${className}`}>
      <div ref={ref} className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              <span className="size-1.5 rounded-full bg-primary" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
          {description && (
            <p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
