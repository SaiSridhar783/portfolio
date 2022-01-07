import { Flex } from "@chakra-ui/react";

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
	return <Flex flexDir="column" width="26rem" height="15rem" bg="ButtonShadow"></Flex>;
};

export default VisitingCard;
