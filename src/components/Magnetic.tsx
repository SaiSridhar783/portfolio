"use client";

import { motion, useSpring } from "motion/react";

const spring = { stiffness: 220, damping: 16, mass: 0.4 };

// Pulls its child toward a mouse cursor; inert for touch and pen
export default function Magnetic({
	children,
	strength = 0.3,
	className,
}: {
	children: React.ReactNode;
	strength?: number;
	className?: string;
}) {
	const x = useSpring(0, spring);
	const y = useSpring(0, spring);

	return (
		<motion.div
			className={className}
			style={{ x, y, display: "inline-block" }}
			onPointerMove={(e) => {
				if (e.pointerType !== "mouse") return;
				const r = e.currentTarget.getBoundingClientRect();
				x.set((e.clientX - r.left - r.width / 2) * strength);
				y.set((e.clientY - r.top - r.height / 2) * strength);
			}}
			onPointerLeave={() => {
				x.set(0);
				y.set(0);
			}}
		>
			{children}
		</motion.div>
	);
}
