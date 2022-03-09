import { Flex } from "@chakra-ui/react";
import * as React from "react";

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
		>
			Bankai
		</Flex>
	);
};

export default SkillsSection;
