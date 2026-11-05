"use client";

import { useSyncExternalStore } from "react";

const format = () =>
	new Date().toLocaleTimeString("en-IN", {
		timeZone: "Asia/Kolkata",
		hour: "numeric",
		minute: "2-digit",
	});

const subscribe = (tick: () => void) => {
	const id = setInterval(tick, 30_000);
	return () => clearInterval(id);
};

// "Based in India · 3:42 pm IST"; the server renders without the time to avoid hydration drift
const LocalTime: React.FC = () => {
	const time = useSyncExternalStore(subscribe, format, () => null);

	return (
		<p className="local-time">
			<span className="live-dot" aria-hidden />
			Based in India
			{time && (
				<>
					<span aria-hidden>·</span>
					<time>{time} IST</time>
				</>
			)}
		</p>
	);
};

export default LocalTime;
