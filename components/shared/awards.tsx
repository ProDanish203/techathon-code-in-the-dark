import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

type Award = {
  platform: string;
  titles: string[];
};

const AWARDS: Award[] = [
  {
    platform: "Awwwards",
    titles: ["Site of the Day", "Developer Award", "Honorable Mention"],
  },
  {
    platform: "CSS Design Awards",
    titles: ["Best UI", "Best UX", "Special Kudos"],
  },
  {
    platform: "FWA",
    titles: ["FWA of the Day", "Cutting Edge"],
  },
  {
    platform: "Webby Awards",
    titles: ["Nominee — Websites", "People’s Voice"],
  },
];

function formatIndex(n: number) {
  return String(n + 1).padStart(2, "0");
}

export const Awards = () => {
  return (
    <section
      className="px-6 py-24 md:px-10 md:py-32"
      aria-labelledby="awards-heading"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
        <div className="flex w-full shrink-0 flex-col gap-2 lg:w-1/4 lg:max-w-none lg:pr-12">
          <h2
            id="awards-heading"
            className="text-lg font-semibold uppercase leading-tight tracking-tight text-zinc-50"
          >
            <span className="block">AWARDS</span>
          </h2>
          <Link
            href="/awards"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-zinc-500/45 bg-zinc-950 px-8 py-2.5 text-xl font-semibold uppercase leading-tight tracking-tight text-zinc-50 transition-colors hover:border-zinc-400/60 hover:text-white"
          >
            All Awards
            <ArrowRightIcon className="size-5 shrink-0" aria-hidden />
          </Link>
        </div>

        <div className="w-full lg:w-3/4">
          <ul className="flex w-full flex-col gap-0 border-y border-zinc-500/40">
            {AWARDS.map((award, index) => (
              <li
                key={award.platform}
                className="grid w-full grid-cols-1 items-center gap-8 border-b border-zinc-500/40 py-14 last:border-b-0 sm:grid-cols-[auto_1fr_auto] sm:gap-10 md:gap-12 md:py-16 lg:gap-16 lg:py-20"
              >
                <span className="text-xs font-medium tabular-nums tracking-widest text-zinc-500 sm:self-center">
                  {formatIndex(index)}
                </span>
                <p className="text-3xl font-bold leading-[1.05] tracking-tight text-zinc-50 md:text-4xl lg:text-5xl">
                  {award.platform}
                </p>
                <ul className="flex flex-col gap-2.5 sm:items-end sm:text-right">
                  {award.titles.map((title) => (
                    <li
                      key={title}
                      className="text-sm font-medium leading-snug text-white"
                    >
                      {title}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
