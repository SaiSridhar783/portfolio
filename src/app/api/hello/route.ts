import { prisma } from "@/utils/prisma";

export async function POST(request: Request) {
	const data = await request.json();
	const newMessage = await prisma.messages.create({
		data: data,
	});
	return Response.json({
		message: "Message created",
		data: newMessage,
	});
}

export async function DELETE(request: Request) {
	const data = await request.json();
	const deletedMessage = await prisma.messages.delete({
		where: {
			id: data.id,
		},
	});

	return Response.json({
		message: "Message deleted",
		data: deletedMessage,
	});
}
