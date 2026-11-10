import Image from "next/image";
import { ArrowRight, Layers, PackageCheck, Phone, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import heroImage from "@/public/images/placeholders/hero-clinic.jpg";
import { site } from "@/lib/data/site";

const proofPoints = [
  { icon: Layers, title: "Multi-brand chair expertise", detail: "Across manufacturers" },
  { icon: ShieldCheck, title: "Genuine parts, written warranty", detail: "On every repair" },
  { icon: PackageCheck, title: "Service and supply in one", detail: "Including installation" },
];

export default function HomeHero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-inverse text-on-inverse">
      <Image
        src={heroImage}
        alt="A dental chair in a treatment room, ready for service"
        fill
        preload
        sizes="100vw"
        placeholder="blur"
        className="-z-20 object-cover object-[62%_60%] motion-safe:animate-settle"
      />
      {/* Legibility scrim: heaviest where the copy sits (bottom on mobile, bottom-left on desktop) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-moss-950/95 via-moss-950/65 to-moss-950/20 lg:bg-linear-to-tr lg:from-moss-950/95 lg:via-moss-950/60 lg:to-moss-950/0"
      />

      <Container className="flex min-h-[calc(100svh-11rem)] md:min-h-[calc(100svh-7rem)] flex-col justify-end pt-16 pb-6 sm:pt-32 sm:pb-10">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-display-2xl font-medium">
            Dental chairs, brought back to clinical precision.
          </h1>
          <p className="mt-4 max-w-copy text-base text-on-inverse/85 sm:mt-6 sm:text-lead">
            Multi-brand repair, refurbishment and maintenance with genuine parts and a written warranty. And
            the ortho-medical equipment your clinic or hospital runs on, supplied and installed.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <ButtonLink href={site.quoteHref} size="lg">
              Book a service <ArrowRight aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={site.phone.href} variant="light" size="lg">
              <Phone aria-hidden="true" /> Call {site.phone.display}
            </ButtonLink>
          </div>
        </div>

        <ul className="mt-8 grid gap-4 border-t border-on-inverse/20 pt-5 sm:mt-14 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-on-inverse/20 lg:mt-20">
          {proofPoints.map(({ icon: Icon, title, detail }) => (
            <li key={title} className="flex items-start gap-3 sm:px-6 sm:first:pl-0">
              <Icon className="mt-0.5 size-5 shrink-0 text-highlight" aria-hidden="true" />
              <p className="text-sm leading-snug">
                <span className="block font-medium">{title}</span>
                <span className="hidden text-on-inverse/70 sm:inline">{detail}</span>
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
