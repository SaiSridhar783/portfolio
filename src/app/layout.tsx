import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.scss";

const monstserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sai Sridhar's Portfolio",
	description:
		"A portfolio of Akula Sai Sridhar showcasing his skills and experience as a Fullstack and an App Developer. Learn more about his work and experience.",
	openGraph: {
		type: "website",
		url: "https://saisridhar.vercel.app",
		countryName: "India",
		title: "Portfolio of Sai Sridhar",
		description:
			"A portfolio of Akula Sai Sridhar showcasing his skills and experience as a Fullstack and an App Developer. Learn more about his work and experience.",
		siteName: "Sai Sridhar's Portfolio",
		images: "https://res.cloudinary.com/djkp8vliu/image/upload/v1712044200/opengraph-image_kjemky.png",
	},
	twitter: {
		title: "Portfolio of Sai Sridhar",
		description:
			"A portfolio of Akula Sai Sridhar showcasing his skills and experience as a Fullstack and an App Developer. Learn more about his work and experience.",
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
			<body suppressHydrationWarning className={monstserrat.className}>
				{children}
			</body>
		</html>
	);
}
