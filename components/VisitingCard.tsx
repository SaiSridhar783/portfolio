import { Box, Flex } from "@chakra-ui/react";

interface IVisitingCardProps {
	company: string;
	title: string;
	logo: string;
	duration: string;
}

const VisitingCard: React.FC<IVisitingCardProps> = ({
	company,
	title,
	logo,
	duration,
}) => {
	return (
		<Box
			position="relative"
			top={-3}
			left={5}
			flexDir="column"
			width="26rem"
			height="15rem"
			bg="white"
			borderRadius="2.5rem"
			className="atvImg"
		>
			<Flex
				style={{
					position: "relative",
					top: "2%",
					left: "-1%",
					width: "100%",
					height: "100%",
					backgroundColor: "#ccc",
					borderRadius: "2.5rem",
				}}
				boxShadow="5px -5px 3px gray"
				className="atvImg"
			></Flex>
		</Box>
	);
};

export default VisitingCard;
