import { Box } from "@chakra-ui/react";
import Head from "next/head";
import * as React from "react";

const Layout: React.FC = ({ children }) => {
	return (
		<Box fontFamily="Poppins" bg="#00070d" minH="100vh" minW="100vw">
			<Head>
				<title>Sai Sridhar&apos;s Portfolio</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>

			{children}
		</Box>
	);
};

export default Layout;
