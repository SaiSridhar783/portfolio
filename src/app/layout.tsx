import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { jsonLd, person, personId, site } from "@/lib/site";
import SideDrawer from "@/components/Mobile/SideDrawer";
import MotionProvider from "@/components/MotionProvider";
import "@/styles/globals.css";
import "@/styles/base.css";
import "@/styles/animations.css";

const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const display = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-display",
});

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: site.title,
		template: "%s | Sai Sridhar Akula",
	},
	description: site.description,
	authors: [{ name: site.name, url: site.url }],
	creator: site.name,
	openGraph: {
		type: "profile",
		url: site.url,
		countryName: "India",
		title: site.title,
		description: site.description,
		siteName: site.name,
		firstName: "Sai Sridhar",
		lastName: "Akula",
		images: site.image,
	},
	twitter: {
		title: site.title,
		description: site.description,
		site: site.twitter,
		creator: site.twitter,
		card: "summary_large_image",
		images: site.image,
	},
};

// Site-wide entities: who the site is about, and the site itself
const structuredData = {
	"@context": "https://schema.org",
	"@graph": [
		person,
		{
			"@type": "WebSite",
			"@id": `${site.url}/#website`,
			url: site.url,
			name: site.name,
			description: site.description,
			inLanguage: "en",
			publisher: { "@id": personId },
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning
				className={`${body.variable} ${display.variable}`}
			>
				<div className="aurora" aria-hidden>
					<span />
					<span />
					<span />
				</div>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
				/>
				<MotionProvider>
					<SideDrawer />
					<div className="page">{children}</div>
				</MotionProvider>
			</body>
		</html>
	);
}
