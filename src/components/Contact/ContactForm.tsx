"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { FaPaperPlane } from "react-icons/fa";

// Limits mirror the checks in /api/hello
const MAX = { name: 100, email: 254, message: 5000 };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const empty = { name: "", email: "", message: "" };
type Field = keyof typeof empty;

export type Sender = { name: string; email: string };

// Glass message card: floating labels, inline email error, live character count
const ContactForm: React.FC<{ onSent: (sender: Sender) => void }> = ({ onSent }) => {
	const [form, setForm] = useState(empty);
	const [emailError, setEmailError] = useState<string | null>(null);
	const [sending, setSending] = useState(false);

	const update = (field: Field) => (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm((f) => ({ ...f, [field]: e.target.value }));
		if (field === "email") setEmailError(null);
	};

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!EMAIL.test(form.email.trim())) {
			setEmailError("That email doesn't look right.");
			return;
		}

		setSending(true);
		try {
			const res = await fetch("/api/hello", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});
			if (!res.ok) throw new Error(res.statusText);
			onSent({ name: form.name.trim(), email: form.email.trim() });
			setForm(empty);
		} catch {
			toast.error("Couldn't send your message. Please try again in a bit.");
		} finally {
			setSending(false);
		}
	}

	const count = form.message.length;

	return (
		<form className="message-card" onSubmit={onSubmit} noValidate>
			<p className="message-eyebrow">Quick message</p>
			<h2 className="message-title">Send a message</h2>

			<div className="field">
				<input
					id="contact-name"
					name="name"
					placeholder=" "
					autoComplete="name"
					maxLength={MAX.name}
					value={form.name}
					onChange={update("name")}
					required
				/>
				<label htmlFor="contact-name">Your name</label>
			</div>

			<div className={`field${emailError ? " invalid" : ""}`}>
				<input
					id="contact-email"
					name="email"
					type="email"
					placeholder=" "
					autoComplete="email"
					maxLength={MAX.email}
					value={form.email}
					onChange={update("email")}
					aria-invalid={!!emailError}
					aria-describedby={emailError ? "contact-email-error" : undefined}
					required
				/>
				<label htmlFor="contact-email">Email address</label>
				{emailError && (
					<p id="contact-email-error" className="field-error" role="alert">
						{emailError}
					</p>
				)}
			</div>

			<div className="field">
				<textarea
					id="contact-message"
					name="message"
					placeholder=" "
					rows={5}
					maxLength={MAX.message}
					value={form.message}
					onChange={update("message")}
					aria-describedby="contact-message-count"
					required
				/>
				<label htmlFor="contact-message">What&apos;s on your mind?</label>
				<p
					id="contact-message-count"
					className={`field-count${count > MAX.message * 0.9 ? " near-limit" : ""}`}
				>
					{count.toLocaleString()} / {MAX.message.toLocaleString()}
				</p>
			</div>

			<button
				type="submit"
				className={`send-btn${sending ? " sending" : ""}`}
				disabled={sending || !form.name.trim() || !form.message.trim()}
			>
				<span>{sending ? "Sending…" : "Send message"}</span>
				<FaPaperPlane className="send-plane" aria-hidden />
			</button>
		</form>
	);
};

export default ContactForm;
