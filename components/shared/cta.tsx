"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const PLUS_ARM_THICK = "4px";

const PASTEL_GRADIENT =
  "linear-gradient(135deg, #ffd6e8 0%, #ffc2d4 18%, #e8d5ff 38%, #b8e0ff 58%, #ffd9c0 78%, #ffd6e8 100%)";

const PASTEL_GRADIENT_SOFT =
  "linear-gradient(225deg, #ffe8f3 0%, #ffb8d9 20%, #dcc9ff 40%, #a8d4ff 60%, #ffe0cc 80%, #ffe8f3 100%)";

const CTA_TEXT = "Where Different is standard. Choose Techathon," as const;

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const staticComplete = useMotionValue(1);
  const progress = prefersReducedMotion ? staticComplete : scrollYProgress;

  const verticalW = useTransform(
    progress,
    [0, 0.44, 1],
    [PLUS_ARM_THICK, "100%", "100%"],
  );
  const horizontalH = useTransform(
    progress,
    [0.06, 0.5, 1],
    [PLUS_ARM_THICK, "100%", "100%"],
  );

  const plusRotate = useTransform(progress, [0, 0.55, 1], [0, 45, 90]);
  const plusScale = useTransform(
    progress,
    [0, 0.35, 0.72, 1],
    [1, 1.08, 1.42, 1.58],
  );

  const unifyOpacity = useTransform(progress, [0.82, 0.98], [0, 1]);

  const textOpacity = useTransform(progress, [0, 0.46, 0.56, 1], [0, 0, 1, 1]);

  const textX = useTransform(
    progress,
    [0, 0.46, 0.56, 0.72, 0.86, 1],
    ["32vw", "32vw", "32vw", "10vw", 0, 0],
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[260vh] w-full"
      aria-labelledby="cta-heading"
    >
      <div className="sticky top-0 isolate h-dvh w-full overflow-x-clip overflow-y-hidden bg-zinc-950">
        <motion.div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            opacity: unifyOpacity,
            background: PASTEL_GRADIENT_SOFT,
          }}
          aria-hidden
        />

        <div
          className="pointer-events-none absolute inset-0 z-1 overflow-hidden"
          aria-hidden
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center will-change-transform transform-3d"
            style={{
              rotate: prefersReducedMotion ? 0 : plusRotate,
              scale: prefersReducedMotion ? 1 : plusScale,
            }}
          >
            <div className="relative h-full w-full max-h-dvh">
              <motion.div
                className="pointer-events-none absolute top-0 left-1/2 h-full -translate-x-1/2"
                style={{
                  width: verticalW,
                  background: PASTEL_GRADIENT,
                  backfaceVisibility: "hidden",
                }}
              />

              <motion.div
                className="pointer-events-none absolute top-1/2 left-0 w-full -translate-y-1/2"
                style={{
                  height: horizontalH,
                  background: PASTEL_GRADIENT,
                  backfaceVisibility: "hidden",
                }}
              />
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 flex min-w-0 items-center justify-center px-2 sm:px-4">
          <motion.p
            id="cta-heading"
            className="min-w-0 max-w-[100vw] whitespace-nowrap text-center font-semibold uppercase leading-none tracking-wider text-zinc-50 [text-shadow:0_2px_24px_rgba(0,0,0,0.92)] sm:tracking-widest"
            style={{
              x: textX,
              opacity: textOpacity,
              fontSize: "clamp(0.58rem, 2.2vw, 2.25rem)",
            }}
          >
            {CTA_TEXT}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
