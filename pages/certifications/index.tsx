import { motion } from "framer-motion";
import type { NextPage } from "next";
import PageHeader from "../../components/PageHeader";

const Certi: NextPage = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<PageHeader
				title="Certifications"
				layoutId="nav-certifications"
				image="/images/certifications.png"
			/>
		</motion.div>
	);
};

export default Certi;
