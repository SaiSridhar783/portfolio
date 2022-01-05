import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import * as React from "react";

const Layout: React.FC = ({ children }) => {
	return (
		<Box fontFamily="Poppins" bg="blackAlpha.900" minH="100vh">
			<Head>
				<title>Sai Sridhar&apos;s Portfolio</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>
			<Navbar />
			{children}
		</Box>
	);
};

export default Layout;
