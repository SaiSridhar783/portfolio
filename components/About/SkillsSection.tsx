import * as React from "react";
import { Box, Flex, Heading, Image, Tooltip } from "@chakra-ui/react";
import badgesData from "../../data/badges.json";
import { motion } from "framer-motion";

interface ISkillsSectionProps {}

const SkillsSection: React.FC<ISkillsSectionProps> = (props) => {
	return (
		<Flex
			w="100%"
			h="100vh"
			bgColor="gray.700"
			position="relative"
			zIndex={3}
			top="100%"
			transform="translateZ(-10px) scale(2)"
			style={{ transformStyle: "preserve-3d" }}
			alignItems="center"
			justifyContent="space-around"
			fontFamily="Montserrat"
			flexDirection={{ base: "column", xl: "row" }}
		>
			<Heading
				w={{ base: "50%", xl: "40%" }}
				textAlign="center"
				color="whiteAlpha.700"
				textTransform="capitalize"
				transform={{
					base: "",
					xl: "translateZ(10px) scale(0.5) translateX(500px)",
				}}
				zIndex={4}
			>
				Here are some of the skills you can count on me for
			</Heading>
			<Flex
				flexWrap="wrap"
				position="relative"
				w="60%"
				justifyContent="center"
				alignItems="center"
				//transform="translateZ(5px) scale(0.7) translateX(-100px)"
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
								mx="3"
								my="6"
								p="2"
								backgroundColor={badge.color}
								border="2px solid black"
								borderRadius={10}
							>
								<Image
									alt={badge.name}
									src={badge.icon}
									height="50px"
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
	);
};

export default SkillsSection;
