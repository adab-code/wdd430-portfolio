export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400 mt-12">
      <div className="mx-auto max-w-4xl text-center py-6">
        <p>
          Copyright &copy; {new Date().getFullYear()} | Aaron Alfaro | All rights
          reserved
        </p>
      </div>
    </footer>
  );
}