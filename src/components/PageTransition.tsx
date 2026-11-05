import { ViewTransition } from "react";

// Slides pages left/right depending on the Link's transitionTypes.
// Must wrap page content (not a layout) so enter/exit fire on navigation.
const slide = {
	"nav-forward": "nav-forward",
	"nav-back": "nav-back",
	default: "none",
};

export default function PageTransition({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ViewTransition enter={slide} exit={slide} default="none">
			{children}
		</ViewTransition>
	);
}

// Same element on two routes morphs between them
export function Shared({
	name,
	children,
}: {
	name: string;
	children: React.ReactNode;
}) {
	return (
		<ViewTransition
			name={name.replace(/[^\w-]/g, "-")}
			share="morph"
			default="none"
		>
			{children}
		</ViewTransition>
	);
}
