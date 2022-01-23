import * as React from "react";
import Head from "next/head";
import { Box, useMediaQuery } from "@chakra-ui/react";
import isMobile from "is-mobile";
import Block from "../components/Block";

const Layout: React.FC = ({ children }) => {
	const isMobileBool = isMobile();
	const [isPortrait] = useMediaQuery("(orientation: portrait)");
	const [loaded, setLoaded] = React.useState(false);

	React.useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<Box fontFamily="Poppins" bg="#00070d" minH="100vh" minW="100vw">
			<Head>
				<title>Sai Sridhar&apos;s Portfolio</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>
			{loaded && (isPortrait || isMobileBool) && <Block />}
			{!isPortrait && !isMobileBool && children}
		</Box>
	);
};

export default Layout;
