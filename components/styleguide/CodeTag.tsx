import { cn } from "@/lib/cn";

/** Inline token / class name label. */
export default function CodeTag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <code className={cn("rounded-md bg-foreground/6 px-1.5 py-0.5 font-mono text-xs text-foreground", className)}>
      {children}
    </code>
  );
}
