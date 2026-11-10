// PLACEHOLDER photography: openly licensed images used until Universal Dental's own photos arrive.
// When you replace a file in public/images/placeholders/, remove its entry here.

export type ImageCredit = {
  file: string;
  subject: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
};

export const imageCredits: ImageCredit[] = [
  {
    file: "hero-clinic.jpg",
    subject: "Dental chair in a clinic, North Carolina",
    author: "Harrison Keely",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:A_dental_chair_in_a_dentist_clinic_in_North_Carolina,_United_States.jpg",
  },
  {
    file: "refurbished-chair.jpg",
    subject: "Knee-break dental chair",
    author: "Thedentalguy",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Kneebreak_dental_chair.jpg",
  },
  {
    file: "delivery-unit-handpieces.jpg",
    subject: "Dental instruments on a chair delivery unit",
    author: "Nilo Velez",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://wordpress.org/photos/",
  },
  {
    file: "technician-repair.jpg",
    subject: "Technician repairing a machine with a screwdriver",
    author: "Nenad Stojkovic",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://www.flickr.com/photos/nenadstojkovicart/54562267774",
  },
  {
    file: "clinic-equipment.jpg",
    subject: "Dentist office and equipment",
    author: "Nenad Stojkovic",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Dentist_office_and_equipment_(49899000186).jpg",
  },
];
