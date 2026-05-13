import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

type WorkItem = {
  id: string;
  image: string;
  title: string;
  desc: string;
};

const WORK_ITEMS: WorkItem[] = [
  {
    id: "1",
    image: "/5.jpg",
    title: "Nimbus Checkout",
    desc: "Frictionless payments with adaptive risk scoring for global storefronts.",
  },
  {
    id: "2",
    image: "/4.jpg",
    title: "Atlas Field Notes",
    desc: "A research workspace that turns messy interviews into confident decisions.",
  },
  {
    id: "3",
    image: "/3.jpg",
    title: "Velvet Studio",
    desc: "Brand systems and motion guidelines shipped as a living design language.",
  },
  {
    id: "4",
    image: "/2.jpg",
    title: "Harbor Ops",
    desc: "Operational dashboards that keep fleets, crews, and margins in sync.",
  },
  {
    id: "5",
    image: "/1.jpg",
    title: "Lumen Health",
    desc: "Patient-first scheduling with gentle reminders and zero dead-air waits.",
  },
  {
    id: "6",
    image: "/3.jpg",
    title: "Quartz Analytics",
    desc: "Self-serve metrics for teams who outgrew spreadsheets but hate BI theater.",
  },
  {
    id: "7",
    image: "/4.jpg",
    title: "Northwind CRM",
    desc: "Pipeline clarity with lightweight automation that respects how sellers sell.",
  },
  {
    id: "8",
    image: "/2.jpg",
    title: "Signal Room",
    desc: "Incident comms that stay calm under pressure with auditable timelines.",
  },
  {
    id: "9",
    image: "/1.jpg",
    title: "Marble Archive",
    desc: "Long-term media preservation with checksums you can explain to legal.",
  },
  {
    id: "10",
    image: "/5.jpg",
    title: "Cinder Launch",
    desc: "Landing infrastructure that pairs bold storytelling with ruthless performance.",
  },
];

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <article className="group relative isolate w-full min-h-112 overflow-hidden rounded-3xl border border-zinc-500/30 sm:min-h-120 lg:min-h-128">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        sizes="(min-width: 1024px) 32vw, 90vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <div className="flex w-full flex-col">
          <div className="flex w-full items-end justify-between gap-4">
            <h3 className="max-w-[min(100%,14rem)] text-left text-xs font-semibold uppercase leading-snug tracking-wide text-zinc-50 sm:max-w-[18rem] lg:text-sm">
              {item.title}
            </h3>
            <ArrowRightIcon
              className="size-4 shrink-0 text-zinc-200 transition-transform duration-300 ease-out group-hover:translate-x-0.5 sm:size-5"
              aria-hidden
            />
          </div>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
            <div className="min-h-0 overflow-hidden">
              <p className="pt-3 text-pretty text-xs leading-relaxed text-zinc-300 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 sm:text-sm lg:max-w-xl">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export const Work = () => {
  const columnA = WORK_ITEMS.slice(0, 5);
  const columnB = WORK_ITEMS.slice(5, 10);

  return (
    <section
      className="px-6 py-24 md:px-10 md:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
        <div className="flex w-full shrink-0 flex-col gap-2 lg:w-1/4 lg:max-w-none lg:pr-12">
          <h2
            id="work-heading"
            className="text-lg font-semibold uppercase leading-tight tracking-tight text-zinc-50"
          >
            <span className="block">OUR WORK</span>
          </h2>
          <Link
            href="/work"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-zinc-500/45 bg-zinc-950 px-8 py-2.5 text-xl font-semibold uppercase leading-tight tracking-tight text-zinc-50 transition-colors hover:border-zinc-400/60 hover:text-white"
          >
            All Works
            <ArrowRightIcon className="size-5 shrink-0" aria-hidden />
          </Link>
        </div>

        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
            <div className="flex flex-col gap-10 lg:gap-12">
              {columnA.map((item) => (
                <WorkCard key={item.id} item={item} />
              ))}
            </div>
            <div className="flex flex-col gap-10 lg:-translate-y-16 lg:gap-12">
              {columnB.map((item) => (
                <WorkCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
