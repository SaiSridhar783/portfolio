import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import PageHeader from "../components/PageHeader";

const About: NextPage = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<PageHeader
				title="About Me"
				layoutId="nav-about"
				image="/images/resume.png"
			/>
			<Box
				w="100vw"
				h="100vh"
				overflowX="hidden"
				overflowY="auto"
				style={{ perspective: "38px" }}
			></Box>
		</motion.div>
	);
};

export default About;
