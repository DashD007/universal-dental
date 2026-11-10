import { cn } from "@/lib/cn";

export type CardVariant = "surface" | "outline" | "raised" | "inverse" | "primary";
type CardPadding = "none" | "sm" | "md" | "lg";

type CardProps = {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  /** Hover lift for clickable cards (product, service). */
  interactive?: boolean;
  as?: "div" | "article" | "li" | "section";
  className?: string;
};

const variants: Record<CardVariant, string> = {
  /** Default content card on the page background. */
  surface: "bg-surface",
  /** Quiet card for dense grids and lists, or on surface sections. */
  outline: "border border-line bg-background",
  /** Elevated card: products, pricing, overlays on images. */
  raised: "bg-raised shadow-card",
  /** Dark card for stats, testimonials, emphasis. */
  inverse: "bg-inverse text-on-inverse",
  /** Promotional card, at most one per view. */
  primary: "bg-primary text-on-primary",
};

const paddings: Record<CardPadding, string> = {
  none: "",
  sm: "p-5",
  md: "p-6 sm:p-8",
  lg: "p-8 sm:p-10",
};

export default function Card({
  children,
  variant = "surface",
  padding = "md",
  interactive = false,
  as: Tag = "div",
  className,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-card",
        variants[variant],
        paddings[padding],
        interactive &&
          "transition duration-300 ease-soft motion-safe:hover:-translate-y-1 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
