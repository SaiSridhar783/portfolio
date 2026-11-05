"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "motion/react";
import { notFound } from "next/navigation";
import PageTransition, { Shared } from "@/components/PageTransition";
import Magnetic from "@/components/Magnetic";
import TechDock from "@/components/Projects/TechDock";
import { dur, easeOut } from "@/lib/motion";
import proJSON from "@/data/projects.json";
import "@/styles/projects.css";

type IProjectdata = {
	params: Promise<{
		slug: string;
	}>;
};

// Fade-and-rise for the info column, staggered by step
const rise = (step: number) => ({
	initial: { opacity: 0, y: 24 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: dur.slow, ease: easeOut, delay: 0.15 + step * 0.08 },
});

const EachProject: React.FC<IProjectdata> = ({ params }) => {
	const { slug } = use(params);
	const data = proJSON.find((pro) => pro.slug === slug);
	if (!data) notFound();

	return (
		<PageTransition>
			<div className="each-project">
				<Link
					href="/projects"
					aria-label="Back to projects"
					transitionTypes={["nav-back"]}
				>
					<FaArrowLeft className="back-arrow" size={25} />
				</Link>
				<div className="each-project-content">
					<Shared name={`project-${data.slug}`}>
						<div className="project-image">
							<Image
								className="project-image"
								src={data.image}
								alt={data.name}
								width={1000}
								height={500}
								priority
								style={{
									top: data.apk ? "290px" : "0",
								}}
							/>
						</div>
					</Shared>
					<div className="project-info">
						<motion.div {...rise(0)}>
							<p className="project-type">{data.type}</p>
							<h1 className="font-bold text-4xl">{data.name}</h1>
						</motion.div>
						<motion.div {...rise(1)}>
							<p className="project-desc">{data.description}</p>
						</motion.div>
						<motion.div {...rise(2)}>
							<TechDock langs={data.languages} />
						</motion.div>
						<motion.div className="project-links" {...rise(3)}>
							{data.url && (
								<Magnetic>
									<a
										className="download-link"
										href={data.url}
										target="_blank"
									>
										Visit Site
									</a>
								</Magnetic>
							)}
							{data.apk && (
								<Magnetic>
									<a
										className="download-link"
										href={data.apk}
										target="_blank"
									>
										Download APK
									</a>
								</Magnetic>
							)}
							{data.file && (
								<Magnetic>
									<a
										className="download-link"
										href={data.file}
										target="_blank"
									>
										Download File
									</a>
								</Magnetic>
							)}
							{data.github && (
								<Magnetic>
									<a
										className="github-link"
										href={data.github}
										target="_blank"
									>
										View on Github
									</a>
								</Magnetic>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</PageTransition>
	);
};

export default EachProject;
