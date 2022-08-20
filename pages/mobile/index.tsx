import React from "react";
import type { NextPage } from "next";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import { motion } from "framer-motion";
import PersonMob from "../../components/Mobile/PersonMob";
import SideDrawer from "../../components/Mobile/SideDrawer";

const Home: NextPage = () => {
	const sideRef = React.useRef<HTMLDivElement>(null);

	return (
		<Flex
			px="1rem"
			pt="5rem"
			flexDir="column"
			alignItems="center"
			justifyContent="center"
			overflow="hidden"
		>
			<Head>
				<meta
					name="description"
					content="A portfolio website of Sai Sridhar Akula containing all the important details."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<SideDrawer forwardedRef={sideRef} />

			<Flex
				flexDir="column"
				justifyContent="center"
				alignItems="center"
				gap="1rem"
			>
				<motion.div
					initial={{ x: -500 }}
					animate={{ x: [-500, 0], opacity: [0, 1] }}
					transition={{ duration: 2.5, ease: "circOut" }}
				>
					<Heading
						color="white"
						fontSize="4xl"
						fontFamily="Montserrat"
						textAlign="center"
						mb="1rem"
					>
						Hello There!
					</Heading>
					<Heading
						as="h3"
						fontSize="2xl"
						color="whiteAlpha.800"
						fontFamily="nunito"
						textAlign="center"
					>
						I am&nbsp;
						<Text as="span" color="blue.400">
							Sai Sridhar Akula
						</Text>
						, a Fullstack and an App Developer specializing in
						Frontend.
					</Heading>
				</motion.div>

				{/* Floating Person */}
				<motion.div
					style={{ scale: 2.5 }}
					initial={{ x: 500 }}
					animate={{ x: [500, 0], opacity: [0, 1] }}
					transition={{ duration: 2.5, ease: "circOut" }}
					layoutId="floating-person"
				>
					<PersonMob height="100" width="120" />
				</motion.div>
				<motion.div
					initial={{ x: -500 }}
					animate={{ x: [-500, 0], opacity: [0, 1] }}
					transition={{ duration: 2.5, ease: "circOut" }}
				>
					<Button
						variant="solid"
						colorScheme="green"
						size="sm"
						marginTop="5rem"
						mb="1rem"
						onClick={() => sideRef.current?.click()}
					>
						Click Me!
					</Button>
				</motion.div>
			</Flex>
		</Flex>
	);
};

export default Home;
