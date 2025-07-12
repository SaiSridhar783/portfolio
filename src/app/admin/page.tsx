import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/admin.scss";
import AdminMain from "@/components/AdminMain";
import { prisma } from "@/utils/prisma";

type Mess = {
	id: string;
	name: string;
	email: string;
	message: string;
	createdAt: Date;
};

async function getData() {
	const messages = await prisma.messages.findMany();

	const data = messages.map((row: Mess) => ({
		...row,
		createdAt: row.createdAt.toLocaleString("en-IN", {
			timeZone: "Asia/Kolkata",
			dateStyle: "long",
			timeStyle: "long",
		}),
	}));
	return data;
}

const Admin: React.FC = async () => {
	const data = await getData();
	return (
		<main className="admin">
			<AdminMain data={data} />
			<ToastContainer
				position="bottom-center"
				autoClose={3000}
				pauseOnHover={false}
				closeOnClick
			/>
		</main>
	);
};

export default Admin;
