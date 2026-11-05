import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Education and Certifications",
	description:
		"Sai Sridhar Akula holds a B.Tech in Mining Engineering from IIT Kharagpur (2023, CGPA 8.85) plus certifications in React, Python and front-end development.",
	alternates: { canonical: "/certifications" },
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
