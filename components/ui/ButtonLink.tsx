import Link from "next/link";
import { buttonClasses, type ButtonSize, type ButtonVariant } from "@/lib/ui/button";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

/** A link styled as a button. Plain <a> for tel:/mailto:/external, next/link for routes. */
export default function ButtonLink({ href, children, variant, size, className }: ButtonLinkProps) {
  const classes = buttonClasses({ variant, size, className });

  if (/^(tel|mailto|https?):/.test(href)) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
