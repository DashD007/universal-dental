import { Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { site } from "@/lib/data/site";

export default function UtilityBar() {
  return (
    <div className="bg-inverse text-on-inverse">
      <Container className="flex h-10 items-center justify-between gap-4 text-xs sm:text-sm">
        <p className="truncate">
          <span className="font-medium">Chair down?</span>
          <span className="opacity-80"> Multi-brand repair with genuine parts, for clinics &amp; hospitals.</span>
        </p>
        <a
          href={site.phone.href}
          className="inline-flex shrink-0 items-center gap-1.5 font-medium hover:text-highlight"
        >
          <Phone className="size-3.5" aria-hidden="true" />
          <span className="hidden sm:inline">{site.phone.display}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </Container>
    </div>
  );
}
