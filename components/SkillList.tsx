interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

interface SkillListProps {
  skills: Skill[];
  title?: string;
}

export default function SkillList({
  skills,
  title = "Skills & Technologies",
}: SkillListProps) {
  return (
    <section className="mt-8">
      <h3 className="text-2xl font-bold mb-4 text-white [text-shadow:0_0_8px_rgba(239,68,68,0.6)]">
        {title}
      </h3>
      <ul className="grid gap-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3"
          >
            <span className="font-medium text-zinc-200">{skill.name}</span>
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white shadow-[0_0_8px_rgba(220,38,38,0.6)]">
              {skill.level}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}