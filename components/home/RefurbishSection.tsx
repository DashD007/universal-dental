import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ButtonLink from "@/components/ui/ButtonLink";
import BeforeAfter from "@/components/home/BeforeAfter";
import chairPhoto from "@/public/images/placeholders/refurbished-chair.jpg";
import { refurbishmentScope } from "@/lib/data/services";
import { site } from "@/lib/data/site";

export default function RefurbishSection() {
  return (
    <section aria-labelledby="refurbish-title" className="bg-surface py-section">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          {/* PLACEHOLDER: one photo with simulated wear. Replace with real before/after photos of the same chair. */}
          <BeforeAfter before={chairPhoto} after={chairPhoto} alt="a dental chair" simulateWear />
          <p className="mt-3 text-xs text-muted">
            Sample image with simulated wear. Your own before and after photos go here.
          </p>
        </div>

        <div className="lg:col-span-5">
          <SectionHeader
            id="refurbish-title"
            title="Refurbished, not replaced."
            subtitle="A structurally sound chair rarely needs replacing. We restore what wears out, so it goes back into service."
          />
          <ul className="mt-8 space-y-3">
            {refurbishmentScope.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ButtonLink href={site.quoteHref} variant="secondary" className="mt-9">
            Ask about refurbishment <ArrowRight aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
