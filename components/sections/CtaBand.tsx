import { ArrowRight, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/lib/data/site";

/** Closing call to action for inner pages. Home closes with its own quote form instead. */
export default function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="bg-inverse text-on-inverse">
      <Container className="flex flex-col gap-8 py-section-sm lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 id="cta-title" className="text-display-lg font-medium">
            Chair down, or planning an upgrade?
          </h2>
          <p className="mt-3 text-lead text-on-inverse/75">
            Send the make, model and fault. We’ll call you back to arrange the next step.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={site.quoteHref} size="lg">
            Request a quote <ArrowRight aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href={site.phone.href} variant="light" size="lg">
            <Phone aria-hidden="true" /> Call the workshop
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
