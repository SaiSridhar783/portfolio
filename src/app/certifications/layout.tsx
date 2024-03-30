import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Certifications of Sai Sridhar",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<PageHeader
				title="Certifications"
				image="/images/certifications.jpg"
			/>
			{children}
		</main>
	);
}
