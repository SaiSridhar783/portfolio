"use client";

import { motion } from "motion/react";
import SplitText from "../SplitText";
import type { Sender } from "./ContactForm";

export const RECEIVED_MS = 4500;

// Confetti-style sparks fired outward from the check mark
const sparks = Array.from({ length: 14 }, (_, i) => ({
	angle: (360 / 14) * i + (i % 2 ? 8 : -8),
	distance: 70 + (i % 3) * 22,
	color: ["var(--accent)", "var(--aurora-2)", "var(--aurora-3)"][i % 3],
}));

// Full-screen confirmation after the contact form posts successfully
const MessageReceived: React.FC<{ sender: Sender; onClose: () => void }> = ({
	sender,
	onClose,
}) => {
	const first = sender.name.split(/\s+/)[0] || "there";

	return (
		<motion.div
			className="contact-container"
			role="status"
			onClick={onClose}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<motion.div
				className="received-card"
				initial={{ opacity: 0, y: 30, scale: 0.9, rotate: -2 }}
				animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
				exit={{ opacity: 0, y: 16, scale: 0.96 }}
				transition={{ type: "spring", stiffness: 240, damping: 20 }}
			>
				<span className="received-tag">Received</span>

				<div className="received-mark" aria-hidden>
					<span className="ripple" />
					<span className="ripple" />
					{sparks.map((s, i) => (
						<span
							key={i}
							className="spark"
							style={
								{
									"--angle": `${s.angle}deg`,
									"--distance": `${s.distance}px`,
									"--color": s.color,
								} as React.CSSProperties
							}
						/>
					))}
					<svg viewBox="0 0 52 52" className="sent-check">
						<circle cx="26" cy="26" r="24" pathLength={1} />
						<path d="M15 27l7 7 15-15" pathLength={1} />
					</svg>
				</div>

				<p className="sent-title">
					<SplitText text="Message received" delay={0.45} stagger={0.03} />
				</p>
				<p className="sent-text">
					Thanks, <strong>{first}</strong>! It&apos;s landed in my inbox, and
					I&apos;ll reply to <strong>{sender.email}</strong> soon.
				</p>

				<div className="received-timer" aria-hidden>
					<span style={{ animationDuration: `${RECEIVED_MS}ms` }} />
				</div>
				<p className="received-hint">Click anywhere to close</p>
			</motion.div>
		</motion.div>
	);
};

export default MessageReceived;
