"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import proJSON from "@/data/projects.json";
import "@/styles/projects.scss";

type IProjectdata = {
	params: {
		slug: string;
	};
};

const mainDelay = 0;

const EachProject: React.FC<IProjectdata> = ({ params }) => {
	const data = proJSON.find((pro) => pro.slug === params.slug);

	return (
		<div className="each-project">
			<Link href="/projects">
				<FaArrowLeft className="back-arrow" size={25} />
			</Link>
			<div className="each-project-content">
				<motion.div
					className="project-image"
					transition={{
						type: "spring",
						damping: 32 + data!.num * 10,
					}}
					animate={{ scale: [1.2, 1] }}
					layoutId={data!.slug}
				>
					<Image
						className="project-image"
						src={data!.image}
						alt="Waka"
						width={500}
						height={250}
						priority
						style={{
							top: data!.apk ? "290px" : "0",
						}}
					/>
				</motion.div>
				<div className="project-info">
					<motion.div
						animate={{
							translateX: ["50vw", "0vw"],
							opacity: [0.3, 1],
						}}
						transition={{
							duration: 3,
							ease: "circOut",
							delay: mainDelay,
						}}
					>
						<h1 className="font-bold text-3xl">{data!.name}</h1>
					</motion.div>
					<motion.div
						animate={{
							translateX: ["50vw", "0vw"],
							opacity: [0.3, 1],
						}}
						transition={{
							duration: 3,
							ease: "circOut",
							delay: mainDelay + 0.4,
						}}
					>
						<p className="project-desc">{data!.description}</p>
					</motion.div>
					<motion.div
						className="project-tech"
						animate={{
							translateX: ["50vw", "0vw"],
							opacity: [0.3, 1],
						}}
						transition={{
							duration: 3,
							ease: "circOut",
							delay: mainDelay + 0.8,
						}}
					>
						{data!.languages.map((lang, idx) => (
							<motion.div
								key={idx}
								animate={{ right: [-500, 0] }}
								transition={{
									delay: mainDelay + 1 + idx / 5,
									ease: "backOut",
									duration: 3,
								}}
								className="tooltip"
							>
								<span className="tooltiptext">{lang}</span>
								<Image
									src={`/images/lang/icons8-${lang}.svg`}
									alt="Waka"
									width={60}
									height={60}
									className="logo-box"
								/>
							</motion.div>
						))}
					</motion.div>
					<motion.div
						style={{
							display: "flex",
							justifyContent: "flex-start",
							gap: "3rem",
							width: "100%",
						}}
						animate={{
							translateX: ["50vw", "0vw"],
							opacity: [0.3, 1],
						}}
						transition={{
							duration: 3,
							ease: "circOut",
							delay: mainDelay + 1.2,
						}}
					>
						{data!.url && (
							<a
								className="download-link"
								href={data!.url}
								target="_blank"
							>
								Visit Site
							</a>
						)}
						{data!.apk && (
							<a
								className="download-link"
								href={data!.apk}
								target="_blank"
							>
								Download APK
							</a>
						)}
						{data!.file && (
							<a
								className="download-link"
								href={data!.file}
								target="_blank"
							>
								Download File
							</a>
						)}
						{data!.github && (
							<a
								className="github-link"
								href={data!.github}
								target="_blank"
							>
								View on Github
							</a>
						)}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default EachProject;
