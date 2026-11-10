// Brand-wide details. Values marked PLACEHOLDER must be replaced before launch.

export const site = {
  name: "Universal Dental",
  tagline: "Dental chair repair & ortho-medical equipment",
  description:
    "Certified dental chair repair, refurbishment and maintenance, plus ortho-medical equipment supply for clinics and hospitals.",
  phone: {
    display: process.env.phone, // PLACEHOLDER
    href: `tel:${process.env.phone}`, // PLACEHOLDER
  },
  email: process.env.email, // PLACEHOLDER
  address: process.env.address, // PLACEHOLDER
  hours: "Mon–Fri · 7:00–17:30", // PLACEHOLDER
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
