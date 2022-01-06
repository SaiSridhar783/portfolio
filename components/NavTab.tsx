import { FlexProps, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import * as React from "react";
import { motion } from "framer-motion";

interface INavTabProps {
	title: string;
	image: string;
	href: string;
	delay?: number;
	link?: boolean;
}

const NavTab: NextPage<INavTabProps & FlexProps> = ({
	title,
	image,
	href,
	delay = 0,
	style,
	link,
}) => {
	const TextElem = () =>
		!link ? (
			<Text color="white" bgColor="rgba(0,0,0,0.6)" w="100%">
				{title}
			</Text>
		) : (
			<Text
				as="a"
				target="_blank"
				href={href}
				color="white"
				bgColor="rgba(0,0,0,0.6)"
				w="100%"
				zIndex={10}
			>
				{title}
			</Text>
		);

	let X = Link; //@ts-ignore
	if (link) X = motion.div;

	return (
		<X href={href}>
			<motion.div
				style={{
					width: "120px",
					height: "120px",
					borderRadius: "60px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
					paddingBottom: "1.4rem",
					alignItems: "center",
					textAlign: "center",
					background: image ? `url(${image})` : "gray",
					backgroundSize: "cover",
					backgroundPosition: "center",
					overflow: "hidden",
					cursor: "pointer",
					zIndex: 2,
					...style,
				}}
				animate={{ rotateY: [-90, 0] }}
				transition={{ delay: delay }}
			>
				<TextElem />
			</motion.div>
		</X>
	);
};

export default NavTab;
