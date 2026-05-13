export const Hero = () => {
  return (
    <section
      className="flex min-h-dvh w-full flex-col items-center justify-center px-6 py-20 md:px-10"
      aria-label="Introduction"
    >
      <div className="flex w-full max-w-5xl flex-col gap-y-16 md:gap-y-24 lg:gap-y-28">
        <p className="uppercase text-left text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
          A Different
        </p>
        <p className="uppercase text-right text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
          Creative
        </p>
        <p className="uppercase text-left text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
          Aproach
        </p>
      </div>
    </section>
  );
};
