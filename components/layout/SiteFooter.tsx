import Link from "next/link";
import { ArrowUp, Clock, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/brand/Logo";
import Container from "@/components/ui/Container";
import FooterHeading from "@/components/layout/FooterHeading";
import { site } from "@/lib/data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-on-inverse/10 bg-inverse text-on-inverse">
      {/* Link columns */}
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" aria-label={`${site.name} — home`} className="inline-block rounded-lg">
            <Logo />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-75">{site.description}</p>
        </div>

        <nav aria-label="Footer">
          <FooterHeading>Explore</FooterHeading>
          <ul className="mt-4 space-y-3 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="opacity-80 transition-opacity hover:opacity-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <FooterHeading>Services</FooterHeading>
          <ul className="mt-4 space-y-3 text-sm">
            {site.footerServices.map((label) => (
              <li key={label}>
                <Link href="/services" className="opacity-80 transition-opacity hover:opacity-100">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Contact</FooterHeading>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={site.phone.href}
                className="inline-flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {site.phone.display}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 break-all opacity-80 transition-opacity hover:opacity-100"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2 opacity-80">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <address className="not-italic">{site.address}</address>
            </li>
            <li className="flex items-center gap-2 opacity-80">
              <Clock className="size-4 shrink-0" aria-hidden="true" />
              {site.hours}
            </li>
          </ul>
        </div>
      </Container>

      {/* Legal bar */}
      <div className="border-t border-on-inverse/10">
        <Container className="flex flex-col gap-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="opacity-60">
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 self-start opacity-60 transition-opacity hover:opacity-100 sm:self-auto"
          >
            Back to top <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </Container>
      </div>
    </footer>
  );
}
