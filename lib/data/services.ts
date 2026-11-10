// Service content. Copy is limited to facts confirmed in PRODUCT.md:
// multi-brand chair work, genuine/OEM-equivalent parts, written warranty, service + supply incl. installation.

export type Service = {
  slug: string;
  title: string;
  summary: string;
};

export const services: Service[] = [
  {
    slug: "repair",
    title: "Chair repair",
    summary:
      "Hydraulics, electronics, foot controls and delivery units diagnosed and repaired, whichever manufacturer built the chair.",
  },
  {
    slug: "refurbishment",
    title: "Refurbishment",
    summary:
      "Upholstery, finishes and worn mechanisms restored, so a structurally sound chair goes back into service.",
  },
  {
    slug: "maintenance",
    title: "Preventive maintenance",
    summary: "Scheduled checks on every system of the chair, so wear is caught on our visit, not mid-procedure.",
  },
  {
    slug: "installation",
    title: "Installation",
    summary: "Chairs and equipment installed and set up by the same technicians who will service them.",
  },
  {
    slug: "parts",
    title: "Genuine spare parts",
    summary: "Original or OEM-equivalent parts, matched to the make and model you run.",
  },
  {
    slug: "equipment",
    title: "Equipment supply",
    summary: "Ortho-medical equipment for clinics and hospitals, quoted to your list and installed.",
  },
];

/** Systems of a dental chair, shown in the Home ticker. */
export const chairSystems = [
  "Hydraulic systems",
  "Upholstery",
  "Delivery units",
  "Suction",
  "Operating lights",
  "Foot controls",
  "Spittoons & water lines",
  "Chair electronics",
];

/** What a service visit involves, in order. */
export const serviceSteps = [
  {
    title: "Tell us the chair",
    body: "Send the make, model and what it is or isn't doing. A photo or short video helps.",
  },
  {
    title: "A technician inspects it",
    body: "We find the cause, not just the symptom, across every system of the chair.",
  },
  {
    title: "Repaired with genuine parts",
    body: "Original or OEM-equivalent parts, matched to your make and model.",
  },
  {
    title: "Covered in writing",
    body: "Every repair comes with a written warranty.",
  },
];

/** What a refurbishment covers (shown beside the before/after slider). */
export const refurbishmentScope = [
  "Upholstery stripped and re-covered",
  "Hydraulic and mechanical movement restored",
  "Delivery unit and instrument lines serviced",
  "Casings cleaned and refinished",
];
