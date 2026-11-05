import type { MetadataRoute } from "next";
import proJSON from "@/data/projects.json";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
	const pages = ["", "/about", "/experience", "/projects", "/certifications", "/contact"];
	return [
		...pages.map((path) => ({
			url: `${site.url}${path}`,
			priority: path === "" ? 1 : 0.8,
		})),
		...proJSON.map((pro) => ({
			url: `${site.url}/projects/${pro.slug}`,
			priority: 0.6,
		})),
	];
}
