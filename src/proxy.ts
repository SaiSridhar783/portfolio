import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "@/lib/adminAuth";

export function proxy(request: NextRequest) {
	if (!isAdmin(request.headers.get("authorization"))) {
		return new NextResponse("Authentication required", {
			status: 401,
			headers: { "WWW-Authenticate": 'Basic realm="admin"' },
		});
	}
}

export const config = {
	matcher: ["/admin/:path*"],
};
