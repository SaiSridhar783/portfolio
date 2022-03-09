import { ChevronRightIcon } from "@chakra-ui/icons";
import { Text, TextProps, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

interface ISummaryTabProps {
	linkText: string;
	link: string;
}

const SummaryTab: React.FC<ISummaryTabProps & TextProps> = ({
	link,
	linkText,
	...props
}) => {
	const textSize = useBreakpointValue({
		base: "1rem",
		md: "1.3rem",
		xl: "1.6rem",
	});

	const linkSize = useBreakpointValue({
		base: "0.7rem",
		md: "0.8rem",
		xl: "1.2rem",
	});

	return (
		<Text
			fontSize={textSize || "2rem"}
			mr="3rem"
			style={{ transformStyle: "preserve-3d" }}
			position="relative"
			{...props}
			noOfLines={5}
			minW="300px"
			p="1rem"
			border="0px solid red"
			className="summary-tab"
			w="100%"
			bgColor="#ffffff05"
			borderRadius="10px"
		>
			{props.children}
			<br />
			<hr style={{ marginTop: "5px" }} />
			<Link href={link} passHref>
				<Text
					as="span"
					cursor="pointer"
					fontSize={linkSize || "1.5rem"}
					color="gray.400"
					_hover={{ color: "white" }}
				>
					{linkText} <ChevronRightIcon />
				</Text>
			</Link>
		</Text>
	);
};

export default SummaryTab;
