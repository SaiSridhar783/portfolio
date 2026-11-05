import { jsonLd, personId } from "@/lib/site";
import "@/styles/about.css";

// Each answer stands on its own and leads with the fact; FAQPage schema mirrors the visible text
const faqs = [
	{
		q: "Who is Sai Sridhar Akula?",
		a: "Sai Sridhar Akula is a software architect and Technical Lead at TCG Digital, where he has worked since August 2023 and has led technical work since September 2025. An IIT Kharagpur graduate, he designs real-time AI pipelines, event-driven microservices and data platforms, and writes the code himself in Python and TypeScript.",
	},
	{
		q: "What systems has Sai Sridhar architected?",
		a: "He architected a live AI football commentary translator (self-hosted Whisper, LLMs, NGINX, FFmpeg) streamed to 5M+ viewers over 27 channels, a Chinese-to-English audiovisual translation pipeline that feeds an enterprise knowledge graph, 14+ ETL workflows that cut reporting from 3 hours to 10 minutes, and a Kafka-based aviation system at 700+ TPS.",
	},
	{
		q: "Which AI and LLM tools does Sai Sridhar work with?",
		a: "He builds with Claude, OpenAI and Gemini models, orchestrates agents with LangGraph and LangChain, connects them to tools and data through the Model Context Protocol (MCP), and self-hosts models with vLLM and Ollama. For speech he runs self-hosted Whisper, and he has built retrieval-augmented generation (RAG) apps on vector databases.",
	},
	{
		q: "Which data and infrastructure tools does Sai Sridhar use?",
		a: "For data he uses PySpark, Delta Lake and Jupyter, with Kafka, Elasticsearch, PostgreSQL, MariaDB and Redis. He ships on Docker and Kubernetes behind NGINX, automates builds with Jenkins and Git, streams media with FFmpeg over HLS and SRT, and builds services with FastAPI, Node.js and Bun.",
	},
	{
		q: "Where did Sai Sridhar study?",
		a: "Sai Sridhar earned a B.Tech in Mining Engineering from the Indian Institute of Technology (IIT) Kharagpur in 2023 with a CGPA of 8.85. He moved into software through internships at Dotgo (2021) and NoBroker (2022) and course certifications in React, Python and data science.",
	},
	{
		q: "How can I contact Sai Sridhar?",
		a: "Use the contact form on this site for architecture, consulting, hiring or collaboration, or message him on LinkedIn (akula-sai-sridhar). His code is on GitHub as SaiSridhar783. He reads and replies to every message.",
	},
];

const structuredData = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	about: { "@id": personId },
	mainEntity: faqs.map(({ q, a }) => ({
		"@type": "Question",
		name: q,
		acceptedAnswer: { "@type": "Answer", text: a },
	})),
};

const Faq: React.FC = () => {
	return (
		<section className="about-faq">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
			/>
			<h2 className="section-heading reveal">Questions people ask</h2>
			<dl>
				{faqs.map(({ q, a }) => (
					<div key={q} className="reveal">
						<dt>{q}</dt>
						<dd>{a}</dd>
					</div>
				))}
			</dl>
		</section>
	);
};

export default Faq;
