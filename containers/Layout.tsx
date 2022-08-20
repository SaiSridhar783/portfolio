import * as React from "react";
import Head from "next/head";
import { Box, useMediaQuery } from "@chakra-ui/react";
import isMobile from "is-mobile";
import { useRouter } from "next/router";

const Layout: React.FC = ({ children }) => {
	const { replace, asPath } = useRouter();
	const isMobileBool = isMobile();
	const [isPortrait] = useMediaQuery("(orientation: portrait)");

	console.log("Layout Page");

	React.useEffect(() => {
		if (asPath.startsWith("/mobile")) {
			if (isMobileBool || isPortrait) replace(asPath);
			else replace(asPath.slice(7) || "/");
		} else {
			if (isMobileBool || isPortrait) replace("/mobile" + asPath);
			else replace(asPath);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
