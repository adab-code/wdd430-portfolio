import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "31 DÍAS para MI PRIME — Habit Tracker",
    description:
      "A mobile-first habit tracking app built around a circular monthly progress wheel, daily day/night checklists,and a weekly wins-vs-losses dashboard. Designed with a high-contrast, sport-inspired 'record & discipline' identity for men 18–30 focused on self-discipline and fitness.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/adab-code/wdd430-portfolio",
  },
  {
    title: "WDD430 Portfolio",
    description:
      "This portfolio site, built to showcase my projects. Features reusable typed components, a shared layout with client-side navigation, responsive Tailwind styling,and a simple API route.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/adab-code/wdd430-portfolio",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4 text-white [text-shadow:0_0_12px_rgba(239,68,68,0.8),0_0_24px_rgba(239,68,68,0.4)]">
          Aaron Alfaro
        </h1>
        <p className="text-lg text-zinc-400">
          I'm a full-stack developer learning Next.js, React, and TypeScript. Here
          are some of my recent projects.
        </p>
        <div
          aria-hidden="true"
          className="mx-auto mt-6 h-px w-24 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]"
        />
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}