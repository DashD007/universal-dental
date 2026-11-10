import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import PlaceholderTag from "@/components/home/PlaceholderTag";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section aria-labelledby="testimonials-title" className="bg-inverse py-section text-on-inverse">
      <Container>
        <h2 id="testimonials-title" className="max-w-2xl text-display-lg font-medium">
          In our clients’ words.
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <figure className="lg:col-span-7">
            <Quote className="size-9 text-highlight" aria-hidden="true" />
            <blockquote className="mt-6 font-display text-display-md font-medium">
              “{featured.quote}”
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <span className="font-medium">{featured.role}</span>
              <span className="text-on-inverse/60">{featured.place}</span>
              {featured.placeholder ? <PlaceholderTag>Placeholder quote</PlaceholderTag> : null}
            </figcaption>
          </figure>

          <div className="space-y-10 lg:col-span-5 lg:border-l lg:border-on-inverse/15 lg:pl-12">
            {rest.map((t) => (
              <figure key={t.role} className="border-t border-on-inverse/15 pt-8 first:border-t-0 first:pt-0">
                <blockquote className="text-lg leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                  <span className="font-medium">{t.role}</span>
                  <span className="text-on-inverse/60">{t.place}</span>
                  {t.placeholder ? <PlaceholderTag>Placeholder quote</PlaceholderTag> : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
