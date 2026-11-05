"use client";

import { DM_Sans, Space_Grotesk } from "next/font/google";
import ErrorScreen from "@/components/ErrorScreen";
import "@/styles/globals.css";

const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

// Replaces the root layout when it fails, so it brings its own document and styles
export default function GlobalError({ retry }: { error: unknown; retry: () => void }) {
	return (
		<html lang="en">
			<body className={`${body.variable} ${display.variable}`}>
				<title>Something went wrong</title>
				<div className="aurora" aria-hidden>
					<span />
					<span />
					<span />
				</div>
				<ErrorScreen
					code="500"
					title="The whole site tripped over."
					message="A core part of the page failed to load. Give it another go."
				>
					<button type="button" onClick={() => retry()} className="error-btn primary">
						Try again
					</button>
					{/* Plain anchor: a full reload is the safest recovery here */}
					<a href="/" className="error-btn ghost">
						Go home
					</a>
				</ErrorScreen>
			</body>
		</html>
	);
}
