import type { NextPage } from "next";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import {
	Box,
	Flex,
	Heading,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import VisitingCard from "../components/VisitingCard";
import Card from "../components/Card";
import { ChevronRightIcon } from "@chakra-ui/icons";

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
					fontSize="4xl"
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
					>
						Working with ReactJS and NodeJS on a daily basis to
						assist the company in it&apos;s daily ventures.
						<Text
							as="a"
							d="block"
							mt="1rem"
							fontSize="1rem"
							textAlign="right"
							color="blue"
							_hover={{ color: "blue.600" }}
							target="_blank"
							href="https://drive.google.com/file/d/1Mod8j222ROb6jagWL3JEwG7tnNeHkKzp/view?usp=sharing"
							rel="noreferrer noopener"
						>
							View Credential <ChevronRightIcon />
						</Text>
					</VisitingCard>
					<VisitingCard
						delay={0.3}
						title="Freelance Mentor"
						company="NxtWave Disruptive Tech. Pvt. Ltd."
						logo="/images/company/nxtwave.png"
						duration="March 02, 2021 - Present"
					>
						Resolving the queries of learners involving HTML, CSS,
						JS, NodeJS, ReactJS, SQL and Python.
					</VisitingCard>
				</Flex>
				<Heading
					as="h3"
					fontSize="4xl"
					fontFamily="nunito"
					color="white"
					mb="3rem"
					mt="5rem"
				>
					Others
				</Heading>
				<Flex>
					<Card
						title="Hacktoberfest '21"
						src="/images/extra/hacktoberfest.png"
						href="https://hacktoberfest.digitalocean.com/"
					>
						<UnorderedList spacing="5">
							<ListItem>
								Contributed to several Open Source projects.
							</ListItem>
							<ListItem>
								Successfully submitted and got approved for 7
								PR&apos;s.
							</ListItem>
						</UnorderedList>
					</Card>
					<Card
						title="GREAT STEP '19"
						src="/images/extra/greatstep.png"
						href="https://www.facebook.com/greatstep/"
						delay={0.1}
					>
						<UnorderedList spacing="4">
							<ListItem>
								Event Manager at the Departmental Fest.
							</ListItem>
							<ListItem>
								Handled the smooth flow of events such as
								Geobotics.
							</ListItem>
							<ListItem>
								Managed accomodation of participants.
							</ListItem>
						</UnorderedList>
					</Card>
					<Card
						title="Google Cloud Ready"
						src="/images/extra/cloudready.webp"
						href="https://www.cloudskillsboost.google/public_profiles/4df25a7d-f70f-4651-a3d3-3754910858e6"
						delay={0.2}
					>
						<UnorderedList spacing="5">
							<ListItem>
								Successfully achieved the penultimate milestone.
							</ListItem>
							<ListItem>
								Got accustomed with the various function of GCP
								and the usage of Qwiklabs.
							</ListItem>
						</UnorderedList>
					</Card>
				</Flex>
			</Box>
		</motion.div>
	);
};

export default Experience;
