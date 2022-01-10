import { Box, Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ICardProps {
	title: string;
	src: string;
	href: string;
	delay?: number;
}

const Card: React.FC<ICardProps> = ({
	title,
	src,
	href,
	children,
	delay = 0,
}) => {
	return (
		<motion.div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "18rem",
				height: "18rem",
				backgroundColor: "#9a9a95",
				borderRadius: "2rem",
				overflow: "hidden",
				marginRight: "3rem",
				boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.3)",
			}}
			whileInView={{ rotateY: [90, 0], opacity: [0.1, 1] }}
			transition={{ delay: delay }}
		>
			<Flex
				as="a"
				width="100%"
				height="25%"
				p="1.5rem"
				justifyContent="space-between"
				alignItems="center"
				bgColor="rgba(0,0,0,0.6)"
				cursor="pointer"
				target="_blank"
				href={href}
			>
				<Image src={src} height={50} width={50} alt={title} />
				<Text color="white" fontFamily="nunito">
					{title}
				</Text>
			</Flex>
			<Box p="1.5rem">{children}</Box>
		</motion.div>
	);
};

export default Card;
