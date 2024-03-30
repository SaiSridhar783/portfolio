import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/Projects/ProjectCard";
import proJSON from "@/data/projects.json";
import "@/styles/projects.scss";

export const metadata: Metadata = {
	title: "Projects of Sai Sridhar",
};

const Projects: React.FC = () => {
	return (
		<>
			<PageHeader title="Projects" image="/images/projects.png" />
			<div className="projects">
				{proJSON.map((proj, idx) => (
					<ProjectCard key={idx} {...proj} />
				))}
			</div>
		</>
	);
};

export default Projects;
