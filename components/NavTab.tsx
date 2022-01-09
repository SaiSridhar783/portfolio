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
					position: "relative",
					width: "126px",
					height: "126px",
					borderRadius: "63px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
					paddingBottom: "1.5rem",
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
				animate={["start"]}
				whileHover="hovering"
				transition={{ delay: delay }}
				layoutId={`${titleId}-icon`}
				variants={{
					standing: {
						transition: {
							ease: "easeInOut",
							duration: 6,
							repeat: Infinity,
							delay: delay * 11,
						},
						opacity: [1, 0.7, 1],
					},
					start: { rotateY: [-90, 0] },
					hovering: { scale: 1.2, opacity: 1 },
				}}
				className="icon"
			>
				<motion.p
					style={{
						color: "whitesmoke",
						backgroundColor: "rgba(0,0,0,0.6)",
						width: "100%",
						mixBlendMode: "multiply",
						fontFamily: "nunito",
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
