import { cn } from "@/lib/cn";
import type { Palette } from "@/lib/design/tokens";

/** One brand palette as a strip of swatches. Swatch classes are safelisted in theme.css. */
export default function ColorScale({ palette }: { palette: Palette }) {
  const steps = Object.entries(palette.steps);

  return (
    <div>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-display-sm font-medium">{palette.name}</h3>
        <p className="text-sm text-muted">{palette.role}</p>
      </div>
      <ol className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-11">
        {steps.map(([step, hex]) => {
          const isDark = Number(step) >= 500;
          const isAnchor = Number(step) === palette.anchor;
          return (
            <li key={step}>
              <div
                className={cn(
                  "flex aspect-square flex-col justify-end rounded-xl p-2 text-[0.65rem] leading-tight",
                  `bg-${palette.token}-${step}`,
                  isDark ? "text-earth-50" : "text-earth-900",
                  isAnchor && "ring-2 ring-foreground ring-offset-2 ring-offset-background",
                )}
              >
                <span className="font-semibold">{step}</span>
              </div>
              <p className="mt-1.5 font-mono text-[0.65rem] text-muted">{hex}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
