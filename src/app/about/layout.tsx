import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description:
		"Sai Sridhar Akula is a software architect and Technical Lead at TCG Digital (since September 2025) and a 2023 IIT Kharagpur B.Tech graduate. He designs real-time AI pipelines, event-driven microservices and data platforms in Python and TypeScript.",
	alternates: { canonical: "/about" },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main>{children}</main>;
}
