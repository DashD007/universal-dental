import Link from "next/link";
import { ClipboardList, Phone, Wrench } from "lucide-react";
import { site } from "@/lib/data/site";

/** Fixed bottom actions on small screens. Body has matching bottom padding in layout.tsx. */
export default function MobileActionBar() {
  const item = "flex flex-1 flex-col items-center justify-center gap-1 text-[0.7rem] font-medium";

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 flex h-16 border-t border-line bg-background/95 backdrop-blur-md md:hidden"
    >
      <a href={site.phone.href} className={item}>
        <Phone className="size-5" aria-hidden="true" />
        Call
      </a>
      <Link href={site.quoteHref} className={`${item} bg-primary text-on-primary`}>
        <Wrench className="size-5" aria-hidden="true" />
        Report a fault
      </Link>
      <Link href="/shop" className={item}>
        <ClipboardList className="size-5" aria-hidden="true" />
        Quote list
      </Link>
    </nav>
  );
}
