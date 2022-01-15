// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
	message: string;
	error?: any;
	data?: any;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === "POST") {
		const data = req.body;

		const newMessage = await prisma.messages.create({
			data: data,
		});

		return res.status(200).json({
			message: "Message created",
			data: newMessage,
		});
	}

	if (req.method === "DELETE") {
		const id = req.body;

		const deletedMessage = await prisma.messages.delete({
			where: {
				id: id,
			},
		});

		return res.status(200).json({
			message: "Message deleted",
			data: deletedMessage,
		});
	}
}
