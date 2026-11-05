import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/admin.css";
import AdminMain from "@/components/AdminMain";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { isAdmin } from "@/lib/adminAuth";
import { prisma } from "@/utils/prisma";

async function getData() {
	const messages = await prisma.messages.findMany({
		orderBy: { createdAt: "desc" },
	});
	return messages.map((row) => ({
		...row,
		createdAt: row.createdAt.toISOString(),
	}));
}

const Admin: React.FC = async () => {
	if (!isAdmin((await headers()).get("authorization"))) notFound();
	const data = await getData();
	return (
		<main className="admin">
			<AdminMain data={data} />
			<ToastContainer
				position="bottom-center"
				autoClose={3000}
				pauseOnHover={false}
				closeOnClick
				theme="dark"
			/>
		</main>
	);
};

export default Admin;
