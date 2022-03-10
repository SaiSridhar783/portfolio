import { Flex } from "@chakra-ui/react";
import * as React from "react";

interface IBottomSectionProps {}

const BottomSection: React.FC<IBottomSectionProps> = (props) => {
	return (
		<Flex
			w="100%"
			h="100vh"
			bgColor="rgb(0,7,13)"
			position="relative"
			zIndex={2}
			top="100%"
			transform="translateZ(-10px) scale(2) translateY(20rem)"
			style={{ transformStyle: "preserve-3d" }}
		>
			Bankai
		</Flex>
	);
};

export default BottomSection;
