"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";
import CertiTab from "@/components/CertiTab";
import BookView from "@/components/Certifications/BookView";
import Education from "@/components/Certifications/Education";
import Technical from "@/components/Certifications/Technical";
import eduJSON from "@/data/education.json";
import certiJSON from "@/data/certificates.json";
import PageTransition from "@/components/PageTransition";
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
		<PageTransition>
			<div className="certifications">
				<div className="book-container">
					{/* Education List */}
					<motion.div
						className="edu-list"
						// Left page swings open from the spine
						style={{ transformOrigin: "100% 50%", transformPerspective: 1600 }}
						initial={{ rotateY: 180 }}
						animate={{ rotateY: 0 }}
						transition={{ duration: 1, delay: 0.15, ease: easeOut }}
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
					transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
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
				{/* Touch-friendly list; replaces the hover book in narrow containers */}
				<div className="certi-list">
					<CertiTab title="Education" />
					{eduJSON.map((item, idx) => (
						<Education key={idx} {...item} />
					))}
					<CertiTab title="Technical" />
					{certiJSON.map((item, idx) => (
						<Technical makeLink key={idx} {...item} />
					))}
				</div>
			</div>
		</PageTransition>
	);
};

export default CertificationsPage;
