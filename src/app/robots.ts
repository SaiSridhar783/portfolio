import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// One wildcard group so AI search bots (OAI-SearchBot, Claude-SearchBot, PerplexityBot),
// user-triggered fetchers (ChatGPT-User, Claude-User) and Google all get the same rules.
// A named group would replace these rules for that bot, so add one only to opt out on purpose.
export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/admin", "/api/"],
		},
		sitemap: `${site.url}/sitemap.xml`,
		host: site.url,
	};
}
