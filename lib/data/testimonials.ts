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
    quote: "Ritesh, Jesse and their team are the real deal. Absolutely professional and knowledgeable and always go above and beyond to ensure our dental practice operates smoothly. They are just really lovely, trustworthy human beings who are always happy to help and no problem is too small. The minute there\’s a concern, they\’re there. I highly recommend them for all things dental technical services, support & sales. Thanks team!",
    role: "Jonathan Hakim",
    place: "Principal Dentist, Grove Dental",
    placeholder: false,
  },
  {
    quote: "Great and professional service from the team. Have been using their services since the last 4 years with no issues. All are well trained in servicing my Sirona equipment. Although they do other brands as well but I can only say for my experience. Value for money and no hidden charges.",
    role: "Dr. Amrinder Thind",
    place: "Principal Dentist, Toothsaver",
    placeholder: false,
  },
  {
    quote: "Ritesh and Jesse have been superheroes and rescued us so many times from issues related to equipments to IT.",
    role: "Dr. Jaskaran Kaur",
    place: "Principal Dentist, Dentistry at the cross",
    placeholder: false,
  },
];
