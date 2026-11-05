import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import SideDrawer from "@/components/Mobile/SideDrawer";
import MotionProvider from "@/components/MotionProvider";
import "@/styles/globals.css";
import "@/styles/imports.scss";

const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const display = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-display",
});

export const metadata: Metadata = {
	title: "Sai Sridhar's Portfolio",
	description:
		"A portfolio of Akula Sai Sridhar showcasing his skills and experience as a Fullstack Engineer building scalable and distributed applications. Learn more about his work and experience.",
	openGraph: {
		type: "website",
		url: "https://saisridhar.vercel.app",
		countryName: "India",
		title: "Portfolio of Sai Sridhar",
		description:
			"A portfolio of Akula Sai Sridhar showcasing his skills and experience as a Fullstack Engineer building scalable and distributed applications. Learn more about his work and experience.",
		siteName: "Sai Sridhar's Portfolio",
		images: "https://res.cloudinary.com/djkp8vliu/image/upload/v1712044200/opengraph-image_kjemky.png",
	},
	twitter: {
		title: "Portfolio of Sai Sridhar",
		description:
			"A portfolio of Akula Sai Sridhar showcasing his skills and experience as a Fullstack Engineer building scalable and distributed applications. Learn more about his work and experience.",
		site: "https://saisridhar.vercel.app",
		card: "summary_large_image",
		images: "https://res.cloudinary.com/djkp8vliu/image/upload/v1712044200/opengraph-image_kjemky.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning
				className={`${body.variable} ${display.variable}`}
			>
				<div className="aurora" aria-hidden>
					<span />
					<span />
					<span />
				</div>
				<MotionProvider>
					<SideDrawer />
					<div className="page">{children}</div>
				</MotionProvider>
			</body>
		</html>
	);
}
