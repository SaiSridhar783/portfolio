"use client";

import { useEffect, useRef, useState } from "react";

// Easter egg: clicking the status code "retries" with exponential backoff, then gives up
export default function BackoffRetry({
	code,
	children,
}: {
	code: string;
	children: React.ReactNode;
}) {
	const [status, setStatus] = useState("");
	const timers = useRef<number[]>([]);
	useEffect(() => () => timers.current.forEach(clearTimeout), []);

	const retry = () => {
		if (status) return;
		const steps = [
			`GET → ${code}. Retrying in 1s…`,
			`Attempt 2 → ${code}. Retrying in 2s…`,
			`Attempt 3 → ${code}. Retrying in 4s…`,
			`Attempt 4 → ${code}. Circuit breaker open. Giving up.`,
			"",
		];
		// Gaps grow like the backoff they describe (sped up so nobody waits 7s)
		const at = [0, 700, 1700, 3200, 6500];
		timers.current = steps.map((step, i) =>
			window.setTimeout(() => setStatus(step), at[i]),
		);
	};

	return (
		<div className="error-retry-wrap" onClick={retry}>
			{children}
			<p className="error-retry" role="status">
				{status}
			</p>
		</div>
	);
}
