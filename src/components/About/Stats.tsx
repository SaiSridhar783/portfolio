"use client";

import { useEffect, useRef } from "react";
import {
	animate,
	motion,
	useInView,
	useMotionValue,
	useTransform,
} from "motion/react";
import { easeOut } from "@/lib/motion";

// Figures from the experience page
const stats = [
	{ value: 5, suffix: "M+", label: "viewers reached by a live AI translator" },
	{ value: 700, suffix: "+", label: "transactions per second in production" },
	{ value: 40, suffix: "%", label: "cost cut by refactoring legacy systems" },
	{ value: 16, suffix: "h", label: "of manual work automated every week" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
	const count = useMotionValue(0);
	const rounded = useTransform(count, (v) => Math.round(v));

	useEffect(() => {
		if (!inView) return;
		const controls = animate(count, value, { duration: 1.4, ease: easeOut });
		return () => controls.stop();
	}, [inView, count, value]);

	return (
		<span ref={ref} className="stat-value">
			<motion.span>{rounded}</motion.span>
			{suffix}
		</span>
	);
}

export default function Stats() {
	return (
		<section className="about-stats reveal" aria-label="Highlights">
			{stats.map((s) => (
				<div key={s.label} className="stat">
					<Counter value={s.value} suffix={s.suffix} />
					<p className="stat-label">{s.label}</p>
				</div>
			))}
		</section>
	);
}
