// DRAFT maintenance plan tiers. Plan contents are indicative and must be confirmed by Universal Dental.
// No prices are published: every tier is quoted.

export type CarePlan = {
  name: string;
  forWho: string;
  includes: string[];
  featured?: boolean;
};

export const carePlans: CarePlan[] = [
  {
    name: "Clinic",
    forWho: "For a single clinic with one or two chairs.",
    includes: [
      "Scheduled preventive maintenance",
      "Service report after every visit",
      "Genuine or OEM-equivalent parts",
    ],
  },
  {
    name: "Practice",
    forWho: "For multi-chair practices and small groups.",
    includes: [
      "Everything in Clinic",
      "One schedule across all chairs",
      "Single consolidated invoice",
    ],
    featured: true,
  },
  {
    name: "Institution",
    forWho: "For hospitals, dental colleges and institutions.",
    includes: [
      "Everything in Practice",
      "Quotes that fit purchase orders and tenders",
      "Equipment supply under the same agreement",
    ],
  },
];
