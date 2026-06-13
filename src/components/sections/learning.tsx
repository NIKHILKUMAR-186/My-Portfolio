import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "../section";
import { Bunny } from "../bunny";

type Milestone = {
  id: string;
  label: string;
  title: string;
  description: string;
  subtitle: string;
  destination?: boolean;
  detail: string;
};

const MILESTONES: Milestone[] = [
  {
    id: "html",
    label: "First Spark - 2022",
    title: "Started with HTML",
    subtitle: "HTML",
    description: "Built basic webpages and discovered how software appears on a screen.",
    detail: "Build a basic web page consist of Form , Table , lists etc."
  },
  {
    id: "electronics",
    label: "Hardware Phase - 2022",
    title: "Started with Electronics",
    subtitle: "Electronics",
    description: "Explored circuits , sensors, and how Physics in Circuit Works.",
    detail: "Built simple circuits using breadboard, learned about voltage, current, and basic components like resistors, capacitors, and LEDs."
  },
  {
    id: "Operating System",
    label: "OS - 2023",
    title: "Looked into Linux and worked in ",
    subtitle: "Operating Systems",
    description: "Explored the fundamentals of operating systems and gained hands-on experience with Linux.",
    detail: "Installed Kali Linux, learned basic command-line operations, and understood file systems, processes, and permissions."
  },
  {
    id: "python-2024",
    label: "Programming Era-2024",
    title: "Picked up Python",
    subtitle: "Python",
    description: "Basic programming, Syntax Learning, and scripting.",
    detail: "Learned Python syntax, data structures, and built simple scripts to automate tasks and solve problems."
  },
  {
    id: "c-programming-2025",
    label: "Computer Science",
    title: "C Programming",
    subtitle: "C",
    description: "Memory, syntax, and problem solving.",
    detail: "Learned C programming fundamentals, including memory management, pointers, and low-level system interactions."
  },
  {
    id: "web-development -2026",
    label: "Building Products",
    title: "Web Development",
    subtitle: "Web",
    description: "Built websites and hackathon projects.",
    detail: "Built responsive websites using HTML, CSS, and JavaScript, and participated in hackathons to create innovative web applications."
  },
  {
    id: "iot",
    label: "Connected Systems - 2026",
    title: "IoT",
    subtitle: "IoT",
    description: "Sensors, communication, and real-time systems.",
    detail: "Learned about IoT architecture, sensor integration, and real-time data processing, and built IoT projects using microcontrollers and wireless communication."
  },
  {
    id: "ai",
    label: "Current Mission",
    title: "NEXT LEVEL",
    subtitle: "AI",
    description: "AI + Data Science + IoT — Building intelligent products that combine software, hardware, and machine learning.",
    destination: true,
    detail: "Currently working on integrating AI and data science techniques into IoT projects to create intelligent systems that can analyze data, make decisions, and interact with the environment."
  },
];

const BUNNY_STATES = ["🐰", "🐰⚡", "🐰💻", "🐰🧠", "🐰🚀", "🐰📡", "🐰🤖"];

