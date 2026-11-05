"use client";

import { useEffect } from "react";
import Link from "next/link";
import ErrorScreen from "@/components/ErrorScreen";
import Magnetic from "@/components/Magnetic";

export default function Error({
	error,
	retry,
}: {
	error: unknown;
	retry: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	const digest = error instanceof Error && "digest" in error ? String(error.digest) : null;

	return (
		<ErrorScreen
			code="500"
			title="Something broke on my side."
			message={
				<>
					It&apos;s not you. Try again, or head back and pick another
					page.
					{digest && <span className="error-digest">Ref: {digest}</span>}
				</>
			}
		>
			<Magnetic>
				<button type="button" onClick={() => retry()} className="error-btn primary">
					Try again
				</button>
			</Magnetic>
			<Magnetic>
				<Link href="/home" className="error-btn ghost">
					Back to navigation
				</Link>
			</Magnetic>
		</ErrorScreen>
	);
}
