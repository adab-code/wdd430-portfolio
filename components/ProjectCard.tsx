interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-zinc-800 bg-zinc-900 p-5">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-zinc-400 mb-3 leading-relaxed">{description}</p>
      <p className="text-sm text-zinc-500">
        <strong className="text-zinc-300">Technologies:</strong>{" "}
        {technologies.join(", ")}
      </p>
      {link && (
        <p className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            View Project &rarr;
          </a>
        </p>
      )}
    </article>
  );
}