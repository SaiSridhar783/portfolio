import { Box, Flex, Heading, Image, Text, Tooltip } from "@chakra-ui/react";
import Head from "next/head";
import * as React from "react";
import SideDrawer from "../../components/Mobile/SideDrawer";
import { motion } from "framer-motion";
import InfoCard from "../../components/Mobile/InfoCard";
import badgesData from "../../data/badges.json";

interface IAboutProps {}

const About: React.FC<IAboutProps> = (props) => {
	return (
		<motion.div animate={{ opacity: [0, 1] }}>
			<SideDrawer />
			<Head>
				<title>Information on Sai Sridhar</title>
			</Head>
			<Flex
				flexDirection="column"
				py="3rem"
				color="whiteAlpha.800"
				alignItems="center"
				textAlign="center"
			>
				<motion.div
					animate={{ opacity: [0, 1] }}
					transition={{ duration: 2 }}
				>
					<Heading fontSize="1.5rem" px="1rem">
						<Text as="span" color="whatsapp.500">
							Sai Sridhar Akula&nbsp;
						</Text>
						is my name.
					</Heading>
					<Heading fontSize="1.5rem" px="1rem">
						Website and App Development is my game.
					</Heading>
				</motion.div>
				<InfoCard orientation="left">
					I primarily deal with frontend and am familiar with backend,
					including SQL and NoSQL.
				</InfoCard>
				<InfoCard orientation="right">
					Pursuing my Bachelors in Mining Engineering from Indian
					Institute of Technology, Kharagpur.
				</InfoCard>
				<InfoCard orientation="left">
					I have some experience as a SDE Intern and a UI developer
					intern and actively contribute to open source projects.
				</InfoCard>
				{/* <InfoCard orientation="right">
					Whats that? You would like to know more about me? Or perhaps
					you would like to get in touch? Connect with me!
				</InfoCard> */}
				<Text
					as="h3"
					mt="3rem"
					w="100%"
					py="1rem"
					backgroundColor="rgba(255,255,255,0.1)"
					fontWeight="bold"
					fontSize="1.5rem"
				>
					My Skillset
				</Text>
				<Flex
					flexWrap="wrap"
					maxWidth="100%"
					alignItems="center"
					justifyContent="center"
					gap="1rem"
					p="2rem"
				>
					{badgesData.map((badge, idx) => (
						<motion.div
							key={badge.name + idx / 7.1}
							style={{ position: "relative" }}
							initial={{ right: -800 }}
							animate={{ right: [-800, 0] }}
							transition={{
								delay: 1 + idx / 5,
								ease: "backOut",
								duration: 3,
							}}
						>
							<Tooltip
								d="inline-block"
								hasArrow
								label={badge.name.toLocaleUpperCase()}
								transitionDelay={idx * 10 + "ms"}
								key={badge.id + "badge"}
							>
								<Box
									p="1.5"
									backgroundColor={badge.color}
									border="2px solid black"
									borderRadius={10}
								>
									<Image
										alt={badge.name}
										src={badge.icon}
										height="30px"
										filter={
											badge.name == "nextjs"
												? "invert(1)"
												: ""
										}
									/>
								</Box>
							</Tooltip>
						</motion.div>
					))}
				</Flex>
			</Flex>
		</motion.div>
	);
};

export default About;
