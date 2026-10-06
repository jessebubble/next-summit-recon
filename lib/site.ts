export const contacts = [
  {
    name: "Adrian Bertini",
    phone: "(210) 710-7213",
    phoneHref: "tel:+12107107213",
    email: "adrianb@summit-recon.com",
  },
  {
    name: "Matthew Blanco",
    phone: "(210) 419-8825",
    phoneHref: "tel:+12104198825",
    email: "matthewb@summit-recon.com",
  },
];

// Service area and hours are placeholders — confirm before launch.
export const site = {
  name: "Summit Recon",
  tagline: "Roof repair done right by a crew that answers its own phone.",
  phone: contacts[0].phone,
  phoneHref: contacts[0].phoneHref,
  email: contacts[0].email,
  region: "San Antonio & the Texas Hill Country",
  hours: "Mon–Sat, 7am–6pm · Emergency leak calls 24/7",
  url: siteUrl(),
};

// Absolute URL for metadata, OG images, sitemap, and llms.txt. On Vercel this
// is the project's production domain — the .vercel.app alias today, and
// summit-recon.com automatically once that domain is added to the project.
function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#process", label: "Our Process" },
  { href: "/#faq", label: "FAQ" },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "roof-repair",
    title: "Roof Repair",
    summary:
      "Leaks, missing or lifted shingles, cracked tiles, and worn spots fixed fast — before a small problem becomes a ceiling problem.",
    details: [
      "Leak detection and repair",
      "Shingle, tile, and metal panel replacement",
      "Pipe boot and vent seal repair",
      "Valley and ridge cap repair",
    ],
  },
  {
    slug: "storm-damage",
    title: "Storm & Hail Damage",
    summary:
      "Texas weather is hard on roofs. We document hail and wind damage thoroughly and restore your roof to pre-storm condition.",
    details: [
      "Hail and wind damage assessment",
      "Photo documentation for your records",
      "Decking and underlayment repair",
      "Full restoration when needed",
    ],
  },
  {
    slug: "emergency-repair",
    title: "Emergency Leak Response",
    summary:
      "Water coming in? We'll get out quickly to tarp and secure your roof, then schedule a permanent repair.",
    details: [
      "Emergency tarping",
      "Temporary leak stops",
      "Interior damage check",
      "Permanent repair scheduling",
    ],
  },
  {
    slug: "inspections",
    title: "Free Roof Inspections",
    summary:
      "A top-to-bottom recon of your roof with a clear photo report — what's fine, what needs attention, and what can wait.",
    details: [
      "Shingles, flashing, and penetrations",
      "Attic ventilation and decking",
      "Gutters and drainage",
      "Photo report you keep",
    ],
  },
  {
    slug: "insurance-claims",
    title: "Insurance Claim Help",
    summary:
      "We walk you through the claim, document the damage, and meet with your adjuster so nothing gets missed.",
    details: [
      "Damage documentation",
      "Adjuster meetings",
      "Scope review",
      "Straight answers on what's covered",
    ],
  },
  {
    slug: "replacement",
    title: "Roof Replacement",
    summary:
      "When repair no longer makes sense, we'll tell you — and handle a full replacement with the same small-crew care.",
    details: [
      "Asphalt shingle",
      "Standing seam and exposed-fastener metal",
      "Concrete and clay tile",
      "Flat and low-slope roofs",
    ],
  },
  {
    slug: "flashing-trim",
    title: "Flashing, Fascia & Soffit",
    summary:
      "Most leaks start at the edges and seams. We repair flashing, rotted fascia, and damaged soffit to seal your roofline.",
    details: [
      "Chimney and wall flashing",
      "Drip edge installation",
      "Fascia board replacement",
      "Soffit and vent repair",
    ],
  },
  {
    slug: "gutters-ventilation",
    title: "Gutters & Ventilation",
    summary:
      "Good drainage and airflow add years to a roof. We repair gutters and fix attic ventilation that cooks shingles from below.",
    details: [
      "Gutter repair and replacement",
      "Downspout re-routing",
      "Ridge and soffit vents",
      "Attic airflow balancing",
    ],
  },
];

export const roofTypes = [
  "Asphalt Shingle",
  "Metal",
  "Tile",
  "Flat & Low-Slope",
];

export const processSteps = [
  {
    step: "01",
    title: "Recon",
    body: "We come out, get on the roof, and inspect everything — shingles, flashing, vents, decking, and attic.",
  },
  {
    step: "02",
    title: "Report",
    body: "You get photos of what we found and a straight recommendation: repair, monitor, or replace. No pressure.",
  },
  {
    step: "03",
    title: "Repair",
    body: "The same crew that inspected your roof does the work, with quality materials and a clean job site.",
  },
  {
    step: "04",
    title: "Walkthrough",
    body: "We show you the finished work, haul off debris, and back the repair with our written workmanship warranty.",
  },
];

export const reasons = [
  {
    title: "The owner is on your job",
    body: "We're a small team on purpose. You won't be handed off to a sales rep, then a project manager, then a sub.",
  },
  {
    title: "Repair first, not replace first",
    body: "Plenty of roofs just need a good repair. If yours does, that's what we'll recommend.",
  },
  {
    title: "Photo-backed recommendations",
    body: "Every inspection comes with photos, so you can see exactly what we see.",
  },
  {
    title: "Licensed, insured, and local",
    body: "We live and work here. Our reputation is built one roof — and one neighbor — at a time.",
  },
];

export const faqs = [
  {
    q: "Should I repair or replace my roof?",
    a: "It depends on the age of the roof, how widespread the damage is, and how much life the rest of it has left. If damage is isolated and the roof is in good shape overall, a repair is usually the smart call. After our inspection, we'll show you photos and give you an honest recommendation.",
  },
  {
    q: "Is the roof inspection really free?",
    a: "Yes. We'll inspect your roof and send you a photo report at no cost and with no obligation.",
  },
  {
    q: "How fast can you come out for a leak?",
    a: "For active leaks we prioritize emergency calls and aim to get the roof secured as quickly as possible. Call us directly — you'll talk to someone on the team, not a call center.",
  },
  {
    q: "Do you help with insurance claims?",
    a: "We do. We document storm and hail damage, help you understand the process, and can meet with your adjuster on-site so the full scope of damage is captured.",
  },
  {
    q: "What kinds of roofs do you work on?",
    a: "Asphalt shingle, metal, concrete and clay tile, and flat or low-slope roofs on homes and small commercial buildings.",
  },
  {
    q: "Do you warranty your work?",
    a: "Every repair is backed by a written workmanship warranty, and the materials we install carry their manufacturer warranties. We'll go over the specifics with you before any work begins.",
  },
];
