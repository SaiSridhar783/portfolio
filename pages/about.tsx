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
			<a
				href="https://drive.google.com/file/d/1PLogcZHSrf_AM1c7WIeLbnrxRQ6CmA9M/view?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
			>
				Resume{" "}
			</a>
		</motion.div>
	);
};

export default About;
