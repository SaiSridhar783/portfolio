import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import PageHeader from "../../components/PageHeader";
import ProjectCard from "../../components/Projects/ProjectCard";

const Projects: NextPage = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<PageHeader
				title="Projects"
				layoutId="nav-projects"
				image="/images/projects.png"
			/>
			<Flex gap="2rem" px="5%">
				<ProjectCard />
			</Flex>
		</motion.div>
	);
};

export default Projects;
