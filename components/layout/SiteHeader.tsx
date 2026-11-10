import Link from "next/link";
import { Phone } from "lucide-react";
import Logo from "@/components/brand/Logo";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import MainNav from "@/components/layout/MainNav";
import MobileNav from "@/components/layout/MobileNav";
import { site } from "@/lib/data/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur-md">
      <Container className="flex h-header items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} — home`} className="shrink-0 rounded-lg">
          <Logo />
        </Link>

        <MainNav />

        <div className="flex items-center gap-2">
          <a
            href={site.phone.href}
            className="hidden items-center gap-2 px-3 text-sm font-medium text-muted transition-colors hover:text-foreground lg:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phone.display}
          </a>
          <span className="hidden md:block">
            <ButtonLink href={site.quoteHref} size="sm">
              Request a quote
            </ButtonLink>
          </span>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
