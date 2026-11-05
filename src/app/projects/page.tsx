import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/Projects/ProjectCard";
import proJSON from "@/data/projects.json";
import "@/styles/projects.scss";

export const metadata: Metadata = {
	title: "Projects of Sai Sridhar",
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
