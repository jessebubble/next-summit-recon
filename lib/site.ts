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

// Matthew is the primary contact shown in the header, hero, and CTAs.
const primary = contacts[1];

// Hours are a placeholder — confirm before launch.
export const site = {
  name: "Summit Recon",
  tagline: "General contracting, reconstruction, and remodeling by a San Antonio crew that answers its own phone.",
  summary: "general contracting, interior reconstruction, and remodeling",
  phone: primary.phone,
  phoneHref: primary.phoneHref,
  email: primary.email,
  region: "San Antonio, Austin & surrounding areas",
  cities: "San Antonio & Austin",
  hours: "Mon–Sat, 7am–6pm",
  url: siteUrl(),
};

// Absolute URL for metadata, OG images, sitemap, and llms.txt. On Vercel this
// is the project's production domain — the .vercel.app alias until
// summit-recon.com is added to the project, then summit-recon.com
// automatically. Anywhere else, assume the real domain.
function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "https://summit-recon.com";
}

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#process", label: "Our Process" },
  { href: "/#faq", label: "FAQ" },
];

export const serviceGroups = [
  {
    id: "reconstruction",
    title: "General Contracting & Reconstruction",
    intro:
      "One contractor for the whole job. We specialize in insurance claims: we rebuild what was damaged, document every line item, and make sure the full scope gets covered.",
  },
  {
    id: "remodeling",
    title: "Remodeling",
    intro:
      "Kitchens, bathrooms, tile, flooring, drywall, and paint, planned and built by one small crew from demo to final walkthrough.",
  },
] as const;

export type Service = {
  slug: string;
  group: (typeof serviceGroups)[number]["id"];
  title: string;
  summary: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "general-contracting",
    group: "reconstruction",
    title: "General Contracting",
    summary:
      "One licensed contractor running your interior project, from scheduling and trades to permits and inspections, so you're never stuck juggling subs.",
    details: [
      "Project scheduling and management",
      "Framing and wall changes",
      "Permits and inspections",
      "Every trade coordinated",
    ],
  },
  {
    slug: "interior-reconstruction",
    group: "reconstruction",
    title: "Interior Reconstruction",
    summary:
      "When damage takes out part of your home, we rebuild the walls, floors, cabinets, and finishes so it looks and feels like home again.",
    details: [
      "Framing and structural repair",
      "Drywall, ceilings, and texture",
      "Subfloor and flooring",
      "Cabinets, trim, and paint",
    ],
  },
  {
    slug: "insurance-claims",
    group: "reconstruction",
    title: "Insurance Claims",
    summary:
      "Insurance work is our specialty. We document the damage, walk your adjuster through the scope, and keep the claim moving so every eligible item is covered.",
    details: [
      "Detailed written scope",
      "Photo documentation",
      "Adjuster meetings",
      "Supplements when hidden damage turns up",
    ],
  },
  {
    slug: "rebuild-and-upgrade",
    group: "reconstruction",
    title: "Upgrade While You Rebuild",
    summary:
      "Insurance pays to rebuild what you had. If you want better finishes or a new layout while the walls are open, you pay only the difference, with transparent pricing.",
    details: [
      "Finish and fixture upgrades",
      "Layout changes during the rebuild",
      "Line-item pricing on every upgrade",
      "One project, one crew, one schedule",
    ],
  },
  {
    slug: "kitchen-remodel",
    group: "remodeling",
    title: "Kitchen Remodeling",
    summary:
      "Layouts that work, cabinets that last, and finishes you'll love, planned and built by the same small crew from demo to final walkthrough.",
    details: [
      "Custom and semi-custom cabinetry",
      "Countertops and backsplash",
      "Layout changes and islands",
      "Lighting and fixture upgrades",
    ],
  },
  {
    slug: "bathroom-remodel",
    group: "remodeling",
    title: "Bathroom Remodeling",
    summary:
      "Tub-to-shower conversions, new vanities, tile, and full gut remodels, built watertight underneath and clean on top.",
    details: [
      "Shower and tub conversions",
      "Tile floors and surrounds",
      "Vanities and fixtures",
      "Accessibility upgrades",
    ],
  },
  {
    slug: "tile-flooring",
    group: "remodeling",
    title: "Tile & Flooring",
    summary:
      "Floors installed flat and level, and tile set straight with clean grout lines, from a single bathroom to the whole house.",
    details: [
      "Tile floors, showers, and backsplashes",
      "LVP and laminate",
      "Hardwood and engineered wood",
      "Subfloor repair and leveling",
    ],
  },
  {
    slug: "drywall-painting",
    group: "remodeling",
    title: "Drywall & Painting",
    summary:
      "Seamless drywall, texture that matches, and crisp paint and trim, the finish work that makes a space feel new.",
    details: [
      "Drywall hang, tape, and finish",
      "Texture matching",
      "Interior paint",
      "Trim and baseboards",
    ],
  },
];

export const spaces = ["Kitchens", "Bathrooms", "Living Areas", "Bedrooms", "Laundry Rooms", "Whole Homes"];

export const processSteps = [
  {
    step: "01",
    title: "Walkthrough",
    body: "We come out, walk the space with you, take measurements and photos, and talk through what you need.",
  },
  {
    step: "02",
    title: "Scope",
    body: "You get a clear written scope and estimate. For insurance work, we review it with your adjuster so nothing is missed.",
  },
  {
    step: "03",
    title: "Build",
    body: "The same crew that scoped your project builds it, with protected floors, a clean site, and regular updates.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    body: "We walk the finished work with you, close out every punch-list item, and back it with our written workmanship warranty.",
  },
];

export const reasons = [
  {
    title: "The owner is on your job",
    body: "We're a small team on purpose. You won't be handed off to a sales rep, then a project manager, then a crew you've never met.",
  },
  {
    title: "Damage to done, one team",
    body: "Reconstruction and remodeling under one roof means fewer handoffs, fewer delays, and one point of contact from start to finish.",
  },
  {
    title: "Insurance work, handled",
    body: "We document everything and speak the adjuster's language, so your claim covers the full rebuild — not just part of it.",
  },
  {
    title: "Born and raised in San Antonio",
    body: "Both owners grew up here. This is our hometown, and our reputation is built one home — and one neighbor — at a time.",
  },
];

export const faqs = [
  {
    q: "Do you work with insurance claims?",
    a: "Yes, insurance claims are our specialty. We document the damage, prepare a detailed scope, meet with your adjuster, and help with supplements if hidden damage turns up once walls are opened.",
  },
  {
    q: "Can I upgrade finishes during an insurance rebuild?",
    a: "Yes. Your policy covers rebuilding your home to its original condition. If you'd like better finishes, a different layout, or extra work while the walls are open, you pay only the difference, and we price every upgrade line by line before anything changes.",
  },
  {
    q: "Is the estimate free?",
    a: "Yes. We'll walk the space, take measurements and photos, and give you a written estimate at no cost and with no obligation.",
  },
  {
    q: "Do you require a deposit?",
    a: "Yes. We require a 50% deposit upfront so we can purchase materials and get your project on the schedule. We'll go over the payment schedule for the remaining balance with your written estimate.",
  },
  {
    q: "How long will my project take?",
    a: "It depends on the scope. A single-room rebuild can take a couple of weeks, while a full kitchen remodel or a multi-room project takes longer. You'll get a realistic schedule with your estimate, and we'll keep you updated as the work moves along.",
  },
  {
    q: "Do you warranty your work?",
    a: "Every project is backed by a written workmanship warranty, and the materials we install carry their manufacturer warranties. We'll go over the specifics before any work begins.",
  },
];
