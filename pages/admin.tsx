import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import PageHeader from "../components/PageHeader";

const Admin: NextPage = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<PageHeader
				title="Admin"
				layoutId="nav-admin"
				image="/images/resume.png"
			/>
		</motion.div>
	);
};

export default Admin;
