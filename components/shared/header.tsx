import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#manifesto", label: "MANIFESTO" },
  { href: "#tracks", label: "TRACKS" },
] as const;

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-neutral-900 bg-zinc-950 px-5 py-5">
      <Link href="/" className="text-3xl font-semibold text-white shrink-0">
        Techathon.
      </Link>

      <div className="flex items-center gap-6 sm:gap-8">
        <nav className="flex items-center gap-6 sm:gap-8" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 text-sm font-medium text-white sm:text-base"
            >
              {label}
              <span
                className="inline-block size-1 shrink-0 rounded-full bg-white/70"
                aria-hidden
              />
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-500 bg-black px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-neutral-400 hover:bg-neutral-950"
        >
          Contact
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </header>
  );
};
