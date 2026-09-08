import Link from "next/link";
import SkillList from "@/components/SkillList";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
      <p className="text-lg text-zinc-400 leading-8 mb-4">
        I'm Aaron Alfaro, a web developer focused on building clean, functional,
        and mobile-first applications. I enjoy turning ideas into well-structured,
        maintainable code using modern tools like Next.js, TypeScript, and
        Tailwind CSS.
      </p>
      <p className="text-lg text-zinc-400 leading-8 mb-6">
        When I'm not coding, I'm sharpening my UI/UX skills, learning new
        technologies, and building personal projects that challenge me to
        improve.
      </p>
      <SkillList
        title="Skills & Technologies"
        skills={[
          { name: "Next.js", level: "Advanced" },
          { name: "TypeScript", level: "Intermediate" },
          { name: "Tailwind CSS", level: "Advanced" },
          { name: "React", level: "Intermediate" },
          { name: "UI/UX Design", level: "Intermediate" },
        ]}
      />
      <p className="mt-8">
        <Link
          href="/"
          className="font-medium text-blue-400 transition-colors hover:text-blue-300"
        >
          &larr; Back to Home
        </Link>
      </p>
    </main>
  );
}