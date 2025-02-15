import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import SideDrawer from "@/components/Mobile/SideDrawer";
import "@/styles/mobile.scss";

const monstserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sai Sridhar's Portfolio",
	description:
		"A portfolio of Akula Sai Sridhar showcasing his skills and experience as a Fullstack Engineer building scalable and distributed applications. Learn more about his work and experience.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main suppressHydrationWarning>
			<SideDrawer />
			{children}
		</main>
	);
}
