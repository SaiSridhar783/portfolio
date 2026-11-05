import type { Metadata } from "next";
import proJSON from "@/data/projects.json";
import { jsonLd, personId, site } from "@/lib/site";

type Props = {
	children: React.ReactNode;
	params: Promise<{ slug: string }>;
};

const find = (slug: string) => proJSON.find((pro) => pro.slug === slug);

export function generateStaticParams() {
	return proJSON.map((pro) => ({ slug: pro.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const data = find((await params).slug);
	if (!data) return {};
	// Answer-first: what it is, who built it, when, then the details
	const description = `${data.name} is a ${data.type} built by Sai Sridhar Akula in ${data.date}. ${data.description}`;
	return {
		title: data.name,
		description,
		alternates: { canonical: `/projects/${data.slug}` },
		openGraph: { title: data.name, description, images: data.image },
	};
}

export default async function ProjectLayout({ children, params }: Props) {
	const data = find((await params).slug);
	if (!data) return children;

	const url = `${site.url}/projects/${data.slug}`;
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "SoftwareSourceCode",
				"@id": `${url}#project`,
				name: data.name,
				description: data.description,
				url,
				image: `${site.url}${data.image}`,
				codeRepository: data.github,
				keywords: data.languages.join(", "),
				author: { "@id": personId },
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{ "@type": "ListItem", position: 1, name: "Home", item: site.url },
					{ "@type": "ListItem", position: 2, name: "Projects", item: `${site.url}/projects` },
					{ "@type": "ListItem", position: 3, name: data.name, item: url },
				],
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
			/>
			{children}
		</>
	);
}
