import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

type StyleguideSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function StyleguideSection({ id, eyebrow, title, subtitle, children }: StyleguideSectionProps) {
  return (
    <section id={id} className="scroll-mt-header border-t border-line py-section-sm">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="mt-10 sm:mt-12">{children}</div>
      </Container>
    </section>
  );
}
