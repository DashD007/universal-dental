import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ClipboardList } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ButtonLink from "@/components/ui/ButtonLink";
import clinicEquipment from "@/public/images/placeholders/clinic-equipment.jpg";
import { sampleEquipmentCategories } from "@/lib/data/equipment";

export default function EquipmentSection() {
  return (
    <section aria-labelledby="equipment-title" className="py-section">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <figure className="relative overflow-hidden rounded-card-lg bg-surface lg:col-span-5 lg:self-start">
          <Image
            src={clinicEquipment}
            alt="A treatment room with a dental chair, delivery unit and instrument trolley"
            sizes="(min-width: 1024px) 40vw, 100vw"
            placeholder="blur"
            className="aspect-4/5 w-full object-cover object-[58%_50%]"
          />
        </figure>

        <div className="flex flex-col lg:col-span-7 lg:py-6">
          <SectionHeader
            id="equipment-title"
            title="And the equipment around the chair."
            subtitle="Ortho-medical equipment for clinics and hospitals, quoted to your list, then supplied and installed by the same team that services your chairs."
          />

          <ul className="mt-10 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
            {sampleEquipmentCategories.map((category) => (
              <li key={category} className="border-b border-line">
                <Link
                  href="/shop"
                  className="group flex items-center justify-between gap-4 py-4 text-lg font-medium transition-colors hover:text-primary"
                >
                  {category}
                  <ArrowUpRight
                    className="size-4 text-muted transition-transform duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted">Sample categories. The full catalogue arrives with the Shop.</p>

          <div className="mt-auto pt-10">
            <div className="flex items-start gap-4 rounded-card bg-surface p-5 sm:items-center">
              <ClipboardList className="mt-0.5 size-6 shrink-0 text-primary sm:mt-0" aria-hidden="true" />
              <p className="text-sm text-muted">
                <span className="font-medium text-foreground">Buying for a hospital?</span> Build a quote list
                in the Shop and get one formal quote for the whole order.
              </p>
            </div>
            <ButtonLink href="/shop" variant="secondary" className="mt-6">
              Browse the Shop <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
