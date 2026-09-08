export default function Footer() {
  return (
    <footer className="border-t border-red-900/50 bg-zinc-950 text-zinc-400 mt-12 shadow-[0_0_16px_rgba(220,38,38,0.25)]">
      <div className="mx-auto max-w-4xl text-center py-6">
        <p>
          Copyright &copy; {new Date().getFullYear()} |{" "}
          <span className="font-semibold text-red-400 [text-shadow:0_0_8px_rgba(239,68,68,0.7)]">
            Aaron Alfaro
          </span>{" "}
          | All rights reserved
        </p>
      </div>
    </footer>
  );
}