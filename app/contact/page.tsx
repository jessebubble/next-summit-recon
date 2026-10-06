import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { Check, Eyebrow } from "../_components/ui";
import { contacts, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Free Roof Inspection",
  description: `Request a free roof inspection from ${site.name}. Serving ${site.region}.`,
};

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Book your free roof inspection</h1>
          <p className="mt-4 text-lg text-brand-grey">
            Tell us a little about your roof and we&apos;ll reach out to schedule a time that works for you.
          </p>
          <ul className="mt-8 space-y-3 text-brand-grey">
            {["No-cost, no-obligation inspection", "Photo report of everything we find", "Honest repair-or-replace advice"].map(
              (i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check />
                  {i}
                </li>
              ),
            )}
          </ul>
          <div className="mt-10 rounded-xl bg-brand-grey-tint p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-grey-light">Prefer to call?</p>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {contacts.map((c) => (
                <div key={c.email}>
                  <p className="font-semibold">{c.name}</p>
                  <a href={c.phoneHref} className="mt-1 block text-xl font-semibold text-brand-green">
                    {c.phone}
                  </a>
                  <a href={`mailto:${c.email}`} className="mt-1 block text-sm text-brand-grey hover:text-brand-green">
                    {c.email}
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-brand-grey">{site.hours}</p>
          </div>
        </div>
        <div className="rounded-2xl border border-black/5 p-6 shadow-xl shadow-black/5 sm:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
