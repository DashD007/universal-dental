import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ButtonLink from "@/components/ui/ButtonLink";
import { cn } from "@/lib/cn";
import { carePlans } from "@/lib/data/plans";
import { site } from "@/lib/data/site";

export default function CarePlans() {
  return (
    <section aria-labelledby="plans-title" className="bg-surface py-section">
      <Container>
        <SectionHeader
          id="plans-title"
          title="Care plans that keep every chair on schedule."
          subtitle="Preventive maintenance quoted for your chairs. No published prices, because no two fleets are the same."
        />

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {carePlans.map((plan) => (
            <li
              key={plan.name}
              className={cn(
                "flex flex-col rounded-card p-7 sm:p-8",
                plan.featured ? "bg-inverse text-on-inverse shadow-lift" : "border border-line bg-background",
              )}
            >
              <h3 className="text-display-md font-medium">{plan.name}</h3>
              <p className={cn("mt-2 text-sm", plan.featured ? "text-on-inverse/75" : "text-muted")}>
                {plan.forWho}
              </p>
              <ul
                className={cn(
                  "mt-7 space-y-3 border-t pt-7 text-sm",
                  plan.featured ? "border-on-inverse/15" : "border-line",
                )}
              >
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className={cn("mt-0.5 size-4 shrink-0", plan.featured ? "text-highlight" : "text-accent")}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <ButtonLink
                  href={site.quoteHref}
                  variant={plan.featured ? "primary" : "secondary"}
                  className="w-full"
                >
                  Ask for pricing <ArrowRight aria-hidden="true" />
                </ButtonLink>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-muted">Plan contents are indicative. Every plan is tailored to the site.</p>
      </Container>
    </section>
  );
}
