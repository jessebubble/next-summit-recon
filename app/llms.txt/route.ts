import { contacts, faqs, processSteps, serviceGroups, services, site, spaces } from "@/lib/site";

// llms.txt (https://llmstxt.org): a plain-Markdown summary for AI agents.
// Generated from lib/site.ts so it never drifts from what the pages say.
export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.name} is a small, owner-led contractor in ${site.region} specializing in ${site.summary}. It rebuilds home interiors after water, flood, fire, and smoke damage, coordinates insurance restoration claims, and remodels kitchens, bathrooms, and whole homes. "Recon" is short for reconstruction.

Every page is server-rendered. The site carries schema.org JSON-LD: a \`GeneralContractor\` node with the full service catalog on every page, and an \`FAQPage\` on the home page.

## Contact

${contacts.map((c) => `- ${c.name}: ${c.phone}, ${c.email}`).join("\n")}
- Service area: ${site.region}
- Hours: ${site.hours}
- Request a free on-site estimate: ${site.url}/contact

## Key pages

- [Home](${site.url}/): Overview, how the team works, the four-step process, and FAQ.
- [Services](${site.url}/services): Every service, grouped into ${serviceGroups.map((g) => g.title).join(" and ")}.
- [About](${site.url}/about): Who ${site.name} is and why the team stays small.
- [Contact](${site.url}/contact): Request a free on-site estimate.

## Services

${serviceGroups
  .map(
    (g) =>
      `### ${g.title}\n\n${g.intro}\n\n${services
        .filter((s) => s.group === g.id)
        .map((s) => `- **${s.title}**: ${s.summary} Includes: ${s.details.join(", ").toLowerCase()}.`)
        .join("\n")}`,
  )
  .join("\n\n")}

Spaces: ${spaces.join(", ")}.

## Process

${processSteps.map((p, i) => `${i + 1}. **${p.title}**: ${p.body}`).join("\n")}

## FAQ

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
