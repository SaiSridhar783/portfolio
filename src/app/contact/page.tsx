"use client";

import { useState, useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Social from "@/components/Social";
import { FaArrowLeft } from "react-icons/fa";
import "@/styles/contact.scss";

const mainDelay = 0.8;

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

const ContactPage: React.FC = () => {
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
		<div className="contact">
			<div style={{ display: showOverlay }} className="contact-container">
				<motion.div
					className="stamp"
					initial={{
						scale: 0,
						rotate: 0,
						opacity: 0,
					}}
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
			<Link href="/home" replace>
				<FaArrowLeft size={25} className="back-arrow" />
			</Link>
			{/* Main Content */}
			<div className="contact-main">
				<h1>Connect With Me</h1>
				<div>
					<Image
						priority
						src="/images/bg.png"
						width={600}
						height={300}
						alt="Connect With Me"
					/>
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
			</div>
			{/* Bookmark */}
			<div className="bookmark">
				<p className="bookmark-label">Drop a Quick Message!</p>

				<motion.div
					style={{
						backgroundColor: "#1a202c",
						padding: "2rem",
						marginTop: "1rem",
						borderRadius: "4rem",
					}}
					initial={{ opacity: 0 }}
					animate={{ opacity: [0, 1] }}
					transition={{ delay: mainDelay }}
				>
					<form onSubmit={onSubmitHandler}>
						<div
							className="form-element"
							style={{
								animationDelay: mainDelay + 1.9 + "s",
							}}
						>
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
						<div
							className="form-element"
							style={{
								animationDelay: mainDelay + 1.6 + "s",
							}}
						>
							<label htmlFor="email">Email address</label>
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
						<div
							className="form-element"
							style={{
								animationDelay: mainDelay + 1.3 + "s",
							}}
						>
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
						<div
							className="form-last"
							style={{
								animationDelay: mainDelay + 2.5 + "s",
							}}
						>
							<button type="submit">
								{isLoading ? "Sending..." : "Send"}
							</button>
						</div>
					</form>
				</motion.div>
			</div>
			{/* Badge */}
			<a
				className="resume-badge"
				href="https://drive.google.com/file/d/1nX-D6T81UhOkbOiVNzUyFOZjHDKXHHyj/view?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
			>
				<p className="resume-text">Résumé</p>
			</a>
			<ToastContainer
				position="bottom-center"
				autoClose={3000}
				pauseOnHover={false}
				closeOnClick
			/>
		</div>
	);
};

export default ContactPage;
