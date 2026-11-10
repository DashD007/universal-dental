import { chairSystems } from "@/lib/data/services";

/** Slow drifting band naming every chair system we service. Static under reduced motion. */
export default function SystemsTicker() {
  const items = [...chairSystems, ...chairSystems];

  return (
    <section aria-label="Chair systems we service" className="overflow-hidden border-b border-line bg-surface py-6">
      <ul className="flex w-max items-center motion-safe:animate-ticker hover:[animation-play-state:paused]">
        {items.map((name, i) => (
          <li
            key={`${name}-${i}`}
            aria-hidden={i >= chairSystems.length ? "true" : undefined}
            className="flex items-center gap-8 pr-8 font-display text-display-sm whitespace-nowrap text-foreground/85"
          >
            {name}
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </section>
  );
}
