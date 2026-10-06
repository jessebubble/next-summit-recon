import Link from "next/link";
import { Logo } from "./logo";
import { contacts, nav, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t-4 border-brand-green bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm leading-6 text-brand-grey">{site.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-brand-grey">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-brand-green">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-brand-grey">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-green">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-brand-green">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Get in touch</h3>
          <ul className="mt-4 space-y-2 text-sm text-brand-grey">
            {contacts.map((c) => (
              <li key={c.email} className="pb-2">
                <p className="font-semibold text-foreground">{c.name}</p>
                <a href={c.phoneHref} className="block hover:text-brand-green">
                  {c.phone}
                </a>
                <a href={`mailto:${c.email}`} className="block hover:text-brand-green">
                  {c.email}
                </a>
              </li>
            ))}
            <li>Serving {site.region}</li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-brand-grey-light sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Licensed &amp; insured roofing contractor.</p>
        </div>
      </div>
    </footer>
  );
}
