import { Box, Flex } from "@chakra-ui/react";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";
import React from "react";

interface IVisitingCardProps {
	company: string;
	title: string;
	logo: string;
	duration: string;
}

const VisitingCard: React.FC<IVisitingCardProps> = ({
	company,
	title,
	logo,
	duration,
}) => {
	const cardRef = React.useRef(null);
	const { style, ...mouseHandlers } = use3dEffect(cardRef);

	return (
		<animated.div
			ref={cardRef}
			style={{
				width: "26rem",
				height: "15rem",
				marginRight: "3rem",
				...style,
			}}
			{...mouseHandlers}
		>
			<Flex
				bg="#ccc"
				w="100%"
				h="100%"
				borderRadius="2rem"
				padding="1rem"
			>
				Bankai
			</Flex>
		</animated.div>
	);
};

export default VisitingCard;
