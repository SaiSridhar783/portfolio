import type { NextPage } from "next";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { Box, Heading } from "@chakra-ui/react";
import VisitingCard from "../components/VisitingCard";
import { cardHover } from "../utils/cardHover";
import { useEffect } from "react";

const Experience: NextPage = () => {
	useEffect(() => {
		cardHover();
	}, []);
	return (
		<motion.div animate={{ opacity: [0, 1] }}>
			<PageHeader
				title="Experience"
				layoutId="nav-experience"
				image="/images/experience.png"
			/>
			<Box px="5rem">
				<Heading fontFamily="nunito" color="white" mb="3rem">
					Work
				</Heading>
				<VisitingCard />
			</Box>
		</motion.div>
	);
};

export default Experience;
