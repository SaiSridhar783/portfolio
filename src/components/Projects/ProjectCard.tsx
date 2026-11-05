"use client";
import proJSON from "@/data/projects.json";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Tilt from "../Tilt";
import { Shared } from "../PageTransition";
import { dur, easeOut } from "@/lib/motion";

type IProProps = (typeof proJSON)[0] & { idx: number };

const ProjectCard: React.FC<IProProps> = ({ idx, ...props }) => {
	return (
		<motion.div
			className="project-cell"
			initial={{ opacity: 0, y: 32, scale: 0.96 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, margin: "0px 0px -10% 0px" }}
			transition={{
				duration: dur.slow,
				ease: easeOut,
				delay: (idx % 3) * 0.08,
			}}
		>
			<Tilt className="project-tilt">
				<Link
					href={`/projects/${props.slug}`}
					transitionTypes={["nav-forward"]}
				>
					<div className="project-card">
						<Shared name={`project-${props.slug}`}>
							<div className="project-image">
								<Image
									src={props.image}
									alt={props.name}
									height={440}
									width={900}
								/>
							</div>
						</Shared>
						<div className="project-info">
							<p className="project-type">{props.type}</p>
							<p className="project-name">{props.name}</p>
							<p className="project-desc">{props.description}</p>
							<p className="project-date">{props.date}</p>
						</div>
					</div>
				</Link>
			</Tilt>
		</motion.div>
	);
};

export default ProjectCard;
