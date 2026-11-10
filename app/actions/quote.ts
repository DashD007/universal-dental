"use server";

import { site } from "@/lib/data/site";

export type QuoteField = "buyer" | "need" | "chair" | "details" | "name" | "phone" | "email" | "city";

export type QuoteState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<QuoteField, string>>;
  values?: Partial<Record<QuoteField, string>>;
};

const BUYERS = ["clinic", "institution"];
const NEEDS = ["repair", "refurbishment", "maintenance", "equipment"];

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  const get = (key: QuoteField) => String(formData.get(key) ?? "").trim();
  const values: Partial<Record<QuoteField, string>> = {
    buyer: get("buyer"),
    need: get("need"),
    chair: get("chair"),
    details: get("details"),
    name: get("name"),
    phone: get("phone"),
    email: get("email"),
    city: get("city"),
  };

  const errors: Partial<Record<QuoteField, string>> = {};
  if (!BUYERS.includes(values.buyer ?? "")) errors.buyer = "Choose who the request is for.";
  if (!NEEDS.includes(values.need ?? "")) errors.need = "Choose what you need.";
  if ((values.details ?? "").length < 10) {
    errors.details = "Describe the fault or what you need in a sentence or two.";
  }
  if (!values.name) errors.name = "Add your name so we know who to ask for.";
  if ((values.phone ?? "").replace(/\D/g, "").length < 8) {
    errors.phone = "Add a phone number we can call back, including the area code.";
  }
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Check the email address, or leave it blank.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "A few details need fixing before we can send this.", errors, values };
  }

  // TODO: deliver the request. Destination (email or CRM) is undecided in PRODUCT.md.
  // Until then requests are NOT sent anywhere; only a non-identifying summary is logged.
  console.info("[quote request]", { buyer: values.buyer, need: values.need, hasChair: Boolean(values.chair) });

  return {
    status: "success",
    // PLACEHOLDER copy until delivery is wired: tells the visitor plainly the form is not connected yet.
    message: `Thanks, ${values.name}. Online requests aren't connected yet, so please call us on ${site.phone.display} and we'll take the details by phone.`,
  };
}
