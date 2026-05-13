import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export const HeroSupport = () => {
  return (
    <section
      className="flex min-h-screen flex-col gap-20 px-6 py-24 md:gap-28 md:py-32"
      aria-labelledby="hero-support-heading"
    >
      <h2
        id="hero-support-heading"
        className="mx-auto w-full max-w-4xl text-center text-5xl font-semibold uppercase leading-snug tracking-wide text-zinc-50 md:text-4xl lg:text-5xl"
      >
        <span className="block">With Emotion+</span>
        <span className="block">innovation, We push the</span>
        <span className="block">Boundaries of Digital</span>
        <span className="block">Creativity.</span>
      </h2>

      <div className="flex w-full flex-col items-start gap-16 md:flex-row md:gap-24 lg:gap-32">
        <div className="flex w-full max-w-[300px] flex-col gap-8">
          <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
            We are a collective of designers and engineers who believe great
            digital work starts with curiosity and ends with craft you can feel.
          </p>
          <Link
            href="/about"
            className="inline-flex w-fit items-center gap-2 text-base font-semibold text-white transition-colors hover:text-zinc-300"
          >
            About us
            <ArrowRightIcon className="size-4 shrink-0" aria-hidden />
          </Link>
        </div>

        <p className="w-full max-w-[300px] text-sm leading-relaxed text-zinc-400 md:text-base">
          From strategy to launch, we partner with teams who want bold ideas
          shipped with clarity, speed, and a relentless eye for detail.
        </p>
      </div>
    </section>
  );
};
