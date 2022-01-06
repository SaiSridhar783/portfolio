import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import PageHeader from "../../components/PageHeader";

const Projects: NextPage = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<PageHeader
				title="Projects"
				layoutId="nav-projects"
				image="/images/projects.png"
			/>
		</motion.div>
	);
};

export default Projects;
