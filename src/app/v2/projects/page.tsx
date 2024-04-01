import { Metadata } from "next";
import ProjectCard from "@/components/Projects/ProjectCard";
import proJSON from "@/data/projects.json";
import "@/styles/projects.scss";

export const metadata: Metadata = {
	title: "Projects of Sai Sridhar",
};

const ProjectsMob: React.FC = () => {
	return (
		<div className="projects-mob">
			<h1>Projects</h1>
			{proJSON.map((proj, idx) => (
				<ProjectCard key={idx} {...proj} />
			))}
		</div>
	);
};

export default ProjectsMob;
