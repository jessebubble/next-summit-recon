"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo preload />

        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-grey md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-brand-green">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={site.phoneHref} className="text-sm font-semibold text-foreground hover:text-brand-green">
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-brand-green px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-hover"
          >
            Free Inspection
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="-mr-2 p-2 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-black/5 bg-white px-4 pb-6 pt-2 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-brand-grey"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 grid gap-3">
            <a href={site.phoneHref} className="rounded-md border border-brand-grey/30 py-3 text-center font-semibold">
              Call {site.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-md bg-brand-green py-3 text-center font-semibold text-white"
            >
              Book a Free Inspection
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
