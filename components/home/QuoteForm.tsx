"use client";

import { useActionState } from "react";
import { ArrowRight, LoaderCircle, PhoneCall } from "lucide-react";
import Button from "@/components/ui/Button";
import ChoiceGroup from "@/components/home/ChoiceGroup";
import TextField from "@/components/home/TextField";
import { submitQuote, type QuoteState } from "@/app/actions/quote";

const initialState: QuoteState = { status: "idle" };

export default function QuoteForm() {
  const [state, formAction, pending] = useActionState(submitQuote, initialState);
  const v = state.values ?? {};
  const e = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 py-6">
        <PhoneCall className="size-10 text-primary" aria-hidden="true" />
        <p className="font-display text-display-sm font-medium">Almost there.</p>
        <p className="max-w-copy text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-7">
      {state.status === "error" && state.message ? (
        <p role="alert" className="rounded-card bg-danger/10 px-4 py-3 text-sm text-danger">
          {state.message}
        </p>
      ) : null}

      <ChoiceGroup
        name="buyer"
        legend="Who is this for?"
        defaultValue={v.buyer ?? "clinic"}
        error={e.buyer}
        options={[
          { value: "clinic", label: "Clinic or practice" },
          { value: "institution", label: "Hospital or institution" },
        ]}
      />

      <ChoiceGroup
        name="need"
        legend="What do you need?"
        defaultValue={v.need ?? "repair"}
        error={e.need}
        options={[
          { value: "repair", label: "Repair" },
          { value: "refurbishment", label: "Refurbishment" },
          { value: "maintenance", label: "Care plan" },
          { value: "equipment", label: "Equipment quote" },
        ]}
      />

      <TextField
        name="chair"
        label="Chair make and model"
        optional
        placeholder="Make, model and year if you know it"
        defaultValue={v.chair}
        error={e.chair}
      />

      <TextField
        name="details"
        label="What’s happening?"
        multiline
        placeholder="e.g. the chair won’t recline and there’s oil under the base. Two chairs affected."
        defaultValue={v.details}
        error={e.details}
      />

      <div className="grid gap-7 sm:grid-cols-2">
        <TextField name="name" label="Your name" autoComplete="name" defaultValue={v.name} error={e.name} />
        <TextField
          name="phone"
          label="Phone"
          type="tel"
          autoComplete="tel"
          defaultValue={v.phone}
          error={e.phone}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          optional
          autoComplete="email"
          defaultValue={v.email}
          error={e.email}
        />
        <TextField
          name="city"
          label="City"
          optional
          autoComplete="address-level2"
          defaultValue={v.city}
          error={e.city}
        />
      </div>

      <div className="flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">We use these details only to reply to this request.</p>
        <Button type="submit" size="lg" disabled={pending} aria-disabled={pending}>
          {pending ? (
            <>
              <LoaderCircle className="motion-safe:animate-spin" aria-hidden="true" /> Sending
            </>
          ) : (
            <>
              Send request <ArrowRight aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
