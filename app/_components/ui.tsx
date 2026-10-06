import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ARROW_MOTION } from "@/lib/motion";
import { MOUNTAIN_VIEWBOX, PEAKS_PATH, SNOW_PATH } from "@/lib/mountain";
import { site } from "@/lib/site";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">{children}</p>
  );
}

// Up-right arrow that hops on hover. The parent link needs `group`.
export function Arrow({ className = "" }: { className?: string }) {
  return <ArrowUpRight aria-hidden strokeWidth={2.25} className={`size-4 shrink-0 ${ARROW_MOTION} ${className}`} />;
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

export function Mountain({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={MOUNTAIN_VIEWBOX} preserveAspectRatio="xMaxYMax meet" aria-hidden className={className}>
      <path d={SNOW_PATH} fill="#ffffff" />
      <path d={PEAKS_PATH} fill="var(--brand-green)" />
    </svg>
  );
}

// Mirrors the logo: brushed-metal grey above, snow ridge, green mountain below.
export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-grey-light via-brand-grey to-[#3b3b3b] pb-36 text-white sm:pb-44">
      <Mountain className="absolute bottom-0 right-0 h-28 w-auto max-w-none sm:h-52 lg:right-[8%]" />
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
            className="group inline-flex items-center justify-center gap-1.5 rounded-md bg-brand-green px-6 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-brand-green-hover"
          >
            Book Free Inspection
            <Arrow />
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
