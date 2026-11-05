import type { Metadata } from "next";
import { Check, Eyebrow } from "../_components/ui";
import { contacts, site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Get a Free Estimate",
  description: `Call or email ${site.name} for a free on-site estimate on contracting, reconstruction, or remodeling. Serving ${site.cities}.`,
  path: "/contact",
});

// Primary contact (Matthew) first.
const orderedContacts = [...contacts].sort((a, b) => Number(b.email === site.email) - Number(a.email === site.email));

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Get your free on-site estimate</h1>
          <p className="mt-4 text-lg text-brand-grey">
            Call or email us about your project, whether it&apos;s damage repair or a remodel, and we&apos;ll schedule a
            walkthrough.
          </p>
          <ul className="mt-8 space-y-3 text-brand-grey">
            {["No-cost, no-obligation walkthrough", "Clear written scope and estimate", "Insurance claim coordination"].map(
              (i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check />
                  {i}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="rounded-2xl border border-black/5 bg-brand-grey-tint p-6 shadow-xl shadow-black/5 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-grey-light">Prefer to call?</p>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            {orderedContacts.map((c) => (
              <div key={c.email}>
                <p className="font-semibold">{c.name}</p>
                <a href={c.phoneHref} className="mt-1 block text-2xl font-semibold text-brand-green">
                  {c.phone}
                </a>
                <a href={`mailto:${c.email}`} className="mt-1 block text-sm text-brand-grey hover:text-brand-green">
                  {c.email}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-brand-grey">{site.hours}</p>
          <p className="mt-1 text-sm text-brand-grey">Serving {site.region}</p>
        </div>
      </div>
    </section>
  );
}
