"use client";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { deleteMessage } from "@/app/admin/actions";

interface IAdminMainProps {
	data: any;
}

const AdminMain: React.FC<IAdminMainProps> = ({ data }) => {
	const [display, setDisplay] = useState(data);
	async function deleteHandler(id: string) {
		try {
			await deleteMessage(id);

			setDisplay(display.filter((row: any) => row.id !== id));
			toast.success("Message deleted successfully!");
		} catch (e: any) {
			return toast.error(
				"Something went wrong... Please try again later!"
			);
		}
	}

	return (
		<div className="admin-display">
			{display.map((row: any, idx: any) => (
				<div key={idx} className="admin-card">
					<p style={{ marginBottom: "1rem" }}>{row.createdAt}</p>
					<div className="admin-info">
						<p className="heading">Name: {row.name}</p>
						<p className="heading">Email: {row.email}</p>
					</div>
					<div className="admin-message">
						<p style={{ marginTop: "1rem" }}>{row.message}</p>
						<FaTrashAlt
							style={{ color: "maroon", cursor: "pointer" }}
							onClick={() => deleteHandler(row.id)}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default AdminMain;
