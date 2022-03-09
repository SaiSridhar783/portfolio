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
			w="80vw"
			transform="translateZ(-20px) scale(1.3)"
			style={{ transformStyle: "preserve-3d" }}
			color="whiteAlpha.800"
			fontFamily="Montserrat"
		>
			<Box
				transform="translateZ(-30px) scale(3.5) translateX(-250px) translateY(-160px)"
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
				transform="translateZ(-80px) scale(7) translateX(-230px)"
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
					Currently pursuing my Bachelors in Mining Engineering from
					Indian Institute of Technology, Kharagpur.
				</SummaryTab>
			</Flex>
			<Flex
				transform="translateZ(-100px) scale(8) translateX(-230px) translateY(250px)"
				style={{ transformStyle: "preserve-3d" }}
				mt="3rem"
				textAlign="justify"
			>
				<SummaryTab
					transform="translateZ(-64px) scale(1.4)"
					link="/experience"
					linkText="More about my experience"
					top={50}
					left={-290}
				>
					I have some experience as a UI developer intern and actively
					contribute to open source.
				</SummaryTab>
				<SummaryTab
					transform="translateZ(-32px) scale(1.16)"
					link="/contact"
					linkText="Connect with me!"
					left={10}
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
				transform="translateZ(-5px) scale(1.4) translateX(35rem)"
				style={{ transformStyle: "preserve-3d" }}
				position="absolute"
				top={-100}
				right={-80}
			/>
		</Box>
	);
};

export default Overview;
