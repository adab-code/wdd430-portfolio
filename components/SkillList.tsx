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
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="grid gap-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center justify-between rounded border border-gray-200 bg-gray-50 px-4 py-3"
          >
            <span className="font-medium text-gray-800">{skill.name}</span>
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              {skill.level}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}