"use client";

import { useEffect, useRef } from "react";
import {
	animate,
	motion,
	useInView,
	useMotionValue,
	useTransform,
} from "motion/react";
import type { IconType } from "react-icons";
import { FiClock, FiRadio, FiTrendingDown, FiZap } from "react-icons/fi";
import { easeOut } from "@/lib/motion";

type StatData = { value: number; suffix: string; label: string; icon: IconType };

// Figures from the experience page
const stats: StatData[] = [
	{ value: 27, suffix: "", label: "broadcasters fed live by an AI commentary translator", icon: FiRadio },
	{ value: 700, suffix: "+", label: "transactions per second in production", icon: FiZap },
	{ value: 40, suffix: "%", label: "cost cut by refactoring legacy systems", icon: FiTrendingDown },
	{ value: 18, suffix: "x", label: "faster financial reports, 3 hours down to 10 minutes", icon: FiClock },
];

// Counts up once in view; the bar under the number fills in step with it
function Stat({ stat, index }: { stat: StatData; index: number }) {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
	const count = useMotionValue(0);
	const rounded = useTransform(count, (v) => Math.round(v));
	const fill = useTransform(count, [0, stat.value], [0, 1]);
	const delay = index * 0.12;
	const Icon = stat.icon;

	useEffect(() => {
		if (!inView) return;
		const controls = animate(count, stat.value, { duration: 1.6, ease: easeOut, delay });
		return () => controls.stop();
	}, [inView, count, stat.value, delay]);

	return (
		<motion.div
			ref={ref}
			className="stat"
			initial={{ opacity: 0, y: 24 }}
			animate={inView ? { opacity: 1, y: 0 } : undefined}
			transition={{ duration: 0.6, ease: easeOut, delay }}
		>
			<span className="stat-icon" aria-hidden>
				<Icon />
			</span>
			<span className="stat-value">
				<motion.span>{rounded}</motion.span>
				{stat.suffix}
			</span>
			<motion.span className="stat-bar" style={{ scaleX: fill }} aria-hidden />
			<p className="stat-label">{stat.label}</p>
		</motion.div>
	);
}

// Feed the cursor position to CSS for the spotlight and border glow
const track = (e: React.PointerEvent<HTMLElement>) => {
	const r = e.currentTarget.getBoundingClientRect();
	e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
	e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export default function Stats() {
	return (
		<section className="about-stats" aria-label="Highlights" onPointerMove={track}>
			{stats.map((s, i) => (
				<Stat key={s.label} stat={s} index={i} />
			))}
		</section>
	);
}
