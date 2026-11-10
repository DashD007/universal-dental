import type { Metadata } from "next";
import { ArrowRight, Phone } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ComingSoon from "@/components/sections/ComingSoon";
import CtaBand from "@/components/sections/CtaBand";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Dental chair repair, refurbishment, installation and preventive maintenance for clinics and hospitals.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Every part of the chair, serviced by specialists."
        subtitle="Hydraulics, electronics, delivery units, suction and upholstery, across manufacturers: repaired with genuine parts and covered by a written warranty."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={site.quoteHref} size="lg">
            Book a service <ArrowRight aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href={site.phone.href} variant="secondary" size="lg">
            <Phone aria-hidden="true" /> {site.phone.display}
          </ButtonLink>
        </div>
      </PageHero>
      <ComingSoon
        sections={[
          "Service list",
          "How a service visit works",
          "Annual maintenance plans",
          "Cities we cover",
          "FAQ",
          "Closing call to action",
        ]}
      />
      <CtaBand />
    </>
  );
}
