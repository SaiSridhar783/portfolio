import { Flex, Heading, Text, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import PageHeader from "../components/PageHeader";

import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

interface IAdminProps {
	data: any;
}

const Admin: NextPage<IAdminProps> = ({ data }) => {
	const toast = useToast();
	const deleteHandler = async (id: number) => {
		let res: any;
		try {
			res = await fetch("/api/hello", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(id),
			});

			if (!res.ok) {
				throw new Error(res.statusText);
			}

			toast({
				title: "Deleted",
				description: "The message has been deleted.",
				status: "success",
				duration: 4000,
				isClosable: true,
			});
		} catch (e: any) {
			toast({
				title: "Error",
				description: "Something went wrong... Please try again later.",
				status: "error",
				duration: 4000,
				isClosable: true,
			});

			return;
		}
	};
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
						<Text mb="1rem">{row.createdAt}</Text>
						<Flex justifyContent="space-between" w="100%">
							<Heading fontSize="xl">Name: {row.name}</Heading>
							<Heading fontSize="xl">Email: {row.email}</Heading>
						</Flex>
						<Flex
							justifyContent="space-between"
							w="100%"
							alignItems="center"
						>
							<Text mt="1rem">{row.message}</Text>
							{/* Font Awesome delete icon */}
							<i
								className="fas fa-trash-alt"
								style={{ color: "maroon", cursor: "pointer" }}
								onClick={() => deleteHandler(row.id)}
							></i>
						</Flex>
					</Flex>
				))}
			</Flex>
		</motion.div>
	);
};

export async function getStaticProps() {
	const res = await client.messages.findMany();

	return {
		props: {
			data: res.map((row) => ({
				...row,
				createdAt: row.createdAt.toLocaleString("en-IN", {
					timeZone: "Asia/Kolkata",
					dateStyle: "long",
					timeStyle: "long",
				}),
			})),
		},
	};
}

export default Admin;
