import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Person from "../components/Person";
import type { NextPage } from "next";

interface IHomeProps {}

const Home: NextPage<IHomeProps> = (props) => {
	return (
		<Flex
			flexDir="column"
			justifyContent="center"
			alignItems="center"
			w="100vw"
			h="100vh"
			overflow="hidden"
		>
			<motion.div style={{ scale: 2 }} layoutId="floating-person">
				<Person height="200" width="400" />
			</motion.div>
		</Flex>
	);
};

export default Home;
