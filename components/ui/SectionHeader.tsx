import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  title: string;
  /** id for the heading, for aria-labelledby on the section. */
  id?: string;
  /** Optional small label above the title. Not used on persuasive pages (Home). */
  eyebrow?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

/** Section title block: heading with optional subhead. */
export default function SectionHeader({
  eyebrow,
  id,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-eyebrow font-semibold uppercase text-primary">{eyebrow}</p>
      ) : null}
      <h2 id={id} className="text-display-lg font-medium">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-lead text-muted">{subtitle}</p> : null}
    </div>
  );
}
