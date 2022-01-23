import { Box, Flex, OrderedList, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useState } from "react";
import BookView from "../components/Certifications/BookView";
import CertiTab from "../components/CertiTab";
import PageHeader from "../components/PageHeader";
import eduJSON from "../utils/education.json";
import certiJSON from "../utils/certificates.json";

const Certi: NextPage = () => {
	const [badge, setBadge] = useState("Document");

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<PageHeader
				title="Certifications"
				layoutId="nav-certifications"
				image="/images/certifications.png"
			/>
			<Flex>
				<Flex
					w="50%"
					maxH="75vh"
					minH="75vh"
					borderRadius="3xl"
					ml="5%"
				>
					<Box
						w="5rem"
						h="5rem"
						bg="#00070d"
						position="relative"
						top="-10%"
						left="50.3%"
						transform="rotateZ(45deg)"
						zIndex={1}
					></Box>

					<motion.div
						style={{
							width: "50%",
							backgroundColor: "rgba(200,200,200,0.7)",
							borderRadius: "1.5rem",
							borderBottomRightRadius: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							overflow: "hidden",
						}}
						animate={{
							rotateY: [180, 0],
							transformOrigin: ["100%", "100%"],
							backgroundColor: [
								"rgba(200,200,200,1)",
								"rgba(200,200,200,0.7)",
							],
							skewY: [-5, 0],
							preserveAlpha: true,
						}}
						transition={{ duration: 2, delay: 0.5 }}
					>
						<CertiTab title="Education" />
						<OrderedList
							alignSelf="flex-start"
							listStyleType="none"
							margin={0}
						>
							{eduJSON.map((item, idx) => (
								<BookView
									key={idx + "edu"}
									item={JSON.stringify(item)}
									onMouseEnter={() => setBadge(item.type)}
									onMouseLeave={() => setBadge("Document")}
								/>
							))}
						</OrderedList>
					</motion.div>
					<Flex
						w="50%"
						bg="rgba(200,200,200,0.6)"
						borderRadius="3xl"
						borderBottomLeftRadius={0}
						flexDirection="column"
						alignItems="center"
						overflow="hidden"
					>
						<CertiTab title="Technical" />
						<OrderedList
							alignSelf="flex-start"
							listStyleType="none"
							margin={0}
							width="100%"
						>
							{certiJSON.map((item, idx) => (
								<BookView
									key={idx + "edu"}
									item={JSON.stringify(item)}
									onMouseEnter={() => setBadge(item.type)}
									onMouseLeave={() => setBadge("Document")}
								/>
							))}
						</OrderedList>
					</Flex>
				</Flex>
				<Flex
					flexDir="column"
					justifyContent="center"
					alignItems="flex-end"
					h="75vh"
					w="40%"
				>
					<Box
						w="80%"
						h="50%"
						bgImage="radial-gradient(#d6d7d8,#78808a)"
						borderRadius="1rem"
						overflow="hidden"
						color="whiteAlpha.600"
					>
						<Box
							position="relative"
							bgColor="black"
							h="25px"
							w="100%"
							textAlign="center"
							transform="rotate(45deg)"
							mt="10%"
							ml="38%"
						>
							{badge}
						</Box>
						<Flex
							p="1rem"
							justifyContent="center"
							alignItems="center"
						>
							<Text
								color="black"
								fontSize="2xl"
								w="50%"
								textAlign="center"
							>
								Hover Over a List Item to View Details!
							</Text>
						</Flex>
					</Box>
				</Flex>
			</Flex>
		</motion.div>
	);
};

export default Certi;
