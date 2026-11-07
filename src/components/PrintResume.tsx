import education from "@/data/education.json";
import { workExperiences } from "@/data/experience";
import { site } from "@/lib/site";
import "@/styles/print-resume.css";

// Hidden on screen; printing the experience page prints this one-page résumé instead
export default function PrintResume() {
	const degree = education[0];
	const links = [new URL(site.url).host, ...site.sameAs.slice(0, 2).map((u) => u.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, ""))];

	return (
		<article className="print-resume">
			<header>
				<h1>{site.name}</h1>
				<p className="print-role">{site.jobTitle}</p>
				<p className="print-links">{links.join("  ·  ")}</p>
			</header>

			<p>
				Designs and builds real-time AI pipelines, event-driven microservices and data platforms, from architecture to
				production. Spot Award and Annual Excellence Award at TCG Digital.
			</p>

			<h2>Experience</h2>
			{workExperiences.map((w) => (
				<section key={`${w.company}-${w.title}`}>
					<div className="print-row">
						<h3>
							{w.title}, {w.company}
						</h3>
						<span>{w.duration}</span>
					</div>
					<ul>
						{/* Internships get their one-line summary to keep this to a page */}
						{w.title.includes("Intern") ? (
							<li>{w.text}</li>
						) : (
							w.achievements.map((a, i) => <li key={i}>{typeof a === "string" ? a : a.text}</li>)
						)}
					</ul>
				</section>
			))}

			<h2>Education</h2>
			<div className="print-row">
				<h3>
					{degree.name}, {degree.stream}, {degree.institute}
				</h3>
				<span>
					{degree.year} · CGPA {degree.CGPA}
				</span>
			</div>

			<h2>Skills</h2>
			<p>{site.knowsAbout.join(", ")}</p>
		</article>
	);
}
