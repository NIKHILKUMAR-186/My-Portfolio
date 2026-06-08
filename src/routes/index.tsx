import { createFileRoute } from "@tanstack/react-router";
import { CinematicIntro } from "@/components/cinematic-intro";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TimelineSection } from "@/components/sections/timeline";
import { Now } from "@/components/sections/now";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Certificates } from "@/components/sections/certificates";
import { Achievements } from "@/components/sections/achievements";
import { Github_ } from "@/components/sections/github";
import { Learning } from "@/components/sections/learning";
import { Beyond } from "@/components/sections/beyond";
import { Roadmap } from "@/components/sections/roadmap";
import { ResumeHub } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikhil Kumar — Engineer · Learner · Builder" },
      {
        name: "description",
        content:
          "Personal portfolio of Nikhil Kumar — engineering student at MIT Muzaffarpur and IIT Madras BS Data Science, building IoT, AI, and full-stack products.",
      },
      { property: "og:title", content: "Nikhil Kumar — Engineer · Learner · Builder" },
      {
        property: "og:description",
        content:
          "A living digital timeline of an engineering journey — projects, milestones, and what's next.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <CinematicIntro />
      <SmoothScroll />
      <Nav />
      <Hero />
      <About />
      <TimelineSection />
      <Now />
      <Skills />
      <Projects />
      <Certificates />
      <Achievements />
      <Github_ />
      <Learning />
      <Beyond />
      <Roadmap />
      <ResumeHub />
      <Contact />
    </>
  );
}
