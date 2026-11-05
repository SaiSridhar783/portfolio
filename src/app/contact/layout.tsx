import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Contact Sai Sridhar Akula for hiring or collaboration through the contact form, LinkedIn (akula-sai-sridhar) or GitHub (SaiSridhar783).",
	alternates: { canonical: "/contact" },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main>{children}</main>;
}
