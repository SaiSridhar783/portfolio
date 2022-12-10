import * as React from "react";
import SideDrawer from "../../components/Mobile/SideDrawer";
import { motion } from "framer-motion";
import Head from "next/head";

interface IExperienceProps {}

const Experience: React.FC<IExperienceProps> = (props) => {
	return (
		<motion.div transition={{ duration: 2 }} animate={{ opacity: [0, 1] }}>
			<SideDrawer />
			<Head>
				<title>Experience of Sai Sridhar</title>
			</Head>
		</motion.div>
	);
};

export default Experience;
