import Link from "next/link";
import { site } from "@/lib/site";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
      <span className="h-0.5 w-8 bg-brand-green" />
      {children}
    </p>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className={`size-5 shrink-0 text-brand-green ${className}`}>
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.58l7.3-7.3a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// Mountain traced from the logo's "S": a white snow ridge with jagged green
// peaks below it. The flat run extends far left so it reads as the logo's
// underline; anchor the SVG bottom-right and let the section clip the rest.
const SNOW =
  "M-3000 258 L170 245 L240 150 L305 180 L420 38 L545 150 L575 140 L1000 385 L1000 380 L-3000 380 Z";
const PEAKS =
  "M-3000 275 L190 268 L235 255 L258 272 L278 210 L365 345 L383 203 L418 290 L437 88 L560 322 L575 175 L700 325 L678 268 L1000 395 L1000 380 L-3000 380 Z";

export function Mountain({
  tone = "brand",
  className = "",
}: {
  tone?: "brand" | "silhouette";
  className?: string;
}) {
  return (
    <svg viewBox="-3000 0 4000 380" preserveAspectRatio="xMaxYMax meet" aria-hidden className={className}>
      {tone === "brand" ? (
        <>
          <path d={SNOW} fill="#ffffff" />
          <path d={PEAKS} fill="var(--brand-green)" />
        </>
      ) : (
        <path d={SNOW} fill="currentColor" />
      )}
    </svg>
  );
}

// Mirrors the logo: brushed-metal grey above, snow ridge, green mountain below.
export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-grey-light via-brand-grey to-[#3b3b3b] pb-32 text-white sm:pb-44">
      <Mountain className="absolute bottom-0 right-0 h-36 w-auto max-w-none sm:h-52 lg:right-[8%]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 pt-14 sm:px-6 sm:pt-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Not sure what your roof needs?</h2>
          <p className="mt-3 text-white/80">
            Start with a free inspection. We&apos;ll show you exactly what we find — and you decide what&apos;s next.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/contact"
            className="rounded-md bg-brand-green px-6 py-3.5 text-center font-semibold text-white transition-colors hover:bg-brand-green-hover"
          >
            Book Free Inspection
          </Link>
          <a
            href={site.phoneHref}
            className="rounded-md border border-white/40 px-6 py-3.5 text-center font-semibold text-white transition-colors hover:bg-white/10"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
