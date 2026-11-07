import type { NextConfig } from "next";
import { site } from "./src/lib/site";

const nextConfig: NextConfig = {
	// Easter egg for anyone reading the Network tab
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [{ key: "X-Hire-Me", value: `${site.url}/contact` }],
			},
		];
	},
	// Old mobile-only routes; pages are responsive now
	async redirects() {
		return [
			{ source: "/v2", destination: "/", permanent: true },
			// Landing and the old /home hub are one page now
			{ source: "/home", destination: "/", permanent: true },
			{ source: "/v2/:path*", destination: "/:path*", permanent: true },
		];
	},
};

export default nextConfig;
