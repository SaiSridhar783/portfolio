import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/Projects/ProjectCard";
import proJSON from "@/data/projects.json";
import "@/styles/projects.css";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"Projects built by Sai Sridhar Akula: an OpenAI RAG chat app (FastAPI, Next.js), a cross-platform Electron app for Hoek-Brown rock mass parameters, a Django and React e-commerce site, React Native apps and more, with source on GitHub.",
	alternates: { canonical: "/projects" },
};

const Projects: React.FC = () => {
	return (
		<PageTransition>
			<div>
				<PageHeader title="Projects" image="/images/projects.png" />
				<div className="projects">
					{proJSON.map((proj, idx) => (
						<ProjectCard key={proj.slug} idx={idx} {...proj} />
					))}
				</div>
			</div>
		</PageTransition>
	);
};

export default Projects;
