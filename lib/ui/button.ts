import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "inverse" | "ghost" | "light";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-control font-medium " +
  "transition-colors ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary " +
  "disabled:pointer-events-none disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45 " +
  "[&_svg]:size-4 [&_svg]:shrink-0";

export const buttonVariants: Record<ButtonVariant, string> = {
  /** Main action per view: Book a service, Request a quote. */
  primary: "bg-primary text-on-primary shadow-card hover:bg-primary-hover",
  /** Paired with primary: Call, Learn more. */
  secondary: "border border-foreground/20 text-foreground hover:border-foreground/60 hover:bg-foreground/5",
  /** Solid dark action on light/tinted backgrounds. */
  inverse: "bg-inverse text-on-inverse hover:bg-moss-700",
  /** Low-emphasis action in toolbars and cards. */
  ghost: "text-foreground hover:bg-foreground/6",
  /** Outline action on moss/dark bands. */
  light: "border border-on-inverse/30 text-on-inverse hover:border-on-inverse hover:bg-on-inverse/10",
};

export const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
  icon: "size-11",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(base, buttonVariants[variant], buttonSizes[size], className);
}
