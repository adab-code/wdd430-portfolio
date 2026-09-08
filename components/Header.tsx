import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950 text-white">
      <div className="mx-auto max-w-4xl px-4 py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div id="header-title" className="text-2xl font-bold tracking-tight">
          Aaron Alfaro
        </div>
        <nav aria-label="Main navigation">
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className="font-medium text-zinc-200 transition-colors hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-medium text-zinc-200 transition-colors hover:text-white"
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