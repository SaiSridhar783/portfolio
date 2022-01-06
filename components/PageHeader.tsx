import { Flex, Heading } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface IPageHeaderProps {
	title: string;
	layoutId: string;
	image: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title, layoutId, image }) => {
	return (
		<Flex justifyContent="space-between" alignItems="center" px="2rem" py="1rem">
			<Link href="/home" passHref replace>
				<ArrowBackIcon
					cursor="pointer"
					transition="color 200ms"
                    color="whiteAlpha.500"
					_hover={{ color: "white", transition: "color 300ms" }}
					w={10}
					h={10}
				/>
			</Link>
			<motion.div layoutId={layoutId}>
				<Heading as="h1" size="xl" color="whiteAlpha.700">
					{title}
				</Heading>
			</motion.div>
			<motion.div
				layoutId={`${layoutId}-icon`}
				style={{
					width: "110px",
					height: "110px",
					borderRadius: "55px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
					paddingBottom: "1.4rem",
					alignItems: "center",
					textAlign: "center",
					background: `url(${image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					overflow: "hidden",
					cursor: "pointer",
					zIndex: 2,
				}}
			></motion.div>
		</Flex>
	);
};

export default PageHeader;
