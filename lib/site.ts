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
  tagline: "Interior reconstruction, restoration, and remodeling by a crew that answers its own phone.",
  summary: "interior reconstruction, restoration, and remodeling",
  phone: contacts[0].phone,
  phoneHref: contacts[0].phoneHref,
  email: contacts[0].email,
  region: "San Antonio & the Texas Hill Country",
  hours: "Mon–Sat, 7am–6pm",
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

export const serviceGroups = [
  {
    id: "restoration",
    title: "Restoration & Reconstruction",
    intro:
      "When water or fire damages your home, insurance covers putting it back the way it was. We rebuild it, document every line item, and make sure the full scope gets covered.",
  },
  {
    id: "remodeling",
    title: "Remodeling",
    intro:
      "Kitchens, bathrooms, and living spaces planned and built by one small crew, with the same care we bring to every rebuild.",
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
    slug: "water-damage",
    group: "restoration",
    title: "Water & Flood Damage Reconstruction",
    summary:
      "Burst pipe, slab leak, appliance failure, or flooding. Once the space is dry, we rebuild walls, floors, cabinets, and finishes back to pre-loss condition.",
    details: [
      "Drywall and insulation replacement",
      "Subfloor and flooring repair",
      "Cabinet and vanity replacement",
      "Baseboard, trim, and paint",
    ],
  },
  {
    slug: "fire-smoke",
    group: "restoration",
    title: "Fire & Smoke Damage Restoration",
    summary:
      "From a kitchen fire to a whole-room loss, we rebuild damaged framing and finishes so your home looks and feels like home again.",
    details: [
      "Framing and structural repair",
      "Drywall, ceilings, and texture",
      "Doors, trim, and millwork",
      "Full interior refinishing",
    ],
  },
  {
    slug: "insurance-restoration",
    group: "restoration",
    title: "Insurance Restoration",
    summary:
      "We document the damage, walk your adjuster through the scope, and keep the claim moving so every eligible item is covered.",
    details: [
      "Detailed written scope",
      "Photo documentation",
      "Adjuster meetings",
      "Supplements when hidden damage turns up",
    ],
  },
  {
    slug: "rebuild-and-upgrade",
    group: "restoration",
    title: "Upgrade While You Rebuild",
    summary:
      "Insurance pays to restore what you had. If you want better finishes or a new layout while the walls are open, you pay only the difference, with transparent pricing.",
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
    slug: "interior-remodel",
    group: "remodeling",
    title: "Interior & Whole-Home Remodeling",
    summary:
      "Open up a floor plan, refresh a living space, or update the whole house. The result feels intentional, not patched together.",
    details: [
      "Wall removal and reframing",
      "Living and bedroom updates",
      "Laundry and utility rooms",
      "Whole-home refreshes",
    ],
  },
  {
    slug: "interior-finishes",
    group: "remodeling",
    title: "Flooring, Cabinetry & Finishes",
    summary:
      "The finish work that makes a space feel new: floors installed level, cabinets set square, seamless drywall, and crisp paint and trim.",
    details: [
      "LVP, tile, and hardwood flooring",
      "Cabinet installation",
      "Drywall and texture matching",
      "Interior paint and trim carpentry",
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
    title: "Rebuild",
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
    title: "Licensed, insured, and local",
    body: "We live and work here. Our reputation is built one home — and one neighbor — at a time.",
  },
];

export const faqs = [
  {
    q: "What's the difference between reconstruction, restoration, and remodeling?",
    a: "Reconstruction and restoration bring a space back after damage — water, fire, or smoke — by rebuilding what was lost. Remodeling changes a space by choice, like a new kitchen layout or a bathroom upgrade. We do all three, and often combine them: if you're already rebuilding after damage, it's a good time to make upgrades.",
  },
  {
    q: "Do you handle water extraction and drying?",
    a: "We focus on the rebuild. If your home still needs water mitigation or drying, we'll coordinate with your mitigation company and start reconstruction as soon as the space is cleared.",
  },
  {
    q: "Do you work with insurance claims?",
    a: "Yes. We document the damage, prepare a detailed scope, meet with your adjuster, and help with supplements if hidden damage turns up once walls are opened.",
  },
  {
    q: "Can I upgrade finishes during an insurance rebuild?",
    a: "Yes. Your policy covers restoring your home to its original condition. If you'd like better finishes, a different layout, or extra work while the walls are open, you pay only the difference, and we price every upgrade line by line before anything changes.",
  },
  {
    q: "Is the estimate free?",
    a: "Yes. We'll walk the space, take measurements and photos, and give you a written estimate at no cost and with no obligation.",
  },
  {
    q: "How long will my project take?",
    a: "It depends on the scope. A single-room rebuild can take a couple of weeks, while a full kitchen remodel or a multi-room loss takes longer. You'll get a realistic schedule with your estimate, and we'll keep you updated as the work moves along.",
  },
  {
    q: "Do you warranty your work?",
    a: "Every project is backed by a written workmanship warranty, and the materials we install carry their manufacturer warranties. We'll go over the specifics before any work begins.",
  },
];
