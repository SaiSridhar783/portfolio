import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Flex,
	FormLabel,
	Heading,
	Input,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Social from "../components/Social";

const mainDelay = 1;

const initialState = {
	name: "",
	email: "",
	message: "",
};
const reducer = (
	state: typeof initialState,
	action: { type: "UPDATE" | "RESET"; val?: string; elem?: string }
) => {
	if (action.type === "UPDATE") {
		return {
			...state,
			[action.elem!]: action.val,
		};
	}
	if (action.type === "RESET") {
		return {
			...initialState,
		};
	}
	return state;
};

const Contact: NextPage = () => {
	const [formState, dispatch] = React.useReducer(reducer, initialState);

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert(JSON.stringify(formState));
		dispatch({ type: "RESET" });
	};

	return (
		<Box>
			<Link href="/home" passHref replace>
				<ArrowBackIcon
					cursor="pointer"
					transition="color 200ms"
					color="whiteAlpha.500"
					_hover={{ color: "white", transition: "color 300ms" }}
					w={8}
					h={8}
					position="absolute"
					top={10}
					left={10}
					zIndex={10}
				/>
			</Link>
			{/* Main Content */}
			<motion.div
				style={{
					padding: "7rem 10rem",
					paddingBottom: 0,
					position: "relative",
					display: "flex",
					flexDirection: "column",
					width: "60%",
				}}
				animate={{ bottom: [-600, 0], opacity: [0, 1] }}
			>
				<a
					href="https://www.freepik.com/vectors/people"
					target="_blank"
					rel="noopener noreferrer"
					style={{ position: "absolute", top: 0, opacity: "0.1" }}
				>
					People vector created by pch.vector - www.freepik.com
				</a>
				<Heading
					color="white"
					fontFamily="Montserrat"
					textAlign="center"
				>
					Connect With Me
				</Heading>
				<Box position="relative" top={15}>
					<Image
						src="/images/bgblur.png"
						width={600}
						height={300}
						alt="Connect"
						layout="intrinsic"
					/>
					<Flex justifyContent="center" mt="1.5rem">
						<Social />
					</Flex>
					<Flex
						justifyContent="center"
						alignItems="center"
						flexWrap="wrap"
						mt="1.5rem"
					>
						<Text w="50%" textAlign="center" color="gray.600">
							Looking forward to make your acquaintance!
						</Text>
					</Flex>
				</Box>
			</motion.div>
			{/* Bookmark */}
			<motion.div
				style={{
					position: "absolute",
					top: 0,
					right: "12vw",
					zIndex: 3,
					height: "88vh",
					backgroundColor: "#2f4353",
					backgroundImage:
						"linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)",

					width: "30vw",
					borderRadius: "0 0 20% 20%",
					boxShadow: "2px 0 3px rgba(255,255,255,0.8)",
				}}
				animate={{ height: ["0vh", "88vh"] }}
				transition={{ delay: mainDelay }}
			>
				<Flex
					flexDir="column"
					justifyContent="center"
					alignItems="center"
					position="relative"
				>
					<motion.div
						style={{ position: "relative" }}
						animate={["start", "bounce"]}
						transition={{ delay: mainDelay + 0.5 }}
						variants={{
							start: {
								top: [-200, 0],
								transition: { delay: mainDelay + 3.5 },
							},
							bounce: {
								scale: [1.2, 0.8, 1],
								transition: { delay: mainDelay + 4 },
							},
						}}
					>
						<Heading
							as="h3"
							fontSize="3xl"
							mt="1rem"
							mb="2rem"
							color="black"
							bg="linear-gradient(to right, #777 40%, #333)"
							backgroundClip="text"
							fill="transparent"
						>
							Drop a Quick Message!
						</Heading>
					</motion.div>
					<motion.div
						style={{
							backgroundColor: "#1a202c",
							padding: "2rem",
							marginTop: "1rem",
							borderRadius: "4rem",
						}}
						animate={{ opacity: [0, 1] }}
						transition={{ delay: mainDelay + 0.5 }}
					>
						<form onSubmit={(e) => onSubmitHandler(e)}>
							<motion.div
								style={{
									marginBottom: "2rem",
									position: "relative",
								}}
								animate={{ top: [-400, 50, 0] }}
								transition={{ delay: mainDelay + 3 }}
							>
								<FormLabel
									color="whiteAlpha.600"
									htmlFor="name"
								>
									Name
								</FormLabel>
								<Input
									type="text"
									id="name"
									variant="filled"
									colorScheme="telegram"
									_focus={{ bg: "white" }}
									value={formState.name}
									onChange={(e) => {
										dispatch({
											type: "UPDATE",
											val: e.target.value,
											elem: e.target.id,
										});
									}}
									required
								/>
							</motion.div>
							<motion.div
								style={{
									marginBottom: "2rem",
									position: "relative",
								}}
								animate={{ top: [-400, 50, 0] }}
								transition={{ delay: mainDelay + 2.3 }}
							>
								<FormLabel
									color="whiteAlpha.600"
									htmlFor="email"
								>
									Email address
								</FormLabel>
								<Input
									id="email"
									type="email"
									variant="filled"
									colorScheme="telegram"
									_focus={{ bg: "white" }}
									value={formState.email}
									onChange={(e) => {
										dispatch({
											type: "UPDATE",
											val: e.target.value,
											elem: e.target.id,
										});
									}}
									required
								/>
							</motion.div>
							<motion.div
								style={{
									marginBottom: "2rem",
									position: "relative",
								}}
								animate={{ top: [-600, 100, 0] }}
								transition={{ delay: mainDelay + 1.8 }}
							>
								<FormLabel
									color="whiteAlpha.600"
									htmlFor="message"
								>
									Message
								</FormLabel>
								<Textarea
									id="message"
									variant="filled"
									_focus={{ bg: "white" }}
									value={formState.message}
									onChange={(e) => {
										dispatch({
											type: "UPDATE",
											val: e.target.value,
											elem: e.target.id,
										});
									}}
									required
								/>
							</motion.div>
							<motion.div
								style={{
									display: "flex",
									justifyContent: "center",
									position: "relative",
								}}
								animate={{ bottom: [-400, 50, 0] }}
								transition={{ delay: mainDelay + 1 }}
							>
								<Button type="submit" colorScheme="green">
									Submit
								</Button>
							</motion.div>
						</form>
					</motion.div>
				</Flex>
			</motion.div>
			{/* Badge */}
			<motion.div
				layoutId={`nav-contact-icon`}
				animate={{ scale: [0.2, 0.5, 1] }}
				transition={{ duration: 0.8 }}
				style={{
					width: "110px",
					height: "110px",
					borderRadius: "55px",
					paddingBottom: "1.4rem",
					background: `url("/images/contact.png")`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					overflow: "hidden",
					position: "absolute",
					bottom: "20px",
					right: "20px",
				}}
			></motion.div>
		</Box>
	);
};

export default Contact;
