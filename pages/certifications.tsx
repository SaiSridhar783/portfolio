import React from "react";
import type { NextPage } from "next";
import { Box, Flex, OrderedList, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import BookView from "../components/Certifications/BookView";
import CertiTab from "../components/CertiTab";
import PageHeader from "../components/PageHeader";
import eduJSON from "../utils/education.json";
import certiJSON from "../utils/certificates.json";
import Education from "../components/Certifications/Education";
import Technical from "../components/Certifications/Technical";

const Fallback = () => (
	<Text color="black" fontSize="2xl" w="50%" textAlign="center">
		Hover Over a List Item to View Details!
	</Text>
);

const Certi: NextPage = () => {
	const [badge, setBadge] = useState("Document");
	const [hoverDisplay, setHoverDisplay] = React.useState<string | null>(null);
	const [cardProps, setCardProps] = React.useState({});

	const onMouseEnterEduHandler = (item: typeof eduJSON[0]) => {
		setBadge(item.type);
		setHoverDisplay("edu");
		setCardProps(item);
	};

	const onMouseEnterCertiHandler = (item: typeof certiJSON[0]) => {
		setBadge(item.type);
		setHoverDisplay("certi");
		setCardProps(item);
	};

	const onMouseLeaveHandler = () => {
		setBadge("Document");
		setHoverDisplay(null);
	};

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
					{/* Book Snip */}
					<Box
						w="5rem"
						h="5rem"
						bg="#00070d"
						position="relative"
						top="-10%"
						left="50.3%"
						transform="rotateZ(45deg)"
						zIndex={5}
					></Box>

					{/* Education List */}
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
							zIndex: 3,
						}}
						animate={{
							rotateY: [180, 0],
							transformOrigin: ["100%", "100%"],
							backgroundColor: [
								"rgba(200,200,200,1)",
								"rgba(200,200,200,0.7)",
							],
							skewY: [-5, -10, 10, 0],
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
									as="li"
									key={idx + "edu"}
									item={JSON.stringify(item)}
									onMouseEnter={() =>
										onMouseEnterEduHandler(item)
									}
									onMouseLeave={onMouseLeaveHandler}
								/>
							))}
						</OrderedList>
					</motion.div>

					{/* Techical List */}
					<Flex
						w="50%"
						bg="rgba(200,200,200,0.6)"
						borderRadius="3xl"
						borderBottomLeftRadius={0}
						flexDirection="column"
						alignItems="center"
						overflow="hidden"
						className="tech-list"
					>
						<CertiTab title="Technical" />
						<OrderedList
							alignSelf="flex-start"
							listStyleType="none"
							margin={0}
							width="100%"
							maxH="max-content"
							overflowY="auto"
							overflowX="hidden"
						>
							{certiJSON.map((item, idx) => (
								<BookView
									as="a"
									href={item.link}
									key={idx + "edu"}
									item={JSON.stringify(item)}
									onMouseEnter={() =>
										onMouseEnterCertiHandler(item)
									}
									onMouseLeave={onMouseLeaveHandler}
								/>
							))}
						</OrderedList>
					</Flex>
				</Flex>
				{/* Hover View */}
				<motion.div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-end",
						justifyContent: "center",
						height: "75vh",
						width: "40%",
						transformOrigin: "top",
					}}
					animate={{
						rotateX: [-90, 0],
						skewX: [0, -8, 8, 0],
					}}
					transition={{ duration: 1.5, delay: 2.2 }}
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
							zIndex={5}
						>
							{badge}
						</Box>
						<Flex
							p="1rem"
							justifyContent="center"
							alignItems="center"
						>
							{hoverDisplay &&
								(hoverDisplay === "edu" ? (
									// @ts-ignore
									<Education {...cardProps} />
								) : (
									<Technical />
								))}
							{!hoverDisplay && <Fallback />}
						</Flex>
					</Box>
				</motion.div>
			</Flex>
		</motion.div>
	);
};

export default Certi;
