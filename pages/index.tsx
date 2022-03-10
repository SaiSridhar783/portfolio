import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import { motion } from "framer-motion";
import Person from "../components/Person";

const Home: NextPage = () => {
	return (
		<Flex
			pl="6rem"
			pt="3rem"
			flexDir={{ base: "column-reverse", lg: "row" }}
			alignItems="center"
			w="100vw"
			h="100vh"
			overflow="hidden"
			display="flex"
		>
			<Head>
				<meta
					name="description"
					content="A portfolio website of Sai Sridhar Akula containing all the important details."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<motion.div
				animate={{ left: ["-70%", "0%"] }}
				transition={{ duration: 3, ease: "circOut" }}
				style={{
					width: "60%",
					padding: "10rem 1.5rem",
					position: "relative",
				}}
			>
				<Flex flexDir="column" justifyContent="center">
					<Heading
						color="white"
						fontSize="5xl"
						fontFamily="Montserrat"
					>
						Hello There!
					</Heading>
					<br />
					<Heading as="h2" color="whiteAlpha.800" fontFamily="nunito">
						I am&nbsp;
						<Text as="span" color="blue.400">
							Sai Sridhar Akula
						</Text>
						, a Fullstack and an App Developer specializing in
						Frontend.
					</Heading>
					<Link href="/home" passHref>
						<motion.div
							style={{
								alignSelf: "flex-start",
								marginTop: "3rem",
							}}
							animate={{ scale: [0, 1] }}
						>
							<Button
								variant="solid"
								colorScheme="green"
								size="lg"
							>
								Click Me!
							</Button>
						</motion.div>
					</Link>
				</Flex>
			</motion.div>

			{/* Floating Person */}
			<motion.div
				style={{ scale: 2.5 }}
				initial={{ y: -600, x: 500 }}
				animate={{ y: [-600, 0], x: [500, 0], opacity: [0, 1] }}
				transition={{ duration: 2.5, ease: "circOut" }}
				layoutId="floating-person"
			>
				<Person height="200" width="400" />
			</motion.div>
		</Flex>
	);
};

export default Home;
