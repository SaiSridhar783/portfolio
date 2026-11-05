import type { Metadata } from "next";
import Link from "next/link";
import ErrorScreen from "@/components/ErrorScreen";
import Magnetic from "@/components/Magnetic";

export const metadata: Metadata = {
	title: "Page not found",
};

export default function NotFound() {
	return (
		<ErrorScreen
			code="404"
			title="This page wandered off."
			message="The link may be broken, or the page may have moved. Let's get you somewhere useful."
		>
			<Magnetic>
				<Link href="/home" className="error-btn primary">
					Back to navigation
				</Link>
			</Magnetic>
			<Magnetic>
				<Link href="/projects" className="error-btn ghost">
					See my projects
				</Link>
			</Magnetic>
		</ErrorScreen>
	);
}
