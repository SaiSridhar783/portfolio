import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { useState, useEffect, FunctionComponent } from "react";
import styles from "../styles/Layout.module.css";

/* const Layout = ({ children }) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");

  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children.type.name !== displayChildren.type.name)
      setTransitionStage("fadeOut");
  }, [children, displayChildren]);

  return (
    <Box fontFamily="Poppins" bg="blackAlpha.900" minH="100vh">
      <Head>
        <title>Sai Sridhar&apos;s Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <div
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            //console.log("fading out");
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
        className={`${styles.content} ${styles[transitionStage]}`}
      >
        {displayChildren}
      </div>
    </Box>
  );
}; */

const Layout: FunctionComponent = ({ children }) => {
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
