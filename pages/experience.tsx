import type { NextPage } from "next";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { Box, Flex, Heading } from "@chakra-ui/react";
import VisitingCard from "../components/VisitingCard";

const Experience: NextPage = () => {
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
				<Flex >
					<VisitingCard />
					<VisitingCard />
				</Flex>
			</Box>
		</motion.div>
	);
};

export default Experience;
