import { Box, Center, Heading, Text, Stack, Image } from "@chakra-ui/react";
import proJSON from "../../data/projects.json";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type IProProps = {} & typeof proJSON[0];

const ProjectCard: React.FC<IProProps> = (props) => {
	const router = useRouter();

	const onclickHandler = () => {
		router.push(`/projects/${props.slug}`);
	};

	return (
		<motion.div
			whileHover="hover"
			whileInView={{ skewY: [10, 0], opacity: [0, 1] }}
			transition={{ duration: 2 }}
			variants={{
				hover: {
					filter: "contrast(1.2)",
					transition: { duration: 0.4 },
				},
			}}
			style={{
				position: "relative",
				zIndex: 8,
			}}
		>
			<Center cursor="pointer" onClick={onclickHandler}>
				<Box
					maxW="445px"
					w="95%"
					bg="gray.900"
					boxShadow="0 0 10px 2px #1f3e4b"
					rounded="md"
					overflow="hidden"
				>
					<motion.div
						style={{
							height: "210px",
							background: "#171c23",
							margin: "-6px -6px 6px -6px",
							position: "relative",
							filter: "blur(.5px)",
						}}
						layoutId={props.slug}
						transition={{
							type: "spring",
							damping: 32 + props.num * 10,
						}}
					>
						<Image
							src={props.image}
							alt="Waka"
							height="100%"
							width="100%"
						/>
					</motion.div>
					<Stack p={6} pb={0}>
						<Text
							color="green.200"
							textTransform="uppercase"
							fontWeight={800}
							fontSize="sm"
							letterSpacing={1.1}
						>
							{props.type}
						</Text>
						<Heading color="white" fontSize="2xl" fontFamily="body">
							{props.name}
						</Heading>
						<Text color="gray.200" noOfLines={2}>
							{props.description}
						</Text>
					</Stack>
					<Stack
						p={6}
						pt={0}
						mt={6}
						direction="row"
						spacing={4}
						align="center"
					>
						<Text color="gray.400">{props.date}</Text>
					</Stack>
				</Box>
			</Center>
		</motion.div>
	);
};

export default ProjectCard;
