"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

const IMAGE_COUNT = 20;
const BASE_SRCS = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"] as const;

const IMAGE_LIST = Array.from({ length: IMAGE_COUNT }, (_, i) => ({
  id: `nav-${i}`,
  src: BASE_SRCS[i % BASE_SRCS.length]!,
}));

const WINDOW = 0.18;
const STAGGER = (1 - WINDOW) / (IMAGE_COUNT - 1 || 1);

const transformOpts = { clamp: true } as const;

const HEADLINE = "Elevating brands in unexpected ways" as const;

function hash01(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function driftForIndex(index: number) {
  const ax = hash01(index * 7919 + 1) * 2 - 1;
  const ay = hash01(index * 6421 + 7) * 2 - 1;
  return { x: ax * 150, y: ay * 110 };
}

type ScrollImageProps = {
  progress: MotionValue<number>;
  index: number;
  src: string;
};

function ScrollImage({ progress, index, src }: ScrollImageProps) {
  const { x: driftXMax, y: driftYMax } = useMemo(
    () => driftForIndex(index),
    [index],
  );

  const start = index * STAGGER;
  const popEnd = start + WINDOW * 0.28;
  const holdEnd = start + WINDOW * 0.55;
  const fadeEnd = start + WINDOW;

  const scale = useTransform(
    progress,
    [start, popEnd, holdEnd, fadeEnd],
    [0, 1, 1.1, 1.16],
    transformOpts,
  );

  const opacity = useTransform(
    progress,
    [start, start + WINDOW * 0.18, holdEnd, fadeEnd],
    [0, 1, 1, 0],
    transformOpts,
  );

  const driftX = useTransform(
    progress,
    [popEnd, fadeEnd],
    [0, driftXMax],
    transformOpts,
  );

  const driftY = useTransform(
    progress,
    [popEnd, fadeEnd],
    [0, driftYMax],
    transformOpts,
  );

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ zIndex: index }}
    >
      <motion.div
        className="h-[100px] w-[200px] max-h-[100px] max-w-[200px] shrink-0 rounded-xl border border-zinc-500/80 bg-zinc-900/40 shadow-lg"
        style={{
          x: driftX,
          y: driftY,
          scale,
          opacity,
          transformOrigin: "50% 50%",
        }}
      >
        <div className="relative size-full overflow-hidden rounded-[11px]">
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="200px"
            draggable={false}
          />
        </div>
      </motion.div>
    </div>
  );
}

function ReducedMotionNavigator() {
  return (
    <section
      className="relative min-h-svh w-full bg-zinc-950"
      aria-label="Brand elevation imagery"
    >
      <div className="relative flex h-svh w-full flex-col overflow-hidden">
        <div className="flex flex-1 flex-wrap items-center justify-center gap-4 px-6 pt-16 opacity-90">
          {BASE_SRCS.map((src) => (
            <div
              key={src}
              className="relative h-[100px] w-[200px] shrink-0 overflow-hidden rounded-xl border border-zinc-500/80 bg-zinc-900/40"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="200px"
                draggable={false}
              />
            </div>
          ))}
        </div>
        <p className="pointer-events-none absolute bottom-8 left-6 max-w-[min(90vw,28rem)] text-2xl font-bold uppercase leading-tight tracking-tight text-zinc-50 sm:bottom-10 sm:left-10 sm:max-w-md sm:text-3xl md:text-4xl lg:text-5xl">
          {HEADLINE}
        </p>
      </div>
    </section>
  );
}

function ImageNavigatorScroll() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[320vh] w-full bg-zinc-950"
      aria-label="Brand elevation imagery"
    >
      <div className="sticky top-0 flex h-svh w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 isolate flex items-center justify-center">
          {IMAGE_LIST.map((item, index) => (
            <ScrollImage
              key={item.id}
              src={item.src}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <p className="pointer-events-none absolute bottom-8 left-6 z-100 max-w-[min(90vw,28rem)] text-2xl font-bold uppercase leading-tight tracking-tight text-zinc-50 sm:bottom-10 sm:left-10 sm:max-w-lg sm:text-3xl md:text-4xl lg:text-5xl">
          {HEADLINE}
        </p>
      </div>
    </section>
  );
}

export function ImageNavigator() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <ReducedMotionNavigator />;
  }

  return <ImageNavigatorScroll />;
}
