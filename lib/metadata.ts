import type { Metadata } from "next";
import { site } from "./site";

// Next shallow-merges metadata, so a page that sets only `title` inherits the
// layout's og:title/og:url. Every page builds its metadata here so the social
// preview, canonical URL, and <title> always agree.
// Setting openGraph on a page drops the inherited app/opengraph-image, so
// reference it explicitly.
const ogImage = { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name}: ${site.summary} in ${site.region}` };

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage] },
  };
}
