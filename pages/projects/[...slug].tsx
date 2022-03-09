import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import {
	Center,
	Text,
	Image,
	Flex,
	Heading,
	Button,
	Tooltip,
	Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import proJSON from "../../data/projects.json";
import { ArrowBackIcon } from "@chakra-ui/icons";
import router from "next/router";
import ImageNext from "next/image";

type IProProps = {} & typeof proJSON[0];

const mainDelay = 0;

const EachProject: NextPage<IProProps> = (props) => {
	const clickHandler = () => {
		router.replace(`/projects`);
	};

	return (
		<Center w="100vw" maxH="100vh" h="100vh" p="5%" overflow="hidden">
			<ArrowBackIcon
				cursor="pointer"
				transition="color 200ms"
				color="whiteAlpha.500"
				_hover={{ color: "white", transition: "color 300ms" }}
				w={8}
				h={8}
				position="absolute"
				top={10}
				left={10}
				zIndex={10}
				onClick={clickHandler}
			/>
			<Flex justifyContent="space-between" gap="10%" alignItems="center">
				<motion.div
					style={{
						minHeight: "20rem",
						height: "100%",
						minWidth: "500px",
						width: "50%",
						position: "relative",
					}}
					transition={{
						type: "spring",
						damping: 32 + props.num * 10,
					}}
					animate={{ scale: [1.2, 1] }}
					layoutId={props.slug}
				>
					<Image
						src={props.image}
						alt="Waka"
						w="100%"
						h="100%"
						borderRadius="1.5rem"
						position="relative"
						top={props.apk ? "250px" : "0"}
					/>
				</motion.div>
				<Flex
					flexDirection="column"
					w="50%"
					color="white"
					alignItems="flex-start"
					justifyContent="space-between"
					gap="1.5rem"
					fontFamily="nunito"
				>
					<motion.div
						animate={{
							translateX: ["50vw", "0vw"],
							opacity: [0.3, 1],
						}}
						transition={{
							duration: 3,
							ease: "circOut",
							delay: mainDelay,
						}}
					>
						<Heading>{props.name}</Heading>
					</motion.div>
					<motion.div
						animate={{
							translateX: ["50vw", "0vw"],
							opacity: [0.3, 1],
						}}
						transition={{
							duration: 3,
							ease: "circOut",
							delay: mainDelay + 0.4,
						}}
					>
						<Text
							color="whiteAlpha.800"
							fontSize="1.2rem"
							textAlign="justify"
						>
							{props.description}
						</Text>
					</motion.div>
					<motion.div
						style={{
							display: "flex",
							gap: "1rem",
							maxWidth: "100%",
							overflow: "hidden",
						}}
						animate={{
							translateX: ["50vw", "0vw"],
							opacity: [0.3, 1],
						}}
						transition={{
							duration: 3,
							ease: "circOut",
							delay: mainDelay + 0.8,
						}}
					>
						{props.languages.map((lang, idx) => (
							<motion.div
								key={lang + idx}
								style={{ position: "relative" }}
								animate={{ right: [-500, 0] }}
								transition={{
									delay: mainDelay + 1 + idx / 5,
									ease: "backOut",
									duration: 3,
								}}
							>
								<Tooltip
									d="block"
									hasArrow
									label={lang.toLocaleUpperCase()}
									transitionDelay={idx * 10 + "ms"}
								>
									<Box
										bg="rgba(255,255,255,0.2)"
										p="0.3rem"
										borderRadius="50%"
										h="60px"
										w="60px"
										position="relative"
										border="2px solid white"
										overflow="hidden"
									>
										<ImageNext
											src={`/images/lang/icons8-${lang}.svg`}
											alt="Waka"
											layout="fill"
										/>
									</Box>
								</Tooltip>
							</motion.div>
						))}
					</motion.div>
					<motion.div
						style={{
							display: "flex",
							justifyContent: "flex-start",
							gap: "3rem",
							width: "100%",
						}}
						animate={{
							translateX: ["50vw", "0vw"],
							opacity: [0.3, 1],
						}}
						transition={{
							duration: 3,
							ease: "circOut",
							delay: mainDelay + 1.2,
						}}
					>
						{props.url && (
							<Button
								colorScheme="cyan"
								width="10rem"
								as="a"
								href={props.url}
								target="_blank"
								fontWeight="900"
							>
								Visit Site
							</Button>
						)}
						{props.apk && (
							<Button
								colorScheme="cyan"
								width="10rem"
								as="a"
								href={props.apk}
								target="_blank"
								fontWeight="900"
							>
								Download APK
							</Button>
						)}
						{props.github && (
							<Button
								as="a"
								href={props.github}
								target="_blank"
								bg="gray.700"
								width="10rem"
								color="whiteAlpha.700"
								_hover={{ bg: "gray.800" }}
								_active={{ bg: "gray.800" }}
								fontWeight="900"
							>
								View on Github
							</Button>
						)}
					</motion.div>
				</Flex>
			</Flex>
		</Center>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = proJSON.map((pro) => ({ params: { slug: [pro.slug] } }));
	return {
		paths: [...paths],
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = (ctx) => {
	const data = proJSON.find((pro) => pro.slug === ctx.params!.slug![0]);

	return {
		props: {
			...data,
		},
	};
};

export default EachProject;