function LearningMilestone({
  milestone,
  index,
  isActive,
  onEnter,
}: {
  milestone: Milestone;
  index: number;
  isActive: boolean;
  onEnter: (index: number) => void;
}) {
  const isLeft = index % 2 === 0;
  const destination = milestone.destination === true;
  const connectorOffset = isLeft ? "right-[-2.25rem]" : "left-[-2.25rem]";
  const connectorOrigin = isLeft ? "0% 50%" : "100% 50%";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, x: isLeft ? -24 : 24 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      onViewportEnter={() => onEnter(index)}
      className={`relative grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start ${isLeft ? "" : "md:[direction:rtl]"}`}
    >
      <div className={`${isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}>
        <div
          className={`relative glass rounded-[2rem] border p-6 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] ${
            destination
              ? "bg-gradient-to-br from-slate-950/95 via-slate-900/95 to-slate-950/95 border-cyan-400/50 shadow-cyan-500/20"
              : "bg-slate-950/95 border-border/70"
          } ${isActive ? "shadow-[0_0_40px_rgba(14,165,233,0.18)] border-cyan-300/70" : ""}`}
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">{milestone.label}</span>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.32em] text-cyan-200 ring-1 ring-cyan-400/20">
                {milestone.subtitle}
              </span>
              {destination && <span className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">Destination</span>}
            </div>
          </div>

          <h3 className={`mt-5 text-2xl font-semibold tracking-tight ${destination ? "text-white" : "text-foreground"}`}>
            {milestone.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{milestone.description}</p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground rounded-lg bg-cyan-500/10  text-xs  text-cyan-100 ring-4 ring-cyan-500/10">{milestone.detail}</p>

          <motion.div
            className={`hidden md:block absolute top-1/2 ${connectorOffset} h-[2px] w-24 rounded-full bg-cyan-500/20`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            style={{ transformOrigin: connectorOrigin }}
          />
        </div>
      </div>

      {/* <div className="absolute left-1/2 top-6 -translate-x-1/2 md:static">
        <motion.div
          animate={isActive ? { scale: [1, 1.08, 1], opacity: [1, 0.95, 1] } : { scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
          className="relative flex h-10 w-10 items-center justify-center"
        >
          <span
            className={`absolute inset-0 rounded-full ${
              destination
                ? "bg-cyan-400/20"
                : "bg-cyan-500/10"
            } blur-xl`}
          />
          <span
            className={`relative block h-5 w-5 rounded-full border-2 ${
              destination
                ? "border-cyan-300 bg-cyan-500/20 shadow-[0_0_0_18px_rgba(14,165,233,0.18)]"
                : "border-cyan-300/70 bg-slate-950 shadow-[0_0_0_12px_rgba(14,165,233,0.08)]"
            }`}
          />
        </motion.div>
      </div> */}

      <div className="hidden md:block" />
    </motion.div>
  );
}

export function Learning() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineFill = useTransform(scrollYProgress, [0, 1], ["4%", "100%"]);
  const bunnyTop = useTransform(scrollYProgress, [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1], ["4%", "16%", "28%", "40%", "52%", "64%", "76%", "92%"]);
  const hopOffset = useTransform(scrollYProgress, [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1], [0, -10, 0, -8, 0, -8, 0, 0]);
  const bunnyScale = useTransform(scrollYProgress, [0, 1], [0.96, 1.04]);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setProgressPercent(Math.min(100, Math.round(latest * 100)));
    });
  }, [scrollYProgress]);

  return (
    <Section
      id="learning"
      eyebrow="Learning Journey"
      title={
        <>
          From Curiosity To <span className="gradient-text">Capability</span>
        </>
      }
      description="Every skill started as an experiment. Each step taught me something valuable. This is the path that shaped how I build today."
    >
      {/* <div className="mb-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-2"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-primary/80">Learning Progress</p>
          <p className="text-3xl font-semibold text-foreground">70% Complete</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="w-full max-w-sm"
        >
          <div className="rounded-full bg-border/20 p-1">
            <motion.div
              className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
              style={{ width: lineFill }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span>Progress</span>
            <span>{progressPercent}%</span>
          </div>
        </motion.div>
      </div> */}

      <div ref={containerRef} className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-slate-1500/80 p-6 shadow-2xl shadow-black/25 ring-1 ring-white/5 md:p-8">
        <div className="pointer-events-none absolute left-1/2 top-8 h-[calc(100%-4rem)] -translate-x-1/2 w-px bg-border" />
        <motion.div
          className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 w-px bg-gradient-to-b from-cyan-500 via-cyan-400 to-cyan-500"
          style={{ height: lineFill }}
          aria-hidden
        />

        <motion.div
          style={{ top: bunnyTop, y: hopOffset, scale: bunnyScale }}
          className="pointer-events- absolute left-1/2 z-200 -translate-x-1/2"
          initial={{ opacity: 0, y: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute -bottom-1 h-3 w-14 rounded-full bg-cyan-400/20 blur-2xl"
              animate={{ scale: [1, 1.08, 1], opacity: [0.8, 0.95, 0.8] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="flex items-center gap-2 rounded-full bg-slate-950/90 px-3 py-1 text-xs text-muted-foreground shadow-[0_15px_30px_rgba(0,0,0,0.22)]">
              <Bunny size={56} className="flex items-center rounded-full shadow-[0_20px_30px_rgba(14,165,233,0.14)]" />
              {/* <span className="text-white">{BUNNY_STATES[activeIndex]}</span> */}
            </div>
          </div>
        </motion.div>

        <div className="space-y-20 py-8">
          {MILESTONES.map((milestone, index) => (
            <LearningMilestone
              key={milestone.id}
              milestone={milestone}
              index={index}
              isActive={activeIndex === index}
              onEnter={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
