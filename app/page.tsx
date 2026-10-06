import Image from "next/image";
import Link from "next/link";
import { Arrow, CtaBand, Check, Eyebrow } from "./_components/ui";
import { JsonLd } from "./_components/json-ld";
import { faqs, processSteps, reasons, roofTypes, services, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhySmall />
      <Process />
      <RoofTypes />
      <Faq />
      <CtaBand />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-[1.15fr_1fr] md:pb-24 md:pt-24">
        <div>
          <Eyebrow>Roof repair · {site.region.split(" & ")[0]}</Eyebrow>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Small crew.
            <br />
            <span className="text-brand-green">Serious roof repair.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-brand-grey">
            Leaks, storm damage, and worn-out spots fixed right the first time — by an owner-led team that inspects,
            quotes, and does the work itself.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-1.5 rounded-md bg-brand-green px-6 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-brand-green-hover"
            >
              Book My Free Roof Inspection
              <Arrow />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-1.5 rounded-md border border-brand-grey/30 px-6 py-3.5 font-semibold text-foreground transition-colors duration-300 hover:border-brand-green hover:text-brand-green"
            >
              Explore Our Services
              <Arrow />
            </Link>
          </div>
          <ul className="mt-8 grid gap-2 text-sm text-brand-grey sm:grid-cols-2">
            {["Free inspection & photo report", "Licensed & fully insured", "Insurance claim help", "Written workmanship warranty"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="absolute -inset-4 rounded-3xl bg-brand-green-tint" aria-hidden />
          <div className="relative rounded-2xl border border-black/5 bg-white p-6 shadow-xl shadow-black/5 sm:p-10">
            <Image
              src="/summit-recon-logo.png"
              alt={`${site.name} logo`}
              width={1046}
              height={642}
              preload
              className="mx-auto h-auto w-full max-w-50 sm:max-w-xs"
            />
            <div className="mt-6 sm:mt-8 rounded-lg bg-brand-grey-tint p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey-light">Emergency leak?</p>
              <p className="mt-1 text-sm text-brand-grey">
                Call us directly — you&apos;ll reach the crew, not a call center.
              </p>
              <a href={site.phoneHref} className="mt-2 block text-xl font-semibold text-brand-green">
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { k: "Owner-led", v: "On every job" },
    { k: "Free", v: "Roof inspections" },
    { k: "24/7", v: "Emergency leak calls" },
    { k: "Local", v: site.region.split(" & ")[0] },
  ];
  return (
    <section className="bg-brand-grey text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-4 py-8 sm:px-6 md:grid-cols-4">
        {items.map((i) => (
          <div key={i.k} className="text-center md:border-l md:border-white/15 md:first:border-l-0">
            <p className="text-2xl font-semibold tracking-tight">{i.k}</p>
            <p className="mt-1 text-sm text-white/70">{i.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Roofing services built around repair
            </h2>
            <p className="mt-4 text-brand-grey">
              We focus on the work most roofs actually need — finding the problem and fixing it properly.
            </p>
          </div>
          <Link href="/services" className="group inline-flex items-center gap-1 font-semibold text-brand-green">
            All services
            <Arrow />
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-black/5 bg-black/5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group flex flex-col bg-white p-6 transition-colors hover:bg-brand-green-tint"
            >
              <div className="flex items-center justify-between">
                <span className="h-1 w-8 bg-brand-green transition-all group-hover:w-12" />
                <Arrow className="size-5 text-brand-grey-light group-hover:text-brand-green" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-grey">{s.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySmall() {
  return (
    <section className="bg-brand-grey-tint py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Eyebrow>Why Summit Recon</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            The big-company standard, without the big-company runaround
          </h2>
          <p className="mt-4 text-brand-grey">
            Large roofing outfits run on volume. We run on referrals. Keeping our team small means the people you meet
            are the people who climb your roof — and they care how it turns out.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-xl bg-white p-6 shadow-sm shadow-black/5">
              <Check className="size-6" />
              <h3 className="mt-4 font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-grey">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Eyebrow>Our process</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">From recon to repaired in four steps</h2>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {processSteps.map((p) => (
            <li key={p.step} className="relative border-t-2 border-brand-grey/15 pt-6">
              <span className="absolute -top-0.5 left-0 h-0.5 w-12 bg-brand-green" />
              <p className="font-mono text-sm text-brand-green">{p.step}</p>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-grey">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function RoofTypes() {
  return (
    <section className="border-y border-black/5 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 md:flex-row md:justify-between">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-grey-light">Roof types we service</p>
        <ul className="flex flex-wrap justify-center gap-3">
          {roofTypes.map((t) => (
            <li key={t} className="rounded-full border border-brand-grey/20 px-4 py-2 text-sm font-medium text-brand-grey">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Straight answers</h2>
          <p className="mt-4 text-brand-grey">
            Don&apos;t see your question?{" "}
            <a href={site.phoneHref} className="font-semibold text-brand-green hover:underline">
              Give us a call.
            </a>
          </p>
        </div>
        <div className="divide-y divide-black/10 border-y border-black/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="text-2xl font-light text-brand-green transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 pr-8 leading-7 text-brand-grey">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
