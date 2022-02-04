import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import PageHeader from "../../components/PageHeader";
import ProjectCard from "../../components/Projects/ProjectCard";
import proJSON from "../../data/projects.json";

const Projects: NextPage = () => {
	return (
		<Box>
			<PageHeader
				title="Projects"
				layoutId="nav-projects"
				image="/images/projects.png"
			/>
			<Flex gap="3rem" pl="3%" flexWrap="wrap" pb="5rem">
				{proJSON.map((proj, idx) => (
					// @ts-ignore
					<ProjectCard key={idx + "pro"} {...proj} />
				))}
			</Flex>
		</Box>
	);
};

export default Projects;
