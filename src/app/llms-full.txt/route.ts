import certificates from "@/data/certificates.json";
import education from "@/data/education.json";
import { workExperiences } from "@/data/experience";
import proJSON from "@/data/projects.json";
import { site } from "@/lib/site";

// The whole site as one Markdown file, so an assistant gets every fact in one request
export const dynamic = "force-static";

export function GET() {
	const work = workExperiences
		.map(
			(w) =>
				`### ${w.title}, ${w.company}\n\n${w.duration}. ${w.compURL}\n\n${w.achievements.map((a) => (typeof a === "string" ? `- ${a}` : `- ${a.text} (${a.url})`)).join("\n")}`,
		)
		.join("\n\n");

	const projects = proJSON
		.map((p) => {
			const links = [
				`Page: ${site.url}/projects/${p.slug}`,
				p.github && `Source: ${p.github}`,
				p.url && `Live: ${p.url}`,
			].filter(Boolean);
			return `### ${p.name}\n\n${p.type}, ${p.date}. Built with ${p.languages.join(", ")}.\n\n${p.description}\n\n${links.map((l) => `- ${l}`).join("\n")}`;
		})
		.join("\n\n");

	const schools = education
		.map((e) => `- ${e.name}, ${e.stream}, ${e.institute}, ${e.year}`)
		.join("\n");

	const certs = certificates
		.map((c) => `- ${c.name} (${c.type}, ${c.institution}): ${c.link}`)
		.join("\n");

	const body = `# ${site.name}

> ${site.description}

Last updated: ${new Date().toISOString().slice(0, 10)}. Canonical site: ${site.url}

## Summary

- Name: Sai Sridhar Akula (also Akula Sai Sridhar)
- Role: Technical Lead at TCG Digital Solutions Pvt. Ltd. since September 2025; Software Engineer there from August 2023 to August 2025
- Education: B.Tech in Mining Engineering, IIT Kharagpur, 2023, CGPA 8.85
- Core stack: ${site.knowsAbout.join(", ")}
- Highlights: architected an AI football commentary translator feeding 27 broadcasters across the Indian subcontinent (5M+ combined viewers); real-time Chinese-to-English audiovisual translation feeding an enterprise knowledge graph; 14+ ETL workflows cutting report generation from 3 hours to 10 minutes; real-time aviation system at 700+ transactions per second; 40% cost cut from refactoring legacy systems
- Recognition: Spot Award and Annual Excellence Award at TCG Digital
- Profiles: ${site.sameAs.join(", ")}
- Contact: ${site.url}/contact

## Work experience

${work}

## Projects

${projects}

## Education

${schools}

## Certifications

${certs}
`;

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
