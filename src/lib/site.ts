// Facts shared by metadata, JSON-LD, sitemap and llms.txt. Keep them in sync with the visible pages.
export const site = {
	url: "https://saisridhar.vercel.app",
	name: "Sai Sridhar Akula",
	title: "Sai Sridhar Akula, Software Architect and Engineer",
	jobTitle: "Technical Lead and Software Architect",
	description:
		"Sai Sridhar Akula is a software architect and Technical Lead at TCG Digital and an IIT Kharagpur graduate. He designs and builds real-time AI pipelines, event-driven microservices and data platforms, including an AI football commentary translator streamed live to 5M+ viewers.",
	image:
		"https://res.cloudinary.com/djkp8vliu/image/upload/v1712044200/opengraph-image_kjemky.png",
	sameAs: [
		"https://www.linkedin.com/in/akula-sai-sridhar/",
		"https://github.com/SaiSridhar783",
		"https://twitter.com/ShadowKiller783",
	],
	twitter: "@ShadowKiller783",
	knowsAbout: [
		"Software architecture",
		"Large language models (Claude, OpenAI, Gemini, vLLM, Ollama)",
		"LangGraph",
		"Model Context Protocol (MCP)",
		"Retrieval-augmented generation (RAG)",
		"Speech-to-text (Whisper)",
		"PySpark",
		"Delta Lake",
		"Jupyter",
		"Elasticsearch",
		"MariaDB",
		"NGINX",
		"FFmpeg",
		"Jenkins",
		"Git",
		"Bun",
		"Node.js",
		"Python",
		"TypeScript",
		"FastAPI",
		"Next.js",
		"React",
		"Kafka",
		"Redis",
		"Kubernetes",
		"PostgreSQL",
		"Docker",
		"Event-driven architecture",
		"Real-time streaming (HLS, SRT)",
	],
};

// Serialise JSON-LD for a <script> tag; escape "<" so data cannot close the tag
export const jsonLd = (data: object) =>
	JSON.stringify(data).replace(/</g, "\\u003c");

export const personId = `${site.url}/#person`;

export const person = {
	"@type": "Person",
	"@id": personId,
	name: site.name,
	alternateName: ["Akula Sai Sridhar", "Sai Sridhar"],
	url: site.url,
	image: `${site.url}/images/about/profile.png`,
	jobTitle: site.jobTitle,
	description: site.description,
	worksFor: {
		"@type": "Organization",
		name: "TCG Digital Solutions Pvt. Ltd.",
		url: "https://www.tcgdigital.com/",
	},
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "Indian Institute of Technology, Kharagpur",
		url: "https://www.iitkgp.ac.in/",
	},
	knowsAbout: site.knowsAbout,
	sameAs: site.sameAs,
};
