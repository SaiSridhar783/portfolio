import { Flex } from "@chakra-ui/react";

interface IProps {}

const Block: React.FC<IProps> = () => (
	<Flex
		justifyContent="center"
		alignItems="center"
		h="100vh"
		w="100vw"
		px="10%"
	>
		<Flex
			bg="gray"
			p="1.5rem"
			borderRadius="2rem"
			boxShadow="0 0 10px skyblue"
			fontFamily="nunito"
			fontWeight="700"
		>
			This website is not optimized for Portrait/Mobile Devices yet 🤧
			<br />
			<br />
			Please use Desktop/Laptop for better experience. Sorry for the
			inconvenience.
		</Flex>
	</Flex>
);

export default Block;
