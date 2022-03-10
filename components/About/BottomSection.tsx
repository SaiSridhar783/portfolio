import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";

interface IBottomSectionProps {}

const BottomSection: React.FC<IBottomSectionProps> = (props) => {
	return (
		<Flex
			w="100%"
			bgColor="rgb(0,7,13)"
			position="relative"
			zIndex={2}
			top="100%"
			transform="translateZ(-10px) scale(2)"
			style={{ transformStyle: "preserve-3d" }}
			fontFamily="poppins"
			px="2rem"
			flexDirection="column"
			alignItems="center"
			pt="22rem"
		>
			<Text
				color="whiteAlpha.800"
				textAlign="center"
				w="100%"
				fontSize="2rem"
			>
				That is enough about me. Tell me about you. Connect with me!
			</Text>
			<Text
				textTransform="capitalize"
				color="whiteAlpha.600"
				textAlign="center"
				w="100%"
				pt="3rem"
			>
				&copy; Copyright 2022. Sai Sridhar Akula. All Rights Reserved.
			</Text>
		</Flex>
	);
};

export default BottomSection;
