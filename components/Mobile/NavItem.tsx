import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

interface INavItemProps {
	title: string;
	image: string;
	href: string;
}

const NavItem: React.FC<INavItemProps> = (props) => {
	const { pathname } = useRouter();

	return (
		<Link href={"/mobile" + props.href} passHref>
			<Flex
				fontFamily="nunito"
				gap="1rem"
				alignItems="center"
				padding="0.8rem"
				borderRadius="1rem"
				marginBottom="0.5rem"
				backgroundColor={
					pathname === `/mobile${props.href}` ? "#eee" : "transparent"
				}
			>
				<Image
					src={props.image}
					alt={props.title}
					width={50}
					height={50}
					borderRadius={25}
				/>
				<Text textTransform="capitalize">{props.title}</Text>
			</Flex>
		</Link>
	);
};

export default NavItem;
