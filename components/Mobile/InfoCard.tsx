import { Box, Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { motion } from "framer-motion";

interface IInfoCardProps {
	orientation: "left" | "right";
}

const InfoCard: React.FC<IInfoCardProps> = ({ orientation, children }) => {
	return (
		<motion.div
			style={{
				display: "flex",
				flexDirection: "column",
				alignSelf: orientation === "left" ? "flex-start" : "flex-end",
				width: "85%",
				backgroundColor: "#ffffff05",
				padding: "1rem",
				marginTop: "1.5rem",
				textAlign: orientation,
				fontFamily: "Montserrat",
				borderRight:
					orientation === "left" ? "3px solid whitesmoke" : "none",
				borderLeft:
					orientation === "right" ? "3px solid whitesmoke" : "none",
				borderTopRightRadius: orientation === "left" ? "10px" : 0,
				borderBottomRightRadius: orientation === "left" ? "10px" : 0,
				borderTopLeftRadius: orientation === "right" ? "10px" : 0,
				borderBottomLeftRadius: orientation === "right" ? "10px" : 0,
			}}
			transition={{ duration: 3 }}
			animate={{ x: orientation === "left" ? [-500, 0] : [500, 0] }}
		>
			{children}
			<Text
				as="span"
				fontSize="0.7rem"
				bgColor="#ffffff10"
				p="0.2rem"
				mt="0.2rem"
				borderRadius="50%"
			></Text>
		</motion.div>
	);
};

export default InfoCard;
