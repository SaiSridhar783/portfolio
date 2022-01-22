import React from "react";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";
import { motion } from "framer-motion";
import Popup from "./Popup";

interface IVisitingCardProps {
	company: string;
	compURL: string;
	title: string;
	logo: string;
	duration: string;
	delay?: number;
}

const VisitingCard: React.FC<IVisitingCardProps> = ({
	children,
	company,
	title,
	logo,
	duration,
	compURL,
	delay = 0,
}) => {
	const cardRef = React.useRef(null);
	const { style, ...mouseHandlers } = use3dEffect(cardRef);

	return (
		<Box>
			<animated.div
				ref={cardRef}
				style={{
					minWidth: "26rem",
					height: "15rem",
					marginRight: "3rem",
					scale: 1.3,
					...style,
				}}
				{...mouseHandlers}
			>
				<motion.div
					style={{
						width: "100%",
						height: "100%",
						backgroundColor: "#ccc",
						borderRadius: "2rem",
						padding: "1rem",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						boxShadow:
							"rgb(0 0 0 / 90%) 2px -1px 4px, rgb(255 255 255 / 60%) 3px -2px 0px 1px",
					}}
					animate={{
						translateY: [-500, 0],
						skewY: [20, 0],
						skewX: [20, 0],
					}}
					transition={{ delay: delay }}
				>
					<Flex
						as="a"
						alignItems="center"
						justifyContent="space-between"
						target="_blank"
						rel="noreferrer noopener"
						href={compURL}
						cursor="pointer"
					>
						<Image
							src={logo}
							alt={company}
							width={40}
							height={40}
							className="company-logo"
						/>

						<Text
							backgroundColor="#565656"
							color="transparent"
							textShadow="2px 2px 3px rgba(255,255,255,0.5)"
							backgroundClip="text"
							fontFamily="Montserrat"
							fontWeight="700"
						>
							{company}
						</Text>
					</Flex>
					<Flex
						justifyContent="center"
						fontSize="2xl"
						alignItems="center"
						backgroundColor="#565656"
						color="transparent"
						textShadow="2px 2px 2px rgba(255,255,255,0.5)"
						backgroundClip="text"
						fontFamily="Nunito"
						fontWeight="900"
					>
						{title}
					</Flex>
					<Flex
						justifyContent="flex-end"
						backgroundColor="#565656"
						color="transparent"
						textShadow="2px 2px 3px rgba(255,255,255,0.5)"
						backgroundClip="text"
						fontFamily="Poppins"
						fontWeight="600"
					>
						{duration}
					</Flex>
				</motion.div>
			</animated.div>
			<Flex justifyContent="flex-end">
				<Popup heading="Learn More">{children}</Popup>
			</Flex>
		</Box>
	);
};

export default VisitingCard;
