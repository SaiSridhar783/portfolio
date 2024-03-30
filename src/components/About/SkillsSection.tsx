"use client";

import Image from "next/image";
import badgesData from "@/data/badges.json";
import { motion } from "framer-motion";
import "@/styles/about.scss";

const SkillsSection: React.FC = () => {
	return (
		<div className="skills-section">
			<p className="skills-text">
				You can Count on me for these skills and more!
			</p>
			<div className="badge-container">
				{badgesData.map((badge, idx) => (
					<motion.div
						key={idx}
						style={{ position: "relative" }}
						initial={{ right: -1000 }}
						animate={{ right: [-1000, 0] }}
						transition={{
							delay: 0.6 + idx / 5,
							ease: "backOut",
							duration: 3,
						}}
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
			</div>
		</div>
	);
};

export default SkillsSection;
