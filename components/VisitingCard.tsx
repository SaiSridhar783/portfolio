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
	return <Flex flexDir="column" width="10rem" height="5rem"></Flex>;
};

export default VisitingCard;
