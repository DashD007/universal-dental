import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ComingSoon from "@/components/sections/ComingSoon";
import CtaBand from "@/components/sections/CtaBand";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "The technicians behind Universal Dental: our story, certifications and the standards we work to.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Technicians first. Built around the chair."
        subtitle="Universal Dental services dental chairs across manufacturers and supplies the ortho-medical equipment around them, for clinics and hospitals."
      >
        <ButtonLink href={site.quoteHref} size="lg">
          Work with us <ArrowRight aria-hidden="true" />
        </ButtonLink>
      </PageHero>
      <ComingSoon
        sections={[
          "Our story",
          "Numbers that matter",
          "Timeline",
          "Principles we never skip",
          "Certifications",
          "The team",
          "What clients say",
          "Find us",
        ]}
      />
      <CtaBand />
    </>
  );
}
