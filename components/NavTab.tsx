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
	titleId: string;
}

const NavTab: NextPage<INavTabProps & FlexProps> = ({
	title,
	image,
	href,
	delay = 0,
	style,
	titleId,
}) => {
	return (
		<Link href={href} passHref>
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
				animate={["start", "standing"]}
				whileHover="hovering"
				transition={{ delay: delay }}
				layoutId={`${titleId}-icon`}
				variants={{
					standing: {
						transition: {
							ease: "easeInOut",
							duration: 5,
							repeat: Infinity,
							delay: delay * 10,
						},
						opacity: [0.6, 1, 0.6],
					},
					start: { rotateY: [-90, 0] },
					hovering: { scale: 1.2, opacity: 1 },
				}}
			>
				<motion.p
					style={{
						color: "white",
						backgroundColor: "rgba(0,0,0,0.6)",
						width: "100%",
					}}
					layoutId={titleId}
				>
					{title}
				</motion.p>
			</motion.div>
		</Link>
	);
};

export default NavTab;
