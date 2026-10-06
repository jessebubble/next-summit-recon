import type { Metadata } from "next";
import { CtaBand, Check, Eyebrow } from "../_components/ui";
import { serviceGroups, services, site, spaces } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reconstruction, Restoration & Remodeling Services",
  description: `Water and fire damage reconstruction, insurance restoration, and kitchen, bathroom, and whole-home remodeling across ${site.region}.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-grey-tint">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            From damage to done, and everything in between
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-grey">
            We rebuild and remodel {spaces.map((t) => t.toLowerCase()).join(", ").replace(/, ([^,]*)$/, ", and $1")}{" "}
            across {site.region}.
          </p>
          <nav className="mt-8 flex flex-wrap gap-3" aria-label="Service groups">
            {serviceGroups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border border-brand-grey/20 bg-white px-4 py-2 text-sm font-medium text-brand-grey transition-colors hover:border-brand-green hover:text-brand-green"
              >
                {g.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {serviceGroups.map((g, i) => (
        <section key={g.id} id={g.id} className={`scroll-mt-20 py-16 sm:py-20 ${i % 2 ? "bg-brand-grey-tint" : "bg-white"}`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{g.title}</h2>
              <p className="mt-3 leading-7 text-brand-grey">{g.intro}</p>
            </div>
            <div className="mt-10 divide-y divide-black/10">
              {services
                .filter((s) => s.group === g.id)
                .map((s) => (
                  <article key={s.slug} id={s.slug} className="grid scroll-mt-24 gap-6 py-10 first:pt-0 md:grid-cols-2">
                    <div>
                      <span className="block h-1 w-10 bg-brand-green" />
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight">{s.title}</h3>
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
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
