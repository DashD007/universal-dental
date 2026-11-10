// PLACEHOLDER testimonials. Replace with real client quotes (with permission), attributed by role and city only.
// Keep `placeholder: true` until a quote is real so the page keeps labelling it.

export type Testimonial = {
  quote: string;
  role: string;
  place: string;
  placeholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Your client’s words go here: what was wrong with the chair, what Universal Dental did, and what it meant for their list that week.",
    role: "Orthodontist",
    place: "City",
    placeholder: true,
  },
  {
    quote: "A second quote, ideally about a refurbishment or a mixed-brand fleet.",
    role: "Practice owner",
    place: "City",
    placeholder: true,
  },
  {
    quote: "A third quote from an institutional buyer, about service and supply together.",
    role: "Procurement lead, hospital dental wing",
    place: "City",
    placeholder: true,
  },
];
