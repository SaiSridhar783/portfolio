import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
