import { cn } from "@/lib/cn";

type BadgeTone = "primary" | "accent" | "highlight" | "neutral" | "danger";

type BadgeProps = {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
};

const tones: Record<BadgeTone, string> = {
  primary: "bg-primary/12 text-primary",
  accent: "bg-accent/15 text-accent",
  highlight: "bg-highlight/15 text-highlight",
  neutral: "bg-foreground/8 text-foreground",
  danger: "bg-danger/12 text-danger",
};

export default function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-control px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
