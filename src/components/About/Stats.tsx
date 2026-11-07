"use client";

import { useEffect, useRef, useState } from "react";
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

type StatData = {
	value: number;
	suffix: string;
	label: string;
	icon: IconType;
	// Easter egg: clicking the tile plays these log lines, the last one held as the result
	script: () => string[];
};

const pad = (n: number) => String(n).padStart(2, "0");

// 27 broadcaster feeds coming online
const broadcasts = () => [
	...Array.from({ length: 27 }, (_, i) => `feed ${pad(i + 1)}/27 · ${i % 2 ? "SRT" : "HLS"} · live`),
	"✓ 27/27 broadcasters on air",
];

// 40 Kafka messages from the aviation system
const topics = ["flight-events", "bag-scans", "gate-changes", "load-plans"];
const kafka = () => [
	...Array.from({ length: 40 }, () => {
		const n = Math.floor(Math.random() * 1_000_000);
		return `${topics[n % topics.length]} [p${n % 6}] @${1_048_576 + n} · ${1 + (n % 9)}ms`;
	}),
	"✓ 40 consumed · 0 dropped",
];

// The legacy refactor, step by step
const refactor = () => [
	"profiling legacy services…",
	"rewriting hot paths ✓",
	"dropping unused indexes ✓",
	"retiring duplicate jobs ✓",
	"right-sizing the cluster ✓",
	"monthly bill: 100% → 60%",
	"✓ cost −40%",
];

// 14 ETL workflows racing the old 3-hour report
const etl = () => [
	...Array.from({ length: 14 }, (_, i) => `etl ${pad(i + 1)}/14 · ${["daily", "monthly", "yearly"][i % 3]} ✓`),
	"✓ report in 10 min (was 3 h)",
];

// Figures from the experience page
const stats: StatData[] = [
	{ value: 27, suffix: "", label: "broadcasters fed live by an AI commentary translator", icon: FiRadio, script: broadcasts },
	{ value: 700, suffix: "+", label: "transactions per second in production", icon: FiZap, script: kafka },
	{ value: 40, suffix: "%", label: "cost cut by refactoring legacy systems", icon: FiTrendingDown, script: refactor },
	{ value: 18, suffix: "x", label: "faster financial reports, 3 hours down to 10 minutes", icon: FiClock, script: etl },
];

// Counts up once in view; the bar under the number fills in step with it
function Stat({ stat, index }: { stat: StatData; index: number }) {
	const [lines, setLines] = useState<string[] | null>(null);
	const ticker = useRef<number>(undefined);
	useEffect(() => () => window.clearInterval(ticker.current), []);

	// Every script plays in about 2.8s, then the result line stays up briefly
	const play = () => {
		if (lines) return;
		const script = stat.script();
		let shown = 0;
		setLines([]);
		ticker.current = window.setInterval(() => {
			shown += 1;
			setLines(script.slice(0, shown).slice(-6));
			if (shown < script.length) return;
			window.clearInterval(ticker.current);
			ticker.current = window.setTimeout(() => setLines(null), 1800);
		}, 2800 / script.length);
	};
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
			onClick={play}
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
			{lines && (
				<div className="stat-stream" aria-hidden>
					{lines.map((line, i) => (
						<span key={i} className={line.startsWith("✓") ? "stat-result" : undefined}>
							{line}
						</span>
					))}
				</div>
			)}
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
