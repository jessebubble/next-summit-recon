import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, Eyebrow } from "../_components/ui";
import { reasons, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a small, owner-led team doing ${site.summary} across ${site.region}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2">
          <div>
            <Eyebrow>About us</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Recon is short for reconstruction
            </h1>
            <div className="mt-6 space-y-4 leading-7 text-brand-grey">
              <p>
                {site.name} rebuilds homes. When water or fire damage turns your house upside down, we put it back
                together: framing, drywall, floors, cabinets, and every finish in between. And when you&apos;re ready
                for a new kitchen or bath, we bring that same rebuild experience to your remodel.
              </p>
              <p>
                We&apos;re intentionally small. That means fewer handoffs, faster answers, and a crew that takes
                personal ownership of every project. When you call, you talk to the people doing the work.
              </p>
              <p>
                We serve {site.region}, and most of our work comes from neighbors recommending us to neighbors.
                We&apos;d like to keep it that way.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-brand-grey-tint p-10 sm:p-14">
            <Image
              src="/summit-recon-logo.png"
              alt={`${site.name} logo`}
              width={1046}
              height={642}
              className="mx-auto h-auto w-full max-w-sm mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-grey py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight">What you can count on</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="border-t-2 border-white/20 pt-5">
                <h3 className="font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/75">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
