import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import handpieces from "@/public/images/placeholders/delivery-unit-handpieces.jpg";
import { services } from "@/lib/data/services";

export default function ServicesShowcase() {
  return (
    <section aria-labelledby="services-title" className="py-section">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-[calc(var(--spacing-header)+2rem)] lg:col-span-5 lg:self-start">
          <SectionHeader
            id="services-title"
            title="Every system in the chair, serviced by one team."
            subtitle="From the hydraulics under the seat to the instruments on the delivery unit, whichever manufacturer built it."
          />
          <figure className="mt-10 overflow-hidden rounded-media bg-surface">
            <Image
              src={handpieces}
              alt="Instrument handpieces hanging from a dental chair's delivery unit"
              sizes="(min-width: 1024px) 38vw, 100vw"
              placeholder="blur"
              className="aspect-4/3 w-full object-cover lg:aspect-5/4"
            />
          </figure>
        </div>

        <ul className="divide-y divide-line border-y border-line lg:col-span-7">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href="/services"
                className="group grid gap-2 py-7 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-10 sm:py-8"
              >
                <span>
                  <span className="block font-display text-display-md font-medium transition-colors group-hover:text-primary">
                    {service.title}
                  </span>
                  <span className="mt-2 block max-w-copy text-muted">{service.summary}</span>
                </span>
                <ArrowUpRight
                  className="hidden size-6 text-muted transition-transform duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:mt-2 sm:block"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
