"use client";

import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";

// Reveals text letter by letter; screen readers get the plain string
export default function SplitText({
	text,
	delay = 0,
	stagger = 0.025,
}: {
	text: string;
	delay?: number;
	stagger?: number;
}) {
	let i = 0;
	return (
		<>
			<span className="sr-only select-none">{text}</span>
			<span aria-hidden>
				{text.split(" ").map((word, w) => (
					<span key={w} style={{ display: "inline-block", whiteSpace: "pre" }}>
						{[...word].map((char, c) => (
							<motion.span
								key={c}
								style={{ display: "inline-block" }}
								initial={{ opacity: 0, y: "0.5em", filter: "blur(6px)" }}
								animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
								transition={{
									duration: 0.6,
									ease: easeOut,
									delay: delay + i++ * stagger,
								}}
							>
								{char}
							</motion.span>
						))}
						{w < text.split(" ").length - 1 && " "}
					</span>
				))}
			</span>
		</>
	);
}
