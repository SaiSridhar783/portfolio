import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import PageHeader from "../components/PageHeader";
import { getRows } from "./api/hello";

interface IAdminProps {
	data: any;
}

const Admin: NextPage<IAdminProps> = ({ data }) => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<PageHeader
				title="Admin"
				layoutId="nav-admin"
				image="/images/resume.png"
			/>
			<Flex flexDir="column" justifyContent="center" alignItems="center">
				{data.map((row: any, idx: any) => (
					<Flex
						key={idx}
						bg="gray"
						mb="2rem"
						borderRadius="1rem"
						p="1.2rem"
						width="500px"
						flexDir="column"
						justifyContent="space-around"
						alignItems="center"
					>
						<Heading>Name: {row.name}</Heading>
						<Heading>Email: {row.email}</Heading>
						<Text>{row.message}</Text>
					</Flex>
				))}
			</Flex>
		</motion.div>
	);
};

export async function getStaticProps() {
	const res = await getRows();
	return {
		props: {
			data: res,
		},
	};
}

export default Admin;
