import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Experience",
	description:
		"Work experience of Sai Sridhar Akula: Technical Lead at TCG Digital since September 2025 (AI commentary translator for 5M+ viewers, enterprise knowledge graph, 14+ ETL workflows), Software Engineer there from 2023 to 2025 (700+ TPS Kafka aviation system), plus internships at NoBroker and Dotgo.",
	alternates: { canonical: "/experience" },
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
