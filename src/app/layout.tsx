import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.scss";

const monstserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sai Sridhar's Portfolio",
	description:
		"A portfolio of Akula Sai Sridhar showcasing his skills and experience as a Fullstack and an App Developer. Learn more about his work and experience.",
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
