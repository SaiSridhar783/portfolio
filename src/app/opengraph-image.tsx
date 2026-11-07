import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const glow = (color: string) =>
	`radial-gradient(circle, ${color}, rgba(0,0,0,0) 70%)`;

export default function Image() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				position: "relative",
				background: "#05080d",
				color: "#e8edf3",
				overflow: "hidden",
			}}
		>
			{/* Aurora glows, matching the site background */}
			<div
				style={{
					position: "absolute",
					left: -180,
					top: -220,
					width: 680,
					height: 680,
					background: glow("rgba(16,185,129,0.30)"),
				}}
			/>
			<div
				style={{
					position: "absolute",
					right: -200,
					bottom: -260,
					width: 760,
					height: 760,
					background: glow("rgba(14,165,233,0.22)"),
				}}
			/>
			<div
				style={{
					position: "absolute",
					right: 120,
					top: -240,
					width: 520,
					height: 520,
					background: glow("rgba(139,92,246,0.18)"),
				}}
			/>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					padding: "0 88px",
					width: "100%",
					position: "relative",
				}}
			>
				<div
					style={{
						fontSize: 28,
						color: "#34d399",
						letterSpacing: 5,
						textTransform: "uppercase",
					}}
				>
					Software Architect
				</div>
				<div
					style={{
						fontSize: 96,
						lineHeight: 1.05,
						marginTop: 20,
						letterSpacing: -2,
					}}
				>
					Sai Sridhar Akula
				</div>
				<div
					style={{
						fontSize: 34,
						color: "#94a3b8",
						marginTop: 28,
						lineHeight: 1.4,
						maxWidth: 900,
					}}
				>
					Technical Lead at TCG Digital · IIT Kharagpur. Real-time AI
					pipelines, event-driven systems and data platforms.
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						marginTop: 56,
						fontSize: 28,
					}}
				>
					<div
						style={{
							width: 14,
							height: 14,
							borderRadius: 9999,
							background: "#34d399",
							marginRight: 16,
						}}
					/>
					{new URL(site.url).host}
				</div>
			</div>
		</div>,
		size,
	);
}
