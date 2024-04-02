"use client";
import proJSON from "@/data/projects.json";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type IProProps = (typeof proJSON)[0];

const ProjectCard: React.FC<IProProps> = (props) => {
	return (
		<motion.div
			initial={{ skewY: -10, opacity: 0 }}
			whileInView={{ skewY: [10, 0], opacity: [0, 1] }}
			transition={{ duration: 2 }}
		>
			<Link href={`/projects/${props.slug}`}>
				<div className="project-card">
					<motion.div
						className="project-image"
						layoutId={props.slug}
						transition={{
							type: "spring",
							damping: 32 + props.num * 10,
						}}
					>
						<Image
							src={props.image}
							alt="Waka"
							height={220}
							width={450}
						/>
					</motion.div>
					<div className="project-info">
						<p className="project-type">{props.type}</p>
						<p className="project-name">{props.name}</p>
						<p className="project-desc">{props.description}</p>
						<p className="project-date">{props.date}</p>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectCard;
