// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

type Data = {
	message: string;
	error?: any;
	data?: any;
};

let db: sqlite3.Database;
const databasePath = path.resolve(__dirname, "api", "messages.db");

export const initializeDbAndServer = async (
	res: NextApiResponse | null = null
) => {
	try {
		// @ts-ignore
		db = await open({
			filename: databasePath,
			driver: sqlite3.Database,
		});
	} catch (error: any) {
		return res?.status(500).json({
			message: "Internal server error",
			error: error.message,
		});
	}
};

export async function getRows() {
	await initializeDbAndServer();

	const query = `SELECT * FROM messages`;

	const rows = await db!.all(query);

	return rows;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	await initializeDbAndServer(res);

	if (req.method === "POST") {
		const { name, email, message } = req.body;

		const createTable = `CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(100) NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL
    )`;

		await db!.run(createTable);

		const query = `INSERT INTO messages (name, email, message) VALUES ('${name}', '${email}', '${message}')`;

		await db!.run(query);

		return res.status(200).json({ message: "Message sent successfully" });
	}
}
