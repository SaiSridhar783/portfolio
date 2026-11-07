"use client";

import { useState } from "react";
import SplitText from "./SplitText";

// Easter egg: each click on the landing headline returns a different HTTP status
const statuses = [
	"200 OK. You've found the right architect.",
	"201 Created. Built from scratch, shipped to prod.",
	"202 Accepted. Your request is being processed.",
	"304 Not Modified. Still the right architect.",
	"429 Too Many Requests. Okay, okay, you can stop.",
];

export default function StatusHeadline() {
	const [index, setIndex] = useState(0);

	return (
		<h1
			className="home-hello"
			onClick={() => setIndex((i) => (i + 1) % statuses.length)}
		>
			{/* A new key replays the letter reveal for each status */}
			<SplitText key={index} text={statuses[index]} delay={index ? 0 : 0.15} />
		</h1>
	);
}
