"use client";

import { useActionState } from "react";
import { requestInspection, type ContactState } from "./actions";
import { services } from "@/lib/site";

const initialState: ContactState = { ok: false, message: "" };

const input =
  "mt-1.5 block w-full rounded-md border border-brand-grey/25 bg-white px-3.5 py-2.5 text-foreground outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(requestInspection, initialState);

  if (state.ok) {
    return (
      <div className="rounded-xl border border-brand-green/20 bg-brand-green-tint p-8" role="status">
        <h2 className="text-xl font-semibold text-brand-green">Request received</h2>
        <p className="mt-2 text-brand-grey">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-5 sm:grid-cols-2" noValidate>
      <Field label="Full name" name="name" error={state.errors?.name} required autoComplete="name" />
      <Field label="Phone" name="phone" type="tel" error={state.errors?.phone} required autoComplete="tel" />
      <Field label="Email" name="email" type="email" autoComplete="email" />
      <div>
        <label htmlFor="service" className="text-sm font-medium">
          What do you need?
        </label>
        <select id="service" name="service" className={input} defaultValue="Free Roof Inspections">
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <Field
          label="Property address"
          name="address"
          error={state.errors?.address}
          required
          autoComplete="street-address"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium">
          Tell us what&apos;s going on <span className="text-brand-grey-light">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} className={input} />
      </div>
      {state.message && (
        <p className="text-sm text-red-700 sm:col-span-2" role="alert">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-brand-green px-6 py-3.5 font-semibold text-white transition-colors hover:bg-brand-green-hover disabled:opacity-60 sm:col-span-2"
      >
        {pending ? "Sending…" : "Request My Free Inspection"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
        {required && <span className="text-brand-green"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${input} ${error ? "border-red-600" : ""}`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
