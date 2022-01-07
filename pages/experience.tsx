import type { NextPage } from "next";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { Box, Heading } from "@chakra-ui/react";

const Experience: NextPage = () => {
	return (
		<motion.div animate={{ opacity: [0, 1] }}>
			<PageHeader
				title="Experience"
				layoutId="nav-experience"
				image="/images/experience.png"
			/>
			<Box>
				<Heading color="white">Work</Heading>
			</Box>
		</motion.div>
	);
};

export default Experience;
