import { useRef, type RefObject } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Section } from "../section";
import timeline from "@/data/timeline.json";
import { Bunny } from "../bunny";

type TimelineSectionProps = {
  timelineRef?: RefObject<HTMLDivElement | null>;
  showJourneyBunny: boolean;
};

export function TimelineSection({ timelineRef, showJourneyBunny }: TimelineSectionProps) {
  const selfRef = useRef<HTMLDivElement>(null);
  const sectionRef = timelineRef ?? selfRef;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 30%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const bunnyTop = useTransform(scrollYProgress, [0, 0.18, 0.36, 0.54, 0.72, 1], ["6%", "22%", "38%", "54%", "72%", "92%"]);
  const bunnySize = useTransform(scrollYProgress, [0, 0.22, 0.44, 0.66, 0.88, 1], [32, 40, 52, 64, 80, 80]);
  const hopOffset = useTransform(
    scrollYProgress,
    [0, 0.12, 0.16, 0.28, 0.32, 0.44, 0.48, 0.6, 0.64, 0.76, 0.8, 0.92, 0.96, 1],
    [0, -10, 0, -10, 0, -10, 0, -10, 0, -8, 0, -6, 0, 0],
  );
  const rocketGlow = useTransform(
    scrollYProgress,
    [0.92, 0.98, 1],
    ["0px 0px 0px rgba(14,165,233,0)", "0px 0px 25px rgba(14,165,233,0.15)", "0px 0px 40px rgba(14,165,233,0.32)"],
  );
  const glowScale = useTransform(scrollYProgress, [0.92, 0.98, 1], [1, 1.03, 1.08]);

  return (
    <Section
      id="timeline"
      eyebrow="Journey"
      title={
        <>
          From <span className="gradient-text">classroom</span> to{" "}
          <span className="gradient-text">campus</span>
        </>
      }
      description="Every milestone on the way. Bunny will hop along — scroll to follow."
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Journey Progress</span>

        <span className="text-sm font-semibold text-primary">85%</span>
      </div>
      <div ref={sectionRef} className="relative pl-8 md:pl-0">
        {/* Center line - desktop */}
        <div
          className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px"
          aria-hidden
        />
        <motion.div
          className="absolute left-4 top-0 w-px bg-gradient-to-b from-primary via-primary to-accent md:left-1/2 md:-translate-x-px"
          style={{ height: lineHeight }}
          aria-hidden
        />

        <AnimatePresence mode="wait">
          {showJourneyBunny && (
            <motion.div
              layoutId="journey-bunny"
              className="absolute left-4 z-10 -translate-x-1/2 md:left-1/2"
              style={{
                top: bunnyTop,
                y: hopOffset,
                width: bunnySize,
                height: bunnySize,
                boxShadow: rocketGlow,
                scale: glowScale,
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -18, transition: { duration: 0.25 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative -translate-y-1/2">
                <Bunny size="100%" showTrail />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className="
    absolute
    left-4
    md:left-1/2
    top-[80%]
    -translate-x-1/2
    z-20
    rounded-full
    bg-primary
    px-4
    py-2
    text-xs
    font-semibold
    text-background
    shadow-lg
    shadow-primary/50
  "
        >
          🚀 YOU ARE HERE
        </div>
        <div
          className="
    absolute
    left-10
    md:left-[55%]
    top-[10%]
    z-20
    rounded-xl
    border
    border-primary/30
    bg-surface/80
    px-3
    py-2
    text-xs
    backdrop-blur
  "
        >
          🐰 Keep scrolling...
        </div>
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
                <div
                  className={`${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:[direction:ltr]"}`}
                >
                  <div
                    className="
glass
rounded-2xl
p-6
transition-all
duration-500
hover:border-primary/40
hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]
hover:-translate-y-1
"
                  >
                    <div className="text-xs font-semibold tracking-wider text-primary">
                      {item.year}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-bold">{item.title}</h3>
                    <div className="text-sm text-muted-foreground">{item.place}</div>
                    <p className="mt-3 text-foreground/90">{item.description}</p>
                    <div className="mt-2 inline-flex rounded-full bg-accent/15 px-3 py-1 text-xm font-medium text-accent">
                      {item.website && (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Visit Website
                        </a>
                      )}
                    </div>
                    <div className="mt-2 "></div>
                    <div className="mt-4 inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
                      {item.highlight}
                    </div>
                    <div className="mt-2 "></div>
                      {item.id === "future" && (
                        <motion.div
                          animate={{
                            scale: [1, 1.07,1],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                          }}
                          className="mt-3 text-xl"
                        >
                          🎉🐰🎉
                        </motion.div>
                      )}
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
