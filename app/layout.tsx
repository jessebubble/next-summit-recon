import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { JsonLd } from "./_components/json-ld";
import { contacts, services, site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description = `${site.name} is a small, owner-led roofing crew specializing in roof repair, storm and hail damage, free inspections, and insurance claim help across ${site.region}.`;

// opengraph-image.tsx is picked up automatically for openGraph/twitter images.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Roof Repair in San Antonio, TX`,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  keywords: [
    "roof repair San Antonio",
    "roofer San Antonio",
    "roof leak repair",
    "storm damage roof repair",
    "hail damage roof",
    "free roof inspection",
    "roof insurance claim help",
    "Texas Hill Country roofing",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: `${site.name} | Roof Repair in San Antonio, TX`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Roof Repair in San Antonio, TX`,
    description,
  },
  robots: { index: true, follow: true },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/summit-recon-logo.png`,
  image: `${site.url}/opengraph-image`,
  description,
  telephone: site.phone,
  email: site.email,
  areaServed: site.region,
  address: { "@type": "PostalAddress", addressLocality: "San Antonio", addressRegion: "TX", addressCountry: "US" },
  contactPoint: contacts.map((c) => ({
    "@type": "ContactPoint",
    name: c.name,
    telephone: c.phone,
    email: c.email,
    contactType: "customer service",
    areaServed: "US-TX",
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.summary, url: `${site.url}/services#${s.slug}` },
    })),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={businessJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
