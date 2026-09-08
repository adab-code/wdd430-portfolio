import Link from "next/link";

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 leading-8 mb-6">
        I'm Xavier Rodriguez, a web developer focused on building clean, functional,
        and mobile-first applications. I enjoy turning ideas into well-structured, maintainable
        code using modern tools like Next.js, TypeScript, and Tailwind CSS.
      </p>
      <p className="text-lg text-gray-700 leading-8 mb-6">
        When I'm not coding, I'm sharpening my UI/UX skills, learning new technologies, and
        building personal projects that challenge me to improve.
      </p>
      <Link href="/" className="text-blue-600 hover:underline font-medium">
        Back to Home
      </Link>
    </div>
  );
}