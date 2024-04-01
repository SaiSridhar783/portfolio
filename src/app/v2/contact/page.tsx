"use client";

import { useState, useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Social from "@/components/Social";

const initialState = {
	name: "",
	email: "",
	message: "",
};

const reducer = (
	state: typeof initialState,
	action: { type: "UPDATE" | "RESET"; val?: string; elem?: string }
) => {
	if (action.type === "UPDATE") {
		return {
			...state,
			[action.elem!]: action.val,
		};
	}
	if (action.type === "RESET") {
		return {
			...initialState,
		};
	}
	return state;
};

const ContactMob: React.FC = () => {
	const [formState, dispatch] = useReducer(reducer, initialState);
	const [showOverlay, setShowOverlay] = useState("none");
	const [isLoading, setIsLoading] = useState(false);

	const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		//alert(JSON.stringify(formState));
		setIsLoading(true);
		if (
			!formState.email.match(
				/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
			)
		) {
			setIsLoading(false);
			return toast.error("Please enter a valid email address.");
		}

		let res: any;
		try {
			res = await fetch("/api/hello", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formState),
			});

			if (!res.ok) {
				throw new Error(res.statusText);
			}
		} catch (e: any) {
			setIsLoading(false);
			toast.error("Something went wrong... Please try again later.");

			return;
		}

		setIsLoading(false);
		setShowOverlay("block");
		const timer = setTimeout(() => {
			setShowOverlay("none");
			clearTimeout(timer);
		}, 3000);
		dispatch({ type: "RESET" });
	};

	return (
		<div className="contact-mob">
			<div style={{ display: showOverlay }} className="contact-container">
				<motion.div
					className="stamp"
					whileInView={["start", "peel"]}
					variants={{
						start: {
							scale: [10, 2],
							rotate: [720, -15],
							opacity: [0.2, 1],
						},
						peel: {
							rotateY: [0, 270],
							skewY: [10, -10],
							transition: { delay: 2 },
						},
					}}
				>
					MESSAGE RECIEVED
				</motion.div>
			</div>
			{/* Main Content */}
			<div className="contact-main">
				<h1>Connect With Me</h1>
				<form className="small-form" onSubmit={onSubmitHandler}>
					<div className="form-element">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formState.name}
							onChange={(e) => {
								dispatch({
									type: "UPDATE",
									val: e.target.value,
									elem: e.target.id,
								});
							}}
							required
						/>
					</div>
					<div className="form-element">
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							name="email"
							value={formState.email}
							onChange={(e) => {
								dispatch({
									type: "UPDATE",
									val: e.target.value,
									elem: e.target.id,
								});
							}}
							required
						/>
					</div>
					<div className="form-element">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							value={formState.message}
							onChange={(e) => {
								dispatch({
									type: "UPDATE",
									val: e.target.value,
									elem: e.target.id,
								});
							}}
							required
						/>
					</div>

					<button className="form-last" type="submit">
						{isLoading ? "Sending..." : "Send Message"}
					</button>
				</form>
				<div className="social-container">
					<Social />
				</div>
				<div className="acquaint">
					<p>Looking forward to make your acquaintance!</p>
				</div>
			</div>

			<ToastContainer
				position="bottom-center"
				autoClose={3000}
				pauseOnHover={false}
				closeOnClick
			/>
		</div>
	);
};

export default ContactMob;
