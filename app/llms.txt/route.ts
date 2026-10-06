import { contacts, faqs, processSteps, roofTypes, services, site } from "@/lib/site";

// llms.txt (https://llmstxt.org): a plain-Markdown summary for AI agents.
// Generated from lib/site.ts so it never drifts from what the pages say.
export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.name} is a small, owner-led roofing contractor focused on roof repair in ${site.region}. Services include leak and roof repair, storm and hail damage, emergency leak response, free roof inspections with a photo report, insurance claim help, and roof replacement when repair no longer makes sense.

Every page is server-rendered. The site carries schema.org JSON-LD: a \`RoofingContractor\` node on every page and an \`FAQPage\` on the home page.

## Contact

${contacts.map((c) => `- ${c.name}: ${c.phone}, ${c.email}`).join("\n")}
- Service area: ${site.region}
- Hours: ${site.hours}
- Book a free inspection: ${site.url}/contact

## Key pages

- [Home](${site.url}/): Overview, how the team works, processSteps, and FAQ.
- [Services](${site.url}/services): Every service with what it includes.
- [About](${site.url}/about): Who Summit Recon is and why the team stays small.
- [Contact](${site.url}/contact): Request a free roof inspection.

## Services

${services.map((s) => `- **${s.title}**: ${s.summary} Includes: ${s.details.join(", ").toLowerCase()}.`).join("\n")}

Roof types serviced: ${roofTypes.join(", ")}.

## Process

${processSteps.map((p, i) => `${i + 1}. **${p.title}**: ${p.body}`).join("\n")}

## FAQ

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
