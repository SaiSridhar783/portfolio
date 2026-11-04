"use server";

import { headers } from "next/headers";
import { isAdmin } from "@/lib/adminAuth";
import { prisma } from "@/utils/prisma";

export async function deleteMessage(id: string) {
	if (!isAdmin((await headers()).get("authorization"))) {
		throw new Error("Unauthorized");
	}
	await prisma.messages.delete({ where: { id } });
}
