import * as React from "react";
import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import eduJSON from "../../data/education.json";
import { motion } from "framer-motion";

type IEducationProps = {} & typeof eduJSON[0];

const Education: React.FC<IEducationProps> = (props) => {
	const height = useBreakpointValue({ base: "15rem", lg: "13.5rem" });
	return (
		<motion.div
			animate={{ opacity: [0, 1] }}
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-around",
				alignItems: "flex-start",
				color: "whitesmoke",
				height: height,
				width: "100%",
				backgroundImage:
					"linear-gradient(90deg, rgba(80,80,100,1) 31%, rgba(85,90,108,1) 81%)",
				padding: "1.5rem",
				position: "relative",
				top: "-3.8rem",
				borderRadius: "1rem",
			}}
		>
			<Flex
				justifyContent="space-around"
				alignItems="center"
				width="100%"
			>
				<Image
					src={props.logo}
					alt={props.name}
					height={80}
					width={80}
					layout="intrinsic"
					className="edu-logo"
				/>
				<Text ml="0.5rem" fontFamily="nunito" fontWeight="700">
					{props.institute}
				</Text>
			</Flex>
			<Flex w="100%" justifyContent="space-between" alignItems="center">
				<Text fontFamily="nunito" fontSize="1rem">
					{props.name}
				</Text>
				<Text as="time" fontFamily="nunito" fontSize="1.1rem">
					{props.year}
				</Text>
			</Flex>
			<Flex w="100%" justifyContent="space-between" alignItems="center">
				<Text fontFamily="nunito" fontSize="1rem">
					<Text as="span" fontWeight="900">
						Stream:
					</Text>{" "}
					{props.stream}
				</Text>
				{props.Percentage && (
					<Text>
						<Text as="span" fontWeight="900">
							Percentage:&nbsp;{" "}
						</Text>
						{props.Percentage}
					</Text>
				)}
				{props.CGPA && (
					<Text>
						<Text as="span" fontWeight="900">
							CGPA:&nbsp;{" "}
						</Text>
						{props.CGPA}
					</Text>
				)}
			</Flex>
		</motion.div>
	);
};

export default Education;
