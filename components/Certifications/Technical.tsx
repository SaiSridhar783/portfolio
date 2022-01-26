import * as React from "react";
import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import certiJSON from "../../utils/certificates.json";
import { motion } from "framer-motion";

type ITechnicalProps = {} & typeof certiJSON[0];

const Technical: React.FC<ITechnicalProps> = (props) => {
	const height = useBreakpointValue({ base: "15rem", lg: "13.5rem" });
	return (
		<motion.div
			animate={{ opacity: [0, 1] }}
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-around",
				alignItems: "flex-start",
				color: "whitesmoke",
				height: height,
				width: "100%",
				backgroundImage:
					"linear-gradient(90deg, rgba(80,80,100,1) 31%, rgba(85,90,108,1) 81%)",
				padding: "1.5rem",
				position: "relative",
				top: "-3.8rem",
				borderRadius: "1rem",
			}}
		>
			<Flex
				justifyContent="space-around"
				alignItems="center"
				width="100%"
			>
				<Image
					src={props.logo}
					alt={props.name}
					height={80}
					width={80}
					layout="intrinsic"
					className="edu-logo"
				/>
				<Text as="h3" ml="0.5rem" fontFamily="nunito" fontWeight="700">
					{props.institution}
				</Text>
			</Flex>
			<Flex w="100%" justifyContent="center" alignItems="center">
				<Text fontFamily="nunito" fontSize="1.5rem">
					{props.name}
				</Text>
			</Flex>
			<Flex justifyContent="center" alignItems="flex-end" width="100%">
				<Text textAlign="center" color="#ccc" mt="1rem">
					Click the list item to learn more!
				</Text>
			</Flex>
		</motion.div>
	);
};

export default Technical;
