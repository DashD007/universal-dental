import { Clock, Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import QuoteForm from "@/components/home/QuoteForm";
import { site } from "@/lib/data/site";

export default function QuoteSection() {
  return (
    <section id="quote" aria-labelledby="quote-title" className="scroll-mt-header bg-surface py-section">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 id="quote-title" className="text-display-xl font-medium">
            Tell us about the chair.
          </h2>
          <p className="mt-5 max-w-copy text-lead text-muted">
            Send the make, model and fault, or the equipment you need. We’ll call you back to arrange the next
            step.
          </p>

          <ul className="mt-10 space-y-4 border-t border-line pt-8 text-sm">
            <li>
              <a href={site.phone.href} className="inline-flex items-center gap-3 font-medium hover:text-primary">
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {site.phone.display}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-3 font-medium break-all hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              {site.hours}
            </li>
          </ul>
        </div>

        <Card variant="raised" padding="lg" className="lg:col-span-7">
          <QuoteForm />
        </Card>
      </Container>
    </section>
  );
}
