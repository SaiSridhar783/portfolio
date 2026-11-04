import { prisma } from "@/utils/prisma";

const LIMITS = { name: 100, email: 254, message: 5000 } as const;

export async function POST(request: Request) {
	const body = await request.json().catch(() => null);
	const fields = {} as Record<keyof typeof LIMITS, string>;
	for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
		const value = body?.[key];
		if (typeof value !== "string" || !value.trim() || value.length > LIMITS[key]) {
			return Response.json({ message: `Invalid ${key}` }, { status: 400 });
		}
		fields[key] = value.trim();
	}
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
		return Response.json({ message: "Invalid email" }, { status: 400 });
	}
	const newMessage = await prisma.messages.create({ data: fields });
	return Response.json({
		message: "Message created",
		data: newMessage,
	});
}
