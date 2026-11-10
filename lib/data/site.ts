// Brand-wide details. Values marked PLACEHOLDER must be replaced before launch.

export const site = {
  name: "Universal Dental",
  tagline: "Dental chair repair & ortho-medical equipment",
  description:
    "Certified dental chair repair, refurbishment and maintenance, plus ortho-medical equipment supply for clinics and hospitals.",
  phone: {
    display: "+91 00000 00000", // PLACEHOLDER
    href: "tel:+910000000000", // PLACEHOLDER
  },
  email: "service@universal-dental.example", // PLACEHOLDER
  address: "Workshop address, City, State PIN", // PLACEHOLDER
  hours: "Mon–Sat · 9:00–19:00", // PLACEHOLDER
  copyrightYear: 2026,
  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About Us" },
  ],
  quoteHref: "/#quote",
  footerServices: [
    "Chair repair",
    "Refurbishment",
    "Installation",
    "Preventive maintenance",
    "Spare parts",
    "Ortho-medical equipment",
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
