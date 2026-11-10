import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import { faqs } from "@/lib/data/faqs";
import { site } from "@/lib/data/site";

export default function FaqSection() {
  return (
    <section aria-labelledby="faq-title" className="py-section">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 id="faq-title" className="text-display-lg font-medium">
            Questions buyers ask first.
          </h2>
          <p className="mt-4 text-muted">
            Something else?{" "}
            <a href={site.phone.href} className="font-medium text-foreground underline hover:text-primary">
              Call {site.phone.display}
            </a>{" "}
            or{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-foreground underline hover:text-primary">
              email us
            </a>
            .
          </p>
        </div>

        <div className="border-t border-line lg:col-span-8">
          {faqs.map((faq, i) => (
            <details key={faq.question} name="faq" open={i === 0} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-display-sm font-medium transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus
                  className="size-5 shrink-0 text-muted transition-transform duration-300 ease-soft group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="-mt-1 max-w-copy pb-7 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
