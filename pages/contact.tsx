import { ArrowBackIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
	Textarea,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";

const Contact: NextPage = () => {
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
				/>
			</Link>
			<motion.div
				style={{
					position: "absolute",
					top: 0,
					right: "12vw",
					zIndex: 3,
					height: "88vh",
					backgroundColor: "gray",
					width: "30vw",
					borderRadius: "0 0 20% 20%",
					boxShadow: "2px 0 3px rgba(255,255,255,0.8)",
				}}
				animate={{ height: ["0vh", "88vh"] }}
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
						transition={{ delay: 0.5 }}
						variants={{
							start: {
								top: [-200, 0],
								transition: { delay: 0.5 },
							},
							bounce: {
								scale: [1.2, 0.8, 1],
								transition: { delay: 1 },
							},
						}}
					>
						<Heading
							as="h3"
							fontSize="3xl"
							mt="1rem"
							mb="2rem"
							color="black"
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
						transition={{ delay: 0.5 }}
					>
						<FormControl mb="2rem">
							<FormLabel color="whiteAlpha.600" htmlFor="name">
								Name
							</FormLabel>
							<Input
								type="text"
								id="name"
								variant="filled"
								colorScheme="telegram"
								_focus={{ bg: "white" }}
							/>
						</FormControl>
						<FormControl mb="2rem">
							<FormLabel color="whiteAlpha.600" htmlFor="email">
								Email address
							</FormLabel>
							<Input
								id="email"
								type="email"
								variant="filled"
								colorScheme="telegram"
								_focus={{ bg: "white" }}
							/>
						</FormControl>
						<FormControl mb="2rem">
							<FormLabel color="whiteAlpha.600" htmlFor="message">
								Message
							</FormLabel>
							<Textarea
								variant="filled"
								_focus={{ bg: "white" }}
							/>
						</FormControl>
						<Flex justifyContent="center">
							<Button colorScheme="green">Submit</Button>
						</Flex>
					</motion.div>
				</Flex>
			</motion.div>
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
