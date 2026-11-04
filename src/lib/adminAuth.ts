import { timingSafeEqual } from "node:crypto";

// Expects "Basic base64(admin:<ADMIN_PASSWORD>)". Fails closed if ADMIN_PASSWORD is unset.
export function isAdmin(authorization: string | null): boolean {
	const password = process.env.ADMIN_PASSWORD;
	if (!password || !authorization?.startsWith("Basic ")) return false;
	const given = Buffer.from(authorization.slice(6), "base64");
	const expected = Buffer.from(`admin:${password}`);
	return given.length === expected.length && timingSafeEqual(given, expected);
}
