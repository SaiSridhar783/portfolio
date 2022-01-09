import type { NextPage } from "next";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { Box, Flex, Heading } from "@chakra-ui/react";
import VisitingCard from "../components/VisitingCard";

const Experience: NextPage = () => {
	return (
		<motion.div
			animate={{ opacity: [0, 1] }}
			style={{
				paddingBottom: "3rem",
			}}
		>
			<PageHeader
				title="Experience"
				layoutId="nav-experience"
				image="/images/experience.png"
			/>
			<Box px="5rem">
				<Heading
					as="h3"
					fontSize="3xl"
					fontFamily="nunito"
					color="white"
					mb="3rem"
				>
					Work
				</Heading>
				<Flex alignItems="center">
					<VisitingCard
						title="UI Development Intern"
						company="Dotgo Pvt. Ltd."
						logo="/images/company/dotgo.jfif"
						duration="May 03, 2021 - June 30, 2021"
					/>
					<VisitingCard
						delay={0.5}
						title="Freelance Mentor"
						company="NxtWave Disruptive Tech. Pvt. Ltd."
						logo="/images/company/nxtwave.png"
						duration="March 02, 2021 - Present"
					/>
				</Flex>
				<Heading
					as="h3"
					fontSize="3xl"
					fontFamily="nunito"
					color="white"
					my="3rem"
				>
					Others
				</Heading>
			</Box>
		</motion.div>
	);
};

export default Experience;
