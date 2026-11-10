import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ComingSoon from "@/components/sections/ComingSoon";
import CtaBand from "@/components/sections/CtaBand";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Ortho-medical and dental equipment for clinics and hospitals. Build a quote list and get institutional pricing.",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipment"
        title="Ortho-medical equipment, specified for clinical use."
        subtitle="Add items to your quote list and we’ll reply with pricing, lead times and installation options, including bulk rates for hospitals."
      >
        <ButtonLink href={site.quoteHref} size="lg">
          Request a quote <ArrowRight aria-hidden="true" />
        </ButtonLink>
      </PageHero>
      <ComingSoon
        sections={[
          "Shop by category",
          "Filters and product grid",
          "Quote list",
          "Bulk and institutional orders",
          "Product detail pages",
          "Closing call to action",
        ]}
      />
      <CtaBand />
    </>
  );
}
