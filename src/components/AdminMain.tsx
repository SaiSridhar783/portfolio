"use client";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

interface IAdminMainProps {
	data: any;
}

const AdminMain: React.FC<IAdminMainProps> = ({ data }) => {
	const [display, setDisplay] = useState(data);
	async function deleteHandler(id: number) {
		let res: any;
		try {
			res = await fetch("/api/hello", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id }),
			});

			if (!res.ok) {
				throw new Error(res.statusText);
			}

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
