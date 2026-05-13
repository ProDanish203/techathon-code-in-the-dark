import Image from "next/image";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

const LOGO_COUNT = 12;
const LOGO_PATH = "/google.png";
const cornerPlusBase =
  "pointer-events-none absolute z-10 size-4 shrink-0 text-zinc-500";

function LogoTile({ index }: { index: number }) {
  return (
    <div className="relative border border-zinc-500/45 bg-zinc-950">
      <Plus
        className={`${cornerPlusBase} left-0 top-0 -translate-x-1/2 -translate-y-1/2`}
        strokeWidth={1.5}
        aria-hidden
      />
      <Plus
        className={`${cornerPlusBase} right-0 top-0 translate-x-1/2 -translate-y-1/2`}
        strokeWidth={1.5}
        aria-hidden
      />
      <Plus
        className={`${cornerPlusBase} bottom-0 left-0 -translate-x-1/2 translate-y-1/2`}
        strokeWidth={1.5}
        aria-hidden
      />
      <Plus
        className={`${cornerPlusBase} bottom-0 right-0 translate-x-1/2 translate-y-1/2`}
        strokeWidth={1.5}
        aria-hidden
      />
      <div className="flex w-full items-center justify-center p-2 lg:p-12">
        <Image
          src={LOGO_PATH}
          alt=""
          width={500}
          height={500}
          className="h-auto w-full max-w-none object-contain brightness-0 invert"
          sizes="(min-width: 1024px) 14vw, (min-width: 640px) 22vw, 45vw"
        />
      </div>
      <span className="sr-only">Partner logo {index + 1}</span>
    </div>
  );
}

export const Testimonials = () => {
  return (
    <section
      className="px-6 py-24 md:px-10 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
        <div className="flex w-full shrink-0 flex-col gap-2 lg:w-1/4 lg:max-w-none lg:pr-12">
          <h2
            id="testimonials-heading"
            className="text-lg font-semibold uppercase leading-tight tracking-tight text-zinc-50"
          >
            <span className="block">Trusted By</span>
          </h2>
          <button className="text-xl font-semibold uppercase leading-tight tracking-tight text-zinc-50 w-fit border border-zinc-500/45 bg-zinc-950 rounded-xl px-8 py-2.5">
            Leaders
          </button>
        </div>

        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-2 gap-0 sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: LOGO_COUNT }, (_, i) => (
              <LogoTile key={i} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
