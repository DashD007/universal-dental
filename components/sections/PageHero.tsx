import Container from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Optional CTAs or stats under the subtitle. */
  children?: React.ReactNode;
};

/** Top-of-page hero for inner pages (Services, Shop, About Us). */
export default function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="border-b border-line py-section-sm">
      <Container>
        <p className="text-eyebrow font-semibold uppercase text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-display-xl font-medium">{title}</h1>
        {subtitle ? <p className="mt-5 max-w-copy text-lead text-muted">{subtitle}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}
