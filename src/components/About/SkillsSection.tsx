"use client";

import Image from "next/image";
import badgesData from "@/data/badges.json";
import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";
import "@/styles/about.scss";

const SkillsSection: React.FC = () => {
	return (
		<section className="skills-section">
			<h2 className="skills-text reveal">
				Tools I reach for
			</h2>
			<motion.div
				className="badge-container"
				initial="hidden"
				whileInView="shown"
				viewport={{ once: true, margin: "0px 0px -15% 0px" }}
				transition={{ staggerChildren: 0.03 }}
			>
				{badgesData.map((badge) => (
					<motion.div
						key={badge.id}
						variants={{
							hidden: { opacity: 0, y: 20, scale: 0.8 },
							shown: { opacity: 1, y: 0, scale: 1 },
						}}
						transition={{ duration: 0.5, ease: easeOut }}
						whileHover={{ y: -6, scale: 1.08 }}
					>
						<div
							className="badge-box tooltip"
							style={{ backgroundColor: badge.color }}
						>
							<span className="tooltiptext">{badge.name}</span>
							<Image
								alt={badge.name}
								src={badge.icon}
								height={50}
								width={100}
							/>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default SkillsSection;
