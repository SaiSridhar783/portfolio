"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

const badge = "background:#05080d;color:#34d399;font:700 16px monospace;padding:6px 10px;border-radius:6px";
const note = "color:#94a3b8;font:13px sans-serif";

// Site-wide easter eggs: a greeting in DevTools and a title that changes while the tab is in the background
export default function EasterEggs() {
	useEffect(() => {
		console.log("%c</> Hello, fellow developer.", badge);
		console.log(
			`%cYou opened DevTools, so we'd probably get along. Building something real-time? Say hi: ${site.url}/contact`,
			note,
		);

		let saved = "";
		const onVisibility = () => {
			if (document.hidden) {
				saved = document.title;
				document.title = "Consumer lag detected. Come back!";
			} else if (saved) {
				document.title = saved;
				saved = "";
			}
		};
		document.addEventListener("visibilitychange", onVisibility);
		return () => document.removeEventListener("visibilitychange", onVisibility);
	}, []);

	return null;
}
