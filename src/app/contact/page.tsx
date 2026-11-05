"use client";

import { useState, useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import Social from "@/components/Social";
import { FaArrowLeft } from "react-icons/fa";
import PageTransition from "@/components/PageTransition";
import "@/styles/contact.scss";

const mainDelay = 0.2;

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
	const [sent, setSent] = useState(false);
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
		setSent(true);
		setTimeout(() => setSent(false), 3200);
		dispatch({ type: "RESET" });
	};

	return (
		<PageTransition>
			<div className="contact">
				<AnimatePresence>
					{sent && (
						<motion.div
							className="contact-container"
							role="status"
							onClick={() => setSent(false)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<motion.div
								className="sent-card"
								initial={{ opacity: 0, y: 24, scale: 0.9 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, y: 12, scale: 0.96 }}
								transition={{ type: "spring", stiffness: 260, damping: 22 }}
							>
								<svg viewBox="0 0 52 52" className="sent-check" aria-hidden>
									<circle cx="26" cy="26" r="24" pathLength={1} />
									<path d="M15 27l7 7 15-15" pathLength={1} />
								</svg>
								<p className="sent-title">Message sent</p>
								<p className="sent-text">
									Thanks for reaching out. I&apos;ll get back to you soon.
								</p>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
				<Link
					href="/home"
					replace
					aria-label="Back to navigation"
					transitionTypes={["nav-back"]}
				>
					<FaArrowLeft size={25} className="back-arrow" />
				</Link>
				{/* Main Content */}
				<div className="contact-main">
					<h1 className="font-bold text-3xl">Connect With Me</h1>
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
							backgroundColor: "var(--surface)",
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
									animationDelay: mainDelay + 0.1 + "s",
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
									animationDelay: mainDelay + 0.2 + "s",
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
									animationDelay: mainDelay + 0.3 + "s",
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
									animationDelay: mainDelay + 0.4 + "s",
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
					href="https://drive.google.com/file/d/1UA8ROT6MRdFNf5U26B7J9Y2zdZeo5WA6/view?usp=drive_link"
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
		</PageTransition>
	);
};

export default ContactPage;
