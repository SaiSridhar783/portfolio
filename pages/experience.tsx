import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import PageHeader from "../components/PageHeader";

const Experience: NextPage = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<PageHeader
				title="Experience"
				layoutId="nav-experience"
				image="/images/experience.png"
			/>
		</motion.div>
	);
};

export default Experience;
