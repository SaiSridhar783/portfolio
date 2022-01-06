import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import PageHeader from "../components/PageHeader";

const Contact: NextPage = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<PageHeader
				title="Contact Me"
				layoutId="nav-contact"
				image="/images/contact.png"
			/>
		</motion.div>
	);
};

export default Contact;
