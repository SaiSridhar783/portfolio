"use client";

import { motion, useSpring } from "motion/react";

const spring = { stiffness: 250, damping: 20 };

// Leans toward a mouse cursor in 3D; inert for touch and pen
export default function Tilt({
	children,
	max = 8,
	className,
}: {
	children: React.ReactNode;
	max?: number;
	className?: string;
}) {
	const rotateX = useSpring(0, spring);
	const rotateY = useSpring(0, spring);

	return (
		<motion.div
			className={className}
			style={{ rotateX, rotateY, transformPerspective: 900 }}
			onPointerMove={(e) => {
				if (e.pointerType !== "mouse") return;
				const r = e.currentTarget.getBoundingClientRect();
				rotateY.set(((e.clientX - r.left) / r.width - 0.5) * 2 * max);
				rotateX.set(-((e.clientY - r.top) / r.height - 0.5) * 2 * max);
			}}
			onPointerLeave={() => {
				rotateX.set(0);
				rotateY.set(0);
			}}
		>
			{children}
		</motion.div>
	);
}
