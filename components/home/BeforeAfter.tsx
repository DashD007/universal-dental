"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { ChevronsLeftRight } from "lucide-react";

type BeforeAfterProps = {
  before: StaticImageData;
  after: StaticImageData;
  alt: string;
  /** Simulate wear on the "before" layer when both photos are the same placeholder. */
  simulateWear?: boolean;
};

/**
 * Drag (or use arrow keys) to compare a chair before and after refurbishment.
 * The split position lives in the --split CSS variable, updated from the native range input.
 */
export default function BeforeAfter({ before, after, alt, simulateWear = false }: BeforeAfterProps) {
  const frameRef = useRef<HTMLDivElement>(null);

  const setSplit = (value: number) => {
    frameRef.current?.style.setProperty("--split", `${value}%`);
  };

  return (
    <div
      ref={frameRef}
      className="relative aspect-4/3 overflow-hidden rounded-card-lg bg-surface select-none [--split:50%] sm:aspect-3/2"
    >
      <Image
        src={after}
        alt={`${alt}, after refurbishment`}
        fill
        sizes="(min-width: 1024px) 56vw, 100vw"
        placeholder="blur"
        className="object-cover"
      />

      <div aria-hidden="true" className="absolute inset-0 [clip-path:inset(0_calc(100%-var(--split))_0_0)]">
        <Image
          src={before}
          alt=""
          fill
          sizes="(min-width: 1024px) 56vw, 100vw"
          placeholder="blur"
          className={
            simulateWear
              ? "object-cover brightness-90 contrast-85 grayscale-60 sepia-50"
              : "object-cover"
          }
        />
      </div>

      <span className="pointer-events-none absolute top-4 left-4 rounded-control bg-moss-950/75 px-3 py-1.5 text-xs font-medium text-on-inverse backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-control bg-moss-950/75 px-3 py-1.5 text-xs font-medium text-on-inverse backdrop-blur-sm">
        After
      </span>

      <input
        type="range"
        min={0}
        max={100}
        defaultValue={50}
        onChange={(e) => setSplit(Number(e.currentTarget.value))}
        aria-label={`Compare ${alt} before and after refurbishment`}
        className="peer absolute inset-0 z-10 h-full w-full cursor-ew-resize appearance-none opacity-0"
      />

      {/* Divider + handle (decorative; the range input above does the work) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-(--split) z-0 w-0.5 -translate-x-1/2 bg-earth-50 shadow-card"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-(--split) z-0 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-earth-50 text-earth-900 shadow-lift transition-transform duration-300 ease-soft peer-hover:scale-105 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-primary peer-active:scale-95"
      >
        <ChevronsLeftRight className="size-5" />
      </div>
    </div>
  );
}
