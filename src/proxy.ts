import { NextRequest, NextResponse, userAgent } from "next/server";
import { isAdmin } from "@/lib/adminAuth";

export function proxy(request: NextRequest) {
	if (
		request.nextUrl.pathname.startsWith("/admin") &&
		!isAdmin(request.headers.get("authorization"))
	) {
		return new NextResponse("Authentication required", {
			status: 401,
			headers: { "WWW-Authenticate": 'Basic realm="admin"' },
		});
	}

	const { device } = userAgent(request);
	const isMobile = device.type === "mobile";

	if (isMobile && !request.nextUrl.pathname.startsWith("/v2")) {
		return NextResponse.redirect(
			new URL("/v2" + request.nextUrl.pathname, request.url)
		);
	} else if (!isMobile && request.nextUrl.pathname.startsWith("/v2")) {
		let newPath = request.nextUrl.pathname.replace("/v2", "") || "/";
		return NextResponse.redirect(new URL(newPath, request.url));
	}
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
