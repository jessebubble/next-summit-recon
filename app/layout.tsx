import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { JsonLd } from "./_components/json-ld";
import { contacts, serviceGroups, services, site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${site.name} | Reconstruction, Restoration & Remodeling in San Antonio`;
const description = `${site.name} is a small, owner-led team for interior reconstruction after water and fire damage, insurance restoration, and kitchen, bathroom, and whole-home remodeling across ${site.region}.`;

// opengraph-image.tsx is picked up automatically for openGraph/twitter images.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  keywords: [
    "interior reconstruction San Antonio",
    "water damage reconstruction",
    "fire damage restoration",
    "insurance restoration contractor",
    "kitchen remodeling San Antonio",
    "bathroom remodeling San Antonio",
    "home remodeling contractor",
    "Texas Hill Country remodeling",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
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
  knowsAbout: ["Interior reconstruction", "Water damage restoration", "Fire damage restoration", "Insurance restoration", "Kitchen remodeling", "Bathroom remodeling"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Reconstruction, restoration & remodeling services",
    itemListElement: serviceGroups.map((g) => ({
      "@type": "OfferCatalog",
      name: g.title,
      itemListElement: services
        .filter((s) => s.group === g.id)
        .map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.summary, url: `${site.url}/services#${s.slug}` },
        })),
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
