"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
	AnimatePresence,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
	type MotionValue,
} from "motion/react";

const BASE = 60;
const PEAK = 88;
const RANGE = 140; // px from the cursor where icons start to grow
const spring = { mass: 0.1, stiffness: 170, damping: 14 };

// macOS-dock style row: icons swell as a mouse cursor passes over them
export default function TechDock({ langs }: { langs: string[] }) {
	const mouseX = useMotionValue(Infinity);

	return (
		<motion.div
			className="tech-dock"
			onPointerMove={(e) => e.pointerType === "mouse" && mouseX.set(e.clientX)}
			onPointerLeave={() => mouseX.set(Infinity)}
		>
			{langs.map((lang, idx) => (
				<DockIcon key={lang} lang={lang} idx={idx} mouseX={mouseX} />
			))}
		</motion.div>
	);
}

function DockIcon({
	lang,
	idx,
	mouseX,
}: {
	lang: string;
	idx: number;
	mouseX: MotionValue<number>;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [hovered, setHovered] = useState(false);

	const distance = useTransform(mouseX, (x) => {
		const r = ref.current?.getBoundingClientRect();
		return r ? x - (r.left + r.width / 2) : Infinity;
	});
	const size = useSpring(
		useTransform(distance, [-RANGE, 0, RANGE], [BASE, PEAK, BASE]),
		spring
	);

	return (
		<motion.div
			ref={ref}
			className="dock-icon"
			style={{ width: size, height: size }}
			initial={{ opacity: 0, y: 16, scale: 0.6 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{
				delay: 0.4 + idx * 0.06,
				type: "spring",
				stiffness: 300,
				damping: 18,
			}}
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
			onFocus={() => setHovered(true)}
			onBlur={() => setHovered(false)}
			tabIndex={0}
			aria-label={lang}
		>
			<AnimatePresence>
				{hovered && (
					<motion.span
						className="dock-label"
						initial={{ opacity: 0, y: 8, scale: 0.8, x: "-50%" }}
						animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
						exit={{ opacity: 0, y: 4, scale: 0.9, x: "-50%" }}
						transition={{ type: "spring", stiffness: 400, damping: 25 }}
					>
						{lang}
					</motion.span>
				)}
			</AnimatePresence>
			<Image
				src={`/images/lang/icons8-${lang}.svg`}
				alt=""
				width={88}
				height={88}
			/>
		</motion.div>
	);
}
