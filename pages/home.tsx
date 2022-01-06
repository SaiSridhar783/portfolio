import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Person from "../components/Person";
import type { NextPage } from "next";
import NavTab from "../components/NavTab";

const Home: NextPage = () => {
	return (
		<Flex
			flexDir="column"
			justifyContent="center"
			alignItems="center"
			w="100vw"
			h="100vh"
			overflow="hidden"
		>
			<Flex justifyContent="space-around" w="70%">
				<NavTab
					title="Projects"
					image="/images/projects.png"
					href="/projects"
				/>
				<motion.div style={{ scale: 2 }} layoutId="floating-person">
					<Person height="200" width="400" />
				</motion.div>
				<NavTab
					title="Certifications"
					image="/images/certifications.png"
					href="/certifications"
				/>
			</Flex>
			<Flex justifyContent="space-between" w="44%">
				<NavTab
					title="Experience"
					image="/images/experience.png"
					href="/about"
					delay={0.1}
				/>
				<NavTab
					title="Resume"
					image="/images/resume.png"
					href="https://drive.google.com/file/d/1PLogcZHSrf_AM1c7WIeLbnrxRQ6CmA9M/view?usp=sharing"
					style={{ position: "relative", top: "5rem" }}
					delay={0.2}
					link
				/>
				<NavTab
					title="Contact Me"
					image="/images/contact.png"
					href="/contact"
					delay={0.1}
				/>
			</Flex>
		</Flex>
	);
};

export default Home;
