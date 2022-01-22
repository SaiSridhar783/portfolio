import { Flex } from "@chakra-ui/react";
import * as React from "react";

interface ICertiTabProps {
	title: string;
}

const CertiTab: React.FC<ICertiTabProps> = ({ title }) => {
	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			width="100%"
			h="7.5%"
			p="0.6rem"
			bg="black"
			fontFamily="nunito"
			fontSize="1.2rem"
			color="whiteAlpha.600"
		>
			{title}
		</Flex>
	);
};

export default CertiTab;
