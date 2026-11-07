"use client";

import { useRef, useState } from "react";

const CLICKS = 7;

// Easter egg: seven quick clicks on the landing orb make it flare up
export default function SecretOrb({ children }: { children: React.ReactNode }) {
	const count = useRef(0);
	const timer = useRef<number>(undefined);
	const [found, setFound] = useState(false);

	const onClick = () => {
		if (found) return;
		window.clearTimeout(timer.current);
		count.current += 1;
		if (count.current >= CLICKS) {
			count.current = 0;
			setFound(true);
			timer.current = window.setTimeout(() => setFound(false), 4000);
			return;
		}
		// The clicks have to come in quick succession
		timer.current = window.setTimeout(() => {
			count.current = 0;
		}, 1200);
	};

	return (
		<div className={found ? "secret-orb is-found" : "secret-orb"} onClick={onClick}>
			{children}
			<p className="secret-orb-note" role="status">
				{found ? "You found the core." : ""}
			</p>
		</div>
	);
}
