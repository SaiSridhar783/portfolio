import React from "react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";
import Overview from "../components/About/Overview";
import SkillsSection from "../components/About/SkillsSection";
import BottomSection from "../components/About/BottomSection";
import Head from "next/head";

const About: NextPage = () => {
	return (
		<motion.div animate={{ opacity: [0, 1] }}>
			<Head>
				<title>Info on Sai Sridhar</title>
			</Head>
			<Link href="/home" passHref>
				<ArrowLeftIcon
					position="absolute"
					zIndex={20}
					top={8}
					left={8}
					height="30px"
					width="25px"
					_hover={{ cursor: "pointer", color: "white" }}
					color="whiteAlpha.600"
				/>
			</Link>
			<Box
				w="100vw"
				h="100vh"
				overflowX="hidden"
				overflowY="auto"
				style={{ perspective: "10px" }}
			>
				<Overview />
				<SkillsSection />
				<BottomSection />
			</Box>
		</motion.div>
	);
};

export default About;
