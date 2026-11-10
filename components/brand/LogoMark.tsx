import { cn } from "@/lib/cn";

type LogoMarkProps = {
  className?: string;
};

/**
 * Universal Dental mark: a high-speed dental handpiece set inside a ring.
 * Drawn horizontally, then rotated so the head (with its bur) sits top-right.
 */
export default function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", className)}
    >
      {/* Ring: the "universal" circle */}
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="none"
        strokeWidth="3"
        className="stroke-accent"
      />
      <g transform="rotate(-38 32 32)">
        {/* Hose coupling */}
        <rect x="6" y="30" width="5" height="4" rx="1.4" className="fill-foreground" />
        {/* Rear grip */}
        <path d="M12 28.6 L20.6 28.9 L20.6 35.1 L12 35.4 Z" className="fill-primary" />
        {/* Front grip tapering into the contra-angle neck */}
        <path
          d="M22.2 28.95 L40 29.6 L49 30.7 L49 33.3 L40 34.4 L22.2 35.05 Z"
          className="fill-primary"
        />
        {/* Push-button cap + head */}
        <rect x="49.6" y="24.8" width="5.8" height="1.6" rx="0.8" className="fill-primary" />
        <rect x="48" y="26.6" width="9" height="9.4" rx="3" className="fill-primary" />
        {/* Bur */}
        <rect x="51.75" y="36" width="1.5" height="6.4" rx="0.75" className="fill-foreground" />
      </g>
    </svg>
  );
}
