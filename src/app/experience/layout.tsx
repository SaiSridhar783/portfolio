import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Experience of Sai Sridhar",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<PageHeader title="Experience" image="/images/experience.png" />
			{children}
		</main>
	);
}
