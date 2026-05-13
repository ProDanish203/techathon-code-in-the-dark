import { ExternalLink, Globe, Mail } from "lucide-react";
import Link from "next/link";

const linkGroups = [
  {
    title: "Experience",
    links: [
      { href: "#manifesto", label: "Manifesto" },
      { href: "#tracks", label: "Tracks" },
      { href: "/schedule", label: "Schedule" },
      { href: "/venue", label: "Venue & access" },
      { href: "/faq", label: "FAQ" },
      { href: "/highlights", label: "Past highlights" },
      { href: "/volunteer", label: "Volunteer" },
    ],
  },
  {
    title: "Participants",
    links: [
      { href: "/register", label: "Register" },
      { href: "/teams", label: "Teams" },
      { href: "/mentors", label: "Mentors" },
      { href: "/rules", label: "Rules of play" },
      { href: "/kits", label: "Starter kits" },
      { href: "/discord", label: "Community chat" },
      { href: "/travel", label: "Travel stipends" },
    ],
  },
  {
    title: "Organizers",
    links: [
      { href: "/sponsors", label: "Sponsors" },
      { href: "/press", label: "Press kit" },
      { href: "/brand", label: "Brand assets" },
      { href: "/contact", label: "Contact" },
      { href: "/careers", label: "Careers" },
    ],
  },
] as const;

export const Footer = () => {
  return (
    <footer
      className="relative z-10 -mt-14 overflow-hidden rounded-t-[2rem] bg-black shadow-[0_-28px_80px_-20px_rgba(0,0,0,0.85)] sm:rounded-t-[2.5rem] md:-mt-20 md:rounded-t-[3rem] animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20 md:pt-24 lg:px-10">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between lg:gap-16 xl:gap-24">
          <div className="max-w-xl lg:max-w-lg xl:max-w-2xl">
            <h2
              id="footer-heading"
              className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.08] xl:text-6xl"
            >
              How about we do a thing or two
              <br className="hidden sm:block" /> together
            </h2>
          </div>

          <nav
            className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-8 lg:shrink-0 lg:gap-12"
            aria-label="Footer"
          >
            {linkGroups.map((group) => (
              <div key={group.title} className="min-w-0">
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-neutral-500 sm:mb-5">
                  {group.title}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm text-white/90 transition-colors hover:text-white"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-8 border-t border-neutral-800 pt-4 sm:mt-20 sm:flex-row sm:items-center sm:gap-6 sm:pt-4">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
              In collaboration with
            </p>
            <div className="flex items-center gap-3 text-neutral-400">
              <Link
                href="https://example.com"
                className="transition-colors hover:text-white"
                aria-label="Website"
              >
                <Globe className="size-5" strokeWidth={1.75} />
              </Link>
              <Link
                href="mailto:hello@techathon.example"
                className="transition-colors hover:text-white"
                aria-label="Email"
              >
                <Mail className="size-5" strokeWidth={1.75} />
              </Link>
              <Link
                href="https://example.com/updates"
                className="transition-colors hover:text-white"
                aria-label="External updates"
              >
                <ExternalLink className="size-5" strokeWidth={1.75} />
              </Link>
            </div>
          </div>

          <Link
            href="/"
            className="text-3xl font-semibold text-white sm:self-auto"
          >
            Techathon.
          </Link>
        </div>
      </div>
    </footer>
  );
};
