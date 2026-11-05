import "@/styles/about.scss";

// Newest first; keep in sync with the experience page
const milestones = [
	{
		when: "2025 – now",
		title: "Technical Lead, TCG Digital",
		text: "Architected a live AI football commentary translator (self-hosted Whisper, LLMs, FFmpeg) streamed to 5M+ viewers on 27 channels, a Chinese-to-English audiovisual translation pipeline feeding an enterprise knowledge graph, and 14+ ETL workflows that cut reporting from 3 hours to 10 minutes.",
	},
	{
		when: "2023 – 2025",
		title: "Software Engineer, TCG Digital",
		text: "Delivered a Kafka, Redis and Kubernetes aviation system at 700+ TPS, automated reporting that saved 16+ hours a week, and mentored 2 developers and 4 interns.",
	},
	{
		when: "2023",
		title: "Graduated from IIT Kharagpur",
		text: "B.Tech in Mining Engineering with a CGPA of 8.85.",
	},
	{
		when: "2022",
		title: "SDE Intern, NoBroker",
		text: "Built a tree visualiser in React and Redux for 20+ services, with Spring Boot APIs for concurrent edits.",
	},
	{
		when: "2021",
		title: "Hacktoberfest and UI Intern, Dotgo",
		text: "7 open-source pull requests merged, and search and filtering that sped up carrier onboarding.",
	},
];

const Journey: React.FC = () => {
	return (
		<section className="about-journey">
			<h2 className="section-heading reveal">The story so far</h2>
			<ol>
				{milestones.map((m) => (
					<li key={m.title} className="reveal">
						<span className="journey-when">{m.when}</span>
						<p className="journey-title">{m.title}</p>
						<p className="journey-text">{m.text}</p>
					</li>
				))}
			</ol>
		</section>
	);
};

export default Journey;
