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
		md: "1.4rem",
		xl: "1.6rem",
	});

	return (
		<Text
			fontSize={textSize || "1.6rem"}
			mr={{ base: 0, lg: "3rem" }}
			style={{ transformStyle: "preserve-3d" }}
			position="relative"
			{...props}
			noOfLines={5}
			minW="min-content"
			p="1rem"
			border="0px solid red"
			className="summary-tab"
			w="100%"
			bgColor="#ffffff05"
			borderRadius="10px"
			borderLeft="5px solid #aaa"
		>
			{props.children}
			<br />
			<Link href={link} passHref>
				<Text
					as="span"
					cursor="pointer"
					fontSize="1.2rem"
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
