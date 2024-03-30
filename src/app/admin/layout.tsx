import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Admin Sai Sridhar",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<PageHeader title="Admin" image="/images/resume.png" />
			{children}
		</main>
	);
}
