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
			<Flex justifyContent="space-around" alignItems="center" w="70%">
				<NavTab
					title="Projects"
					image="/images/projects.png"
					href="/projects"
					titleId="nav-projects"
				/>
				<motion.div
					style={{ scale: 2 }}
					animate={{ opacity: [0, 1] }}
					layoutId="floating-person"
				>
					<Person height="200" width="400" />
				</motion.div>
				<NavTab
					title="Certifications"
					image="/images/certifications.png"
					href="/certifications"
					titleId="nav-certifications"
				/>
			</Flex>
			<Flex justifyContent="space-between" w="44%">
				<NavTab
					title="Experience"
					image="/images/experience.png"
					href="/experience"
					delay={0.1}
					titleId="nav-experience"
				/>
				<NavTab
					title="About Me"
					image="/images/resume.png"
					href="/about"
					style={{ position: "relative", top: "5rem" }}
					delay={0.2}
					titleId="nav-about"
				/>
				<NavTab
					title="Contact Me"
					image="/images/contact.png"
					href="/contact"
					delay={0.1}
					titleId="nav-contact"
				/>
			</Flex>
		</Flex>
	);
};

export default Home;
