import * as React from "react";
import Head from "next/head";
import { Box, useMediaQuery } from "@chakra-ui/react";
import isMobile from "is-mobile";
import { useRouter } from "next/router";

const Layout: React.FC = ({ children }) => {
	const { replace } = useRouter();
	const isMobileBool = isMobile();
	const [isPortrait] = useMediaQuery("(orientation: portrait)");

	React.useEffect(() => {
		if (isMobileBool || isPortrait) replace("/mobile");
		else replace("/"); //@ts-ignore
	}, [isPortrait, isMobileBool]);

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
