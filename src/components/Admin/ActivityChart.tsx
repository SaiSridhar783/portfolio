"use client";

import { useMemo, useState } from "react";

// Messages per month for the 12 months ending at the newest message,
// so the chart has data even when the inbox has been quiet lately.
export default function ActivityChart({ dates }: { dates: string[] }) {
	const [hover, setHover] = useState<number | null>(null);

	const months = useMemo(() => {
		if (dates.length === 0) return [];
		const latest = new Date(Math.max(...dates.map((d) => new Date(d).getTime())));
		const buckets = Array.from({ length: 12 }, (_, i) => {
			const d = new Date(latest.getFullYear(), latest.getMonth() - 11 + i, 1);
			return { key: `${d.getFullYear()}-${d.getMonth()}`, date: d, count: 0 };
		});
		const index = new Map(buckets.map((b, i) => [b.key, i]));
		for (const iso of dates) {
			const d = new Date(iso);
			const i = index.get(`${d.getFullYear()}-${d.getMonth()}`);
			if (i !== undefined) buckets[i].count++;
		}
		return buckets;
	}, [dates]);

	if (months.length === 0) return null;

	const max = Math.max(1, ...months.map((m) => m.count));
	const label = (d: Date, opts: Intl.DateTimeFormatOptions) =>
		d.toLocaleDateString("en-IN", opts);
	const range = `${label(months[0].date, { month: "short", year: "numeric" })} – ${label(
		months[11].date,
		{ month: "short", year: "numeric" }
	)}`;
	const shown = hover ?? months.length - 1;

	return (
		<figure className="activity">
			<figcaption>
				<span className="activity-title">Messages per month</span>
				<span className="activity-range">{range}</span>
			</figcaption>
			<div className="activity-readout" aria-hidden>
				<strong>{months[shown].count}</strong>{" "}
				in {label(months[shown].date, { month: "long", year: "numeric" })}
			</div>
			<div className="activity-bars" onPointerLeave={() => setHover(null)} aria-hidden>
				{months.map((m, i) => (
					<div
						key={m.key}
						className={`bar-slot${i === shown ? " active" : ""}`}
						onPointerEnter={() => setHover(i)}
					>
						<span
							className="bar"
							style={{ height: m.count ? `${(m.count / max) * 100}%` : "2px" }}
						/>
						<span className="bar-tick">{label(m.date, { month: "narrow" })}</span>
					</div>
				))}
			</div>
			{/* Same numbers for screen readers */}
			<table className="sr-only">
				<caption>Messages per month, {range}</caption>
				<tbody>
					{months.map((m) => (
						<tr key={m.key}>
							<th scope="row">{label(m.date, { month: "long", year: "numeric" })}</th>
							<td>{m.count}</td>
						</tr>
					))}
				</tbody>
			</table>
		</figure>
	);
}
