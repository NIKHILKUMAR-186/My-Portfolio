import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "../section";
import timeline from "@/data/timeline.json";
import { Bunny } from "../bunny";

export function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const bunnyY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section
      id="timeline"
      eyebrow="Journey"
      title={<>From <span className="gradient-text">classroom</span> to <span className="gradient-text">campus</span></>}
      description="Every milestone on the way. Bunny will hop along — scroll to follow."
    >
      <div ref={ref} className="relative pl-8 md:pl-0">
        {/* Center line - desktop */}
        <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" aria-hidden />
        <motion.div
          className="absolute left-4 top-0 w-px bg-gradient-to-b from-primary via-primary to-accent md:left-1/2 md:-translate-x-px"
          style={{ height: lineHeight }}
          aria-hidden
        />

        {/* Bunny rider */}
        <motion.div
          className="absolute left-4 z-10 -translate-x-1/2 md:left-1/2"
          style={{ top: bunnyY }}
        >
          <div className="-translate-y-1/2">
            <Bunny size={48} />
          </div>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.6 }}
                className={`relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 ${
                  isLeft ? "" : "md:[direction:rtl]"
                }`}
              >
                <div className={`${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:[direction:ltr]"}`}>
                  <div className="glass rounded-2xl p-6 transition hover:border-primary/40">
                    <div className="text-xs font-semibold tracking-wider text-primary">{item.year}</div>
                    <h3 className="mt-2 font-display text-2xl font-bold">{item.title}</h3>
                    <div className="text-sm text-muted-foreground">{item.place}</div>
                    <p className="mt-3 text-foreground/90">{item.description}</p>
                    <div className="mt-4 inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
                      {item.highlight}
                    </div>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                  <div className="size-4 rounded-full border-2 border-primary bg-background glow-cyan" />
                </div>

                <div className="hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
