import proJSON from "@/data/projects.json";
import { site } from "@/lib/site";

// llms.txt (https://llmstxt.org): a Markdown map of the site for AI assistants
export const dynamic = "force-static";

export function GET() {
	const projects = proJSON
		.map((p) => `- [${p.name}](${site.url}/projects/${p.slug}): ${p.type}, ${p.date}. ${p.description}`)
		.join("\n");

	const body = `# ${site.name}

> ${site.description}

Sai Sridhar Akula (also written Akula Sai Sridhar) is a software architect and Technical Lead at TCG Digital Solutions since September 2025, after joining as a Software Engineer in August 2023. He graduated from IIT Kharagpur in 2023 with a B.Tech in Mining Engineering (CGPA 8.85). He designs and builds LLM and speech pipelines (Claude, OpenAI, Gemini, LangGraph, MCP, vLLM, Ollama, Whisper), data platforms (PySpark, Delta Lake, Kafka, Elasticsearch, PostgreSQL) and event-driven microservices on Docker and Kubernetes, in Python and TypeScript.

## Pages

- [About](${site.url}/about): who he is, career timeline, headline numbers and the tools he uses
- [Experience](${site.url}/experience): roles at TCG Digital, NoBroker and Dotgo with measurable outcomes
- [Projects](${site.url}/projects): personal and open-source projects with source links
- [Education and certifications](${site.url}/certifications): IIT Kharagpur degree and course certificates
- [Contact](${site.url}/contact): contact form, LinkedIn and GitHub

## Projects

${projects}

## Profiles

${site.sameAs.map((u) => `- ${u}`).join("\n")}

## Optional

- [Full text for AI assistants](${site.url}/llms-full.txt): every fact on the site in one file
`;

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
