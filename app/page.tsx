import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Habit Tracker App",
    description:
      "A mobile-first habit tracking app that helps you build discipline with daily checklists, weekly win/loss records, and a circular monthly progress wheel.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/adab-code/wdd430-portfolio",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive dashboard that fetches and visualizes live weather data from a public REST API.",
    technologies: ["Next.js", "TypeScript", "REST API"],
    link: "https://github.com/adab-code/wdd430-portfolio",
  },
  {
    title: "Task Manager",
    description:
      "A productivity app for organizing tasks and projects with a clean, mobile-first interface.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
  },
];

export default function Home() {
  return (
    <section className="mx-auto flex-1 max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Xavier Rodriguez</h1>
      <p className="text-lg text-gray-700 mb-8">
        Full-Stack Developer building clean, functional web experiences.
      </p>
      <ProjectList projects={projects} />
    </section>
  );
}
