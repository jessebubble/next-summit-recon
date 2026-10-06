import type { Metadata } from "next";
import { CtaBand, Check, Eyebrow } from "../_components/ui";
import { roofTypes, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roofing Services",
  description: `Roof repair, storm and hail damage, emergency leak response, inspections, insurance claim help, and replacement across ${site.region}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-grey-tint">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything your roof needs, handled by one small crew
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-grey">
            We work on {roofTypes.map((t) => t.toLowerCase()).join(", ")} roofs for homes and small commercial
            buildings.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl divide-y divide-black/10 px-4 sm:px-6">
          {services.map((s) => (
            <article key={s.slug} id={s.slug} className="grid scroll-mt-24 gap-6 py-10 first:pt-0 md:grid-cols-[1fr_1fr]">
              <div>
                <span className="block h-1 w-10 bg-brand-green" />
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">{s.title}</h2>
                <p className="mt-3 leading-7 text-brand-grey">{s.summary}</p>
              </div>
              <ul className="grid content-start gap-3 sm:grid-cols-2">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-foreground">
                    <Check />
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
