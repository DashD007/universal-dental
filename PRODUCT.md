# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Dentists and dental clinics.** They run one or more dental chairs, and a broken chair stops patient work. They come to get a chair repaired, refurbished or maintained, and sometimes to source equipment.
- **Medical agencies and institutions: hospitals, hospital dental wings and similar buyers.** They buy through procurement. That means quotes, purchase orders and invoices, often for several chairs or items at once. They come to find a dependable service and supply partner.

## Product Purpose

Universal Dental is a brand with two business lines:

1. **Dental chair service:** repair, refurbishment, installation and maintenance of dental chairs.
2. **Ortho-medical equipment sales:** supplying ortho-medical equipment to clinics and institutions.

The website is a landing and marketing site with four pages: Home, Services, Shop and About Us. It exists to turn visiting dentists and institutional buyers into service bookings and quote requests. Success means qualified enquiries: service requests that include the chair's make and model, and quote lists submitted from the Shop.

## Positioning

These three points are confirmed by the owner:

- **Service and supply in one partner.** The same company maintains the chairs and supplies the ortho-medical equipment, including installation.
- **Multi-brand chair expertise.** Technicians work on chairs from many manufacturers, not just one brand.
- **Genuine parts with a warranty.** Repairs use genuine or OEM-equivalent parts and carry a written warranty.

**Not confirmed:** fast on-site response, such as same-day or next-day breakdown visits. It must not be presented as a promise until the owner confirms it.

## Operating Context

- **Clinic buyers** usually arrive with an urgent problem (a chair that's down or misbehaving) or a planned refurbishment. They will call or send a short request.
- **Institutional buyers** compare vendors and need documentation: specifications, quotes, warranty terms and invoicing.
- **Shop purchasing is request-for-quote, not an online cart.** Buyers add items to a quote list and submit it. Pricing, lead times and bulk or institutional rates come back by email or phone. There is no online payment.

## Capabilities and Constraints

- **Shop:** request-for-quote with a quote list. There is no checkout, payment gateway or public fixed prices. Products may show "Price on request".
- **Quote and service forms** submit a request. Where those requests are delivered (email or CRM) is **undecided**.
- **Mobile:** every page must work at 375px wide.
- **Still undecided:**
  - Geography and service area (cities covered).
  - Phone, email, address and hours. The site currently shows placeholders in `lib/data/site.ts`.
  - Response-time commitments.
  - Specific chair brands serviced.
  - The product catalogue: categories, specifications and prices.

## Brand Commitments

- **Name:** Universal Dental.
- **Logo:** a dental high-speed handpiece inside a ring, with "Universal" as the wordmark and "DENTAL" set as a small caps label beneath it. The files are:
  - `components/brand/LogoMark.tsx` and `components/brand/Logo.tsx`
  - `public/brand/universal-dental-logo.svg`
  - favicon: `app/icon.svg`
- **Style direction set by the owner:** earthy, modern, premium.
- **Structural reference set by the owner:** https://liftline-template.modulify.website, a repair-services template.
  - Use its page structure and conversion patterns, customised for a medical and technician audience.
  - Do not reuse its text, photography or branding.

## Evidence on Hand

The owner has these, but none of them are in the repository yet:

- **Certifications:** manufacturer training, standards or dealer registrations. The specific items are still to be supplied.
- **Client testimonials:** real quotes from clients, with permission to publish. Attribute them by role and city, not by personal name.
- **Real photos:** the workshop, the technicians and completed chair work.

**Not available, so never fabricate:**

- **Numbers:** years in business, chairs serviced, clinics or hospitals served, response times, ratings.
- **Clinic and hospital names**, unless the owner supplies them with consent.

Until real material arrives, any figure or quote on the site must be clearly marked as a placeholder.

## Product Principles

1. **Proof over promises.** Every claim must trace to evidence the owner holds. Leave a gap rather than inventing a number, a client or a guarantee.
2. **Two buyers, two paths.** An urgent clinic repair and a considered institutional purchase must both be one step away from any page.
3. **One partner across the chair's life.** Present service, parts and equipment supply as one continuous relationship, not two unrelated catalogues.
4. **Brand-agnostic expertise.** Lead with technical competence across manufacturers rather than allegiance to any one of them.
