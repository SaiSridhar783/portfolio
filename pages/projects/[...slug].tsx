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

const EachProject: NextPage<IProProps> = (props) => {
	const clickHandler = () => {
		router.replace(`/projects`);
	};

	return (
		<Center w="100vw" h="100vh" p="5%">
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
					transition={{ type: "spring", damping: 42 }}
					layoutId={props.slug}
				>
					<Image
						src={props.image}
						alt="Waka"
						w="100%"
						h="100%"
						borderRadius="1.5rem"
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
					<Heading>{props.name}</Heading>
					<Text color="whiteAlpha.800" fontSize="1.2rem">
						{props.description}
					</Text>
					<Flex gap="1rem">
						{props.languages.map((lang, idx) => (
							<Tooltip
								d="block"
								key={lang + idx}
								hasArrow
								label={lang.toLocaleUpperCase()}
							>
								<Box
									bg="rgba(255,255,255,0.2)"
									p="0.3rem"
									borderRadius="50%"
									h="60px"
									w="60px"
									position="relative"
									border="1.2px solid white"
									overflow="hidden"
								>
									<ImageNext
										src={`/images/lang/icons8-${lang}.svg`}
										alt="Waka"
										layout="fill"
									/>
								</Box>
							</Tooltip>
						))}
					</Flex>
					<Flex justifyContent="flex-start" gap="3rem" w="100%">
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
						{props.github && (
							<Button
								as="a"
								href={props.github}
								target="_blank"
								bg="gray.700"
								color="whiteAlpha.700"
								_hover={{ bg: "gray.800" }}
								_active={{ bg: "gray.800" }}
								fontWeight="900"
							>
								View on Github
							</Button>
						)}
					</Flex>
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
