import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-red-900/50 bg-zinc-950 text-white shadow-[0_0_20px_rgba(220,38,38,0.35)]">
      <div className="mx-auto max-w-4xl px-4 py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div
          id="header-title"
          className="text-2xl font-bold tracking-tight [text-shadow:0_0_10px_rgba(239,68,68,0.8),0_0_20px_rgba(239,68,68,0.45)]"
        >
          Aaron Alfaro
        </div>
        <nav aria-label="Main navigation">
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className="font-medium text-zinc-300 transition-all hover:text-red-400 hover:[text-shadow:0_0_8px_rgba(239,68,68,0.9)]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-medium text-zinc-300 transition-all hover:text-red-400 hover:[text-shadow:0_0_8px_rgba(239,68,68,0.9)]"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}