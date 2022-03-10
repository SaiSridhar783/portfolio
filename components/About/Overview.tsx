import {
	Box,
	Flex,
	Heading,
	Image,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import SummaryTab from "./SummaryTab";

interface IOverviewProps {}

const Overview: React.FC<IOverviewProps> = (props) => {
	const textSize = useBreakpointValue({
		base: "1.3rem",
		md: "2.2rem",
		lg: "2.8rem",
	});
	return (
		<Box
			h="100vh"
			w="100%"
			px="10vw"
			transform={{
				base: "",
				lg: "translateZ(-20px) scale(1.2)",
				xl: "translateZ(-20px) scale(1.3)",
			}}
			style={{ transformStyle: "preserve-3d" }}
			color="whiteAlpha.800"
			fontFamily="Montserrat"
		>
			<Box
				transform={{
					base: "translateZ(-30px) scale(3.5) translateY(-160px)",
					lg: "translateZ(-30px) scale(3.5) translateX(-250px) translateY(-160px)",
				}}
				style={{ transformStyle: "preserve-3d" }}
				color="white"
			>
				<Heading fontSize={textSize || "3rem"}>
					<Text as="span" color="whatsapp.500">
						Sai Sridhar Akula&nbsp;
					</Text>
					is my name.
				</Heading>
				<Heading fontSize={textSize || "3rem"}>
					Website and App Development is my game.
				</Heading>
			</Box>
			<Flex
				transform={{
					base: "translateZ(-20px) scale(4)",
					lg: "translateZ(-80px) scale(7) translateX(-230px)",
				}}
				style={{ transformStyle: "preserve-3d" }}
				mt="1rem"
				textAlign="justify"
			>
				<SummaryTab
					transform="translateZ(-32px) scale(1.18) translateX(-120px) translateY(-14px)"
					link="/projects"
					linkText="Check out my projects"
				>
					I primarily deal with frontend and am familiar with backend,
					including SQL and NoSQL.
				</SummaryTab>
				<SummaryTab
					transform="translateZ(-32px) scale(1.18)"
					link="/certifications"
					linkText="Learn more about my education"
					left="3rem"
					top={-3}
				>
					Pursuing my Bachelors in Mining Engineering from Indian
					Institute of Technology, Kharagpur.
				</SummaryTab>
			</Flex>
			<Flex
				transform={{
					base: "translateZ(-20px) scale(5) translateY(250px)",
					lg: "translateZ(-100px) scale(8) translateX(-230px) translateY(250px)",
				}}
				style={{ transformStyle: "preserve-3d" }}
				mt="3rem"
				textAlign="justify"
			>
				<SummaryTab
					transform={{
						md: "translateZ(-32px) scale(0.95) translateY(-100px) translateX(-70px)",
						lg: "translateZ(-64px) scale(1.4) translateX(-200px)",
					}}
					link="/experience"
					linkText="More about my experience"
					top={50}
				>
					I have some experience as a UI developer intern and actively
					contribute to open source.
				</SummaryTab>
				<SummaryTab
					transform={{
						md: "translateZ(-32px) scale(0.95) translateY(-100px)",
						lg: "translateZ(-64px) scale(1.4) translateX(48px)",
					}}
					link="/contact"
					linkText="Connect with me!"
					top={50}
				>
					Whats that? You would like to know more about me? Or perhaps
					you would like to get in touch?
				</SummaryTab>
			</Flex>

			<Image
				src="/images/about/profile.jpg"
				alt="A cool shot of Sai"
				w="550px"
				h="850px"
				border="2px solid rgb(0,7,13)"
				pointerEvents="none"
				transform={{
					md: "translateZ(-5px) scale(1.4) translateX(20rem)",
					xl: "translateZ(-5px) scale(1.4) translateX(30rem)",
				}}
				style={{ transformStyle: "preserve-3d" }}
				position="absolute"
				top={-100}
				right={-80}
				display={{ base: "none", lg: "block" }}
			/>
		</Box>
	);
};

export default Overview;
