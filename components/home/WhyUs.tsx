import Container from "@/components/ui/Container";
import { differentiators } from "@/lib/data/equipment";

export default function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="py-section">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <h2 id="why-title" className="text-display-xl font-medium lg:col-span-5">
          What you can hold us to.
        </h2>
        <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7">
          {differentiators.map((item) => (
            <div key={item.title} className="border-t border-foreground/80 pt-5">
              <dt className="font-display text-display-sm font-medium">{item.title}</dt>
              <dd className="mt-3 text-muted">{item.body}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
