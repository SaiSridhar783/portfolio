import { Flex, Heading } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

interface IPageHeaderProps {
	title: string;
	layoutId: string;
	image: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title, layoutId, image }) => {
	const router = useRouter();

	const clickHandler = () => {
		router.back();
	};

	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			px="2rem"
			py="1rem"
			position="relative"
			zIndex={6}
		>
			<ArrowLeftIcon
				cursor="pointer"
				transition="color 200ms"
				color="whiteAlpha.500"
				_hover={{ color: "white", transition: "color 300ms" }}
				w={7}
				h={10}
				position="relative"
				zIndex={10}
				onClick={clickHandler}
			/>

			<motion.div
				style={{
					backgroundColor: "#3ba13f",
					padding: "0.5rem 0",
				}}
			>
				<Heading
					as="h1"
					fontSize="3xl"
					fontFamily="Montserrat"
					fontWeight="700"
					letterSpacing="1px"
					color="#00070d"
					_after={{
						position: "relative",
						content: `"BBBBBBBB"`,
						maxW: "50%",
						bgColor: "#00070d",
						right: "-10%",
						p: "1rem",
						borderRadius: "50%",
					}}
					_before={{
						position: "relative",
						content: `"BBBBBBBB"`,
						bgColor: "#00070d",
						left: "-10%",
						p: "1rem",
						borderRadius: "50%",
					}}
				>
					{title}
				</Heading>
			</motion.div>
			<motion.div
				layoutId={`${layoutId}-icon`}
				animate={{ scale: [0.2, 0.5, 1] }}
				transition={{ duration: 0.8 }}
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
					zIndex: 2,
				}}
			></motion.div>
		</Flex>
	);
};

export default PageHeader;
