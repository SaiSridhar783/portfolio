"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CertiTab from "@/components/CertiTab";
import BookView from "@/components/Certifications/BookView";
import Education from "@/components/Certifications/Education";
import Technical from "@/components/Certifications/Technical";
import eduJSON from "@/data/education.json";
import certiJSON from "@/data/certificates.json";
import "@/styles/certifications.scss";

// export const metadata: Metadata = {
// 	title: "Certifications of Sai Sridhar",
// };

const Fallback = () => (
	<p className="fallback">Hover Over a List Item to View Details!</p>
);

const CertificationsPage: React.FC = () => {
	const [badge, setBadge] = useState("Document");
	const [hoverDisplay, setHoverDisplay] = useState<string | null>(null);
	const [cardProps, setCardProps] = useState({});

	const onMouseEnterEduHandler = (item: (typeof eduJSON)[0]) => {
		setBadge(item.type);
		setHoverDisplay("edu");
		setCardProps(item);
	};

	const onMouseEnterCertiHandler = (item: (typeof certiJSON)[0]) => {
		setBadge(item.type);
		setHoverDisplay("certi");
		setCardProps(item);
	};

	const onMouseLeaveHandler = () => {
		setBadge("Document");
		setHoverDisplay(null);
	};

	return (
		<div className="certifications">
			<div className="book-container">
				{/* Book Snip */}
				<div className="book-snip"></div>

				{/* Education List */}
				<motion.div
					className="edu-list"
					animate={{
						rotateY: [180, 0],
						transformOrigin: ["100%", "100%"],
						backgroundColor: [
							"rgba(200,200,200,1)",
							"rgba(200,200,200,0.7)",
						],
						skewY: [-5, -10, 10, 0],
					}}
					transition={{ duration: 2, delay: 0.5 }}
				>
					<CertiTab title="Education" />
					<ol>
						{eduJSON.map((item, idx) => (
							<BookView
								key={idx + "edu"}
								item={JSON.stringify(item)}
								onMouseEnter={() =>
									onMouseEnterEduHandler(item)
								}
								onMouseLeave={onMouseLeaveHandler}
							/>
						))}
					</ol>
				</motion.div>

				{/* Technical List */}
				<div className="tech-list">
					<CertiTab title="Technical" />
					<ol>
						{certiJSON.map((item, idx) => (
							<BookView
								href={item.link}
								key={idx + "edu"}
								item={JSON.stringify(item)}
								onMouseEnter={() =>
									onMouseEnterCertiHandler(item)
								}
								onMouseLeave={onMouseLeaveHandler}
							/>
						))}
					</ol>
				</div>
			</div>
			{/* Hover View */}
			<motion.div
				className="hover-view"
				animate={{
					rotateX: [-90, 0],
					skewX: [0, -8, 8, 0],
				}}
				transition={{ duration: 1.5, delay: 2.2 }}
			>
				<div className="hover-card">
					<div className="badge-preview">{badge}</div>
					<div className="card-preview">
						{hoverDisplay &&
							(hoverDisplay === "edu" ? (
								// @ts-ignore
								<Education {...cardProps} />
							) : (
								// @ts-ignore
								<Technical {...cardProps} />
							))}
						{!hoverDisplay && <Fallback />}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default CertificationsPage;
